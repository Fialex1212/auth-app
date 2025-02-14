"use client";
import { useState } from "react";
import { registerUser } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await registerUser(username, email, password);
      router.push("/login");
    } catch (error) {
      alert("Ошибка регистрации");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Регистрация</h1>
      <input className="p-2 border" placeholder="Логин" onChange={(e) => setUsername(e.target.value)} />
      <input className="p-2 border mt-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="p-2 border mt-2" type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
      <button className="mt-4 p-2 bg-green-500 text-white" onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  );
}
