const Helmet = (props) => {
  document.title = "AllModern | " + props.title;
  return <div className="w-full">{props.children}</div>;
};

export default Helmet;
