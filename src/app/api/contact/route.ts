import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO_EMAIL = "maibatxeplinhkhuong@gmail.com";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || "re_123");
    
    const { name, phone, message } = await req.json();

    if (!name || !phone || !message) {
      return NextResponse.json({ error: "Thiếu thông tin" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Linh Khương Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `[Linh Khương] Khách hàng mới: ${name}`,
      html: `
        <h2>Yêu cầu tư vấn mới từ website</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Họ tên</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Điện thoại</td><td style="padding:8px;border:1px solid #ddd"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Nội dung</td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Gửi thất bại" }, { status: 500 });
  }
}
