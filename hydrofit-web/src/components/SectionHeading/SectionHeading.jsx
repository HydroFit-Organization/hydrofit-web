import React from "react";

const SectionHeading = ({
  number,
  label,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`mx-auto max-w-[1600px] px-5 pb-16 sm:px-8 pt-16 lg:px-12  xl:px-16 ${className}`}
    >
      {/* Section Label */}
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 bg-[#0B8F63]" />

        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#77766F]">
          {number} / {label}
        </span>
      </div>

      {/* Section Title */}
      <h2 className="mt-5 max-w-[1100px] font-[Sora] text-[48px] font-semibold leading-[0.92] tracking-[-0.065em] sm:text-[64px] md:text-[76px] lg:text-[88px] xl:text-[100px]">
        {title}
      </h2>

      {/* Optional Description */}
      {description && (
        <p className="mt-7 max-w-[600px] text-sm leading-7 text-[#5F5E58] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
