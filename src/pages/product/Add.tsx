import { FormInput, CategoryInput } from "../../components";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../../redux/api/productApi";
import { toast } from "react-toastify";

import { FaArrowLeft } from "react-icons/fa6";
import { BiImageAdd } from "react-icons/bi";

const Add = () => {
  const navigate = useNavigate();
  const initialState = {
    title: "",
    price: "",
    stock: "",
    image: null,
  };

  const [values, setValues] = useState(initialState);
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [createProduct, { isLoading, isSuccess, isError }] =
    useCreateProductMutation();

  // handle
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedImage(file);

      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(selectedImage);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("desc", textareaValue);
    formData.append("price", values.price);
    formData.append("stock", values.stock);
    formData.append("img", values.title);

    createProduct(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully added product");
    } else if (isError) {
      // toast.error((error as any).data.message);
    }
  }, [isLoading]);

  return (
    <div className="lg:ml-64 text-xl max-w-7xl  pt-16 md:pt-4">
      <div className="flex border-b-2 border-purple-300 pt-4 items-center gap-2">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h2 className="size-custom uppercase font-bold ">ADD PRODUCT</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          <FormInput
            label={"NAME"}
            type={"text"}
            name={"title"}
            value={values.title}
            handleChange={handleChange}
          />
          <CategoryInput />
          <div className="flex flex-col gap-4">
            <label className="size-custom">DESCRIPTION</label>
            <textarea
              name="desc"
              value={textareaValue}
              onChange={handleChangeText}
              className="w-full h-40 p-2 border  rounded-lg resize-none outline-none border-purple-900 focus:border-purple-500"
            />
          </div>

          <div className="flex flex-col">
            <label className=" px-2 text-lg md:text-xl">IMAGE</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="imageInput"
            />

            {previewImage ? (
              <div className="relative">
                <button
                  className="absolute right-[-18px] rounded-full bg-red-400 p-1 px-3"
                  onClick={() => setPreviewImage(null)}
                >
                  X
                </button>
                <img
                  src={previewImage}
                  alt="Preview"
                  className="max-w-full h-full my-4 rounded-lg"
                />
              </div>
            ) : (
              <label
                htmlFor="imageInput"
                className="cursor-pointer rounded-lg px-2 flex items-center justify-center h-full"
              >
                <BiImageAdd className="w-[100px] h-[100px]" />
              </label>
            )}
          </div>
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
        </div>
        <br />
        <button className="mt-4 px-2 py-1 rounded-lg w-24  text-lg md:text-xl bg-purple-600 hover:bg-white text-white hover:text-purple-600  border-purple-600 border-[1px] duration-300 ease-linear mx-auto">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Add;
