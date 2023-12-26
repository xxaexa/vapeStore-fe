// ScrollDiv.tsx
import React, { useEffect, useState } from "react";
import { Navbar } from ".";

const ScrollDiv: React.FC = () => {
  const [showDiv, setShowDiv] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const screenHeight = window.innerHeight; // Tinggi layar

      // Hitung triggerHeight sesuai dengan tinggi layar
      const triggerHeight = screenHeight;

      // Set state untuk menentukan apakah div harus ditampilkan atau tidak
      setShowDiv(scrollHeight > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full right-0 transition-transform duration-500 z-50 ${
        showDiv ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <Navbar />
      <div className="text-7xl bg-black text-white">Category</div>
    </div>
  );
};

export default ScrollDiv;
