import axios from "axios";
import auth from "../../Auth/Firebase/Firebase.init";
import { BASE_API } from "../../config";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const fetchAppliedJobs = createAsyncThunk(
  "appliedJobs/fetchAppliedJobs",
  async () => {
    const res = await axios.get(
      `${BASE_API}/applicants/applied?email=${auth?.currentUser?.email}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return res.data;
  }
);
const appliedJobSlice = createSlice({
  name: "appliedJobs",
  initialState: {
    isLoading: false,
    appliedJobs: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAppliedJobs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAppliedJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.appliedJobs = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAppliedJobs.rejected, (state, action) => {
      state.isLoading = false;
      state.appliedJobs = [];
      state.error = action.error.message;
    });
  },
});
export default appliedJobSlice.reducer;
