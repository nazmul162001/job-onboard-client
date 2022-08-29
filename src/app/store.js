import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "../Features/Blogs/BlogSlice";

const store = configureStore({
  reducer: {
    blogs: BlogReducer,
  },
});

export default store;
