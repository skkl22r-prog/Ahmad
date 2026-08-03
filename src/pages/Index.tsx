import { useEffect, useRef, useState } from "react";
import { MapPin, Heart, QrCode, Baby, Camera, Clock } from "lucide-react";
import invitationImg from "@/assets/video-output-35080D12-B695-4FDA-A7B3-055E037ED0F8-1.mp4";
import Envelope from "@/components/Envelope";
import SprayParticles from "@/components/SprayParticles";
import Reveal from "@/components/Reveal";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import RSVP from "@/components/RSVP";
import { ChevronDown } from "lucide-react";
import MusicToggle from "@/components/MusicToggle";
import dividerImg from "@/assets/photo-output.png";
import locationIcon from "@/assets/4.png";
import flowerDivider from "@/assets/Photoroom_20260724_033250.png";
import receptionImg from "@/assets/5.png";
import programIcon from "@/assets/Photoroom_20260803_042046.png";
import dinnerImg from "@/assets/1.png";
import zaffaImg from "@/assets/6.png";
import phoneImg from "@/assets/2.png";
import kidsImg from "@/assets/3.png";
import rsvpIcon from "@/assets/Photoroom_20260803_042103.png";
import { useLang } from "@/i18n/LanguageContext";
const Index = () => {
  const [opened, setOpened] = useState(false);
const { t, lang, toggle } = useLang();
const scrollRef = useRef<HTMLDivElement>(null);

const startX = useRef(0);
const startScroll = useRef(0);
const dragging = useRef(false);
  const [hideScrollHint, setHideScrollHint] = useState(false);
const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  const el = scrollRef.current;
  if (!el) return;

  dragging.current = true;
  startX.current = e.touches[0].pageX;
  startScroll.current = el.scrollLeft;
};

const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
  if (!dragging.current) return;

  const el = scrollRef.current;
  if (!el) return;

  const walk = e.touches[0].pageX - startX.current;
  el.scrollLeft = startScroll.current - walk;
};

const onTouchEnd = () => {
  dragging.current = false;
};useEffect(() => {
  const onScroll = () => {
    setHideScrollHint(window.scrollY > 30);
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}, []);
  return (
 <div
  className="overflow-x-hidden w-full"
  style={{
background: "linear-gradient(180deg, #FCFBF8 0%, #FFFFFF 50%, #FCFBF8 100%)",
    minHeight: "100vh",
  }}
>
      {/* Ornamental gold damask pattern background */}
      <div
        aria-hidden
className="hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='%23B8860B' stroke-width='0.7' opacity='0.9'><g transform='translate(30 30)'><circle cx='0' cy='0' r='2.2' fill='%23B8860B'/><path d='M0 0 C -5 -3 -8 -8 -5 -12 C -1 -14 3 -11 4 -7'/><path d='M0 0 C 5 -3 8 -8 5 -12 C 1 -14 -3 -11 -4 -7'/><path d='M0 0 C -7 0 -11 5 -9 10 C -5 12 -1 9 0 5'/><path d='M0 0 C 7 0 11 5 9 10 C 5 12 1 9 0 5'/><path d='M0 5 C -2 9 0 13 3 12'/></g><g transform='translate(90 80)'><circle cx='0' cy='0' r='1.8' fill='%23B8860B'/><path d='M0 0 C -4 -2 -6 -6 -4 -9 C -1 -11 2 -8 3 -5'/><path d='M0 0 C 4 -2 6 -6 4 -9 C 1 -11 -2 -8 -3 -5'/><path d='M0 0 C -5 0 -8 4 -7 8 C -4 9 -1 7 0 4'/><path d='M0 0 C 5 0 8 4 7 8 C 4 9 1 7 0 4'/></g><g transform='translate(75 25)'><circle cx='0' cy='0' r='1.5' fill='%23B8860B'/><path d='M0 -4 C -3 -4 -4 -1 -2 1'/><path d='M0 -4 C 3 -4 4 -1 2 1'/><path d='M-3 2 C -5 4 -3 7 0 6'/><path d='M3 2 C 5 4 3 7 0 6'/></g><g transform='translate(20 95)'><circle cx='0' cy='0' r='1.5' fill='%23B8860B'/><path d='M0 -4 C -3 -4 -4 -1 -2 1'/><path d='M0 -4 C 3 -4 4 -1 2 1'/><path d='M-3 2 C -5 4 -3 7 0 6'/><path d='M3 2 C 5 4 3 7 0 6'/></g><path d='M55 55 q 4 -2 8 0' /><path d='M58 56 q 0 3 -2 5'/></g></svg>")`,
          backgroundSize: "150px 150px",
        }}
      />
 
{opened && <SprayParticles />}
      <MusicToggle active={opened} />
<Envelope onOpen={() => setOpened(true)} />



{opened && (
  <main
    className="relative z-10 animate-fadeIn"
    style={{
      animation: "fadeIn 0.8s ease forwards",
    }}
  >
   <div
 dir="ltr"
  className="fixed top-5 right-5 z-[9999] flex p-1 rounded-xl"
  style={{
    background: "#F7F5F0",
border:"1px solid #D7D8CC",
    boxShadow: "0 4px 12px rgba(0,0,0,.08)",
  }}
>
  <button
  onClick={() => lang !== "en" && toggle()}
  className="px-3 py-1 rounded-lg text-sm font-semibold transition-all"
  style={{
    background: lang === "en" ? "#687451" : "transparent",
    color: lang === "en" ? "#fff" : "#6E7562",
  }}
>
  EN
</button>

<button
  onClick={() => lang !== "ar" && toggle()}
  className="px-3 py-1 rounded-lg text-sm font-semibold transition-all"
  style={{
    background: lang === "ar" ? "#687451" : "transparent",
    color: lang === "ar" ? "#fff" : "#6E7562",
  }}
>
  AR
</button>
</div>

<section className="flex justify-center relative z-20">
<div className="relative w-full aspect-[9/16] overflow-hidden">

<video
  src={invitationImg}
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover animate-videoFade"
  style={{
background:"#F7F5F0",
  }}
/>
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: "rgba(0,0,0,0.08)",
  }}
/>

<div
  dir={lang === "ar" ? "rtl" : "ltr"}
  className="absolute inset-0 flex items-center justify-center px-5 py-6"
>
  <div
    className=""
  >
<div
className="flex flex-col items-center text-center px-5 py-6 rounded-2xl w-[98%] sm:w-[92%] gap-4 text-reveal"
style={{
  background: "transparent",
  backdropFilter: "none",
  WebkitBackdropFilter: "none",
  color: "#FFFFFF",
  textShadow:
    "0 1px 2px hsla(0,0%,0%,0.6), 0 0 10px hsla(0,0%,100%,0.35)",
}}
  >
<div
  className={`font-monasabat ${
    lang === "ar"
      ? "text-[14rem] sm:text-[15rem]"
: "text-xl sm:text-2xl"
  } leading-[0.4]`}
>
  {t("invite_to")}
</div>

<div className={`font-tajawal ${
  lang === "ar"
 ? "text-2xl sm:text-3xl"
    : "text-lg sm:text-xl"
} whitespace-nowrap`}>
  {t("invite_join")}
</div>

<div className={`font-tajawal ${
  lang === "ar"
 ? "text-2xl sm:text-3xl"
    : "text-lg sm:text-xl"
} whitespace-nowrap`}>
  {t("invite_day")}
</div>

<div className={`font-tajawal ${
  lang === "ar"
 ? "text-2xl sm:text-3xl"
    : "text-lg sm:text-xl"
} whitespace-nowrap`}>
  {t("invite_with_love")}
</div>

    <div className="hidden items-center justify-center gap-20 font-tajawal text-lg sm:text-xl">
      <span>{t("word1")}</span>
      <span>{t("word2")}</span>
    </div>

{/*
<div className={`font-iran ${
  lang === "ar"
      ? "text-6xl sm:text-7xl"
      : "text-5xl sm:text-6xl"
} whitespace-nowrap flex justify-center items-center gap-8 my-3`}>
  <span>{t("mother_name1")}</span>

  <span className="hidden">{t("and")}</span>

  <span className="hidden">{t("mother_name2")}</span>
</div>
*/}

<div className={`font-tajawal ${
  lang === "ar"
 ? "text-2xl sm:text-3xl"
    : "text-lg sm:text-xl"
}`}>
      {t("invite_attend")}
    </div>

 <div
  className={`font-iran ${
    lang === "ar"
      ? "text-6xl sm:text-7xl"
      : "text-5xl sm:text-6xl"
  } my-6`}
>
  {t("bride_name")}

  <span
    style={{
      display: "none",
fontSize: lang === "ar" ? "0.35em" : "0.80em",
      margin: "0 18px",
    }}
  >
    ❤︎
  </span>

 <span
  className={lang === "ar" ? "font-sull" : "font-serif"}
  style={{
    fontSize: "0.65em",
    margin: "0 18px",
  }}
>
  {t("and")}
</span>

  {t("groom_name")}
</div>
<div className={`font-tajawal ${
  lang === "ar"
? "text-xl sm:text-2xl"
    : "text-base sm:text-lg"
}`}>
  {t("invite_god_willing")}
</div>
<div className={`font-tajawal ${
  lang === "ar"
 ? "text-2xl sm:text-3xl"
    : "text-lg sm:text-xl"
}`}>
      {t("date_line")}

    </div>
  </div>
</div>
</div>
</div>
  <div
  id="scrollHint"
  className="absolute left-1/2 -translate-x-1/2 bottom-2 z-50 flex flex-col items-center pointer-events-none"
  style={{
    color: "#FFFFFF",
    textShadow: "0 2px 10px rgba(0,0,0,.45)",
    animation: hideScrollHint ? "none" : "scrollHint 2.8s ease-in-out infinite",
    opacity: hideScrollHint ? 0 : 1,
    transform: hideScrollHint
      ? "translate(-50%, 20px)"
      : "translate(-50%, 0)",
    transition: "opacity .5s ease, transform .5s ease",
  }}
>
  <span className="font-tajawal text-sm mb-1">
    اسحب للأسفل
  </span>

  <ChevronDown size={26} strokeWidth={2.3} />
</div>
</section>
          {/* Countdown */}
        <section className="px-4 py-16">
  <Reveal>
  <p
    className="text-center font-arabic text-sm mb-2"
    style={{ color: "#7C7367" }}
  >
    {t("countdown_date")}
  </p>

    <h2
    className="text-center font-arabic text-3xl mb-10"
    style={{ color: "#A67C2E" }}
  >
    {t("countdown_title")}
  </h2>
</Reveal>

<Reveal delay={150}>
    <Countdown />
  </Reveal>
</section>

<section className="-mx-4 py-8">
  <img
    src={dividerImg}
    alt=""
    className="block w-full h-auto"
  />
</section>

<section className="px-4 py-16">
  <Reveal>
  <div className="text-center mb-8">
    <img
      src={locationIcon}
      alt=""
      className="mx-auto mb-4 w-14 h-auto"
    />

    <h2
  className="font-arabic text-3xl"
  style={{ color: "#A67C2E" }}
>
  {t("details_title")}
</h2>

<div
  className="font-arabic text-sm mt-2"
  style={{ color: "#7C7367" }}
>
  {t("details_subtitle")}
</div>

<img
      src={flowerDivider}
      alt=""
      className="mx-auto mt-4 mb-6 w-16 h-auto select-none"
      draggable={false}
    />
  </div>
</Reveal>

<Reveal delay={200}>
  <div
    style={{
      transform: "scale(0.9)",
      transformOrigin: "top center",
    }}
  >
   <div
  className="max-w-sm mx-auto rounded-3xl p-4"
  style={{
    background: "#FFFFFF",
    border: "1px solid #E7D8B7",
    boxShadow:"0 12px 30px rgba(200,169,106,.12)",
  }}
>
      {/* اسم القاعة */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <img
          src={locationIcon}
          alt=""
          className="w-5 h-5"
        />

        <span
  className="font-arabic text-sm"
  style={{
    color: "#A67C2E",
    fontWeight: 600,
  }}
>
{t("hall_name")}
        </span>
      </div>

      {/* الخريطة */}
      <iframe
title={t("map_title")}
src="https://www.google.com/maps?q=قاعة+المخملية+للاحتفالات+الرياض&output=embed"
        width="100%"
        height="230"
        loading="lazy"
        style={{
          border: 0,
          borderRadius: "16px",
        }}
      />

      {/* اسم الموقع */}
      <div
  className="text-center mt-4 font-arabic"
  style={{
    color: "#2F2A24",
    fontSize: "15px",
    fontWeight: 600,
  }}
>
{t("hall_city")}
      </div>

      {/* وقت الحضور */}
    {t("arrival_time").trim() && (
<div className="hidden items-center justify-center gap-2 mt-3 mb-5">
    <Clock
      className="w-4 h-4"
      style={{ color: "#687451" }}
    />

    <span
      className="font-arabic text-sm"
      style={{ color: "#394132" }}
    >
      {t("arrival_time")}
    </span>
  </div>
)}
      {/* الأزرار */}
      <div className="grid grid-cols-2 gap-3">
        <a
  href="https://maps.google.com?q=26.0165437,49.9989607"
  target="_blank"
  rel="noopener noreferrer"
  className="py-3 rounded-xl text-center font-arabic text-sm"
  style={{
    background: "#FFFFFF",
    border: "1px solid #E7D8B7",
    color: "#A67C2E",
    fontWeight: 600,
    textDecoration: "none",
  }}
>
{t("open_map")}
        </a>

        <a
  href="/event.ics"
  className="py-3 rounded-xl text-center font-arabic text-sm"
  style={{
    background: "#C8A96A",
    color: "#FFFFFF",
    fontWeight: 600,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
{t("add_calendar")}
        </a>
      </div>
    </div>
  </div>
</Reveal>
</section>
          {/* Details */}
          <section className="px-4 py-16">
  <Reveal>
  <div className="text-center mb-10">
    <img
      src={programIcon}
      alt=""
      className="mx-auto mb-4 w-20 h-auto select-none"
      draggable={false}
    />

    <h2
      className="font-arabic text-3xl"
      style={{ color: "#394132" }}
    >
    {t("program_title")}
    </h2>

    <div
      className="font-arabic text-sm mt-2"
      style={{ color: "#7B8470" }}
    >
{t("program_subtitle")}
    </div>
  </div>
</Reveal>

  <Reveal delay={150}>
<div
  ref={scrollRef}
  onTouchStart={onTouchStart}
  onTouchMove={onTouchMove}
  onTouchEnd={onTouchEnd}
  className="overflow-x-auto pb-3"
  style={{
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    touchAction: "pan-x",
  }}
>
<div className="flex w-max gap-8 px-4">
  <div className="text-center shrink-0">
  <img
    src={receptionImg}
    alt=""
    className="w-16 h-auto mx-auto"
  />
  <div
    className="font-arabic text-sm mt-3"
    style={{ color: "#394132" }}
  >
    {t("program_reception")}
  </div>
  <div
    className="font-arabic text-xs mt-1"
    style={{ color: "#7B8470" }}
  >
    {t("reception_time")}
  </div>
</div>

      <div className="text-center shrink-0">
        <img
          src={zaffaImg}
          alt=""
          className="w-16 h-auto mx-auto"
        />
        <div className="font-arabic text-sm mt-3" style={{ color: "#394132" }}>
{t("program_zaffa")}
        </div>
        <div className="font-arabic text-xs mt-1" style={{ color: "#7B8470" }}>
{t("zaffa_time")}
        </div>
      </div>

      <div className="text-center shrink-0">
        <img
          src={dinnerImg}
          alt=""
          className="w-16 h-auto mx-auto"
        />
        <div className="font-arabic text-sm mt-3" style={{ color: "#394132" }}>
{t("program_dinner")}
        </div>
        <div className="font-arabic text-xs mt-1" style={{ color: "#7B8470" }}>
{t("dinner_time")}
        </div>
      </div>

      <div className="text-center shrink-0">
       <img
  src={phoneImg}
  alt=""
  className="w-16 h-auto mx-auto"
/>
        <div
          className="font-arabic text-sm mt-3"
          style={{ color: "#394132", width: "120px" }}
        >
{t("no_cameras")}
        </div>
      </div>

      <div className="text-center shrink-0">
        <img
          src={kidsImg}
          alt=""
          className="w-16 h-auto mx-auto"
        />
        <div
          className="font-arabic text-sm mt-3"
          style={{ color: "#394132", width: "120px" }}
        >
{t("no_kids")}
        </div>
      </div>

    </div>
  </div>

  <p
    className="text-center font-arabic text-sm mt-5"
    style={{ color: "#7B8470" }}
  >
{t("swipe_more")}
  </p>
</Reveal>
</section>

          {/* RSVP */}
<section className="px-4 py-16">
  <Reveal>
    <div className="text-center mb-10">
      <img
        src={rsvpIcon}
        alt=""
        className="mx-auto mb-4 w-16 h-auto select-none"
        draggable={false}
      />

      <h2
        className="font-arabic text-3xl"
        style={{ color: "#394132" }}
      >
{t("rsvp_title")}
      </h2>

      <div
        className="font-arabic text-sm mt-2"
        style={{ color: "#7B8470" }}
      >
{t("rsvp_deadline")}
      </div>
    </div>
  </Reveal>

  <RSVP />
</section>

          {/* Footer */}
          <footer className="px-4 py-12 text-center">
  <Reveal>

   <Heart
  className="w-5 h-5 fill-current mx-auto mb-3"
  style={{ color: "#C8A96A" }}
/>

<div
  className="text-2xl mb-2"
  style={{ color: "#A67C2E" }}
>
  <span className="font-iran">
    {t("designer_name1")}
  </span>

  <span
    className={`mx-2 ${
      lang === "ar" ? "font-sull" : "font-sans"
    }`}
  >
    {t("designer_and")}
  </span>

  <span className="font-iran">
    {t("designer_name2")}
  </span>
</div>

    <div
  className="font-arabic text-sm"
  style={{ color: "#2F2A24" }}
>
  {t("made_by")}
      <a
  href="https://www.tiktok.com/@shim2t?_r=1&_t=ZS-95w0d8f7vnk"
  target="_blank"
  rel="noopener noreferrer"
  className="underline underline-offset-4 transition-colors"
  style={{ color: "#A67C2E" }}
>
        {t("store")}
      </a>
    </div>

    <a
  href="https://www.tiktok.com/@shim2t?_r=1&_t=ZS-95w0d8f7vnk"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-2 text-sm underline underline-offset-4"
  style={{ color: "#A67C2E" }}
>
      @shim2t.TikTok
    </a>

  </Reveal>
          </footer>
        </main>
      )}
    </div>
  );
};

export default Index;
