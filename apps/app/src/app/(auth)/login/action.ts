"use server";

import { apiClient } from "@/lib/api";

export async function loginUserAction(_: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return {
      success: false,
      message: "Email and password are required",
    };
  }

  const { data } = await apiClient.auth.login.post(
    {
      email,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return {
    success: true,
    message: "Login success",
    data: data,
  };
}
