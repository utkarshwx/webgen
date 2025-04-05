import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RateLimits {
    dailyLimit: number;
    concurrentRequests: number;
}

export interface Subscription {
    rateLimits: RateLimits;
    tier: string;
    creditsRemaining: number;
    isActive: boolean;
    _id: string;
    startDate: string;
}

export interface User {
    _id: string;
    email: string;
    apiKey: string;
    subscription: Subscription;
    createdAt: string;
    __v: number;
    organization: string;
    profileImage: string;
    role: string;
    name: string;
}

interface UserState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    loading: true,
    error: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUser(state, action: PayloadAction<Partial<User>>) {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        },
        updateSubscription(state, action: PayloadAction<Partial<Subscription>>) {
            if (state.user?.subscription) {
                state.user.subscription = { ...state.user.subscription, ...action.payload };
            }
        },
        updateCredits(state, action: PayloadAction<number>) {
            if (state.user?.subscription) {
                state.user.subscription.creditsRemaining = action.payload;
            }
        },
        clearUser(state) {
            state.user = null;
            state.loading = false;
            state.error = null;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },
        updateApiKey(state, action: PayloadAction<string>) {
            if (state.user) {
                state.user.apiKey = action.payload;
            }
        },
    }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;