"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Gift, Heart, Music, Music2, RotateCcw, Sparkles, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { birthday, SecretLetter } from "@/data/birthday";

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 }
};

const reasonLabels = ["Ngiu", "nhớ", "uống", "nước", "he"];

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [openReasons, setOpenReasons] = useState<number[]>([]);
  const [letterOpen, setLetterOpen] = useState(false);
  const [candleOut, setCandleOut] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [secret, setSecret] = useState<SecretLetter | null>(null);
  const [musicOn, setMusicOn] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const reducedMotion = useReducedMotion();

  const petals = useMemo(() => Array.from({ length: 18 }, (_, index) => index), []);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || !audio.paused) return;

    setAudioError(false);
    try {
      audio.muted = false;
      audio.volume = 0.85;
      audio.loop = true;
      await audio.play();
    } catch {
      setAudioError(true);
    }
  };

  const enterGarden = () => {
    setEntered(true);
    window.setTimeout(() => setEntered(false), 700);
    void startMusic();
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    setAudioError(false);
    try {
      if (musicOn) {
        audio.pause();
      } else {
        await startMusic();
      }
    } catch {
      setAudioError(true);
      setMusicOn(false);
    }
  };

  return (
    <main id="top">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={birthday.music.src}
        onError={() => setAudioError(true)}
        onPause={() => setMusicOn(false)}
        onPlay={() => setMusicOn(true)}
      />
      <button className="music-toggle" type="button" onClick={toggleMusic} aria-label={musicOn ? "Tắt nhạc" : "Bật nhạc"} aria-pressed={musicOn}>
        {musicOn ? <Music2 size={18} /> : <Music size={18} />}
      </button>
      {audioError && <p className="audio-note">Không thể phát nhạc lúc này.</p>}

      <section className="entrance" aria-label="Lối vào bí mật">
        <div className="pattern" aria-hidden="true">
          {petals.map((petal) => (
            <motion.span
              className={`petal petal-${petal % 5}`}
              key={petal}
              animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [-3, 4, -3] }}
              transition={{ duration: 3.8 + (petal % 4), repeat: Infinity, delay: petal * 0.08 }}
            />
          ))}
        </div>
        <motion.div className="entrance-copy" initial="hidden" animate="show" variants={reveal} transition={{ duration: 0.7 }}>
          <p className="handwritten">{birthday.tagline}</p>
          <h1>Chào, {birthday.nickname}!</h1>
          <p>Anh có một điều nho nhỏ dành riêng cho em...</p>
          <small>Được làm bằng rất nhiều tình yêu ♡</small>
          <motion.a
            href="#garden"
            className="primary-button"
            onClick={enterGarden}
            whileTap={{ scale: 0.94 }}
            animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            Bấm vào đây nè!
          </motion.a>
        </motion.div>
        <AnimatePresence>
          {entered && (
            <motion.div className="sparkle-burst" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1.25 }} exit={{ opacity: 0 }}>
              <Sparkles size={42} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <StorySection id="garden" title={`Chào mừng đến với thế giới nhỏ của em, ${birthday.girlfriendName}!`}>
        <p className="lead">{birthday.welcomeMessage}</p>
        <p className="soft-hint">Chạm nhẹ vào vài bông hoa trong khu vườn nha.</p>
        <div className="garden-scene">
          <div className="flower-bed" aria-hidden="true">
            {Array.from({ length: 9 }, (_, index) => <span key={index} />)}
          </div>
          {birthday.gardenNotes.map((note, index) => (
            <motion.button
              className={`flower-button flower-${index}`}
              key={note}
              type="button"
              onClick={() => setActiveNote(note)}
              whileTap={{ rotate: 8, scale: 0.96 }}
              aria-label={`Mở lời nhắn ${index + 1}`}
            >
              <span />
            </motion.button>
          ))}
        </div>
      </StorySection>

      <StorySection title="5 điều nhỏ xinh khiến anh yêu em" intro="Thật ra thì nhiều hơn năm điều... nhưng anh kể trước năm điều thôi nhé!">
        <div className="reason-grid">
          {birthday.reasonsILoveYou.map((reason, index) => {
            const opened = openReasons.includes(index);
            return (
              <button
                className={`reason-card ${opened ? "is-open" : ""}`}
                key={reason}
                type="button"
                onClick={() => setOpenReasons((current) => (current.includes(index) ? current.filter((item) => item !== index) : [...current, index]))}
              >
                <span className="reason-front">{reasonLabels[index]}</span>
                <span className="reason-back">{reason}</span>
              </button>
            );
          })}
        </div>
      </StorySection>

      <StorySection title="Một lá thư nhỏ dành cho cô gái anh yêu">
        <div className={`letter-stage ${letterOpen ? "is-open" : ""}`}>
          <button className="envelope" type="button" onClick={() => setLetterOpen(true)} aria-expanded={letterOpen}>
            <span className="flap" />
            <Heart size={26} fill="currentColor" />
          </button>
          <motion.article className="letter-paper" animate={{ y: letterOpen ? 0 : 80, opacity: letterOpen ? 1 : 0.25 }}>
            {birthday.loveLetter.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.article>
        </div>
      </StorySection>

      <StorySection title="Ước một điều nhé, cô gái sinh nhật!" intro={`Ước một điều thật xinh nhé, ${birthday.girlfriendName}!`}>
        <div className="cake-stage">
          <div className={`cake ${candleOut ? "is-out" : ""}`}>
            <span className="candle"><i /></span>
            <span className="cream" />
            <span className="layer top" />
            <span className="layer bottom" />
          </div>
          <button className="primary-button small" type="button" onClick={() => setCandleOut(true)}>Thổi nến nào!</button>
          {candleOut && <motion.p className="birthday-message" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>Chúc mừng sinh nhật, {birthday.girlfriendName}!</motion.p>}
        </div>
      </StorySection>

      <StorySection title="Mở khi...">
        <div className="secret-row">
          {birthday.secretLetters.map((item) => (
            <button className="mini-envelope" key={item.id} type="button" onClick={() => setSecret(item)}>
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </StorySection>

      <StorySection title="Còn một điều nhỏ nữa...">
        <div className="finale">
          <div className="promise-mark" aria-hidden="true">
            <Heart size={42} fill="currentColor" />
            <Sparkles size={22} />
            <Sparkles size={16} />
          </div>
          <p>Thế giới có rất nhiều điều xinh đẹp, và với anh, em là một trong những điều xinh đẹp nhất.</p>
          <strong>Chúc mừng sinh nhật, {birthday.nickname} ♡</strong>
          <button className={`gift-box ${giftOpen ? "is-open" : ""}`} type="button" onClick={() => setGiftOpen(true)} aria-label="Mở hộp quà">
            <Gift size={42} />
          </button>
          {giftOpen && <motion.p className="surprise" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>{birthday.surpriseMessage}</motion.p>}
          <a className="restart" href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <RotateCcw size={16} /> Xem lại từ đầu ♡
          </a>
        </div>
      </StorySection>

      <Modal open={Boolean(activeNote)} onClose={() => setActiveNote(null)}>
        <p className="modal-note">{activeNote}</p>
      </Modal>
      <Modal open={Boolean(secret)} onClose={() => setSecret(null)}>
        {secret && (
          <div className="secret-modal">
            <h3>{secret.title}</h3>
            <p>{secret.body}</p>
          </div>
        )}
      </Modal>
    </main>
  );
}

function StorySection({ children, id, intro, title }: { children: React.ReactNode; id?: string; intro?: string; title: string }) {
  return (
    <motion.section className="story-section" id={id} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.22 }} variants={reveal}>
      <h2>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
      {children}
    </motion.section>
  );
}

function Modal({ children, onClose, open }: { children: React.ReactNode; onClose: () => void; open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className="modal-panel" initial={{ y: 30, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 18, scale: 0.96 }} onClick={(event) => event.stopPropagation()}>
            <button className="close-button" type="button" onClick={onClose} aria-label="Đóng">
              <X size={18} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
