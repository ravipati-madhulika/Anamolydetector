import axios from "axios";

export const api = axios.create({
<<<<<<< HEAD
  baseURL: process.env.Next_public_url || "http://localhost:8000",
});
=======
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
console.log("API BASE URL =", process.env.NEXT_PUBLIC_API_URL);
>>>>>>> 858ccf2b568952ec8950d55af1c561aab0079db0
