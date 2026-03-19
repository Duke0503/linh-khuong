// ─── Site-wide Configuration ──────────────────────────────────────────────────
// Single source of truth for all SEO, contact, and brand data.

export const siteConfig = {
  name: "Mái Hiên Mái Xếp Linh Khương",
  fullName: "MAI HIÊN MÁI XẾP - CƠ KHÍ LINH KHƯƠNG",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4200",
  logo: "/logo.jpg",

  contact: {
    phone: "0962568910",
    phoneHref: "tel:0962568910",
    email: "linhkhuong@gmail.com",
    emailHref: "mailto:linhkhuong@gmail.com",
    zaloHref: "https://zalo.me/0962568910",
    facebook: "https://www.facebook.com/profile.php?id=61587717441680",
    address: "126/22 Liên Huyện, Tân Hiệp, Phường Tân Đông Hiệp, TP. Dĩ An, Bình Dương",
    geo: { lat: "10.959127", lng: "106.749853" },
  },

  analytics: {
    gaId: "G-NF876CZV1F",
  },

  seo: {
    title: "Mái Hiên Mái Xếp Linh Khương | Thi Công Mái Che Uy Tín Tại TP.HCM",
    titleTemplate: "%s | Mái Hiên Mái Xếp Linh Khương",
    description:
      "Chuyên thi công mái hiên, mái xếp di động tại TP.HCM. Uy tín – Chất lượng – Bảo hành rõ ràng. Tư vấn miễn phí, báo giá nhanh. Hotline: 0962568910",
    keywords: [
      "mái hiên",
      "mái xếp",
      "mái xếp di động",
      "thi công mái hiên tphcm",
      "mái hiên giá rẻ",
      "báo giá mái hiên",
      "dù che nắng",
      "mái vòm",
      "cửa cuốn",
      "cửa kéo",
      "thi công mái che",
      "mái che quán cà phê",
      "mái che nhà hàng",
      "Linh Khương",
      "cơ khí Linh Khương",
      "TP.HCM",
    ],
    ogImage: "/banner_lk.png",
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
    streetAddress: "126/22 Liên Huyện, Tân Hiệp",
    addressLocality: "Tân Đông Hiệp, Dĩ An, Bình Dương",
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
