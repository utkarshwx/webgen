import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import {dashboardAction} from "../dashboard-slice";

// Define the type for the parameters passed to the thunk
interface FetchDashboardParams {
  axiosPrivate: AxiosInstance; // Axios instance for private requests
  page:number;
}

// Create the async thunk for fetching dashboard data
export const fetchDashboardImageData = createAsyncThunk(
  "dashboard/fetchDashboardImageData",
  async ({ axiosPrivate, page = 1 }: FetchDashboardParams, { dispatch }) => {
    try {
      const params: any = {};
      if (page) params.page = page;
      // Make the API call to fetch dashboard data
      const response1 = await axiosPrivate.get("/api/v1/dashboard",{params});
      const cardData = response1.data;
      dispatch(dashboardAction.updateCardData(cardData));
      const response2 = await axiosPrivate.get("/api/v1/dashboard/storage");
      const startcarddata=response2.data;
      dispatch(dashboardAction.updateStartCardData(startcarddata));
      const response3 = await axiosPrivate.get("/api/v1/dashboard/stats");
      const generationHistory=response3.data.generationHistory;
      const popularCategories=response3.data.popularCategories;
      // Dispatch actions to update the dashboard state
      dispatch(dashboardAction.updateGenerationHistory(generationHistory));
      dispatch(dashboardAction.updatePopularCategories(popularCategories));
    } catch (error: any) {
      console.error("Fetching dashboard data failed:", error?.message);
      //throw error; // Re-throw the error to handle it in the component if needed
    }
  }
);