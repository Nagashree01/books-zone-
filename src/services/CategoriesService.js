import axios from "axios";

export const getCategoriesService = async () =>
  await axios.get("/api/categories");
