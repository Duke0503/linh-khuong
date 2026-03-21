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
    email: "maibatxeplinhkhuong@gmail.com",
    emailHref: "mailto:maibatxeplinhkhuong@gmail.com",
    zaloHref: "https://zalo.me/0962568910",
    facebook: "https://www.facebook.com/profile.php?id=61587717441680",
    address: "126/22 Liên Huyện, Tân Hiệp, Phường Tân Đông Hiệp, Thành phố Hồ Chí Minh",
    geo: { lat: "10.959127", lng: "106.749853" },
  },

  analytics: {
    gaId: "G-NF876CZV1F",
  },

  seo: {
    title: "Cửa Cuốn Mái Hiên Linh Khương | Thi Công Uy Tín TP.HCM",
    titleTemplate: "%s | Linh Khương",
    description:
      "Hơn 8 năm thi công cửa cuốn, mái hiên, mái xếp tại TP.HCM. 500+ công trình thực tế — thợ lành nghề, bảo hành rõ ràng, báo giá miễn phí trong ngày. Gọi: 0962568910",
    keywords: [
      "cửa cuốn linh khương",
      "cua cuon linh khuong",
      "mái hiên linh khương",
      "mai hien linh khuong",
      "cửa cuốn tphcm",
      "cửa cuốn tphcm",
      "mái hiên",
      "mái xếp",
      "mái xếp di động",
      "thi công cửa cuốn",
      "thi công mái hiên",
      "mái hiên giá rẻ",
      "báo giá cửa cuốn",
      "dù che nắng",
      "mái vòm",
      "cửa kéo",
      "thi công mái che",
      "Linh Khương",
      "cơ khí Linh Khương",
    ],
    ogImage: "/banner_main.jpg",
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
    addressLocality: "Tân Đông Hiệp, Thành phố Hồ Chí Minh",
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
