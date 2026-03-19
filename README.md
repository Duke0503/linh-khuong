# Mái Hiên Mái Xếp Linh Khương — Marketing Website

> Website marketing một trang (single-page) cho Cơ Khí Linh Khương — thi công mái hiên, mái xếp di động tại TP.HCM.

---

## Mục tiêu cuối cùng

Xây dựng một **landing page marketing chuẩn** với các tiêu chí:

| Tiêu chí | Mục tiêu |
|----------|----------|
| Lighthouse Performance | ≥ 90 điểm |
| Lighthouse SEO | ≥ 95 điểm |
| Lighthouse Accessibility | ≥ 90 điểm |
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Responsive | Hoạt động tốt từ 375px → 1920px |
| Chuyển đổi (Conversion) | CTA rõ ràng, dễ liên hệ mọi lúc |

---

## Tầm nhìn sản phẩm

Website là **điểm chạm duy nhất** giữa khách hàng và Linh Khương trên digital. Mọi thiết kế và nội dung đều phục vụ một mục tiêu: **khách hàng liên hệ**.

### Hành trình người dùng (User Journey)

```
Google tìm "mái hiên TP.HCM"
        ↓
Landing vào Hero → thấy banner chuyên nghiệp, số điện thoại ngay
        ↓
Scroll → Giới thiệu → hiểu là ai, đã làm bao nhiêu năm
        ↓
Scroll → Dịch vụ → tìm đúng loại mái mình cần
        ↓
Scroll → Vì sao chọn → xử lý sự nghi ngờ
        ↓
Scroll → Dự án thực tế → thấy bằng chứng (before/after)
        ↓
Scroll → Video thực tế → niềm tin tăng
        ↓
Scroll → Đánh giá khách hàng → social proof
        ↓
Scroll → Liên hệ → GỌI NGAY hoặc điền form
```

---

## Cấu trúc trang (Single Page)

| Section | ID Anchor | Mục đích |
|---------|-----------|----------|
| Hero | `#hero` | Ấn tượng đầu, banner + CTA |
| Giới thiệu | `#gioi-thieu` | Xây dựng niềm tin thương hiệu |
| Dịch vụ | `#dich-vu` | Giới thiệu các loại mái thi công |
| Vì sao chọn | _(trong flow)_ | Trust signals, cam kết |
| Dự án | `#du-an` | Before/After thực tế |
| Video | _(trong flow)_ | Video thi công thực tế |
| Đánh giá | _(trong flow)_ | Social proof từ khách hàng |
| Liên hệ | `#lien-he` | Form + thông tin liên lạc |

---

## Tech Stack

| Công nghệ | Version | Vai trò |
|-----------|---------|---------|
| Next.js | 16.x | Framework (App Router) |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | v4 | Styling |
| Embla Carousel | 8.x | Carousel/slider |
| react-intersection-observer | 10.x | Scroll animations |
| tw-animate-css | 1.x | CSS animation utilities |
| Lucide React | latest | Icons |

---

## Cấu trúc thư mục

```
src/
├── app/
│   ├── page.tsx          ← Single page (homepage)
│   ├── layout.tsx        ← SEO metadata, fonts, structured data
│   └── globals.css       ← Global styles, animation classes
├── components/
│   ├── layout/
│   │   ├── Header/       ← Fixed header, anchor nav, mobile menu
│   │   └── Footer/       ← Links, contact info
│   ├── sections/         ← Các section của trang
│   │   ├── HeroSlider/
│   │   ├── AboutSection/
│   │   ├── ServicesSection/
│   │   ├── WhyChooseUs/
│   │   ├── BeforeAfterSection/
│   │   ├── VideoSection/
│   │   ├── TestimonialsSection/
│   │   └── ContactSection/
│   └── common/
│       ├── FloatActions/ ← Sticky CTA (gọi + Zalo)
│       ├── RevealWrapper/← Scroll animation wrapper
│       └── SectionHeader/
├── config/
│   └── site.ts           ← Single source of truth: phone, SEO, brand
├── constants/
│   ├── navigation.ts     ← Nav items (anchor links)
│   ├── services.ts
│   ├── testimonials.ts
│   └── ...
└── hooks/
    └── useScrollReveal.ts ← Intersection Observer hook
```

---

## Thông tin liên hệ (Brand Config)

> Nguồn duy nhất: `src/config/site.ts` — **không hardcode** số điện thoại ở nơi khác

- **Hotline**: 0962568910
- **Zalo**: https://zalo.me/0962568910
- **Email**: linhkhuong@gmail.com
- **Khu vực**: TP. Hồ Chí Minh và các tỉnh lân cận

---

## Design System

| Token | Giá trị | Dùng cho |
|-------|---------|---------|
| `brand-navy` | `#1e4d8c` | Primary color, buttons, headings |
| `brand-navy-dark` | `#153870` | Hover states |
| `brand-orange` | `#f59e0b` | Accent, highlight text |
| Font | Be Vietnam Pro | Toàn trang |
| Border radius base | 10px | Cards, buttons |

---

## Development

```bash
# Cài dependencies
pnpm install

# Chạy dev server (port 4200)
pnpm dev

# Build production
pnpm build

# Lint
pnpm lint

# Kiểm tra types
npx tsc --noEmit
```

---

## Quy tắc quan trọng

1. **Số điện thoại**: Luôn dùng `siteConfig.contact.phone` — không hardcode
2. **Animation**: Chỉ animate `transform` và `opacity` — không animate layout properties
3. **Images**: Luôn dùng `next/image` với `width`, `height`, `alt` đầy đủ
4. **Single page**: Không tạo routes mới — tất cả trong `page.tsx`
5. **Anchor links**: Nav dùng `#id` + smooth scroll, không dùng `<Link href="/...">`

---

## Trạng thái hiện tại

> Xem chi tiết: [PROGRESS.md](./docs/PROGRESS.md)

**Phase hiện tại**: Phase 1 — Nền tảng & Animation
**Tasks hoàn thành**: 0 / 8
