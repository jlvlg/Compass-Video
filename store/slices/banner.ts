import { DetailedMedia, Media } from "./../../util/model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tmdb from "@/util/tmdb";

const initialState: {
  media?: DetailedMedia;
} = {
  media: undefined,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    update: (state, { payload }) => {
      state.media = payload;
    },
  },
});

export const actions = { ...bannerSlice.actions };
export const reducer = bannerSlice.reducer;
