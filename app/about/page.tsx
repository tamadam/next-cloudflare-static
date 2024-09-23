import Link from "next/link";

interface Product {
  id: number;
  title: string;
}

interface ProductsResponse {
  products: Product[];
}

/* export const runtime = "edge"; */

export default async function About() {
  const res = await fetch("https://dummyjson.com/products");
  const data: ProductsResponse = await res.json();
  const products: Product[] = data.products;

  return (
    <>
      <h1>This page will use the edge runtime to fetch data.</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
      <h3>Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}
