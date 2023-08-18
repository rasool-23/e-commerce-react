import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { BiSearch } from "react-icons/bi";
import products from "../assets/data/products";
import { ProductList } from "../components/UI/ProductList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const handleFilter = (e) => {
    const selectValue = e.target.value;
    if (selectValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );

      setProductsData(filteredProducts);
    }
    if (selectValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );

      setProductsData(filteredProducts);
    }

    if (selectValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );

      setProductsData(filteredProducts);
    }

    if (selectValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );

      setProductsData(filteredProducts);
    }

    if (selectValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );

      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Product" />

      <section>
        <div className="container">
          <div className="row grid grid-cols-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <div className="filter__widget ">
                  <select
                    className="py-2 px-[10px] border border-[#0a1d37] rounded-md cursor-pointer focus:outline-none"
                    onChange={handleFilter}>
                    <option value="" className="text-[.9rem]">
                      Filter By Category
                    </option>
                    <option value="sofa" className="text-[.9rem]">
                      Sofa
                    </option>
                    <option value="chair" className="text-[.9rem]">
                      Chair
                    </option>
                    <option value="mobile" className="text-[.9rem]">
                      Mobile
                    </option>
                    <option value="watch" className="text-[.9rem]">
                      Watch
                    </option>
                    <option value="wireless" className="text-[.9rem]">
                      Wireless
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div className="filter__widget">
                  <select className="py-2 px-[10px] border border-[#0a1d37] rounded-md cursor-pointer focus:outline-none">
                    <option value="" className="text-[.9rem]">
                      Sort By
                    </option>
                    <option value="ascending" className="text-[.9rem]">
                      Ascending
                    </option>
                    <option value="descending" className="text-[.9rem]">
                      Descending
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="search-box flex items-center justify-between gap-2 w-full border border-[#0a1d37] rounded-md pr-3 pl-1 cursor-pointer">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border-none outline-none py-2 px-[10px] "
                  onChange={handleSearch}
                />
                <div>
                  <BiSearch color="#0a1d37" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div>
              {productsData.length === 0 ? (
                <h1 className="text-center text-xl">No products are found!</h1>
              ) : (
                <ProductList data={productsData} />
              )}
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Shop;
