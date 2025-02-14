"use client";
import { useState } from "react";
import { loginUser, getUser } from "@/utils/api";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const data = await loginUser(username, password);
      const user = await getUser(data.access);
      login(data.access, user);
      router.push("/dashboard");
    } catch (error) {
      alert("Ошибка входа");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Вход</h1>
      <input className="text-black p-2 border" placeholder="Логин" onChange={(e) => setUsername(e.target.value)} />
      <input className="text-black p-2 border mt-2" type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
      <button className="mt-4 p-2 bg-blue-500 text-white" onClick={handleLogin}>Войти</button>
    </div>
  );
}
