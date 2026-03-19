"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import SectionHeader from "@/components/common/SectionHeader";
import RevealWrapper from "@/components/common/RevealWrapper";

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: "", phone: "", email: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="py-14 md:py-20 bg-white" aria-label="Liên hệ">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          eyebrow="Liên hệ ngay"
          title={
            <>
              Mái Hiên Mái Xếp <span className="text-[#1e4d8c]">Linh Khương</span>
            </>
          }
          subtitle="Để lại thông tin — chúng tôi sẽ liên hệ hỗ trợ bạn ngay!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact form */}
          <RevealWrapper direction="left">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-[#1e4d8c]" />
              Đăng Ký Nhận Tư Vấn
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                <CheckCircle className="w-16 h-16 text-green-500" />
                <h4 className="text-xl font-bold text-gray-800">Gửi thành công!</h4>
                <p className="text-gray-500">
                  Chúng tôi đã nhận được thông tin. Sẽ liên hệ lại sớm nhất có thể.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); }}
                  className="text-[#1e4d8c] text-sm underline"
                >
                  Gửi lại
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e4d8c] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={siteConfig.contact.phone}
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e4d8c] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder={siteConfig.contact.email}
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e4d8c] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nội dung <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Mô tả yêu cầu của bạn..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e4d8c] focus:border-transparent transition-all resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1e4d8c] hover:bg-[#153870] text-white py-5 rounded-xl font-semibold text-xl"
                >
                  {loading ? "Đang gửi..." : "Gửi ngay"}
                </Button>
              </form>
            )}
          </div>
          </RevealWrapper>

          {/* Info + socials */}
          <RevealWrapper direction="right" delay={1}>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1e4d8c] to-[#153870] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-5">Thông Tin Liên Hệ</h3>
              <div className="space-y-4">
                <a href={siteConfig.contact.phoneHref} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <div className="bg-white/20 p-3 rounded-full"><Phone className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-90">Hotline</div><div className="font-bold">{siteConfig.contact.phone}</div></div>
                </a>
                <a href={siteConfig.contact.emailHref} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <div className="bg-white/20 p-3 rounded-full"><Mail className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-90">Email</div><div className="font-semibold">{siteConfig.contact.email}</div></div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full flex-shrink-0"><MapPin className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-90">Địa chỉ</div><div className="font-semibold">{siteConfig.contact.address}</div></div>
                </div>
              </div>
            </div>

            <a
              href={siteConfig.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-5 transition-colors shadow-md"
            >
              <Facebook className="w-10 h-10 flex-shrink-0" />
              <div>
                <div className="font-bold text-lg">Theo dõi Facebook</div>
                <div className="text-sm opacity-90">Cập nhật các công trình mới nhất của Linh Khương</div>
              </div>
            </a>

            <a
              href="https://www.google.com/maps?q=10.959127,106.749853"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden shadow-md h-52 md:h-56 relative group"
              title="Xem trên Google Maps"
            >
              <iframe
                src="https://maps.google.com/maps?q=10.959127,106.749853&z=18&output=embed&hl=vi"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                loading="lazy"
                title="Vị trí Mái Hiên Mái Xếp Linh Khương"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                  Mở Google Maps ↗
                </span>
              </div>
            </a>
          </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
