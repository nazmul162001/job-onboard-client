import axios from "axios";
import auth from "../../Auth/Firebase/Firebase.init";
import { BASE_API } from "../../config";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const fetchHrJobs = createAsyncThunk("hrJobs/fetchHrJobs", async () => {
    const res = axios
        .get(`${BASE_API}/jobs/hrJobs?email=${auth?.currentUser?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
    return res.data
});
const hrJobslice = createSlice({
    name: "hrJobs",
    initialState: {
        isLoading: false,
        hrJobs: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHrJobs.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchHrJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hrJobs = action.payload
            state.error = null
        });

    },
});
export default hrJobslice.reducer