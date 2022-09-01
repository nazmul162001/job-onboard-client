import axios from "axios";
import auth from "../../Auth/Firebase/Firebase.init";
import { BASE_API } from "../../config";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const fetchHrChart = createAsyncThunk("hrChartData/fetchHrChart", async () => {
  const res = await axios.get(`${BASE_API}/userEmployees?email=${auth?.currentUser?.email}`,{
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return res.data;
});
const hrChartSlice = createSlice({
  name: "hrChartData",
  initialState: {
    isLoading: false,
    charts: [],
    error: null,
  },
  extraReducers: (builder) => {
    // if data is Loading 
    builder.addCase(fetchHrChart.pending, (state) => {
      state.isLoading = true;
    });
    // get data 
    builder.addCase(fetchHrChart.fulfilled, (state,action) => {
      state.isLoading = false;
      state.charts = action.payload
      state.error = null
    });
    // if get error 
    builder.addCase(fetchHrChart.rejected, (state,action) => {
        state.isLoading = false;
        state.charts = []
        state.error = action.error.message
    });
  },
});
export default hrChartSlice.reducer