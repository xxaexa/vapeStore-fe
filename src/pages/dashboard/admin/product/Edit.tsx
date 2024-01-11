import {
  Input,
  CategoryInput,
  DashCont,
  HeaderAE,
  BottomAE,
} from "../../../../components";
import { useState, useEffect } from "react";
import { useGetProductQuery } from "../../../../redux/api/productApi";
import { useParams } from "react-router-dom";
import RegularText from "../../../../components/text/RegularText";
import { BiImageAdd } from "react-icons/bi";

const Edit = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useGetProductQuery(id);
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const singleProduct = Array.isArray(product) ? product[0] : product;

  const initialState = {
    title: singleProduct?.title,
    desc: singleProduct?.desc,
    price: singleProduct?.price,
    stock: singleProduct?.stock,
    image: null,
  };

  const [values, setValues] = useState(initialState);

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
    console.log(selectedImage);
    e.preventDefault();
    console.log(values);
  };

  useEffect(() => {
    setValues(initialState);
  }, [isLoading]);

  return (
    <div>
      <DashCont>
        <HeaderAE text={"EDIT PRODUCT"} link={"product"} />
        <form onSubmit={handleSubmit} className="pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            <Input
              label={"NAME"}
              type={"text"}
              name={"title"}
              value={values.title}
              handleChange={handleChange}
            />
            <CategoryInput />
            <div className="flex flex-col gap-4">
              <RegularText text={"DESCRIPTION"} />
              <textarea
                name="desc"
                value={textareaValue}
                onChange={handleChangeText}
                className="w-full h-40 p-2 border  rounded-lg resize-none outline-none border-purple-900 focus:border-purple-500 text-xs md:text-sm"
              />
            </div>

            <div className="flex flex-col">
              <RegularText text={"IMAGE"} />
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
            <Input
              label={"PRICE"}
              type={"text"}
              name={"price"}
              value={values.price}
              handleChange={handleChange}
            />
            <Input
              label={"STOCK"}
              type={"text"}
              name={"stock"}
              value={values.stock}
              handleChange={handleChange}
            />
          </div>
        </form>
      </DashCont>
      <BottomAE />
    </div>
  );
};

export default Edit;
