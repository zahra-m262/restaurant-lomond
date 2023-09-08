import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const fetchFoods = createAsyncThunk("foods/fetchFoods", async () => {
  try {
    const response = await axios.get("http://localhost:9000/foods");
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFoods.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchFoods.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "completed";
    },
    [fetchFoods.rejected]: (state, action) => {
      state.status = "faild";
    },
  },
});

export default foodsSlice.reducer;
