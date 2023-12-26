import { FormInput } from "../../components";
import { useState, useEffect } from "react";
import { useGetProductQuery } from "../../redux/api/productApi";
import { useParams, useNavigate } from "react-router-dom";
import arrow from "./../../assets/icons/arrow-left.svg";

const Add = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading } = useGetProductQuery(id);

  const singleProduct = Array.isArray(product) ? product[0] : product;

  const initialState = {
    title: singleProduct?.title,
    desc: singleProduct?.desc,
    price: singleProduct?.price,
    stock: singleProduct?.stock,
    image: null,
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
  };

  useEffect(() => {
    setValues(initialState);
  }, [isLoading]);

  return (
    <div className="lg:ml-64 text-xl max-w-7xl  pt-16 md:pt-4">
      <div className="flex  gap-4">
        <button onClick={() => navigate(-1)}>
          <img src={arrow} alt="" />
        </button>
        <h2 className="size-custom uppercase font-bold ">EDIT PRODUCT</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <FormInput
          label={"NAME"}
          type={"text"}
          name={"title"}
          value={values.title}
          handleChange={handleChange}
        />
        <FormInput
          label={"DESCRIPTION"}
          type={"text"}
          name={"desc"}
          value={values.desc}
          handleChange={handleChange}
        />
        <FormInput
          label={"PRICE"}
          type={"text"}
          name={"price"}
          value={values.price}
          handleChange={handleChange}
        />
        <FormInput
          label={"STOCK"}
          type={"text"}
          name={"stock"}
          value={values.stock}
          handleChange={handleChange}
        />
        <label htmlFor="">
          Image
          <input type="file" className="hidden" />
        </label>
        <br />
        <button className="mt-4 px-2 py-1 rounded-lg w-24 mx-auto text-lg md:text-xl bg-blue-400 hover:bg-white text-white hover:text-blue-400 border-blue-400 border-[1px] duration-300 ease-linear">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Add;
