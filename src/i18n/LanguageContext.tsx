import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

type Dict = Record<string, string>;

const ar: Dict = {
  // Invitation
  tap_open: "اضغط لفتح الدعوة",
  invite_to: "2",
  invite_join: "الايــــــــــام الجميـلة لا تكتمل إلا بكم",
  invite_day: "والأوقات السعيدة لا تبدأ إلا معكم",
  invite_with_love: "يسعدنا ويشرفنا دعوتكم لحضور",
  word1: "السيدة",
  word2: "السيدة",
  mother_name1: "أم معـاذ",
and: "&",
  mother_name2: "سميرة الغامدي",
  invite_attend: "عقد قـران",
  invite_before_bride: "أبنها",
  invite_before_bride_2: "ابنتها",
  bride_name: "ميعـاد",
  groom_name: "سلطـان",
  invite_god_willing: "وذلك بمشيئة الله تعالى يوم الاثنين",
  date_line: "١٧ . ٢ . ١٤٤٨ | ٣١ . ٧ . ٢٠٢٦",

  // Countdown
countdown_date: "٣١ يوليو ٢٠٢٦",
  countdown_title: "المتبقي حتى فرحتنا ",
  days: "أيام",
  hours: "ساعات",
  minutes: "دقائق",
  seconds: "ثواني",

  // Details
  details_title: "تفاصيل يوم الفرح",
  details_subtitle: "كل ما تحتاج معرفته",

  // Venue
  venue_title: "موقع حفلنا",
  venue_name: "قاعة شهرزاد",
  venue_city: "الطائف",

  hall_name: "شالــية الجـــازي 301",
  hall_city: "شالية الجازي 310",
  arrival_time: "الحضور الساعة ٨:٣٠ م",
  open_map: "افتح في الخريطة",
  add_calendar: "إضافة إلى التقويم",

  // Program
  program_title: "برنامج الحفل",
  program_subtitle: "خطتنا لليوم الكبير",
   "program_reception": "الاستقبال",
"reception_time": "الساعة ٨:٣٠ مساءً",
  program_zaffa: "الزفة",
  "zaffa_time": "الساعة ١٠:٠٠ مساءً",
  program_dinner: "العشاء",
 "dinner_time": "الساعة ١١:٣٠ مساءً",
  no_cameras: "يمنع دخول جوالات الكاميرا",
  no_kids: "يمنع اصطحاب الأطفال",
  swipe_more: "اسحب لرؤية المزيد",

  // RSVP
  rsvp_title: "الدعوة شخصية",
  rsvp_sub: "نتشرف بحضوركم",
  rsvp_deadline: "نرجو الرد قبل  ٣١ يوليو ٢٠٢٦",

  name_label: "الاسم الكريم",
  name_placeholder: "اكتب اسمك هنا",
  confirm: "تأكيد الحضور",
  decline: "الاعتذار",
  send: "إرسال",
  sending: "جارٍ الإرسال...",

welcome: "أهلاً وسهلاً",
guest_count: "عدد المرافقين",
already_registered: "تم التسجيل مسبقاً من هذا الجهاز",
error_try_again: "حدث خطأ، حاول مرة أخرى",
see_you_next_time: "ونراك في مناسبة أخرى بإذن الله",
save_qr_warning: "يرجى حفظ الباركود لأنه مطلوب عند الدخول",
dont_scan_qr: "الرجاء عدم مسح الباركود",

  thanks_attending: "شكراً لتأكيد حضورك",
  thanks_declined: "نقدّر اعتذارك",
  redirect_wa: "سيتم تحويلك إلى الواتساب لإرسال الرد...",

  // QR
  qr_title: "باركود الدخول الخاص بك",
  qr_sub: "يرجى تقديم هذا الباركود عند البوابة",
  save_qr: "حفظ الباركود",
  redirecting_in: "سيتم تحويلك إلى الواتساب خلال",
  seconds_short: "ث",

  // Footer
  made_by: "صُنع بحب بواسطة ",
  store: " متجر غيمة  ",
designer_names: "ميعـاد & سلطـان",
tiktok: "@shim2t.TikTok",

  // Calendar
  date_full: "الجمعة 31 يوليو 2026",
  cal_day: "Friday",
  cal_month: "July",
  cal_year: "2026",
guests_1: "١",
  guests_2: "٢",
  guests_3: "٣",
  guests_4: "٤",
  guests_5: "٥"
};

const en: Dict = {
  // Invitation
  tap_open: "Tap to open the invitation",
  invite_to: "May Allah bless their marriage",
  invite_join: "Beautiful days are only complete with you",
  invite_day: "And joyful moments begin only with you",
  invite_with_love: "We are delighted and honored to invite you to attend",
  word1: "Mrs.",
  word2: "Mrs.",
  mother_name1: "Umm Muadh",
and: "&",
  mother_name2: "Samirah Al-Ghamdi",
  invite_attend: "Wedding Ceremony",
  invite_before_bride: "her son",
  invite_before_bride_2: "her daughter",
  bride_name: "Meyad",
  groom_name: "Sultan",
  invite_god_willing: "God willing, on Friday",
  date_line: "31 . 07 . 2026 | 17 . 02 . 1448",

  // Countdown
countdown_date: "31 July 2026",
  countdown_title: "Until Our Celebration ",
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",

  // Details
  details_title: "Event Details",
  details_subtitle: "Everything you need to know",

  // Venue
  venue_title: "Our Venue",
  venue_name: "Al Jazi Chalet",
  venue_city: "310",

  hall_name: "Al Jazi Chalet",
  hall_city: "Al Jazi Chalet",
  arrival_time: "Arrival at 8:30 PM",
  open_map: "Open Map",
  add_calendar: "Add to Calendar",

  // Program
  program_title: "Event Program",
  program_subtitle: "Our schedule for the special day",
 "program_reception": "Reception",
"reception_time": "8:30 PM",
  program_zaffa: "Zaffa",
 "zaffa_time": "10:00 PM",
  program_dinner: "Dinner",
 "dinner_time": "11:30 PM",
  no_cameras: "No camera phones allowed",
  no_kids: "Children are not permitted",
  swipe_more: "Swipe to see more",

  // RSVP
  rsvp_title: "Personal Invitation",
  rsvp_sub: "We would be honored by your presence",
  rsvp_deadline: "Please respond before July 31, 2026",

  name_label: "Full Name",
  name_placeholder: "Enter your name",
  confirm: "Will Attend",
  decline: "Decline",
  send: "Send",
  sending: "Sending...",

  welcome: "Welcome",
guest_count: "Number of Companions",
  already_registered: "This device has already been registered",
  error_try_again: "An error occurred, please try again",
  see_you_next_time: "We hope to see you on another occasion",
  save_qr_warning: "Please save this QR code. It is required for entry",
  dont_scan_qr: "Please do not scan the QR code",

  thanks_attending: "Thank you for confirming your attendance",
  thanks_declined: "We appreciate your response",
  redirect_wa: "Redirecting you to WhatsApp...",

  // QR
  qr_title: "Your Entry QR Code",
  qr_sub: "Please present this QR code at the entrance",
  save_qr: "Save QR Code",
  redirecting_in: "Redirecting to WhatsApp in",
  seconds_short: "s",

  // Footer
  made_by: "Crafted with love by",
  store: "Ghaimah Store",
designer_names: "Meyad & Sultan",
tiktok: "@shim2t.TikTok",
  // Calendar
  date_full: "Monday, July 31, 2026",
  cal_day: "Friday",
  cal_month: "July",
  cal_year: "2026",
guests_1: "1",
  guests_2: "2",
  guests_3: "3",
  guests_4: "4",
  guests_5: "5"
};

const dicts = { ar, en };

interface LangCtx {
  lang: Lang;
  t: (k: keyof typeof ar) => string;
  toggle: () => void;
  dir: "rtl" | "ltr";
}

const Ctx = createContext<LangCtx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return (saved === "en" || saved === "ar") ? saved : "ar";
  });
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const t = (k: keyof typeof ar) => dicts[lang][k] ?? k;
  const toggle = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  return <Ctx.Provider value={{ lang, t, toggle, dir }}>{children}</Ctx.Provider>;
};

export const useLang = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLang must be inside LanguageProvider");
  return c;
};
