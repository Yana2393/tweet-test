import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, updateUsers } from "./oprations";

const usersInitialState = {
  users: [],
  isLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    [updateUsers.pending]: (state) => { 
      state.isLoading = true;
    },
    [updateUsers.fulfilled]: (state, action) => { 
      const newUsers = state.users.map(user => {
        if (user.id === action.payload.id) {
          user = action.payload;
        }
        return {...user};
      });
      state.users = newUsers;
      state.isLoading = false;
    }
  },
});

export const usersReducer = usersSlice.reducer;
