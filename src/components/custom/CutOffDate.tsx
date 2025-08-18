interface CutOffDateProps {
  date: Date;
  text: string;
}
export const CutOffDate = ({ date, text }: CutOffDateProps) => {
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();

  return (
    <div className={'flex flex-col items-center ml-20 gap-y-1'} aria-hidden>
      <div className="flex flex-col items-center rounded-lg border w-14 overflow-hidden">
        <div className="bg-electric-blue-gradient text-center w-full flex items-center justify-center py-0.5 px-2.5 self-stretch">
          <span className="text-xs font-semibold tracking-1 text-blue-450 leading-12 uppercase">
            {month}
          </span>
        </div>
        <div className="flex items-center justify-center py-1 px-2.5 self-stretch bg-soft-blue-gradient">
          <span className="text-26 leading-24 font-bold text-blue-450">{day}</span>
        </div>
      </div>
      <div className="flex items-center justify-center self-stretch">
        <span className="text-xs font-medium text-slate-450">{text}</span>
      </div>
    </div>
  );
};
