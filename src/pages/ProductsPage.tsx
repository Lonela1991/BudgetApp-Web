import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import type { Product } from '../types/product';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.productId}>
            <td>{p.productId}</td>
            <td>{p.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
