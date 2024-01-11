import a from "./../../assets/bg/man.jpg";

const ImageLogReg = () => {
  return (
    <div className="md:box-shadow hidden md:flex md:w-4/5 h-screen overflow-hidden relative   justify-center items-center">
      <div className="bg-black bg-opacity-70 h-screen w-full absolute z-10"></div>
      <h2 className="text-6xl absolute font-bold">VAPE STORE</h2>
      <img
        src={a}
        alt="https://www.freepik.com/free-photo/man-vaping-electronic-cigarette_6634916.htm#query=vape%20cloud&position=43&from_view=search&track=ais&uuid=fcd5ad8d-4dec-4fc4-b726-684a06cb3d3d"
        className=""
      />
    </div>
  );
};

export default ImageLogReg;
