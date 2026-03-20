const STATS = [
  { number: "8+", label: "Năm kinh nghiệm" },
  { number: "500+", label: "Công trình" },
  { number: "3", label: "Tỉnh thành" },
  { number: "24h", label: "Bảo hành có mặt" },
];

export default function TrustBar() {
  return (
    <div className="bg-[#1e4d8c] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 divide-x divide-white/20">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center px-2">
              <div className="text-white font-extrabold text-xl md:text-2xl leading-none">
                {stat.number}
              </div>
              <div className="text-white/75 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
