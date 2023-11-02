import { createSlice } from "@reduxjs/toolkit";
import { getUser, saveUser } from "ts/local-storage/local-storage";

type UserState = {
  theme: string,
  lang: string
}

const user:UserState = getUser();

const initialState:UserState = {
  theme: user.theme,
  lang: user.lang,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    switchTheme: {
      reducer(state: UserState, { payload }: { payload: string }) {
        const newUser: UserState = {
          theme: payload,
          lang: state.lang
        };

        state.theme = newUser.theme;
        saveUser(newUser);
      },
      prepare(theme: string) {
        return {
          payload: theme,
        };
      },
    },
  },
});

export const { switchTheme } = userSlice.actions;
export const userReducer = userSlice.reducer;
