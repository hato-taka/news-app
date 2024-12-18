import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

const client = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
    country: "us",
    // language: "ja",
  },
});

export const fetchTopHeadlines = async () => {
  try {
    const response = await client.get("/top-headlines");
    return response.data.articles;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const func = async() => {
    const res = await fetchTopHeadlines()
    console.log(res)
    return res
}

console.log(func())