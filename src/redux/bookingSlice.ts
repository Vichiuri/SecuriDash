import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Booking {
  protocolName: string;
  email: string;
  date: string;
  details: string;
}

interface BookingState {
  bookings: Booking[];
}

const initialState: BookingState = {
  bookings: []
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.bookings.push(action.payload);
    }
  }
});

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
