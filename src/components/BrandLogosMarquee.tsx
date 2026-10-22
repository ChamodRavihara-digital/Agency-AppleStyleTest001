import React from "react";

interface Brand {
  id: string;
  name: string;
  badge?: string;
  renderLogo: () => React.ReactNode;
}

const clientBrands: Brand[] = [
  {
    id: "apex",
    name: "Apex.lk",
    badge: "E-Commerce",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 36 36" fill="none">
          <path d="M18 3L32 29H4L18 3Z" fill="url(#apex-grad-light)" />
          <path d="M18 11L26 26H10L18 11Z" fill="#ffffff" />
          <circle cx="18" cy="20" r="3" fill="#F5A623" />
          <defs>
            <linearGradient id="apex-grad-light" x1="4" y1="3" x2="32" y2="29" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0099B8" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col">
          <span className="font-bold text-[17px] tracking-[0.04em] text-[#1d1d1f] leading-none">
            APEX<span className="text-[#0099B8]">.LK</span>
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#6e6e73] mt-0.5">
            ONLINE STORE
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "anythingatsupun",
    name: "anythingatsupun.lk",
    badge: "Retail & E-Com",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-[8px] bg-gradient-to-br from-[#F5A623] to-[#E08A00] flex items-center justify-center text-[#1d1d1f] shadow-xs">
          <svg className="w-5 h-5 text-[#1d1d1f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[17px] tracking-tight text-[#1d1d1f] leading-none">
            anythingat<span className="text-[#F5A623]">supun</span><span className="text-[#6e6e73] text-[13px]">.lk</span>
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#6e6e73] mt-0.5">
            SRI LANKA
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "jayaratna",
    name: "Jayaratna Group",
    badge: "Enterprise",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 36 36" fill="none">
          <rect x="2" y="2" width="32" height="32" rx="6" stroke="#D48806" strokeWidth="2" fill="#FAF6EE" />
          <path d="M22 10H14V14H18V22C18 24.2 16.2 26 14 26C12.8 26 11.8 25.5 11 24.7" stroke="#D48806" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col">
          <span className="font-semibold text-[16px] tracking-[0.06em] text-[#1d1d1f] uppercase leading-none">
            JAYARATNA
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D48806] mt-0.5 font-semibold">
            GROUP OF COMPANIES
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "supun-group",
    name: "Supun Group",
    badge: "Conglomerate",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 36 36" fill="none">
          <polygon points="18,3 32,10.5 32,25.5 18,33 4,25.5 4,10.5" fill="#E6F4F4" stroke="#1d1d1f" strokeWidth="2" />
          <polygon points="18,9 27,14 27,22 18,27 9,22 9,14" fill="#1d1d1f" opacity="0.9" />
        </svg>
        <div className="flex flex-col">
          <span className="font-semibold text-[16px] tracking-[0.05em] text-[#1d1d1f] uppercase leading-none">
            SUPUN GROUP
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#1d1d1f] mt-0.5 font-semibold">
            HOLDINGS &amp; RETAIL
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "wegot",
    name: "WEGOT Digital",
    badge: "Scale Partner",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#EBF4F4] border border-[#1d1d1f] flex items-center justify-center relative">
          <div className="w-4 h-4 rounded-full border-2 border-[#F5A623] border-t-transparent animate-spin" style={{ animationDuration: "8s" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] absolute" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-[17px] tracking-tight text-[#1d1d1f] leading-none">
            WEGOT<span className="text-[#F5A623]">.</span>
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6e6e73] mt-0.5">
            DIGITAL AGENCY
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "sozo",
    name: "SOZO Visuals",
    badge: "Media Studio",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-[6px] bg-[#1d1d1f] border border-[#F1BC25] flex items-center justify-center">
          <span className="font-bold text-[13px] text-[#F1BC25]">SZ</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[17px] tracking-[0.06em] text-[#1d1d1f] leading-none">
            SOZO
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#B47D1C] mt-0.5 font-semibold">
            VISUALS STUDIO
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "heritage-resort",
    name: "Heritage Galle Resort",
    badge: "Hospitality",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg className="w-8 h-8 shrink-0" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="16" stroke="#B47D1C" strokeWidth="1.5" />
          <path d="M18 8V28M10 18H26M12 12L24 24M12 24L24 12" stroke="#B47D1C" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <circle cx="18" cy="18" r="4" fill="#B47D1C" />
        </svg>
        <div className="flex flex-col">
          <span className="font-semibold text-[15px] tracking-[0.08em] text-[#1d1d1f] uppercase leading-none">
            HERITAGE
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#B47D1C] mt-0.5 font-medium">
            GALLE VILLAS &amp; RESORTS
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "ceylon-spices",
    name: "Ceylon Naturals",
    badge: "Export Brand",
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#EBF7F0] border border-[#16A34A]/40 flex items-center justify-center">
          <svg className="w-4 h-4 text-[#16A34A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[16px] tracking-tight text-[#1d1d1f] leading-none">
            CEYLON <span className="text-[#16A34A]">NATURALS</span>
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#6e6e73] mt-0.5">
            EXPORT CO.
          </span>
        </div>
      </div>
    ),
  },
];

export const BrandLogosMarquee: React.FC<{ className?: string }> = ({ className = "" }) => {
  // Duplicate for a seamless loop
  const marqueeList = [...clientBrands, ...clientBrands, ...clientBrands];

  return (
    <div className={`w-full bg-white py-14 sm:py-16 overflow-hidden relative ${className}`} aria-label="Brands I've worked with">
      <p className="ap-wrap text-center text-[17px] text-[#6e6e73] mb-8">
        Trusted by brands across Sri Lanka and beyond.
      </p>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-40 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-40 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-14 sm:gap-20">
          {marqueeList.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="shrink-0 flex items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={brand.name}
              aria-hidden={index >= clientBrands.length ? true : undefined}
            >
              {brand.renderLogo()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
