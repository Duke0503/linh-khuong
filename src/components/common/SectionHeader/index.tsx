interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 md:mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
            light ? "text-white/80" : "text-[#1e4d8c]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-extrabold ${
          light ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-sm md:text-base ${light ? "text-white/90" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`w-16 h-1 rounded-full mt-3 ${center ? "mx-auto" : ""} ${
          light ? "bg-white/50" : "bg-[#1e4d8c]"
        }`}
      />
    </div>
  );
}
