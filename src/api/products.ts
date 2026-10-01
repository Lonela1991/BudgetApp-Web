import { apiGet } from './client';
import type { Product } from '../types/product';

export const getProducts = () => apiGet<Product[]>('/api/Products');
