import { Button } from '@/components/ui/button';
import { CutOffDate } from '@/components/custom/CutOffDate';
import CardIcon from '@/assets/svg/cardIcon.svg?react';
import { format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import { parseISO } from 'date-fns';
import type { Event } from '@/types/IData';

type EventPick = Pick<Event, 'rfpName' | 'agreement_type' | 'cutOffDate'>;

export interface RfpCardProps extends EventPick {
  checkInDate: string;
  checkOutDate: string;
  bookingsCount: number;
  onViewBookings?: () => void;
}

export function RfpCard({
  rfpName,
  agreement_type,
  checkInDate,
  checkOutDate,
  cutOffDate,
  bookingsCount,
  onViewBookings,
}: RfpCardProps) {
  const formattedCheckInDate = checkInDate ? format(parseISO(checkInDate), 'MMM d') : '';
  const formattedCheckOutDate = checkOutDate ? format(parseISO(checkOutDate), 'MMM d') : '';
  const year = checkOutDate ? parseISO(checkOutDate).getFullYear() : '';
  const cutOffDateParsed = parseISO(cutOffDate);

  return (
    <article className="w-full min-w-2xs sm:min-w-sm basis-96 p-4 border border-slate-150 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="font-bold text-base text-ellipsis leading-24 text-neutral-850">{rfpName}</p>
          <p className="text-neutral-550 text-sm font-medium leading-20">
            Agreement: <span className="font-extrabold">{agreement_type}</span>
          </p>
        </div>
        <div>
          <CutOffDate date={cutOffDateParsed} text="Cut-Off Date" />
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
