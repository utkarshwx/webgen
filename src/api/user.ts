import { Axios } from "axios";
import { AppDispatch } from "../store";
import { updateUser } from "../store/Thunk/userAction";

export interface FormStateUser {
    message?: string;
    prevValue?: {
      name: string | null;
      email: string | null;
      organization: string | null;
      role: string | null;
      preferences: {
        emailNotifications: boolean;
        weeklyReports: boolean;
        marketing: boolean;
      };
    };
    success?: boolean;
    error?: {
        code: string;
        message: string;
        details?: string;
    };
  }
  
  export const handleFormSubmitUser = async (
    _state: FormStateUser | undefined, 
    formData: FormData,
    dispatch: AppDispatch,
    axiosPrivate: Axios
  ): Promise<FormStateUser> => {
    try {
      const emailNotifications = formData.get('preferences.emailNotifications') === 'on';
      const weeklyReports = formData.get('preferences.weeklyReports') === 'on';
      const marketing = formData.get('preferences.marketing') === 'on';
      const preferences = { emailNotifications, weeklyReports, marketing };
  
      // Create a new FormData object for the API request
      const apiFormData = new FormData();
      apiFormData.append('name', formData.get('name') as string);
      apiFormData.append('email', formData.get('email') as string);
      apiFormData.append('organization', formData.get('organization') as string);
      apiFormData.append('role', formData.get('role') as string);
      apiFormData.append('preferences', JSON.stringify(preferences));
  
      const image = formData.get('image') as File;
      if (image && image.size > 0) {
        apiFormData.append('image', image);
      }
  
      await dispatch(updateUser({ axiosPrivate, userData: apiFormData }));
  
      return {
        success: true,
        error: undefined,
        message: 'Profile updated successfully',
        prevValue: {
          name: formData.get('name')?.toString() || null,
          email: formData.get('email')?.toString() || null,
          organization: formData.get('organization')?.toString() || null,
          role: formData.get('role')?.toString() || null,
          preferences
        }
      };
    } catch (error: any) {
      console.error('Profile update failed:', error);
  
      const serverErrors = error.response?.data?.errors || {};
      const errorMessage = error.response?.data?.message || 'Failed to update profile';
  
      return {
        success: false,
        error: {
          code: error.response?.status?.toString() || '500',
          message: 'User update failed',
          details: error instanceof Error ? error.message : 'Unknown error'
        },
        message: Object.keys(serverErrors).length > 0 
          ? 'Please fix the form errors' 
          : errorMessage,
        prevValue: {
          name: formData.get('name')?.toString() || null,
          email: formData.get('email')?.toString() || null,
          organization: formData.get('organization')?.toString() || null,
          role: formData.get('role')?.toString() || null,
          preferences: { emailNotifications: false, weeklyReports: false, marketing: false }
        }
      };
    }
  };