interface ProductDetailsProps {
  params: {
    productId: string;
  };
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  return (
    <>
      <p>Details about the product with ID: {params.productId}</p>
    </>
  );
}
