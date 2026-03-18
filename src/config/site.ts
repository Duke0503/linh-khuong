// ─── Site-wide Configuration ──────────────────────────────────────────────────
// Single source of truth for all SEO, contact, and brand data.

export const siteConfig = {
  name: "Mái Hiên Mái Xếp Linh Khương",
  fullName: "MAI HIÊN MÁI XẾP - CƠ KHÍ LINH KHƯƠNG",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4200",
  logo: "/logo.jpg",

  contact: {
    phone: "0972677687",
    phoneHref: "tel:0972677687",
    email: "linhkhuong@gmail.com",
    emailHref: "mailto:linhkhuong@gmail.com",
    zaloHref: "https://zalo.me/0972677687",
    facebook: "https://www.facebook.com/profile.php?id=61587717441680",
    address: "TP. Hồ Chí Minh và các tỉnh lân cận",
    geo: { lat: "10.823099", lng: "106.629664" },
  },

  analytics: {
    gaId: "G-NF876CZV1F",
  },

  seo: {
    title: "Mái Hiên Mái Xếp Linh Khương | Thi Công Mái Che Uy Tín Tại TP.HCM",
    titleTemplate: "%s | Mái Hiên Mái Xếp Linh Khương",
    description:
      "Chuyên tư vấn, thiết kế và thi công mái hiên, mái xếp di động, dù che nắng, mái vòm, cửa cuốn, cửa kéo tại TP.HCM và các tỉnh lân cận. Uy tín – Chất lượng – Bảo hành rõ ràng. Hotline: 0972677687",
    keywords: [
      "mái hiên",
      "mái xếp",
      "mái xếp di động",
      "dù che nắng",
      "mái vòm",
      "cửa cuốn",
      "cửa kéo",
      "thi công mái che",
      "Linh Khương",
      "TP.HCM",
      "mái che quán cà phê",
      "mái che nhà hàng",
    ],
    ogImage:
      "http://maihienngoctruc.com/thumbs/1920x920x1/upload/photo/z752373709798756f60bb09fe4cfb00416aa63a7fc78e6-1770783791.jpg.webp",
    // TODO: replace ogImage with hosted version after deploy
  },
} as const;

// ─── JSON-LD Structured Data ───────────────────────────────────────────────────

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.fullName,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hồ Chí Minh",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.contact.geo.lat,
    longitude: siteConfig.contact.geo.lng,
  },
  sameAs: [siteConfig.contact.facebook],
  description: siteConfig.seo.description,
  image: siteConfig.logo,
} as const;
