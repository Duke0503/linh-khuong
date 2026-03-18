import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  {
    label: "Sản phẩm",
    href: "/san-pham",
    children: [
      { label: "Mái hiên, mái xếp di động", href: "/mai-hien-mai-xep-di-dong-cap1-1" },
      { label: "Dù che nắng", href: "/du-che-nang-cap1-4" },
      { label: "Mái vòm", href: "/mai-vom-cap1-2" },
      { label: "Cửa cuốn, cửa kéo", href: "/cua-cuon-cua-keo-cap1-3" },
    ],
  },
  {
    label: "Dự án",
    href: "/du-an",
    children: [
      { label: "Mái hiên, mái xếp di động", href: "/du-an-cap1" },
      { label: "Dù che nắng", href: "/du-an-cap1-2" },
      { label: "Cửa kéo, cửa cuốn", href: "/du-an-cap1-3" },
      { label: "Mái vòm", href: "/du-an-cap1-4" },
    ],
  },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];
