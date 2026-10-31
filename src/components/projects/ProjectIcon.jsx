// src/components/projects/ProjectIcon.jsx
// Renders a clean, professional icon tile for a project.
// Priority: logo image → styled monogram tile (replaces raw emoji).

// Per-project icon config: brand gradient + letter color
const PROJECT_ICON_CONFIG = {
  dabbame: {
    bg: "linear-gradient(135deg, #78350f 0%, #92400e 100%)",
    border: "rgba(251,146,60,0.35)",
    glow: "rgba(251,146,60,0.15)",
    textColor: "#fb923c",
  },
  katai: {
    bg: "linear-gradient(135deg, #2e1065 0%, #3b0764 100%)",
    border: "rgba(167,139,250,0.35)",
    glow: "rgba(167,139,250,0.15)",
    textColor: "#a78bfa",
  },
};

const DEFAULT_CONFIG = {
  bg: "linear-gradient(135deg, #052e16 0%, #064e3b 100%)",
  border: "rgba(52,211,153,0.25)",
  glow: "rgba(52,211,153,0.1)",
  textColor: "#34d399",
};

/**
 * ProjectIcon
 * @param {string} projectId  - matches key in PROJECT_ICON_CONFIG
 * @param {string} title      - project title (used for the letter)
 * @param {string} size       - "sm" | "md" | "lg" | "xl"
 * @param {string} className  - extra classes on the wrapper
 */
const ProjectIcon = ({ projectId, title, size = "md", className = "" }) => {
  const config = PROJECT_ICON_CONFIG[projectId?.toLowerCase()] ?? DEFAULT_CONFIG;
  const { bg, border, glow, textColor } = config;
  const letter = title?.charAt(0)?.toUpperCase() ?? "?";

  const sizeMap = {
    sm: { wrapper: "h-7 w-7", letter: "text-sm" },
    md: { wrapper: "h-9 w-9", letter: "text-base" },
    lg: { wrapper: "h-12 w-12", letter: "text-xl" },
    xl: { wrapper: "h-11 w-11", letter: "text-lg" },
  };

  const s = sizeMap[size] ?? sizeMap.md;

  return (
    <div
      className={`shrink-0 flex items-center justify-center rounded-xl overflow-hidden shadow-md ${s.wrapper} ${className}`}
      style={{
        background: bg,
        border: `1px solid ${border}`,
        boxShadow: `0 0 12px ${glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}
    >
      <span
        className={`font-bold font-mono leading-none select-none ${s.letter}`}
        style={{ color: textColor }}
      >
        {letter}
      </span>
    </div>
  );
};

export default ProjectIcon;
