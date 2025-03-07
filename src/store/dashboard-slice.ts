import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Reuse the Image type from the provided code
export interface Image {
  metadata: {
    type: string;
    prompt: string;
    style: string;
    colorScheme: string[];
    aspectRatio: string;
  };
  _id: string;
  url: string;
  publicId: string;
  user: string;
  generatedAt: string;
  __v: number;
}

// Define types for each section of the dashboard state
interface StatCard {
  title: string;
  value: string;
  percentageChange: string;
  color?: string; // Optional color property
}

interface DataPoint {
  name: string;
  value: number;
}

// Define the overall dashboard state interface
interface DashboardState {
  startcarddata: StatCard[];
  cardData: Image[];
  generationHistory: DataPoint[];
  popularCategories: DataPoint[];
}

// Initial state with placeholder data
const initialState: DashboardState = {
  // Placeholder for Stat Cards
  startcarddata: [
    { title: "Images Generated", value: "0", percentageChange: "0+" },
    { title: "API Credits", value: "0", percentageChange: "free", color: "green" },
    { title: "Projects", value: "0", percentageChange: "active", color: "red" },
    { title: "Storage Use", value: "0MB", percentageChange: "0%", color: "yellow" },
  ],

  // Placeholder for Image Cards
  cardData: [
    {
      metadata: {
        type: "Placeholder",
        prompt: "Placeholder Prompt",
        style: "Placeholder Style",
        colorScheme: ["#FFFFFF"],
        aspectRatio: "16:9",
      },
      _id: "1",
      url: "https://res.cloudinary.com/dkon1kh9h/image/upload/v1740335123/6794be25f9eeb88fc50858f8/67ba1981a51ede1ae26f7fe2/xd95qhkrra1llu66brrn.jpg",
      publicId: "placeholder_1",
      user: "user_1",
      generatedAt: "2023-10-01T00:00:00Z",
      __v: 0,
    },
    {
      metadata: {
        type: "Placeholder",
        prompt: "Placeholder Prompt",
        style: "Placeholder Style",
        colorScheme: ["#FFFFFF"],
        aspectRatio: "16:9",
      },
      _id: "2",
      url: "https://res.cloudinary.com/dkon1kh9h/image/upload/v1740335123/6794be25f9eeb88fc50858f8/67ba1981a51ede1ae26f7fe2/xd95qhkrra1llu66brrn.jpg",
      publicId: "placeholder_2",
      user: "user_2",
      generatedAt: "2023-10-02T00:00:00Z",
      __v: 0,
    },
  ],

  // Placeholder for Generation History
  generationHistory: [
    { name: "Mon", value: 0 },
    { name: "Tue", value: 0 },
    { name: "Wed", value: 0 },
  ],

  // Placeholder for Popular Categories
  popularCategories: [
    { name: "Header", value: 0 },
    { name: "Card", value: 0 },
    { name: "Profile", value: 0 },
  ],
};

// Create the dashboard slice
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    // Reducer to update startcarddata
    updateStartCardData(state, action: PayloadAction<StatCard[]>) {
      state.startcarddata = action.payload;
    },
    // Reducer to update cardData
    updateCardData(state, action: PayloadAction<Image[]>) {
      state.cardData = action.payload;
    },
    // Reducer to update generationHistory
    updateGenerationHistory(state, action: PayloadAction<DataPoint[]>) {
      state.generationHistory = action.payload;
    },
    // Reducer to update popularCategories
    updatePopularCategories(state, action: PayloadAction<DataPoint[]>) {
      state.popularCategories = action.payload;
    },
  },
});

// Export actions and reducer
export const dashboardAction = dashboardSlice.actions;
export default dashboardSlice.reducer;