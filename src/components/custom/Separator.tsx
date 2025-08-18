interface SeparatorProps {
  text: string;
  variant: 'teal' | 'indigo';
}

export const Separator = ({ text, variant }: SeparatorProps) => {
  const variantBadge = {
    teal: 'bg-emerald-25 border-teal-450 text-teal-450',
    indigo: 'bg-purple-50 border-violet-650 text-violet-650',
  };

  const variantLine = {
    teal: 'to-teal-450',
    indigo: 'to-violet-650',
  };

  return (
    <div className="flex items-center gap-5">
      <div
        className={`flex-1 h-px bg-gradient-to-r from-transparent ${variantLine[variant]}`}
      ></div>

      <div
        className={`px-2 py-1.5 rounded border text-sm font-bold text-center ${variantBadge[variant]}`}
      >
        {text}
      </div>

      <div
        className={`flex-1 h-px bg-gradient-to-l from-transparent ${variantLine[variant]}`}
      ></div>
    </div>
  );
};
