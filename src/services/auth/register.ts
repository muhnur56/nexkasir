import { supabase } from "@/src/lib/supabase";
import { RegisterUserData } from "./types";

export async function registerUser(data: RegisterUserData) {
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        owner_name: data.ownerName,
        store_name: data.storeName,
      },
    },
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Pendaftaran berhasil. Silakan cek email Anda.",
  };
}