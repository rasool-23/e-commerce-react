import { useGetData } from "../hooks/useGetData";

const Dashboard = () => {
  const { data: products } = useGetData("products");
  const { data: users, loading: loading } = useGetData("users");

  return (
    <section>
      <div className="container">
        <div className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <div className="order__box p-5  rounded-md bg-[#fdefe6]">
              <h5 className="text-[1.1rem] font-semibold text-[#0a1d37] mb-5">
                Total Sales
              </h5>
              <span className="text-[2rem] font-semibold text-[#0a1d37]">
                $5231
              </span>
            </div>
          </div>
          <div>
            <div className="order__box p-5  rounded-md bg-[#d6e5fb]">
              <h5 className="text-[1.1rem] font-semibold text-[#0a1d37] mb-5">
                Orders
              </h5>
              <span className="text-[2rem] font-semibold text-[#0a1d37]">
                $1231
              </span>
            </div>
          </div>
          <div>
            <div className="products__box p-5  rounded-md bg-[#ceebe9]">
              <h5 className="text-[1.1rem] font-semibold text-[#0a1d37] mb-5">
                Total Products
              </h5>
              <span className="text-[2rem] font-semibold text-[#0a1d37]">
                {products.length}
              </span>
            </div>
          </div>
          <div>
            <div className="revenue__box p-5  rounded-md bg-[#e2f2b2]">
              <h5 className="text-[1.1rem] font-semibold text-[#0a1d37] mb-5">
                Total Users
              </h5>
              <span className="text-[2rem] font-semibold text-[#0a1d37]">
                {users.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
