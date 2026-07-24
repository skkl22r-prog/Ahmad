import { useEffect, useState } from "react"
import { Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Reveal from "./Reveal";
import { QRCodeCanvas } from "qrcode.react";
import { useLang } from "@/i18n/LanguageContext";

// 👈 عدّل رقم الواتساب هنا (بصيغة دولية بدون + أو 00). مثال السعودية: 9665XXXXXXXX

type State =
  | { kind: "form" }
  | { kind: "loading" }
| { kind: "attending"; name: string; guestCount: string }
  | { kind: "declined"; name: string }
  | { kind: "error"; msg: string }
| { kind: "qr"; name: string; guestCount: string; qr: string };
const RSVP = () => {
const { t, lang } = useLang();
  const [name, setName] = useState("");
const [guestCount, setGuestCount] = useState("");
  const [choice, setChoice] = useState<"attending" | "declined" | null>(null);
  const [state, setState] = useState<State>({ kind: "form" });
useEffect(() => {
  const savedQr = localStorage.getItem("guest_qr");

if (savedQr) {
  const data = JSON.parse(savedQr);

 setState({
  kind: "qr",
  name: data.name,
  guestCount: data.guestCount,
  qr: data.qr,
});
  return;
}

const savedDeclined = localStorage.getItem("guest_declined");

if (savedDeclined) {
  const data = JSON.parse(savedDeclined);

  setState({
    kind: "declined",
    name: data.name,
  });
}
}, []);

  const submit = async () => {
  if (!name.trim() || !choice) return;

  setState({ kind: "loading" });

  let deviceId = localStorage.getItem("device_id");

if (!deviceId) {
  deviceId = crypto.randomUUID();
  localStorage.setItem("device_id", deviceId);
}

const qr_token = crypto.randomUUID();

const { data: existing } = await supabase
  .from("rsvpsRoko")
  .select("id")
  .eq("device_id", deviceId)
  .maybeSingle();

if (existing) {
  setState({
    kind: "error",
msg: t("already_registered"),
  });
  return;
}

  const { error } = await supabase.from("rsvpsRoko").insert({
  name: name.trim(),
  status: choice,
  guest_count: choice === "attending" ? guestCount : "0",
  device_id: deviceId,
  qr_token: qr_token,
  scanned: false,
});

  if (error) {
  console.log("SUPABASE ERROR:", error);
  setState({ kind: "error", msg: t("error_try_again") });
  return;
}
await fetch(
  "https://docs.google.com/forms/d/e/1FAIpQLSdMeIIj2LqKbFlh2EJvMlmc0JdK85R8RvW2i7ZYQn6tbr5irg/formResponse",
  {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      "entry.714234054": name.trim(),

      "entry.822126556":
        choice === "attending"
          ? t("confirm")
          : t("decline"),
    }),
  }
);

  if (choice === "attending") {
  const qrUrl = `${window.location.origin}/scan/${qr_token}`;

  localStorage.setItem(
  "guest_qr",
  JSON.stringify({
    name: name.trim(),
    guestCount: guestCount,
    qr: qrUrl,
  })
);


  setState({
  kind: "qr",
  name: name.trim(),
  guestCount: guestCount,
  qr: qrUrl,
});
} else {
    localStorage.setItem(
      "guest_declined",
      JSON.stringify({
        name: name.trim(),
      })
    );

    setState({
      kind: "declined",
      name: name.trim(),
    });
}
};


  // ===== Render states =====

  if (state.kind === "attending") {
    return (
      <Reveal>
        <div
          className="mx-auto max-w-md rounded-2xl p-8 text-center backdrop-blur-md"
          style={{
            background: "hsla(40, 50%, 95%, 0.7)",
            border: "2px solid hsl(42 75% 55%)",
            boxShadow: "var(--shadow-elegant), 0 0 40px hsl(42 80% 60% / 0.3)",
          }}
        >
          <div className="font-arabic text-2xl text-primary mb-4" style={{ fontWeight: 700 }}>
            نسعد بحضورك 🌸
          </div>
         <div className="font-arabic text-base text-muted-foreground mb-4">
  {t("welcome")} : {state.name}
  <br />
  عدد المرافقين : {state.guestCount}
</div>

<p className="font-arabic text-sm text-muted-foreground">
  {t("thanks_attending")}
</p>
</div>
      </Reveal>
    );
  }

  if (state.kind === "declined") {
    return (
      <Reveal>
        <div
          className="mx-auto max-w-md rounded-2xl p-8 text-center backdrop-blur-md"
style={{
  background: "#FFFEFC",
border: "1px solid #D7D8CC",
boxShadow: "0 12px 30px rgba(79,93,63,.10)",
}}
        >
<Heart
  className="mx-auto w-10 h-10 mb-4"
  style={{
    color: "#A882B8",
    fill: "#A882B8",
  }}
/>
<p
  className="font-arabic text-xl leading-loose"
  style={{ color: "#394132" }}
>
{t("thanks_declined")}
<br />

<span
  style={{
    color: "#A882B8",
    fontWeight: 700,
  }}
>
  {state.name}
</span>
            <br />
{t("see_you_next_time")}
          </p>
        </div>
      </Reveal>
    );
  }
if (state.kind === "qr") {
  return (
<div className="flex justify-center px-6 pt-10">
      <div className="w-full max-w-md">

        {/* المربع الرئيسي */}{/* المربع الرئيسي */}
<div
  className="rounded-2xl p-6 text-center backdrop-blur-md"
  style={{
    background: "#FCFAF8",
    border: "1px solid #D8C8D9",
    boxShadow: "0 10px 30px rgba(120, 85, 140, 0.12)",
  }}
>
  {/* العنوان */}
  <div className="flex items-center justify-center gap-3 mb-2">
  <span
    className="text-3xl"
    style={{ color: "#C7A5D9" }}
  >
    ༺
  </span>

  <div
    className="font-arabic text-3xl font-bold"
    style={{ color: "#1F1A1F" }}
  >
    {t("thanks_attending")}
  </div>

  <span
    className="text-3xl"
    style={{ color: "#C7A5D9" }}
  >
    ༻
  </span>
</div>

  {/* الاسم */}
  <div
    className="font-arabic text-base mb-2"
style={{ color: "#8E73A6" }}
  >
    {t("welcome")} : {state.name}
  </div>

  {/* عدد المرافقين */}
  <div
    className="font-arabic text-base mb-4"
style={{ color: "#8E73A6" }}
  >
    {t("guest_count")} : {state.guestCount}
  </div>

  {/* مربع الباركود */}
  <div
    className="rounded-xl p-2 mb-4 inline-flex"
    style={{
      background: "#FFFFFF",
      border: "1px solid #D8C8D9",
    }}
  >
    <QRCodeCanvas
      value={state.qr}
      size={170}
fgColor="#2F1D38"
      bgColor="#FFFFFF"
    />
  </div>

          {/* التحذير الأحمر */}
          <div
            className="rounded-xl p-3"
            style={{
              background: "rgba(239, 68, 68, 0.08)",
              border: "1px solid rgba(220, 38, 38, 0.6)",
            }}
          >
            <p className="text-red-700 font-bold text-sm">
⚠️ {t("save_qr_warning")}
            </p>
          </div>

          {/* الملاحظة الصغيرة */}
<div
  className="text-xs mt-2"
  style={{ color: "#8E73A6" }}
>
{t("dont_scan_qr")}
          </div>

        </div>
      </div>
    </div>
  );
}
  // Form
  return (
    <Reveal>
<div
  className="rounded-2xl p-6 text-center backdrop-blur-md"
  style={{
    background: "#FFFEFC",
border: "1px solid #D7D8CC",
boxShadow: "0 12px 30px rgba(79,93,63,.10)",
  }}
      >
        <label
  className="block font-arabic text-sm mb-2 text-right"
  style={{ color: "#394132" }}
>
{t("name_label")}
</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={60}
placeholder={t("name_placeholder")}
          className="w-full px-4 py-3 rounded-xl font-arabic text-right outline-none transition-colors"
          style={{
            background: "#FFFFFF",
border: "1px solid #D7D8CC",
color: "#394132",
          }}
          dir={lang === "ar" ? "rtl" : "ltr"}
/>


<div className="grid grid-cols-2 gap-3 mt-5">
  <button
    onClick={() => setChoice("attending")}
    className="py-3 rounded-xl font-arabic text-sm transition-all flex items-center justify-center gap-2"
    style={{
background:
choice === "attending"
? "#687451"
: "#F7F5F0",

color:
choice === "attending"
? "#FFFFFF"
: "#394132",

border: "1px solid #D7D8CC",

boxShadow:
choice === "attending"
? "0 0 18px rgba(79,93,63,.18)"
: "none",
    }}
  >

{t("confirm")}
          </button>
          <button
            onClick={() => setChoice("declined")}
className="py-3 rounded-xl font-arabic text-sm transition-all flex items-center justify-center"
            style={{
              background:
choice === "declined"
? "#687451"
: "#F7F5F0",

color:
choice === "declined"
? "#FFFFFF"
: "#394132",

border: "1px solid #D7D8CC",
            }}
          >

{t("decline")}
          </button>
        </div>

        <button
          onClick={submit}
          disabled={!name.trim() || !choice || state.kind === "loading"}
className="w-full mt-5 py-3 rounded-xl font-arabic text-base transition-all hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
          style={{
            background: "#687451",
color: "#FFFFFF",
boxShadow: "0 4px 18px rgba(79,93,63,.18)",
            fontWeight: 700,
          }}
        >
          {state.kind === "loading" ? t("sending") : t("send")}
        </button>

        {state.kind === "error" && (
          <p className="font-arabic text-sm text-center mt-3" style={{ color: "hsl(0 70% 45%)" }}>
            {state.msg}
          </p>
        )}
      </div>
    </Reveal>
  );
};

export default RSVP;
