import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    text: "",
    flag: false,
  },
  reducers: {
    additional: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.count += action.payload;
    },
    subtraction: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.count -= action.payload;
    },
    addText: (state, action) => {
      state.text = action.payload;
    },
    setFlag: (state, action) => {
      state.flag = action.payload;
    }
  },
});

export const { additional, subtraction, addText } = counterSlice.actions;
export default counterSlice.reducer;