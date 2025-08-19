import { parseISO, isBefore, isAfter } from 'date-fns';
import data from '@/assets/data/combined_rooming_data.json';

type ProcessedData = {
  eventId: number;
  eventName: string;
  bookingsList: typeof data;
};

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

export function processData(): ProcessedData[] {
  const response: ProcessedData[] = [];

  const checked = new Set<number>();
  const uniqueEvents = data.filter(obj => {
    if (checked.has(obj.eventId)) return false;
    checked.add(obj.eventId);
    return true;
  });

  uniqueEvents.forEach(event => {
    const eventBookings = data.filter(item => item.eventId === event.eventId);

    response.push({
      eventId: event.eventId,
      eventName: event.eventName,
      bookingsList: eventBookings,
    });
  });

  return response;
}
