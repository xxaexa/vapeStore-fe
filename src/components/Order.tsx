import moment from "moment";
import { OrderProps } from "./types";

const Order = ({ status, address }: OrderProps) => {
  return (
    <div className="mt-8 mb-4 flex flex-row justify-between items-center">
      <div className="w-full text-center">
        <p>Order Number</p>
        <p>VPSTR - 00</p>
      </div>
      <div className="w-full  mx-auto block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" />
            </marker>
          </defs>
          <line
            x1="0"
            y1="50"
            x2="320"
            y2="50"
            stroke="#000"
            stroke-width="3"
            marker-end="url(#arrowhead)"
          />
        </svg>
      </div>
      <div className="w-full text-center">
        <p>Order Created</p>
        <p>{moment(address).format("MM/DD/YYYY")}</p>
      </div>
      <div className="w-full  mx-auto block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" />
            </marker>
          </defs>
          <line
            x1="0"
            y1="50"
            x2="320"
            y2="50"
            stroke="#000"
            stroke-width="3"
            marker-end="url(#arrowhead)"
          />
        </svg>
      </div>
      <div className="w-full text-center">
        <p>Order Status</p>
        <p
          className={`${
            status === "pending" ? "text-yellow-400" : "text-green-400"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};
export default Order;
