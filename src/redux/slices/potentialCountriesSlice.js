import { createSlice } from "@reduxjs/toolkit";

export const potentialCountriesSlice = createSlice({
  name: "potentialCountries",
  initialState: {
    value: [
      {
        name: {
          common: "America",
        },
      },
    ],
  },
  reducers: {
    setPotentialCountries: (state, action) => {
      state.value = action.payload;
    },
    deletePotentialCountries: (state) => {
      state.value = null;
    },
  },
});

export const { setPotentialCountries, deletePotentialCountires } =
  potentialCountriesSlice.actions;
export const selectedPotentials = (state) => state.potentialCountries.value;
const potentialCountriesReducer = potentialCountriesSlice.reducer;
export default potentialCountriesReducer;
