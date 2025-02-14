const API_URL = "http://127.0.0.1:8000/auth";

export async function registerUser(
  username: string,
  email: string,
  password: string
) {
  const res = await fetch(`${API_URL}/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  if (!res.ok) throw new Error("Ошибка регистрации");
  return res.json();
}

export async function loginUser(username: string, password: string) {
  const res = await fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Неверные учетные данные");
  return res.json();
}

export async function getUser(token: string) {
  const res = await fetch("http://127.0.0.1:8000/auth/me/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Не удалось загрузить пользователя");
  return res.json();
}
