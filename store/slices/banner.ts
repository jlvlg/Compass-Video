import { DetailedMedia } from "./../../util/model";
import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit";
import { StartListening } from "..";

const initialState: {
  media?: DetailedMedia;
} = {
  media: undefined,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    update: (state, { payload }: { payload: DetailedMedia }) => ({
      media: payload,
    }),
  },
});

export const actions = bannerSlice.actions;
export const reducer = bannerSlice.reducer;
