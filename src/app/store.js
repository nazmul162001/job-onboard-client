import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "../Features/Blogs/BlogSlice";
import HrChartReducer from "../Features/HrChart/HrChartSlice";
import HrJobsSlice from "../Features/HrJobs/HrJobsSlice";

const store = configureStore({
  reducer: {
    blogs: BlogReducer,
    charts: HrChartReducer,
    hrJobs: HrJobsSlice,
  },
});

export default store;
