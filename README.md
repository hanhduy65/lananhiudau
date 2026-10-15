# A Little Green World for lananhiudau

Microsite sinh nhật cá nhân hóa, mobile-first, xây bằng Next.js App Router, TypeScript, Tailwind CSS và Framer Motion.

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Chỉnh nội dung

Toàn bộ nội dung cá nhân nằm trong `src/data/birthday.ts`: tên, lời chúc, thư, lý do yêu, ảnh, nhạc và thông điệp bí mật.

## Thay ảnh

1. Đặt ảnh vào `public/photos/`.
2. Sửa `src` trong `memories`, `photos` hoặc `finalPhoto` tại `src/data/birthday.ts`.
3. Giữ `alt` và `caption` rõ ràng để trải nghiệm xem ảnh đẹp hơn.

## Thay nhạc

1. Đặt file nhạc vào `public/audio/`, ví dụ `birthday-song.mp3`.
2. Sửa `music.src` trong `src/data/birthday.ts`.

Nhạc chỉ phát sau khi người xem bấm nút âm thanh hoặc đã tương tác với trang.

## Deploy Vercel

1. Push source lên GitHub.
2. Import repo trong Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Output để mặc định.
