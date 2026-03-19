# Workflow Guide — Linh Khương Marketing Website

> Đọc file này MỖI KHI bắt đầu làm việc. Không bỏ qua.

---

## Bước 0 — Định hướng (LUÔN LÀM TRƯỚC)

Trước khi viết bất kỳ dòng code nào:

```
1. Đọc PROGRESS.md  →  biết đang làm đến task nào
2. Đọc ../README.md →  nhắc lại mục tiêu, quy tắc, cấu trúc
3. Xác định task    →  chỉ làm 1 task tại một thời điểm
```

---

## Vòng lặp làm việc

```
┌─────────────────────────────────────────────┐
│  ĐỌC PROGRESS.md                            │
│  → Tìm task tiếp theo (pending, không bị    │
│    blocked)                                 │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  LÀM TASK                                   │
│  → Đọc files liên quan trước khi sửa        │
│  → Sửa nhỏ từng bước, không sửa ồ ạt        │
│  → Chỉ sửa những gì task yêu cầu            │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  KIỂM TRA (xem checklist trong PROGRESS.md) │
│  → Test visual trên browser                 │
│  → Test responsive 375px / 768px / 1280px   │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  BEFORE COMMIT — BẮT BUỘC                   │
│  (xem section bên dưới)                     │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  UPDATE PROGRESS.md                         │
│  → Đánh dấu task done                       │
│  → Cập nhật progress bar                    │
│  → Ghi log thay đổi                         │
└──────────────────┬──────────────────────────┘
                   ↓
┌─────────────────────────────────────────────┐
│  COMMIT                                     │
└─────────────────────────────────────────────┘
```

---

## Before Commit Checklist — BẮT BUỘC

Chạy đủ 3 lệnh này theo thứ tự trước khi commit:

### 1. Lint
```bash
pnpm lint
```
- Nếu có lỗi → sửa hết, không dùng `// eslint-disable`
- Cảnh báo `suggestCanonicalClasses` (Tailwind) → đổi sang class alias nếu có

### 2. TypeScript check
```bash
npx tsc --noEmit
```
- Không được có TypeScript error
- Warning là ok, error là không

### 3. Build check
```bash
pnpm build
```
- Phải build thành công
- Nếu fail → đọc lỗi, fix trước khi commit

### 4. Commit
```bash
git add <files đã sửa>
git commit -m "step X: mô tả ngắn gọn"
```

**Format commit message:**
```
step 1: add scroll-reveal hook and CSS utilities
step 2: apply scroll animations to all sections
step 3: improve hero section responsive and CTA
...
```

---

## Quy tắc code

### Animation
```
✅ Chỉ animate: transform, opacity
❌ Không animate: width, height, top, left, padding, margin
→ Lý do: layout properties gây CLS và performance kém
```

### Phone/Contact
```
✅ Dùng: siteConfig.contact.phone
❌ Không: hardcode "0962568910" trong component
→ Lý do: một chỗ thay = đổi toàn bộ
```

### Images
```
✅ Dùng: <Image src="..." width={x} height={y} alt="mô tả" />
❌ Không: <img>, thiếu width/height, alt rỗng
→ Lý do: CLS, SEO, accessibility
```

### Navigation
```
✅ Dùng: <a href="#section-id"> với smooth scroll handler
❌ Không: <Link href="/page">, window.location
→ Lý do: đây là single-page, không có routes
```

### Components
```
✅ Đọc file trước khi sửa
✅ Sửa ít nhất có thể (đủ để task pass)
❌ Không refactor code không liên quan
❌ Không thêm features ngoài scope task
```

---

## Khi gặp lỗi

```
Build fail   → đọc lỗi, fix, chạy lại build
Lint fail    → sửa từng lỗi, không disable
Type error   → fix type, không dùng `any`
Visual bug   → test từng breakpoint, fix responsive
```

---

## Quick reference

| Lệnh | Dùng khi |
|------|---------|
| `pnpm dev` | Dev server (port 4200) |
| `pnpm build` | Kiểm tra build trước commit |
| `pnpm lint` | Kiểm tra code style |
| `npx tsc --noEmit` | Kiểm tra TypeScript |
| `git log --oneline -10` | Xem 10 commit gần nhất |

---

## Files quan trọng cần biết

| File | Vai trò |
|------|---------|
| `src/config/site.ts` | Phone, SEO, brand config |
| `src/constants/navigation.ts` | Nav items (anchor links) |
| `src/app/page.tsx` | Cấu trúc trang chính |
| `src/app/globals.css` | Global styles + animations |
| `docs/PROGRESS.md` | Tiến độ hiện tại |
| `README.md` | Tài liệu dự án |
| `docs/WORKFLOW.md` | Workflow guide (file này) |
