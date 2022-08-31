import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "../Features/Blogs/BlogSlice";
import HrChartReducer from "../Features/HrChart/HrChartSlice";
import HrJobsReducer from "../Features/HrJobs/HrJobsSlice";

const store = configureStore({
  reducer: {
    blogs: BlogReducer,
    charts: HrChartReducer,
    hrJobs: HrJobsReducer,
  },
});

export default store;
