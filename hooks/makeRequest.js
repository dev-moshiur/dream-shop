import axios from "axios";

export const makeRequest = axios.create({
  baseURL: 'https://dream-shop-123.onrender.com/api/',
  headers: {
    Authorization: "bearer " + `b353154327b77a43e981326b580c352cfa5dcf055e4edc68ef7e6b0334f20dc356ad9c902935a09a0b7103527c0e2598bc06e96c4a74fa6058c284b0785095d9528b960079e65c5bdf87d8761462569c27e9009fca0eecede9e26bb3e5164e7935e5c1a4f9adfea2c44abd3ea8abd318adac6e5a769c67d3c93c660e74ad4f05`,
  },
});