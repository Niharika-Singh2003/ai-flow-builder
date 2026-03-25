import axios from 'axios';
import { API_ROUTES } from '../utils/constants';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const askAI = async (prompt) => {
  const { data } = await apiClient.post(API_ROUTES.ASK_AI, { prompt });
  return data.response;
};

export const saveFlow = async ({ prompt, response }) => {
  const { data } = await apiClient.post(API_ROUTES.HISTORY, { prompt, response });
  return data.data;
};

export const getHistory = async () => {
  const { data } = await apiClient.get(API_ROUTES.HISTORY);
  return data;
};
