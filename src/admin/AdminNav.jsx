import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const AdminNav = () => {
  // const {currentUser} = useAuth()
  const admin__nav = [
    {
      display: "Dashboard",
      path: "/dashboard",
    },
    {
      display: "All-Products",
      path: "/dashboard/all-products",
    },
    {
      display: "Orders",
      path: "/dashboard/orders",
    },
    {
      display: "Users",
      path: "/dashboard/users",
    },
  ];
  return (
    <>
      <header className="w-full bg-[#0a1d37] py-5 px-0">
        <div className="admin-nav__top w-full ">
          <div className="container">
            <div className="admin-nav-wrapper flex items-center justify-between gap-3">
              <div className="logo">
                <h2 className="text-[1.2rem] text-[#c0c0c0]">Multimart</h2>
              </div>
              <div
                className="serch-box cursor-all-scroll
            flex items-center justify-between">
                <input type="text" placeholder="Search..." />
                <div>
                  <BiSearch color="#c0c0c0" />
                </div>
              </div>
              <div className="admin-nav-top-right w-[40px] h-[40px] rounded-full flex items-center gap-8 ">
                <div className="text-white">Col</div>
                <div className="text-white">Setting</div>
                <img src="" alt="user img" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="p-0 w-full h-[70px] leading-[70px] bg-[#fdefe6]">
        <div className="container">
          <div className="row">
            <div className="admin-navigation text-center">
              <ul className="menulist flex items-center justify-center gap-[2.7rem]">
                {admin__nav.map((item, i) => (
                  <li className="admin-menu-item" key={i}>
                    <NavLink
                      to={item.path}
                      className="text-[#0a1d37] py-[10px] px-[15px] rounded-md active:bg-[#c0c0c0]">
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminNav;
