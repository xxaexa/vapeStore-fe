import { ContainerProps } from "../../types";

const DashCont = ({ children }: ContainerProps) => {
  return (
    <div className={`lg:ml-64 pt-12 md:pt-4 max-w-7xl pad-custom`}>
      {children}
    </div>
  );
};

export default DashCont;
