"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Send, CheckCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import SectionHeader from "@/components/common/SectionHeader";
import RevealWrapper from "@/components/common/RevealWrapper";

interface FormState {
  name: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

const INITIAL_FORM: FormState = { name: "", phone: "", message: "" };

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Vui lòng nhập họ tên";
  if (!form.phone.trim()) {
    errors.phone = "Vui lòng nhập số điện thoại";
  } else if (!/^(0|\+84)[0-9]{8,10}$/.test(form.phone.replace(/\s/g, ""))) {
    errors.phone = "Số điện thoại chưa đúng định dạng";
  }
  if (!form.message.trim()) errors.message = "Vui lòng mô tả yêu cầu";
  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
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
                  <p className="text-gray-500 text-base">
                    Chúng tôi đã nhận được thông tin. Sẽ liên hệ lại sớm nhất có thể.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); }}
                    className="text-[#1e4d8c] text-base font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors min-h-[44px]"
                  >
                    Gửi lại
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-1">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Nguyễn Văn A"
                        value={form.name}
                        onChange={handleChange("name")}
                        className={`w-full border rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#1e4d8c] focus:border-transparent transition-all ${
                          errors.name ? "border-red-400 bg-red-50" : "border-gray-300"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-1">
                        Điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="0962 568 910"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        className={`w-full border rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#1e4d8c] focus:border-transparent transition-all ${
                          errors.phone ? "border-red-400 bg-red-50" : "border-gray-300"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-base font-medium text-gray-700 mb-1">
                      Nội dung <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Mô tả yêu cầu của bạn..."
                      value={form.message}
                      onChange={handleChange("message")}
                      className={`w-full border rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#1e4d8c] focus:border-transparent transition-all resize-none ${
                        errors.message ? "border-red-400 bg-red-50" : "border-gray-300"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1e4d8c] hover:bg-[#153870] disabled:opacity-60 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors min-h-[56px]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      "Gửi ngay"
                    )}
                  </button>
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
                  <a href={siteConfig.contact.phoneHref} className="flex items-center gap-4 hover:opacity-80 transition-opacity min-h-[44px]">
                    <div className="bg-white/20 p-3 rounded-full flex-shrink-0"><Phone className="w-5 h-5" /></div>
                    <div><div className="text-sm opacity-90">Hotline</div><div className="font-bold text-lg">{siteConfig.contact.phone}</div></div>
                  </a>
                  <a href={siteConfig.contact.emailHref} className="flex items-center gap-4 hover:opacity-80 transition-opacity min-h-[44px]">
                    <div className="bg-white/20 p-3 rounded-full flex-shrink-0"><Mail className="w-5 h-5" /></div>
                    <div><div className="text-sm opacity-90">Email</div><div className="font-semibold">{siteConfig.contact.email}</div></div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full flex-shrink-0"><MapPin className="w-5 h-5" /></div>
                    <div><div className="text-sm opacity-90">Địa chỉ</div><div className="font-semibold">{siteConfig.contact.address}</div></div>
                  </div>
                </div>
              </div>

              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-5 transition-colors shadow-md min-h-[44px]"
              >
                <Facebook className="w-10 h-10 flex-shrink-0" />
                <div>
                  <div className="font-bold text-lg">Theo dõi Facebook</div>
                  <div className="text-base opacity-90">Cập nhật các công trình mới nhất của Linh Khương</div>
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
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-800 text-sm font-semibold px-3 py-1.5 rounded-full shadow-md">
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
