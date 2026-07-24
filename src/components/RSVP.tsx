import { useEffect, useState } from "react"
import { Heart } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";

// 👈 عدّل رقم الواتساب هنا (بصيغة دولية بدون + أو 00). مثال السعودية: 9665XXXXXXXX

type State =
  | { kind: "form" }
  | { kind: "loading" }
  | { kind: "attending"; name: string }
  | { kind: "declined"; name: string }
  | { kind: "error"; msg: string };
const RSVP = () => {
const { t, lang } = useLang();
  const [name, setName] = useState("");
  const [choice, setChoice] = useState<"attending" | "declined" | null>(null);
  const [state, setState] = useState<State>({ kind: "form" });
useEffect(() => {
  const savedAttending = localStorage.getItem("guest_attending");

  if (savedAttending) {
    const data = JSON.parse(savedAttending);

    setState({
      kind: "attending",
      name: data.name,
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

  
try {
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
} catch {
  setState({
    kind: "error",
    msg: t("error_try_again"),
  });
  return;
}

  if (choice === "attending") {
  localStorage.setItem(
    "guest_attending",
    JSON.stringify({
      name: name.trim(),
    })
  );

  setState({
    kind: "attending",
    name: name.trim(),
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
          <div
  className="mx-auto max-w-md rounded-2xl p-8 text-center backdrop-blur-md"
  style={{
    background: "#FFFEFC",
    border: "1px solid #D7D8CC",
    boxShadow: "0 12px 30px rgba(79,93,63,.10)",
  }}
>
          }}
        >
         <Heart
  className="mx-auto w-10 h-10 mb-4"
  style={{
    color: "#687451",
    fill: "#687451",
  }}
/>

<div
  className="font-arabic text-2xl mb-4"
  style={{
    color: "#394132",
    fontWeight: 700,
  }}
>
  نسعد بحضورك
</div>
        <p
  className="font-arabic text-xl leading-loose"
  style={{ color: "#394132" }}
>
  {t("welcome")}
  <br />

  <span
    style={{
      color: "#687451",
      fontWeight: 700,
    }}
  >
    {state.name}
  </span>

  <br />

  <span
    className="text-base"
    style={{ color: "#7B8470" }}
  >
    {t("thanks_attending")}
  </span>
</p>

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
    color: "#687451",
    fill: "#687451",
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
    color: "#687451",
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
