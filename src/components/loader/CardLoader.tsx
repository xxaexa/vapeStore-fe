import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader
      speed={1}
      width={300}
      height={300}
      viewBox="0 0 300 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="300" height="300" />
    </ContentLoader>
  );
};

const CardLoader = () => (
  <div className="hidden md:grid grid-cols-4 gap-8 mt-2 ">
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
  </div>
);

export default CardLoader;
