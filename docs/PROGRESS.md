# Progress Tracker — Linh Khương Marketing Website

> File này được update sau mỗi task hoàn thành.
> Đọc file này đầu tiên để biết đang ở đâu trước khi làm việc.

---

## Tổng quan tiến độ

```
Phase 1 — Nền tảng & Animation    [ 3 / 3 ]  ██████████  100%
Phase 2 — UX & Responsive          [ 2 / 2 ]  ██████████  100%
Phase 3 — SEO & Conversion         [ 2 / 2 ]  ██████████  100%
Phase 4 — Final                    [ 1 / 1 ]  ██████████  100%
─────────────────────────────────────────────────────────
TỔNG                               [ 8 / 8 ]  ██████████  100%
```

---

## Chi tiết từng task

### Phase 1 — Nền tảng & Animation

#### STEP 1 — Scroll-reveal animation hook & CSS utilities
- **Status**: `[x] done`
- **Mục tiêu**: Tạo infrastructure animation dùng cho toàn trang
- **Files đã tạo/sửa**:
  - `src/hooks/useScrollReveal.ts` ✅
  - `src/components/common/RevealWrapper.tsx` ✅
  - `src/app/globals.css` — thêm `.reveal-up/left/right`, `.stagger-1~4` ✅
- **Kiểm tra**: `tsc --noEmit` ✅ | `pnpm lint` ✅
- **Completed**: 2026-03-19

---

#### STEP 2 — Apply scroll animations cho tất cả sections
- **Status**: `[x] done`
- **Mục tiêu**: Tất cả sections có entrance animation khi scroll vào
- **Files sẽ sửa**:
  - `src/components/sections/AboutSection/index.tsx`
  - `src/components/sections/ServicesSection/index.tsx`
  - `src/components/sections/WhyChooseUs/index.tsx`
  - `src/components/sections/BeforeAfterSection/index.tsx`
  - `src/components/sections/VideoSection/index.tsx`
  - `src/components/sections/TestimonialsSection/index.tsx`
  - `src/components/sections/ContactSection/index.tsx`
- **Kiểm tra**: Chrome DevTools Performance — không có CLS, animation dùng transform/opacity
- **Completed**: —

---

#### STEP 3 — Nâng cấp Hero section
- **Status**: `[x] done`
- **Mục tiêu**: Hero responsive đẹp, button CTA rõ ràng
- **Files sẽ sửa**:
  - `src/components/sections/HeroSlider/index.tsx`
- **Kiểm tra**: Test 375px/768px/1440px, LCP < 2.5s
- **Completed**: —

---

### Phase 2 — UX & Responsive

#### STEP 4 — Audit & fix responsive toàn trang
- **Status**: `[x] done`
- **Completed**: 2026-03-19
- **Mục tiêu**: Mọi section hoạt động tốt ở 375px, 768px, 1280px
- **Files**: Tất cả section components
- **Kiểm tra**: Chrome DevTools responsive mode — 3 breakpoints
- **Completed**: —

---

#### STEP 5 — Update Footer: anchor links + dọn dẹp
- **Status**: `[x] done`
- **Completed**: 2026-03-19
- **Mục tiêu**: Footer dùng anchor links thay route links
- **Files sẽ sửa**:
  - `src/components/layout/Footer/index.tsx`
- **Kiểm tra**: Click link trong Footer → scroll đúng section
- **Completed**: —

---

### Phase 3 — SEO & Conversion

#### STEP 6 — SEO: meta tags, structured data, content keywords
- **Status**: `[x] done`
- **Completed**: 2026-03-19
- **Mục tiêu**: On-page SEO chuẩn, structured data đầy đủ
- **Files sẽ sửa**:
  - `src/app/layout.tsx`
  - `src/config/site.ts`
- **Kiểm tra**: H1/H2 hierarchy, OG tags, LocalBusiness schema
- **Completed**: —

---

#### STEP 7 — Nâng cấp FloatActions
- **Status**: `[x] done`
- **Completed**: 2026-03-19
- **Mục tiêu**: Mobile sticky bar bottom, desktop floating buttons với tooltip
- **Files sẽ sửa**:
  - `src/components/common/FloatActions/index.tsx`
- **Kiểm tra**: Mobile 375px sticky bar, desktop 1440px floating
- **Completed**: —

---

### Phase 4 — Final

#### STEP 8 — Performance & final check
- **Status**: `[x] done`
- **Completed**: 2026-03-19
- **Mục tiêu**: Build pass, lint pass, visual QA toàn trang
- **Checklist**:
  - [ ] `pnpm build` — không error
  - [ ] `pnpm lint` — pass
  - [ ] `npx tsc --noEmit` — không TypeScript error
  - [ ] Visual QA scroll toàn trang
  - [ ] Test mobile Chrome DevTools
- **Completed**: —

---

## Log thay đổi đã làm (trước khi có plan này)

> Ghi lại các thay đổi đã thực hiện trong session trước

| Ngày | Thay đổi |
|------|----------|
| 2026-03-19 | Thay hero slider → banner image tĩnh (`banner_lk.png`) |
| 2026-03-19 | Đổi toàn bộ SĐT → `0962568910` trong `site.ts` |
| 2026-03-19 | Navigation → anchor links (`#hero`, `#gioi-thieu`, ...) |
| 2026-03-19 | Header bỏ top bar, bỏ dropdown, đơn giản hoá |
| 2026-03-19 | Bỏ `NewsSection` khỏi trang |
| 2026-03-19 | Thêm `id` cho các sections trong `page.tsx` |
| 2026-03-19 | Thêm `scroll-behavior: smooth` vào globals.css |
| 2026-03-19 | Copy `banner_lk.png` vào `public/` |

---

## Cách update file này

Sau khi hoàn thành một task:

1. Đổi status từ `[ ] pending` → `[x] done`
2. Điền ngày vào `Completed`
3. Cập nhật progress bar ở đầu file
4. Ghi note nếu có thay đổi gì khác so với plan

**Ví dụ khi xong STEP 1:**
```
#### STEP 1 — Scroll-reveal animation hook & CSS utilities
- **Status**: `[x] done`
- **Completed**: 2026-03-20
```

Và update progress bar:
```
Phase 1 — Nền tảng & Animation    [ 3 / 3 ]  ██████████  100%
```
