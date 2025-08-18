interface SeparatorProps {
  text: string;
  variant: 'teal' | 'indigo';
}

export const Separator = ({ text, variant }: SeparatorProps) => {
  const variantBadge = {
    teal: 'bg-teal-light border-teal-accent text-teal-accent',
    indigo: 'bg-indigo-light border-indigo-accent text-indigo-accent',
  };

  const variantLine = {
    teal: 'to-teal-accent',
    indigo: 'to-indigo-accent',
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
