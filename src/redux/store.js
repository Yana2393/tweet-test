import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './userSlice';
import { tweetsReduser } from './tweetsSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        tweets: tweetsReduser,
    },
});
