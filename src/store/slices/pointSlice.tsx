import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateProps {
  points: number;
}

const initialState: InitialStateProps = {
  points: 0
};

const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    addPoints(state, action: PayloadAction<number>) {
      state.points += action.payload;  // Add to the current coins value
    },
  },
});

export const { addPoints } = pointsSlice.actions;
export default pointsSlice.reducer;