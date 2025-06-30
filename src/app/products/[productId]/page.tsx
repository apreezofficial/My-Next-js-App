import { Metadata } from "next";

interface PageProps {
  params: {
    productId: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Product - ${params.productId}`,
    description: `Details about product ${params.productId}`,
  };
}

export default function ProductDetailsPage({ params }: PageProps) {
  const { productId } = params;

  return (
    <main className="min-h-screen px-4 py-10 text-white bg-gray-900">
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>
      <p className="text-lg">You are viewing details for: <strong>{productId}</strong></p>
    </main>
  );
                                                               }
