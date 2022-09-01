import axios from "axios";
import auth from "../../Auth/Firebase/Firebase.init";
import { BASE_API } from "../../config";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const fetchAllTasks = createAsyncThunk(
  "allTasks/fetchAllTasks",
  async () => {
    const res = await axios.get(
      `${BASE_API}/getJobTask?email=${auth?.currentUser?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return res.data;
  }
);
const allTaskslice = createSlice({
  name: "allTasks",
  initialState: {
    isLoading: false,
    allTasks: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allTasks = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.allTasks = [];
      state.error = action.error.message;
    });
  },
});
export default allTaskslice.reducer;
