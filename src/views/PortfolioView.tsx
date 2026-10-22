import React, { useState } from "react";
import { CTABlock } from "../components/CTABlock";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface PortfolioViewProps {
  onNavigate: (href: string) => void;
}

interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: "Paid Social Ads" | "Video & Reels" | "E-Commerce Creatives" | "Lead Gen Creatives";
  format: string;
  platforms: string[];
  angle: string;
  metric: { value: string; label: string };
  videoSrc?: string;
  poster: string;
  caseSlug?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "port-1",
    title: "High-Tempo 3D Brand & Product Orbit Reel",
    client: "WEGOT Digital / SOZO Visuals",
    category: "Video & Reels",
    format: "3D Motion Graphic Video (16:9 / 9:16)",
    platforms: ["Meta Ads", "TikTok", "Instagram Reels"],
    angle: "3-Second Visual Hook with dynamic platform ecosystem orbiting 3D centerpoint",
    metric: { value: "82%", label: "3-sec thumbstop rate" },
    videoSrc: "/video/wegot-loop.mp4",
    poster: "/images/wegot-loop-poster.jpg",
  },
  {
    id: "port-2",
    title: "Cinematic Product Film & Micro-Hook Ads",
    client: "SOZO Visuals Studio",
    category: "Video & Reels",
    format: "Cinematic Commercial & Social Cuts",
    platforms: ["YouTube Ads", "Meta Ads", "TikTok"],
    angle: "Sensory close-ups, macro lighting transitions, and clear outcome-based storytelling",
    metric: { value: "3.4×", label: "Higher conversion rate" },
    videoSrc: "/video/sozo-loop.mp4",
    poster: "/images/sozo-loop-poster.jpg",
  },
  {
    id: "port-3",
    title: "Conversion-Focused Catalog & Carousel Architecture",
    client: "Apex.lk",
    category: "E-Commerce Creatives",
    format: "Dynamic Product Ads + Modular Video",
    platforms: ["Meta Ads", "Google Shopping"],
    angle: "Instant bundle value proposition with trust badges and localized pricing",
    metric: { value: "6.2×", label: "Blended ad ROAS" },
    poster: "/images/work/apex-lk.jpg",
    caseSlug: "apex-lk-ecommerce-tracking",
  },
  {
    id: "port-4",
    title: "Problem-Agitate-Solve Direct Response Ads",
    client: "anythingatsupun.lk",
    category: "Paid Social Ads",
    format: "UGC Video Hook + Social Proof Slides",
    platforms: ["Meta Ads", "TikTok Ads"],
    angle: "Pain-point callout in the first 2 seconds followed by rapid product demonstration",
    metric: { value: "-38%", label: "Cost per acquisition" },
    poster: "/images/work/anythingatsupun.jpg",
    caseSlug: "anythingatsupun-meta-ads",
  },
  {
    id: "port-5",
    title: "Premium Luxury Escape Video Campaign",
    client: "Boutique Resort & Spa",
    category: "Paid Social Ads",
    format: "Experiential High-Definition Visuals",
    platforms: ["Meta Ads", "Google Display"],
    angle: "Sensory aspiration targeted at high-net-worth international inbound travelers",
    metric: { value: "8.4×", label: "Direct booking ROAS" },
    poster: "/images/work/boutique-resort.jpg",
    caseSlug: "boutique-resort-hospitality",
  },
  {
    id: "port-6",
    title: "High-Intent Academic Enrollment Campaign",
    client: "University & Higher Education Institute",
    category: "Lead Gen Creatives",
    format: "Alumni Testimonial + Degree Value Matrix",
    platforms: ["Meta Ads", "Google Search & PMax"],
    angle: "Career progression proof points and immediate WhatsApp counseling CTA",
    metric: { value: "1,240+", label: "Verified student leads" },
    poster: "/images/work/university-lead-gen.jpg",
    caseSlug: "university-lead-generation",
  },
  {
    id: "port-7",
    title: "Heritage Craft & Direct Export Ad Suite",
    client: "Heritage Tea Brand",
    category: "E-Commerce Creatives",
    format: "Artisanal Storytelling Video & Carousel",
    platforms: ["Meta Ads", "Google Shopping"],
    angle: "Single-origin authenticity, organic certification, and gift packaging showcase",
    metric: { value: "$18.40", label: "Avg order value +42%" },
    poster: "/images/work/heritage-tea.jpg",
    caseSlug: "heritage-tea-brand-awareness",
  },
  {
    id: "port-8",
    title: "Direct-to-Consumer Seasonal Scaling Creative",
    client: "Direct-to-Consumer Apparel",
    category: "Paid Social Ads",
    format: "Lookbook Video & Dynamic Overlay Ads",
    platforms: ["Meta Ads", "TikTok Ads"],
    angle: "Rapid fit demonstration, multi-angle styling, and limited drop urgency",
    metric: { value: "5.1×", label: "Scaling ROAS" },
    poster: "/images/work/dtc-apparel.jpg",
    caseSlug: "dtc-apparel-scale",
  },
];

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  useScrollReveal();

  const categories = ["All", "Paid Social Ads", "Video & Reels", "E-Commerce Creatives", "Lead Gen Creatives"];

  const filteredItems =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <main className="w-full pt-[52px]">
      <section className="bg-black text-[#f5f5f7] text-center pt-20 sm:pt-28 pb-14">
        <div className="ap-wrap">
          <p className="ap-eyebrow text-[#a1a1a6] mb-3">Portfolio</p>
          <h1 className="ap-hero mx-auto max-w-[13ch]">Creative that stops the scroll.</h1>
          <p className="ap-sub text-[#a1a1a6] mt-6 mx-auto max-w-[36ch]">
            Performance ad creative, short-form reels and catalogue formats — built to lower cost per acquisition.
          </p>
        </div>
      </section>

      <section className="bg-black pb-24 sm:pb-32">
        <div className="ap-wrap-wide">
          {/* Segmented filter */}
          <div className="flex justify-center mb-12">
            <div
              role="tablist"
              aria-label="Filter portfolio"
              className="inline-flex max-w-full overflow-x-auto scrollbar-none rounded-full bg-[#1d1d1f] p-1"
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = cat === "All" ? portfolioItems.length : portfolioItems.filter((i) => i.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat)}
                    className={`min-h-[40px] px-4 sm:px-5 rounded-full text-[14px] whitespace-nowrap transition-all cursor-pointer ${
                      isActive ? "bg-[#424245] text-white" : "text-[#a1a1a6] hover:text-white"
                    }`}
                  >
                    {cat} <span className={isActive ? "text-[#d2d2d7]" : "text-[#86868b]"}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group rounded-[22px] overflow-hidden bg-[#1d1d1f] text-[#f5f5f7] flex flex-col transition-transform duration-500 hover:scale-[1.01]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#2c2c2e] to-[#1d1d1f]">
                  {item.videoSrc ? (
                    <video
                      src={item.videoSrc}
                      poster={item.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-[21px] font-semibold tracking-[-0.02em]">
                        {item.client}
                      </div>
                      <img
                        src={item.poster}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    </>
                  )}
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.04em] text-[#a1a1a6]">
                    {item.category} · {item.platforms.slice(0, 2).join(" · ")}
                  </p>
                  <h2 className="mt-2 text-[21px] font-semibold tracking-[-0.02em] leading-snug">{item.title}</h2>
                  <p className="mt-1 text-[14px] text-[#a1a1a6]">{item.client}</p>
                  <p className="mt-3 text-[15px] text-[#a1a1a6] leading-snug line-clamp-2">{item.angle}</p>

                  <div className="mt-auto pt-6 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-[36px] font-bold tracking-[-0.04em] leading-none tabular-nums">{item.metric.value}</div>
                      <div className="mt-1 text-[13px] text-[#a1a1a6]">{item.metric.label}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate(item.caseSlug ? `/work/${item.caseSlug}` : "/contact")}
                      className="ap-chevron-link text-[#2997ff] !text-[15px] cursor-pointer whitespace-nowrap"
                    >
                      <span>{item.caseSlug ? "Breakdown" : "Request asset"}</span>
                      <span aria-hidden="true">›</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABlock onNavigate={onNavigate} className="border-t border-[#424245]" />
    </main>
  );
};
