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
