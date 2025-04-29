// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const fetchItems = async (params) => {
  const { data, headers } = await api.get("/ports", { params });

  return { data, count: parseInt(headers["x-total-count"], 10) };
};
export const fetchItemsById = async (id) => {
  const { data } = await api.get(`/ports/${id}`);
  return data;
};

export const createItem = async (item) => {
  const { data } = await api.post("/ports", item);
  return data;
};

export const updateItem = async (id, item) => {
  const { data } = await api.put(`/ports/${id}`, item);
  return data;
};

export const deleteItem = async (id) => {
  try {
    const { data } = await api.delete(`/ports/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default api;
