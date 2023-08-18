import commonImg from "../../assets/images/common-bg.jpg";

const CommonSection = (title) => {
  return (
    <section className="common-section bg-common bg-no-repeat bg-cover bg-center h-[350px]">
      <div className="container">
        <h1 className="text-white font-semibold text-center">{title.title}</h1>
      </div>
    </section>
  );
};

export default CommonSection;
