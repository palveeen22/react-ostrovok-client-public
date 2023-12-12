import React from "react";
import Drawer from "./ModalRight";
import Wishlist from "./Wishlist";
import { Icon } from "@iconify/react";

const Login = () => {
  return (
    <div className="w-[20%] bg-[#f2f2f2] flex flex-col gap-4">
      <div className="bg-white rounded-full my-4">
        <div className="flex justify-center items-center gap-2 p-2">
          <Icon icon="fluent:person-32-filled" width={25} />
          <p className="text-[#595959]">Masuk</p>
        </div>
        {/* <Drawer />
        <Wishlist /> */}
      </div>
      <div className="bg-white min-h-screen rounded-t-xl">
        {/* <h3>test</h3> */}
      </div>
    </div>
  );
};

export default Login;
