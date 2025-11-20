import React from "react";

type Size = "sm" | "md" | "lg";
type Variant = "circle" | "square";

export default function Avatar({
  size = "sm",
  variant = "circle",
  initials = "F",
  src,
}: {
  size?: Size;
  variant?: Variant;
  initials?: string;
  src?: string;
}) {
  const sizeClasses =
    size === "sm"
      ? "w-8 h-8 text-sm"
      : size === "md"
        ? "w-10 h-10 text-base"
        : "w-48 h-48 text-6xl";
  const shape = variant === "circle" ? "rounded-full" : "rounded-2xl";

  return (
    <div
      className={`relative ${sizeClasses} ${shape} overflow-hidden flex items-center justify-center font-bold text-white`}
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 ${shape} bg-gradient-to-br from-blue-400 to-purple-600`}
      />

      {/* glow */}
      {size === "lg" && (
        <>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 via-cyan-300/20 to-purple-400/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -right-4 top-2 w-32 h-40 bg-gradient-to-r from-blue-400/20 to-cyan-300/20 rounded-full blur-2xl -z-10"></div>
        </>
      )}

      {/* Image or Initials */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {src ? (
          <img src={src} alt="avatar" className="w-full h-full object-cover" />
        ) : (
          <span className="font-mono">{initials}</span>
        )}
      </div>
    </div>
  );
}
