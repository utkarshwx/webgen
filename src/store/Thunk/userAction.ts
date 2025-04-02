import { createAsyncThunk } from "@reduxjs/toolkit";
import { Subscription, userActions } from "../user-slice";
import { Axios } from "axios";

interface FetchUserParams {
    axiosPrivate: Axios;
}

interface UpdateUserParams {
    axiosPrivate: Axios;
    userData:FormData;
}

interface UpdateSubscriptionParams {
    axiosPrivate: Axios;
    subscriptionData: Partial<Subscription>;
}

// Fetch user profile
const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async ({ axiosPrivate }: FetchUserParams, { dispatch }) => {
        try {
            dispatch(userActions.setLoading(true));
            const response = await axiosPrivate.put('api/v1/user/update');
            dispatch(userActions.setUser(response.data.data));
        } catch (error: any) {
            dispatch(userActions.setError(error.response?.data?.message || 'Failed to fetch user data'));
            console.error('Fetching user data failed:', error);
        }
    }
);

// Update user profile
const updateUser = createAsyncThunk(
    'user/updateUser',
    async ({ axiosPrivate, userData }: UpdateUserParams, { dispatch }) => {
        try {
            const response = await axiosPrivate.put('api/v1/user/update', userData,{ headers: { 
                'Content-Type': 'multipart/form-data',
                }});
            dispatch(userActions.updateUser(response.data.data));
        } catch (error: any) {
            dispatch(userActions.setError(error.response?.data?.message || 'Failed to update user data'));
            console.error('Updating user data failed:', error);
        }
    }
);

// Update subscription
const updateSubscription = createAsyncThunk(
    'user/updateSubscription',
    async ({ axiosPrivate, subscriptionData }: UpdateSubscriptionParams, { dispatch }) => {
        try {
            const response = await axiosPrivate.patch('api/v1/user/subscription', subscriptionData);
            dispatch(userActions.updateSubscription(response.data.data.subscription));
        } catch (error: any) {
            dispatch(userActions.setError(error.response?.data?.message || 'Failed to update subscription'));
            console.error('Updating subscription failed:', error);
        }
    }
);

// Update credits
const updateCredits = createAsyncThunk(
    'user/updateCredits',
    async ({ axiosPrivate }: FetchUserParams, { dispatch }) => {
        try {
            const response = await axiosPrivate.get('api/v1/user/credits');
            dispatch(userActions.updateCredits(response.data.data.creditsRemaining));
        } catch (error: any) {
            dispatch(userActions.setError(error.response?.data?.message || 'Failed to update credits'));
            console.error('Updating credits failed:', error);
        }
    }
);

export { fetchUser, updateUser, updateSubscription, updateCredits };