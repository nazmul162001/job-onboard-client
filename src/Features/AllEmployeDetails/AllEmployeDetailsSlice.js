import axios from "axios";
import auth from "../../Auth/Firebase/Firebase.init";
import { BASE_API } from "../../config";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const fetchAllEmployeDetails = createAsyncThunk(
  "allEmployeDetails/fetchAllEmployeDetails",
  async () => {
    const res = await axios.get(
      `${BASE_API}/userEmployees?email=${auth?.currentUser?.email}`,
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
const allEmployeDetailslice = createSlice({
  name: "allEmployeDetails",
  initialState: {
    isLoading: false,
    allEmployeDetails: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllEmployeDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllEmployeDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allEmployeDetails = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllEmployeDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.allEmployeDetails = [];
      state.error = action.error.message;
    });
  },
});
export default allEmployeDetailslice.reducer;
