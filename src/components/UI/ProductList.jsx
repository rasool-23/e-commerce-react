import ProductCard from "./ProductCard";

export const ProductList = (data) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {data?.data?.map((item, i) => (
        <ProductCard key={i} item={item} />
      ))}
    </div>
  );
};
