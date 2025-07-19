"use server";

import { apiClient } from "@/lib/api";

export async function registerUserAction(_: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    return {
      success: false,
      message: "Name, email and password are required",
    };
  }

  const { data } = await apiClient.auth.register.post(
    {
      name,
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
    message: "Register success",
    data: data,
  };
}
