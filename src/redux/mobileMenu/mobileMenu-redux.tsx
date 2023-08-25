import { createSlice } from "@reduxjs/toolkit";

type MobileMenuType = {
  isOpend: boolean;
};

const mobileMenuSlice = createSlice({
  name: "user",
  initialState: {
    isOpend: false,
  },
  reducers: {
    toggleMobileMenu: {
      reducer(state: MobileMenuType, { payload }: { payload: boolean }) {
        state.isOpend = payload;
      },
      prepare(state: boolean) {
        return {
          payload: state,
        };
      },
    },
  },
});

export const { toggleMobileMenu } = mobileMenuSlice.actions;
export const mobileMenuReducer = mobileMenuSlice.reducer;
