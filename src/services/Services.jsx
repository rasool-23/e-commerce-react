import { motion } from "framer-motion";
import { BsTruck } from "react-icons/bs";
import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((data, i) => (
            <motion.div whileHover={{ scale: 1.1 }} className="col" key={i}>
              <div className="serviceitem flex justify-center items-center gap-3 rounded-md p-5 bg-[#fdefe6] cursor-pointer">
                <div className="bg-[#0a1d37] p-[10px] rounded-full">
                  <data.icon />
                  <BsTruck size={30} color="#fff" className="font-normal" />
                  {/* <{data.icon} /> */}
                  {/* <Icon icon={data.icon[i]} /> */}
                  {/* {data.icon} */}
                </div>
                <div className="">
                  <h3 className="text-[1.1rem] font-semibold text-[#0a1d37] ">
                    {data.title}
                  </h3>
                  <p className="text-[.9rem] font-semibold text-[#222] mt-1">
                    {data.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
