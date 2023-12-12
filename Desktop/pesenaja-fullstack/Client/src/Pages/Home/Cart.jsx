import { useState } from "react";
import ModalLogin from "../../Components/ModalLogin";

import { Icon } from "@iconify/react";

const Cart = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      {open && <ModalLogin onClose={onCloseDrawer} />}
      <div className="w-[20%] bg-[#f2f2f2] flex flex-col gap-4">
        <div className="bg-white rounded-full my-4">
          <div
            className="flex justify-center items-center gap-2 p-2 cursor-pointer"
            onClick={showDrawer}
          >
            <Icon icon="fluent:person-32-filled" width={25} color="#595959" />
            <p className="text-[#595959]">Masuk</p>
          </div>
        </div>
        <div className="bg-white min-h-screen rounded-t-xl"></div>
      </div>
    </>
  );
};

export default Cart;
