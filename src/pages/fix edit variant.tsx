import React, { useState, useEffect } from "react";

const SingleComponent = ({ values, onChange, onRemove }) => {
  return (
    <div className="flex flex-row gap-2 p-2 text-xs">
      <input
        type="text"
        id={`nama-${values.id}`}
        className="outline-none overflow-hidden b-1 p-2 rlg"
        value={values.nama}
        onChange={(e) => onChange("nama", e.target.value)}
        placeholder="Nama"
      />
      <input
        type="text"
        id={`stok-${values.id}`}
        className="outline-none overflow-hidden b-1 p-2 rlg"
        value={values.stok}
        onChange={(e) => onChange("stok", e.target.value)}
        placeholder="Stok"
      />
      <input
        type="text"
        id={`harga-${values.id}`}
        className="outline-none overflow-hidden b-1 p-2 rlg"
        value={values.harga}
        onChange={(e) => onChange("harga", e.target.value)}
        placeholder="Harga"
      />
      <input
        type="text"
        id={`sku-${values.id}`}
        className="outline-none overflow-hidden b-1 p-2 rlg"
        value={values.sku}
        onChange={(e) => onChange("sku", e.target.value)}
        placeholder="SKU"
      />
      <button onClick={onRemove}>Remove Component</button>
    </div>
  );
};

const Test = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    // Misalnya, mengambil data dari REST API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/variant ");
        const data = await response.json();

        // Mengonversi data dari API ke format yang sesuai
        const formattedData = data.map((item) => ({
          id: item.id,
          nama: item.nama,
          stok: item.stok,
          harga: item.harga,
          sku: item.sku,
        }));

        setComponents(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Gunakan dependensi kosong agar useEffect dijalankan sekali setelah komponen dimount

  const handleAddComponent = () => {
    setComponents((prevComponents) => [
      ...prevComponents,
      { id: Date.now(), nama: "", stok: "", harga: "", sku: "" },
    ]);
  };

  const handleRemoveComponent = (index) => {
    setComponents((prevComponents) => {
      const newComponents = [...prevComponents];
      newComponents.splice(index, 1);
      return newComponents;
    });
  };

  const handleChange = (componentIndex, inputName, value) => {
    setComponents((prevComponents) => {
      const newComponents = [...prevComponents];
      newComponents[componentIndex][inputName] = value;
      return newComponents;
    });
  };

  const handleSubmit = async () => {
    try {
      const responses = [];

      for (const component of components) {
        const response = await fetch("http://localhost:3000/variant", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(component),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        responses.push(responseData);
      }

      console.log("All responses:", responses);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      {components.map((component, index) => (
        <SingleComponent
          key={index}
          values={component}
          onChange={(inputName, value) => handleChange(index, inputName, value)}
          onRemove={() => handleRemoveComponent(index)}
        />
      ))}
      <button onClick={handleAddComponent}>Add Component</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Test;
