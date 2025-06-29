type ProductDetailsProps = {
  params: {
    productId: string;
  };
};

export default function ProductDetails({ params }: ProductDetailsProps) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Product Details</h1>
      <p>Product ID from URL: {params.productId}</p>
    </div>
  );
}
