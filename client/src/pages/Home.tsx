/**
 * Home.tsx — Bella Vita Landing Page
 * Design: Neo-Classical Italian
 * Colors: Deep chocolate (#1a1208) + Champagne gold (#c9a84c) + Cream (#faf8f4)
 * Fonts: Cormorant Garamond (display) + Noto Serif JP (body) + Montserrat (labels)
 */

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ── Image CDN URLs (AI-generated, high quality) ──────────────────────────────
const IMG_HERO =
  "https://private-us-east-1.manuscdn.com/sessionFile/kR6TBKf7jspSYU4QmjN2BH/sandbox/rboJRDx1X1b81mDPeBSbTj-img-1_1771542319000_na1fn_YmVsbGEtdml0YS1oZXJv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva1I2VEJLZjdqc3BTWVU0UW1qTjJCSC9zYW5kYm94L3Jib0pSRHgxWDFiODFtRFBlQlNiVGotaW1nLTFfMTc3MTU0MjMxOTAwMF9uYTFmbl9ZbVZzYkdFdGRtbDBZUzFvWlhKdi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=I1sAQAuLh8m-~2gLhpd83czYfopX4fW8TaKGK31uJU6abb9pzUPt1ocqnRb7JHvHFiwTAewEiKmeF5OO01Qt~7Bdl4jDGuLUMzQ2MkFxepiQyNz1-qyz3T2KYo3U0RNO2Fi1eME0TCP6KCF4wduQKyXFQ4HW3rVNVfp5LTAvh7I4vp8v5uTpqpSTTH1dk9CLtCIrI~L0xs-hmMvoaany5Ank4TPc8-9S1GQTp0PEYyjLJ1N-~URefDKu7gIcziH1aknw7ZBaB15BWv4YW2bdPumtj0mYylnysj0uxoXw70Vp4zfuvjT0r9ejgLOwRufql521NV~KT5gqISpkycQwfw__";

const IMG_PASTA =
  "https://private-us-east-1.manuscdn.com/sessionFile/kR6TBKf7jspSYU4QmjN2BH/sandbox/rboJRDx1X1b81mDPeBSbTj-img-2_1771542310000_na1fn_YmVsbGEtdml0YS1wYXN0YQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva1I2VEJLZjdqc3BTWVU0UW1qTjJCSC9zYW5kYm94L3Jib0pSRHgxWDFiODFtRFBlQlNiVGotaW1nLTJfMTc3MTU0MjMxMDAwMF9uYTFmbl9ZbVZzYkdFdGRtbDBZUzF3WVhOMFlRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=V5KHRhIxYavl6xysZykldnuFQxwAUP-0zH7eoNvo0Wh4fn2l-Smdp-7fG-olA9MkxxSr0SLiOND6Rt7M2Vhr6tREgrJJhefjhZZFS9pMNLco-BAXZSMmHlbW9ESfGvhDMjM~dCFydmrivBFObs13k86xTJeevPQRAWzg2hhT5Mfg74sZvZPXYxgFLpd0o88-AXsNGQZYP~abI~aYFQav~lNKR5JzQhyBYJDvI3gFN43I7RZLm02bEOw~hxXPkNoV-CLoKHFqmyalD-B-ReyHt0S-XyfNPhQXMkisiyfo2TT7THl-~JgTbNQpJDkmLD7yzV05VfpEWwBejLmGeYOzrw__";

const IMG_CARBONARA =
  "https://private-us-east-1.manuscdn.com/sessionFile/kR6TBKf7jspSYU4QmjN2BH/sandbox/rboJRDx1X1b81mDPeBSbTj-img-3_1771542316000_na1fn_YmVsbGEtdml0YS1jYXJib25hcmE.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva1I2VEJLZjdqc3BTWVU0UW1qTjJCSC9zYW5kYm94L3Jib0pSRHgxWDFiODFtRFBlQlNiVGotaW1nLTNfMTc3MTU0MjMxNjAwMF9uYTFmbl9ZbVZzYkdFdGRtbDBZUzFqWVhKaWIyNWhjbUUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bO2skK5fzs8cXCFviAwN-0NegNDtg-3ARgur3BmCtTy7pVAZCI3Zc6zMWBkQ0JOBRm3BspcwugUTp5ktcd1DXVPunvdPsxHaY3wYUoeiAROlmWyQv01XUxNRKaMeRgT4gw-s9qsjMpgGVfPpZWwnclpxL92nsSX14K45p9gzhvylE92unLFQjgjkXYu4NzFjrP7IaZWEb-NJtjKvZz8tqkVbcWmTwkNgPDVClw38R~xgE-6WAtK5GooquZoqQhEWl~sHx2tsqW7-1aX4~hwtorsk67t9kwxzSuGCATE7Fjq7KGroC3zOCaR8TI~yYwYuH5AOhH35iN5cOB9DB-ql0A__";

const IMG_TIRAMISU =
  "https://private-us-east-1.manuscdn.com/sessionFile/kR6TBKf7jspSYU4QmjN2BH/sandbox/rboJRDx1X1b81mDPeBSbTj-img-4_1771542319000_na1fn_YmVsbGEtdml0YS10aXJhbWlzdQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva1I2VEJLZjdqc3BTWVU0UW1qTjJCSC9zYW5kYm94L3Jib0pSRHgxWDFiODFtRFBlQlNiVGotaW1nLTRfMTc3MTU0MjMxOTAwMF9uYTFmbl9ZbVZzYkdFdGRtbDBZUzEwYVhKaGJXbHpkUS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=cTnzUZUk51a2P0XYBrIZrV5AHgEFXgUr8bDv16h53bTKUZGJgK9a09zv4dEifAyGLBtfek5tTJMKaVNkysIt7W6froorWGdjL-8aIJX1Bxz9UIgkxC9bzF2Eoah-1-HvVTOowlThQ8S4kk4chH9I5uZVq-KKyn3ER3Ej-xpP1KgqMpzhuXcYLQ5p-BNHAdfqVldN7QznU1zWbgTpwqotYFvkHCApiXy85QHRAPMpWDlQcjAxYwMy~5clBSLW-EDlyvNJpZqsRpJcqaCaWJjbcnYLi1xv~0neH1u3ufky7VdzSQzbPmv96GyKPz5iACVO1Qce2EUwsqb-hQMhtDozxg__";

const IMG_BRUSCHETTA =
  "https://private-us-east-1.manuscdn.com/sessionFile/kR6TBKf7jspSYU4QmjN2BH/sandbox/rboJRDx1X1b81mDPeBSbTj-img-5_1771542316000_na1fn_YmVsbGEtdml0YS1icnVzY2hldHRh.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva1I2VEJLZjdqc3BTWVU0UW1qTjJCSC9zYW5kYm94L3Jib0pSRHgxWDFiODFtRFBlQlNiVGotaW1nLTVfMTc3MTU0MjMxNjAwMF9uYTFmbl9ZbVZzYkdFdGRtbDBZUzFpY25WelkyaGxkSFJoLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tt-TRbvBAD61QD1eNSfIFnHlo2SxOWF7Z1hNuJhYKCJGJKQXKz~3anvsKPPxnLutfD3-FSmsqo-mxmS-whKQoAWsymI250vfDaT5i~0B0dTcd3yU7eUlHIbDbt3gxwXXEVNr9pCAkCJ-P0EcJ0Hh-O~DGxPpkyxUN87CcAVMzf4QHWstr7BLRyXTujenkBjQhqV~3rNrX8T5ZB1DPnaHiKD1LoMMfuWBkf~rMVxyEnXG2rZs6cKiqW45XePCJDDVokNk9cPgMtJZpDklA1mxHfRqdJ8DDRYxR2e8YqPE4F0gwfOL2tlmCHm6WbpIZps~e4UxOsEXYj8MmRYX~USJHQ__";

// ── Scroll-reveal hook ────────────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Reusable FadeUp wrapper ───────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

// ── Menu data ─────────────────────────────────────────────────────────────────
const MENU = {
  antipasto: [
    { name: "ブルスケッタ・トスカーナ", desc: "トスカーナ産オリーブオイルをたっぷり使い、完熟トマトとバジルを乗せた定番の一品。香ばしいパンとの相性が抜群です。", price: "¥1,200", tag: "人気", img: IMG_BRUSCHETTA },
    { name: "アンティパスト・ミスト", desc: "生ハム、サラミ、マリネ野菜、チーズの盛り合わせ。2〜3名様でのシェアにも最適な豪華な前菜プレートです。", price: "¥2,800", tag: "", img: IMG_HERO },
    { name: "真鯛のカルパッチョ", desc: "新鮮な真鯛を薄くスライスし、柑橘のドレッシングとケッパー、ディルで仕上げた爽やかな一皿。", price: "¥1,800", tag: "季節限定", img: IMG_PASTA },
  ],
  primo: [
    { name: "スパゲッティ・カルボナーラ", desc: "グアンチャーレとペコリーノロマーノ、卵黄だけで作るローマ式本格カルボナーラ。生クリームは一切使いません。", price: "¥2,200", tag: "人気No.1", img: IMG_CARBONARA },
    { name: "タリアテッレ・ボロネーゼ", desc: "牛肉と豚肉を4時間煮込んだ本格ラグーソース。手打ちタリアテッレとの相性は言葉では語り尽くせません。", price: "¥2,600", tag: "", img: IMG_PASTA },
    { name: "ポルチーニのリゾット", desc: "芳醇な香りのポルチーニ茸をふんだんに使ったクリーミーなリゾット。パルミジャーノを削りかけてお召し上がりください。", price: "¥2,400", tag: "季節限定", img: IMG_BRUSCHETTA },
  ],
  dolce: [
    { name: "ティラミス・クラシコ", desc: "マスカルポーネとエスプレッソを使った、ヴェネト地方の伝統レシピ。濃厚でありながら軽やかな口当たりが特徴です。", price: "¥1,000", tag: "人気", img: IMG_TIRAMISU },
    { name: "パンナコッタ・フランボワーズ", desc: "なめらかなミルクのプリンに、フレッシュラズベリーのクーリをかけた上品なデザート。季節のフルーツを添えて。", price: "¥900", tag: "", img: IMG_BRUSCHETTA },
    { name: "アルティジャナーレ・ジェラート", desc: "毎日店内で手作りするジェラート。ピスタチオ、ストラッチャテッラ、季節のフルーツなど3種類からお選びいただけます。", price: "¥800", tag: "手作り", img: IMG_CARBONARA },
  ],
};

type MenuTab = "antipasto" | "primo" | "dolce";

// ── Component ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<MenuTab>("antipasto");
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Navbar scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("ご予約リクエストを受け付けました。確認のご連絡をいたします。");
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", phone: "", date: "", time: "", guests: "", message: "" });
      }, 5000);
    }, 1200);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Noto Serif JP', serif", color: "#2a2118", background: "#faf8f4" }}>

      {/* ── NAVIGATION ──────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: scrolled ? "14px 60px" : "22px 60px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: scrolled ? "rgba(26,18,8,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.4s",
        }}
      >
        <a href="#" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 600, color: "#fff", letterSpacing: "0.08em", textDecoration: "none" }}>
          Bella <span style={{ color: "#c9a84c" }}>Vita</span>
        </a>
        <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
          {[["コンセプト", "concept"], ["メニュー", "menu"], ["ギャラリー", "gallery"], ["アクセス", "access"]].map(([label, id]) => (
            <li key={id}>
              <button onClick={() => scrollTo(id)} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", background: "none", border: "none", cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              >{label}</button>
            </li>
          ))}
        </ul>
        <button onClick={() => scrollTo("reservation")} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a1208", background: "#c9a84c", padding: "10px 24px", border: "none", cursor: "pointer", transition: "background 0.3s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#b8943e")}
          onMouseLeave={e => (e.currentTarget.style.background = "#c9a84c")}
        >ご予約</button>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "100vh", minHeight: 700, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMG_HERO})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,6,2,0.55) 0%, rgba(10,6,2,0.3) 50%, rgba(10,6,2,0.75) 100%)" }} />
        <div style={{ position: "relative", textAlign: "center", color: "#fff", padding: "0 20px", maxWidth: 820 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a84c", marginBottom: 20 }}>
            Ristorante Bella Vita — Since 2010
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "0.04em", marginBottom: 24 }}>
            本物のイタリアを、<br /><em style={{ fontStyle: "italic", color: "#e8d5a3" }}>あなたの食卓へ。</em>
          </h1>
          <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(255,255,255,0.85)", marginBottom: 44 }}>
            南イタリアの太陽と大地が育んだ食材を使い、<br />
            シェフが丁寧に仕上げる一皿一皿。<br />
            特別な夜を、ともに。
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("reservation")} className="btn-gold">テーブルを予約する</button>
            <button onClick={() => scrollTo("menu")} className="btn-outline-white">メニューを見る</button>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.6)", fontFamily: "'Montserrat', sans-serif", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <span>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)" }} />
        </div>
      </section>

      {/* ── CONCEPT ─────────────────────────────────────────────────── */}
      <section id="concept" style={{ padding: "100px 0", background: "#faf8f4" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="concept-grid">
            <FadeUp>
              <span className="section-label">Our Story</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, lineHeight: 1.25, color: "#1a1208", marginBottom: 24, marginTop: 12 }}>
                南イタリアの風と<br />記憶を運ぶ料理
              </h2>
              <div className="gold-divider" style={{ marginBottom: 28 }} />
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#6b5f52", marginBottom: 18 }}>
                Bella Vita（ベラヴィータ）は、イタリア語で「美しい人生」を意味します。シェフのマルコ・ロッシは、ナポリで生まれ育ち、20年以上にわたってイタリア各地の星付きレストランで腕を磨いてきました。
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#6b5f52", marginBottom: 18 }}>
                素材は毎朝、信頼する生産者から直接仕入れます。パスタは店内で手打ち、ソースは数時間かけてじっくりと煮込む——妥協のない工程が、忘れられない一皿を生み出します。
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "#6b5f52" }}>
                非日常の空間で、大切な人と過ごす時間。それが私たちの目指す「ベラヴィータ」です。
              </p>
            </FadeUp>
            <FadeUp delay={150}>
              <div style={{ position: "relative" }}>
                <img src={IMG_HERO} alt="店内の雰囲気" style={{ width: "100%", height: 480, objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", top: -18, left: -18, width: "55%", height: "55%", border: "1px solid #e8d5a3", zIndex: -1 }} />
                <div style={{ position: "absolute", bottom: -18, right: -18, width: "55%", height: "55%", border: "1px solid #e8d5a3", zIndex: -1 }} />
              </div>
            </FadeUp>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .concept-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 0", background: "#1a1208" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }} className="features-grid">
            {[
              { icon: "🌿", title: "厳選素材", text: "イタリア直輸入のDOP認定チーズ・オリーブオイル、国産の旬野菜を組み合わせた、素材の旨みを最大限に引き出す料理を提供します。" },
              { icon: "🍝", title: "手打ちパスタ", text: "毎朝シェフが丁寧に打つ自家製生パスタ。もちもちとした食感と、ソースとの絶妙な絡み合いは、乾麺では決して出せない味わいです。" },
              { icon: "🍷", title: "厳選ワイン", text: "ソムリエが厳選したイタリア各州のワインを常時50種以上ご用意。料理との最高のペアリングをご提案いたします。" },
            ].map((f, i) => (
              <FadeUp key={f.title} delay={i * 100}>
                <div style={{ padding: "56px 44px", borderRight: i < 2 ? "1px solid rgba(201,168,76,0.2)" : "none", textAlign: "center" }}>
                  <span style={{ fontSize: "2rem", display: "block", marginBottom: 18 }}>{f.icon}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "#c9a84c", marginBottom: 14 }}>{f.title}</h3>
                  <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "0.85rem", lineHeight: 1.85, color: "rgba(255,255,255,0.65)" }}>{f.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .features-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── MENU ────────────────────────────────────────────────────── */}
      <section id="menu" style={{ padding: "100px 0", background: "#f5f1eb" }}>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Our Menu</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#1a1208", marginTop: 12, marginBottom: 0 }}>シェフのおすすめ</h2>
            <div className="gold-divider" style={{ margin: "20px auto 0" }} />
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", justifyContent: "center", borderBottom: "1px solid #ddd5c8", marginTop: 48, marginBottom: 56 }}>
            {(["antipasto", "primo", "dolce"] as MenuTab[]).map((tab) => {
              const labels: Record<MenuTab, string> = { antipasto: "アンティパスト", primo: "プリモ", dolce: "ドルチェ" };
              return (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase",
                    color: activeTab === tab ? "#1a1208" : "#6b5f52",
                    padding: "14px 36px", background: "none", border: "none", cursor: "pointer",
                    borderBottom: activeTab === tab ? "2px solid #c9a84c" : "2px solid transparent",
                    marginBottom: -1, transition: "all 0.3s",
                  }}
                >{labels[tab]}</button>
              );
            })}
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="menu-grid">
            {MENU[activeTab].map((item, i) => (
              <FadeUp key={item.name} delay={i * 80}>
                <div style={{ background: "#fff", overflow: "hidden", transition: "transform 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 50px rgba(0,0,0,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "24px 28px 28px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 600, color: "#1a1208" }}>{item.name}</span>
                      {item.tag && <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", border: "1px solid #e8d5a3", padding: "2px 8px", whiteSpace: "nowrap" }}>{item.tag}</span>}
                    </div>
                    <p style={{ fontSize: "0.84rem", lineHeight: 1.7, color: "#6b5f52", marginBottom: 16 }}>{item.desc}</p>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "#c9a84c" }}>{item.price}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .menu-grid { grid-template-columns: 1fr !important; }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .menu-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────── */}
      <section id="gallery" style={{ padding: "100px 0", background: "#faf8f4" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span className="section-label">Gallery</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#1a1208", marginTop: 12 }}>料理と空間の物語</h2>
            <div className="gold-divider" style={{ margin: "20px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "auto auto", gap: 12 }} className="gallery-grid">
            {[
              { src: IMG_HERO, span: true, label: "店内" },
              { src: IMG_CARBONARA, span: false, label: "カルボナーラ" },
              { src: IMG_TIRAMISU, span: false, label: "ティラミス" },
              { src: IMG_BRUSCHETTA, span: false, label: "ブルスケッタ" },
              { src: IMG_PASTA, span: false, label: "ボロネーゼ" },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 60} className={item.span ? "gallery-main" : ""}>
                <div style={{ overflow: "hidden", gridColumn: item.span ? "span 2" : undefined, gridRow: item.span ? "span 2" : undefined }}>
                  <img src={item.src} alt={item.label}
                    style={{ width: "100%", height: item.span ? 480 : 234, objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .gallery-grid { grid-template-columns: 1fr 1fr !important; }
            .gallery-main { grid-column: span 2 !important; }
          }
        `}</style>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <section style={{ padding: "100px 0", background: "#1a1208", textAlign: "center" }}>
        <div className="container">
          <span className="section-label">Reviews</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#fff", marginTop: 12 }}>お客様の声</h2>
          <div className="gold-divider" style={{ margin: "20px auto 56px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="reviews-grid">
            {[
              { stars: 5, text: "「記念日に利用しました。料理はどれも本当に美味しく、スタッフの方々のサービスも温かく、最高の夜になりました。また必ず来ます。」", author: "田中 美咲 様", date: "2025年12月" },
              { stars: 5, text: "「カルボナーラは今まで食べた中で一番でした。生クリームを使わない本格派の味。ワインのセレクションも素晴らしく、ソムリエさんのアドバイスが的確でした。」", author: "鈴木 健一 様", date: "2025年11月" },
              { stars: 4, text: "「接待で利用しましたが、お客様にも大変喜んでいただけました。個室の雰囲気も素晴らしく、料理のクオリティも申し分なし。次回も利用したいと思います。」", author: "山本 浩二 様", date: "2025年10月" },
            ].map((r, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)", padding: "40px 36px", textAlign: "left", transition: "border-color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
                >
                  <div style={{ color: "#c9a84c", fontSize: "0.9rem", letterSpacing: 2, marginBottom: 18 }}>{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.75, color: "rgba(255,255,255,0.8)", marginBottom: 24 }}>{r.text}</p>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c" }}>{r.author}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", marginTop: 4 }}>{r.date}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .reviews-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── RESERVATION ─────────────────────────────────────────────── */}
      <section id="reservation" style={{ padding: "100px 0", background: "#f5f1eb" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="reservation-grid">
            <FadeUp>
              <span className="section-label">Reservation</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#1a1208", marginTop: 12, marginBottom: 24 }}>ご予約・<br />お問い合わせ</h2>
              <div className="gold-divider" style={{ marginBottom: 28 }} />
              <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "#6b5f52", marginBottom: 32 }}>
                特別な日のディナーや接待など、大切なシーンに寄り添います。ご予約はウェブフォームまたはお電話にて承っております。
              </p>
              {[
                { label: "電話", value: "03-1234-5678" },
                { label: "営業時間", value: "ランチ 11:30〜14:00 (L.O. 13:30)\nディナー 18:00〜22:30 (L.O. 22:00)" },
                { label: "定休日", value: "毎週月曜日（祝日の場合は翌火曜日）" },
                { label: "席数", value: "40席（個室あり・要予約）" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 0", borderBottom: "1px solid #ddd5c8", borderTop: i === 0 ? "1px solid #ddd5c8" : "none" }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a1208", minWidth: 90 }}>{item.label}</span>
                  <span style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "#6b5f52", whiteSpace: "pre-line" }}>{item.value}</span>
                </div>
              ))}
            </FadeUp>
            <FadeUp delay={150}>
              <div style={{ background: "#fff", padding: "48px 44px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 400, color: "#1a1208", marginBottom: 32 }}>オンライン予約</h3>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    {[
                      { label: "お名前", id: "name", type: "text", placeholder: "山田 太郎", key: "name" },
                      { label: "電話番号", id: "phone", type: "tel", placeholder: "090-0000-0000", key: "phone" },
                    ].map(f => (
                      <div key={f.id}>
                        <label style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b5f52", marginBottom: 6 }}>{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder} required value={form[f.key as keyof typeof form]}
                          onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                          style={{ width: "100%", padding: "11px 14px", border: "1px solid #ddd5c8", background: "#faf8f4", fontFamily: "'Noto Serif JP', serif", fontSize: "0.88rem", color: "#1a1208", outline: "none" }}
                          onFocus={e => (e.target.style.borderColor = "#c9a84c")}
                          onBlur={e => (e.target.style.borderColor = "#ddd5c8")}
                        />
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b5f52", marginBottom: 6 }}>ご希望日</label>
                      <input type="date" required value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                        style={{ width: "100%", padding: "11px 14px", border: "1px solid #ddd5c8", background: "#faf8f4", fontFamily: "'Noto Serif JP', serif", fontSize: "0.88rem", color: "#1a1208", outline: "none" }}
                        onFocus={e => (e.target.style.borderColor = "#c9a84c")}
                        onBlur={e => (e.target.style.borderColor = "#ddd5c8")}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b5f52", marginBottom: 6 }}>ご希望時間</label>
                      <select required value={form.time} onChange={e => setForm(p => ({ ...p, time: e.target.value }))}
                        style={{ width: "100%", padding: "11px 14px", border: "1px solid #ddd5c8", background: "#faf8f4", fontFamily: "'Noto Serif JP', serif", fontSize: "0.88rem", color: "#1a1208", outline: "none", appearance: "none" }}
                        onFocus={e => (e.target.style.borderColor = "#c9a84c")}
                        onBlur={e => (e.target.style.borderColor = "#ddd5c8")}
                      >
                        <option value="">選択してください</option>
                        {["11:30","12:00","12:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"].map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b5f52", marginBottom: 6 }}>人数</label>
                    <select required value={form.guests} onChange={e => setForm(p => ({ ...p, guests: e.target.value }))}
                      style={{ width: "100%", padding: "11px 14px", border: "1px solid #ddd5c8", background: "#faf8f4", fontFamily: "'Noto Serif JP', serif", fontSize: "0.88rem", color: "#1a1208", outline: "none", appearance: "none" }}
                      onFocus={e => (e.target.style.borderColor = "#c9a84c")}
                      onBlur={e => (e.target.style.borderColor = "#ddd5c8")}
                    >
                      <option value="">選択してください</option>
                      {["1名","2名","3名","4名","5名","6名以上（要相談）"].map(g => <option key={g}>{g}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b5f52", marginBottom: 6 }}>ご要望・アレルギーなど</label>
                    <textarea rows={3} placeholder="記念日のご利用、アレルギー情報などをご記入ください" value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      style={{ width: "100%", padding: "11px 14px", border: "1px solid #ddd5c8", background: "#faf8f4", fontFamily: "'Noto Serif JP', serif", fontSize: "0.88rem", color: "#1a1208", outline: "none", resize: "vertical" }}
                      onFocus={e => (e.target.style.borderColor = "#c9a84c")}
                      onBlur={e => (e.target.style.borderColor = "#ddd5c8")}
                    />
                  </div>
                  <button type="submit" disabled={submitting || submitted}
                    style={{ width: "100%", padding: 16, background: submitted ? "#4a7c59" : "#c9a84c", color: submitted ? "#fff" : "#1a1208", fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", border: "none", cursor: "pointer", transition: "background 0.3s" }}
                  >
                    {submitting ? "送信中..." : submitted ? "送信完了！ありがとうございます。" : "予約リクエストを送る"}
                  </button>
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .reservation-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ── ACCESS ──────────────────────────────────────────────────── */}
      <section id="access" style={{ padding: "100px 0", background: "#faf8f4" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <span className="section-label">Access</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#1a1208", marginTop: 12 }}>アクセス</h2>
            <div className="gold-divider" style={{ margin: "20px auto 0" }} />
          </div>
          <div style={{ width: "100%", height: 400, background: "#e8e0d4", marginBottom: 0 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7477369038!2d139.7016358!3d35.6585805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328ef7f521612!2z5p2x5Lqs5aeTIOadseS4reW6lA!5e0!3m2!1sja!2sjp!4v1708000000000"
              style={{ width: "100%", height: "100%", border: "none", filter: "grayscale(30%) sepia(10%)" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="店舗地図"
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid #ddd5c8" }} className="access-grid">
            {[
              { label: "住所", value: "東京都港区南青山3-1-1\nベラヴィータビル 2F" },
              { label: "最寄り駅", value: "東京メトロ銀座線\n「表参道駅」A4出口 徒歩5分" },
              { label: "駐車場", value: "近隣コインパーキングをご利用ください\n（ご案内可能）" },
            ].map((item, i) => (
              <div key={i} style={{ padding: "36px 40px", borderRight: i < 2 ? "1px solid #ddd5c8" : "none", textAlign: "center" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.63rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: 10 }}>{item.label}</div>
                <div style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "#6b5f52", whiteSpace: "pre-line" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .access-grid { grid-template-columns: 1fr !important; }
            .access-grid > div { border-right: none !important; border-bottom: 1px solid #ddd5c8; }
          }
        `}</style>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer style={{ background: "#1a1208", padding: "70px 0 30px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 60, marginBottom: 50 }} className="footer-grid">
            <div>
              <a href="#" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "#fff", letterSpacing: "0.08em", textDecoration: "none", display: "inline-block", marginBottom: 20 }}>
                Bella <span style={{ color: "#c9a84c" }}>Vita</span>
              </a>
              <p style={{ fontSize: "0.84rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", maxWidth: 300 }}>
                南イタリアの食文化を東京の中心でお届けする本格イタリアンレストラン。素材の旨みを最大限に引き出した一皿で、特別なひとときをご提供します。
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: 20 }}>Navigation</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[["コンセプト", "concept"], ["メニュー", "menu"], ["ギャラリー", "gallery"], ["ご予約", "reservation"], ["アクセス", "access"]].map(([label, id]) => (
                  <li key={id} style={{ marginBottom: 10 }}>
                    <button onClick={() => scrollTo(id)} style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.3s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >{label}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: 20 }}>Contact</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[["03-1234-5678", "tel:0312345678"], ["info@bellavita.jp", "mailto:info@bellavita.jp"], ["Instagram", "#"], ["Facebook", "#"]].map(([label, href]) => (
                  <li key={label} style={{ marginBottom: 10 }}>
                    <a href={href} style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.3s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>© 2025 Ristorante Bella Vita. All rights reserved.</span>
            <div style={{ display: "flex", gap: 12 }}>
              {["IG", "FB", "TW"].map(sns => (
                <a key={sns} href="#" style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontFamily: "'Montserrat', sans-serif", fontSize: "0.72rem", transition: "border-color 0.3s, color 0.3s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c9a84c"; (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
                >{sns}</a>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          }
        `}</style>
      </footer>
    </div>
  );
}
