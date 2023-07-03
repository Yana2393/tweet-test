import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets } from "./oprations";

const tweetsInitialState = {
  tweets: [],
  isLoading: false,
};

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: tweetsInitialState,
  extraReducers: {
    [fetchTweets.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTweets.fulfilled]: (state, action) => {
      state.tweets = action.payload;
      state.isLoading = false;
    },
  },
});

export const tweetsReduser = tweetsSlice.reducer;
