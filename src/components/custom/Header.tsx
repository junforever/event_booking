interface HeaderProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export const Header = ({ title, className, children }: HeaderProps) => {
  return (
    <header className={`flex flex-col gap-y-8 ${className}`}>
      <h1 className="text-3xl sm:text-32 text-neutral-850 font-semibold leading-32">{title}</h1>
      <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">{children}</div>
    </header>
  );
};
