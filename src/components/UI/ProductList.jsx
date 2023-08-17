import ProductCard from "./ProductCard";

export const ProductList = (data) => {
  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
      {data?.data?.map((item, i) => (
        <ProductCard key={i} item={item} />
      ))}
    </div>
  );
};
