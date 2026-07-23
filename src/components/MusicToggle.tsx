import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
const musicSrc = "/music/shim2t.m4a";

interface Props {
  active: boolean;
}

const MusicToggle = ({ active }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!active) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.55;
    audio.loop = true;
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [active]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!active) return null;

  return (
    <>
      <audio ref={audioRef} src={musicSrc} preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
        className="fixed bottom-4 left-4 z-50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all hover:scale-110"
        style={{
  background: "rgba(255, 254, 252, 0.85)",
  border: "1.5px solid #D7D8CC",
  boxShadow: "0 8px 25px rgba(79, 93, 63, 0.10)",
}}
      >
        {playing ? (
<Volume2 className="w-5 h-5" style={{ color: "#394132" }} />
        ) : (
<VolumeX className="w-5 h-5" style={{ color: #394132" }} />
        )}
      </button>
    </>
  );
};

export default MusicToggle;
