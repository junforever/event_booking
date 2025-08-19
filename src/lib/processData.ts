import { parseISO, isBefore, isAfter } from 'date-fns';
import type { Event } from '@/types/IData';

type Booking = {
  checkInDate: string;
  checkOutDate: string;
  [key: string]: string | number;
};

export function getBookingDateRange(bookings: Booking[]) {
  if (bookings.length === 0) return null;

  let minCheckIn = parseISO(bookings[0].checkInDate);
  let maxCheckOut = parseISO(bookings[0].checkOutDate);

  for (const booking of bookings) {
    const checkIn = parseISO(booking.checkInDate);
    const checkOut = parseISO(booking.checkOutDate);

    if (isBefore(checkIn, minCheckIn)) minCheckIn = checkIn;
    if (isAfter(checkOut, maxCheckOut)) maxCheckOut = checkOut;
  }

  return {
    minCheckIn: minCheckIn.toISOString().split('T')[0],
    maxCheckOut: maxCheckOut.toISOString().split('T')[0],
  };
}

export function getExistingStatus(data: Event[]) {
  const statusSet = new Set<string>();
  data.forEach(item => statusSet.add(item.status.toString()));
  const statusArray = Array.from(statusSet);
  return statusArray.map(item => ({ value: item.toLowerCase(), label: item }));
}
