import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader
      speed={1}
      width={200}
      height={200}
      viewBox="0 0 200 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="200" height="200" />
    </ContentLoader>
  );
};

const CardLoaderMobile = () => (
  <div className="grid md:hidden grid-cols-2 gap-8 mt-4">
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
  </div>
);

export default CardLoaderMobile;
