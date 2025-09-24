import axios from 'axios';
// const API_BASE = 'http://localhost:8080';

const API_BASE="https://product-explore-data.onrender.com"

export const fetchNavigation = async () => (await axios.get(`${API_BASE}/navigation`)).data;
export const fetchCategoriesByNavigationSlug = async (slug: string) => (await axios.get(`${API_BASE}/category/${slug}`)).data;
export const fetchProductsByCategoryId = async (categoryId: string) => (await axios.get(`${API_BASE}/product?categoryId=${categoryId}`)).data;
export const fetchProductDetail = async (id: string) => (await axios.get(`${API_BASE}/product/${id}`)).data;
export const fetchProducts = async () => (await axios.get(`${API_BASE}/product`)).data;

export const saveViewHistory = async (productIds: string[]) => {
  return (await axios.get(`${API_BASE}/view-history`)).data;
};

export const startScrapeJob = async (url: string) => {
  return (await axios.post(`${API_BASE}/scrape`, { url })).data;
};
