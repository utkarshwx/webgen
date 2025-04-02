import axios from "../api/axios";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { authActions } from "../store/auth-slice";
import { NavigateFunction } from "react-router-dom";

export interface FormStateLogin {
  error?: string;
  data: {
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
}

export const login = async (_prevData: FormStateLogin,formData: FormData,dispatch: Dispatch<UnknownAction>,navigate: NavigateFunction):Promise<FormStateLogin> => {
    const email=formData.get('email')
    const password=formData.get('password')
    if(email===null || password===null){
      return { 
        error: "Email and password are required", 
        data: {
          email: email?.toString(),
          password: password?.toString()
        } 
      };
    }
    try {
      const response = await axios.post("api/v1/auth/signin",{email,password});
      const res = response.data;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("rtoken", res.data.rtoken);
      dispatch(authActions.login({token:res.data.token, rtoken:res.data.rtoken}));
      navigate("/");
      return { error: undefined, data: {} };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : (error as { response?: { data?: { error?: { message: string } } } })?.response?.data?.error?.message || "Failed to login";
      return { error:errorMessage, data: { email: email?.toString(), password: password?.toString() } };
    }
  };

export const register = async (_prevData: FormStateLogin,formData: FormData,dispatch: Dispatch<UnknownAction>,navigate: NavigateFunction):Promise<FormStateLogin> => {
      const email=formData.get('email')
      const password=formData.get('password')
      const confirmPassword=formData.get('confirmPassword')
      if (password !== confirmPassword) {
        return { 
          error: "Passwords do not match", 
          data: {
            email: email?.toString(),
            password: password?.toString(),
            confirmPassword: confirmPassword?.toString()
          } 
        };
      }
      axios.post("api/v1/auth/signup",{email,password})
      .then((response) => {
        const res=response.data
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("rtoken", res.data.rtoken);
        dispatch(authActions.login({token:res.data.token, rtoken:res.data.rtoken}));
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data);
      })
      return { error: undefined, data: {}}
    };
