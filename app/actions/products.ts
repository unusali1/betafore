"use server";

const BASE_URL = "https://mm-assesment-server.vercel.app/api/v1/products";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}?limit=10`, { cache: "no-store" });
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories`, { cache: "no-store" });
  return res.json();
}

export async function getProductsByCategory(slug: string) {
  const res = await fetch(`${BASE_URL}/category/${slug}`, { cache: "no-store" });
  return res.json();
}

export async function getSingleProduct(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
  return res.json();
}


export async function loadProductsBySlug(prevState: any, formData: FormData) {
  const slug = formData.get("slug") as string;

  const data = await getProductsByCategory(slug);

  return {
    slug,
    products: data.data,
  };
}