import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

const TARGET = new Date("2026-08-29T19:30:00+03:00").getTime();

const Countdown = () => {
const { t: translate, lang } = useLang();
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
  { v: t.d, l: translate("days") },
  { v: t.h, l: translate("hours") },
  { v: t.m, l: translate("minutes") },
  { v: t.s, l: translate("seconds") },
];

  return (
    <div dir="ltr" className="flex justify-center gap-3 sm:gap-6">
      {items.map((it) => (
        <div
          key={it.l}
          className="flex flex-col items-center justify-center rounded-xl px-4 sm:px-6 py-4 min-w-[70px] sm:min-w-[90px] backdrop-blur-md"
          style={{
  background: "#FFFFFF",
  border: "1px solid #E7D8B7",
  boxShadow: "0 12px 30px rgba(200,169,106,.12)",
}}
        >
          <div
  className="font-display text-3xl sm:text-4xl font-light tabular-nums"
  style={{ color: "#A67C2E" }}
>
{lang === "ar"
  ? String(it.v).padStart(2, "0").replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d])
  : String(it.v).padStart(2, "0")
}
          </div>

         <div
  className="text-xs uppercase tracking-widest mt-1"
  style={{ color: "#7C7367" }}
>
            {it.l}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
