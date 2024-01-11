import {
  Input,
  CategoryInput,
  DashCont,
  BottomAE,
  HeaderAE,
} from "../../../../components";
import { useEffect, useState } from "react";
import RegularText from "../../../../components/text/RegularText";
import { useCreateProductMutation } from "../../../../redux/api/productApi";
import { toast } from "react-toastify";
import { BiImageAdd } from "react-icons/bi";

const Add = () => {
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
    <div>
      <DashCont>
        <HeaderAE text={"ADD PRODUCT"} link={"product"} />
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
          <br />
        </form>
      </DashCont>
      <BottomAE />
    </div>
  );
};

export default Add;
