import React, { useEffect, useState } from "react";
import CardProduct from "./Components/CardProduct";
import axios from "axios";
import { Icon } from "@iconify/react";

const Products = ({ url }) => {
  const [data, setData] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${url}/products-public`);
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-col w-[65%] gap-6">
      <div className="h-24 bg-white rounded-b-xl paddingTopShorter2 paddingXShorter3">
        <div className="flex justify-center gap-2 items-center">
          <Icon icon="ri:moon-fill" width={40} color="#595959" />
          <h3 className="text-[#595959] text-lg">Работаем с 07:00 до 00:00</h3>
        </div>
      </div>
      <div className="bg-white min-h-screen rounded-t-xl paddingXShorter3">
        <div className="relative w-full paddingYShorter2">
          <input
            type="text"
            className="w-full bg-[#f2f2f2] rounded-full px-2 h-14 text-[#000000] hover:bg-[#f8f7f5] cursor-pointer"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-5 py-2 bg-[#ff335f] text-[#ffffff] text-sm rounded-full">
            Найти
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <CardProduct data={data} />
        </div>
      </div>
    </div>
  );
};

export default Products;
