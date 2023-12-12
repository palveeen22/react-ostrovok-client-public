import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
// import CardProduct from "./Components/CardProduct";

const url = "http://localhost:3000";

import axios from "axios";

const Sidebar = () => {
  const [data, setData] = useState([]);

  const getAllCategories = async () => {
    try {
      const response = await axios.get(`${url}/categories-products`);
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="w-[15%] bg-[#f2f2f2] flex flex-col gap-6">
      <div className="h-24 bg-white rounded-b-xl paddingTopShorter2 paddingXShorter3">
        <div className="flex justify-center gap-2 items-center">
          <Icon icon="simple-icons:producthunt" width={40} color="#ff335f" />
          <h3 className="text-[#ff335f] text-xl">Pesenaja</h3>
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-start bg-white min-h-screen rounded-t-xl paddingXShorter3 paddingYShorter2">
        {data?.map((e) => {
          return (
            <div className="flex justify-start items-center gap-2 hover:filter hover:brightness-75 cursor-pointer">
              <img
                src={e?.imageUrl}
                className="h-10 w-10 object-cover rounded-xl"
              />
              <p className="text-sm text-[#595959]">{e?.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
