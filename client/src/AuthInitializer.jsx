import { useEffect } from "react";
import { getUserData } from "./modules/auth/services/auth.service";
import {
  setLoading,
  setSuccess,
  setUserData,
} from "./modules/auth/store/auth.slice";
import { useAppDispatch } from "./store/hooks";

const AuthInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      dispatch(setLoading());

      try {
        const data = await getUserData();

        if (data.success) {
          dispatch(setUserData(data.user));
          dispatch(setSuccess());
        } else {
          dispatch(setUserData(null));
          dispatch(setSuccess());
        }
      } catch (error) {
        dispatch(setUserData(null));
        dispatch(setSuccess());
      }
    };

    checkAuth();
  }, [dispatch]);

  return null;
};

export default AuthInitializer;
