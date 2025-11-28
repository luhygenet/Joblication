"use client";

import { signOut, useSession } from "next-auth/react";

import React, { useEffect, useState } from "react";
interface BackendUser {
  id: string;
  name: string;
  email: string;
  profileComplete: boolean;
  profilePicUrl: string;
  profileStatus: string;
  role: string;
  accessToken: string;
  refreshToken: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: BackendUser; // <- your actual user object
  errors: any; // optional, depends on your API
  count: number;
}

const useUnifiedAuth = () => {
  const { data: nextauthsession } = useSession();
  const [backendUser, setBackendUser] = useState<BackendUser | null>(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setBackendUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.warn("Failed to parse stored user", err);
      localStorage.removeItem("user");
    }
  }, []);

  const isLoggedin = !!nextauthsession || !!backendUser;
  console.log(isLoggedin);

  const user = nextauthsession?.user || backendUser;
  console.log("the current user", user);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    if (nextauthsession) signOut({ redirect: false });

    setBackendUser(null);
  };

  const logInBackendUser = (response: ApiResponse) => {
    const userData = response.data;
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("accessToken", userData.accessToken);
    localStorage.setItem("refreshToken", userData.refreshToken);

    setBackendUser(userData);
    console.log("here was it not set?", userData);
  };

  const setpendingEmail = (email: string) => {
    localStorage.setItem("pendingEmail", email);
  };

  return { logInBackendUser, isLoggedin, logout, user, setpendingEmail };
};
export default useUnifiedAuth;
