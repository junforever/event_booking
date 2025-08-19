import { Button } from '@/components/ui/button';
import { CutOffDate } from '@/components/custom/CutOffDate';
import CardIcon from '@/assets/svg/cardIcon.svg?react';
import { format } from 'date-fns';
import { CalendarDays } from 'lucide-react';

export interface RfpCardProps {
  rfpName: string;
  agreement: string;
  checkInDate: Date | string;
  checkOutDate: Date | string;
  cutOffDate: Date;
  bookingsCount: number;
  onViewBookings?: () => void;
}

export function RfpCard({
  rfpName,
  agreement,
  checkInDate,
  checkOutDate,
  cutOffDate,
  bookingsCount,
  onViewBookings,
}: RfpCardProps) {
  const formattedCheckInDate = checkInDate instanceof Date ? format(checkInDate, 'MMM d') : '';
  const formattedCheckOutDate = checkOutDate instanceof Date ? format(checkOutDate, 'MMM d') : '';
  const year = checkOutDate instanceof Date ? checkOutDate.getFullYear() : '';

  return (
    <article className="w-full max-w-sm p-4 border border-slate-150 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="font-bold text-base text-ellipsis leading-24 text-neutral-850">{rfpName}</p>
          <p className="text-neutral-550 text-sm font-medium leading-20">
            Agreement: <span className="font-extrabold">{agreement}</span>
          </p>
        </div>
        <div>
          <CutOffDate date={cutOffDate} text="Cut-Off Date" />
        </div>
      </div>
      <div className="flex items-center gap-x-1 text-slate-450 mt-3">
        <CalendarDays className="size-4" />
        <p className="text-xs font-normal leading-16">
          {formattedCheckInDate} - {formattedCheckOutDate}, {year}
        </p>
      </div>
      <div className="flex items-center mt-4 gap-x-2">
        <Button
          variant="outline"
          className="shadow-none bg-indigo-650 text-white hover:bg-indigo-800 hover:text-white rounded-sm grow"
          onClick={onViewBookings}
        >
          View Bookings ({bookingsCount})
        </Button>
        <Button
          variant="outline"
          className="shadow-none border-indigo-650 text-indigo-650 rounded-sm"
          onClick={onViewBookings}
        >
          <CardIcon className="size-6" />
        </Button>
      </div>
    </article>
  );
}
