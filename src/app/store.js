import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "../Features/Blogs/BlogSlice";
import HrChartReducer from "../Features/HrChart/HrChartSlice";

const store = configureStore({
  reducer: {
    blogs: BlogReducer,
    charts: HrChartReducer,
  },
});

export default store;
