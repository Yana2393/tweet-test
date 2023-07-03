import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://64a070e1ed3c41bdd7a74cb1.mockapi.io";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, thunkAPI) => {
    try {
        const { data } = await axios.get("/users")
        return data
        
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
    
});

export const fetchTweets = createAsyncThunk("tweets/fetchTweets", async (id, thunkAPI) => {
    try {
        const { data } = await axios.get(`/users/${id}/tweets`)
        return data
        
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
    
});

export const updateUsers = createAsyncThunk("users/updateUsers", async (user, thunkAPI) => {
    try {
        const { data } = await axios.put(`/users/${user.id}`, user)
        return data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
});
