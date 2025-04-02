import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "./useAxiosPrivate";
import { fetchUser } from "../store/Thunk/userAction";
import { AppDispatch, RootState } from "../store";

export default function useFetchUser() {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, error } = useSelector(
    (state: RootState) => state.userState
  );
  useEffect(() => {
    dispatch(fetchUser({ axiosPrivate }));
  }, [dispatch, axiosPrivate]);
  return { user, loading, error };
}
