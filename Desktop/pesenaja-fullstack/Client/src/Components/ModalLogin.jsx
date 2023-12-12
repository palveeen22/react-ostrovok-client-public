import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";

const ModalLogin = ({ onClose }) => {
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    onClose(); // Menggunakan onClose saat memanggil showDrawer
  };

  const onCloseDrawer = () => {
    onClose();
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}></Radio.Group>
      </Space>
      <Drawer
        placement={placement}
        closable={false}
        onClose={onCloseDrawer}
        visible={true} // Menggunakan properti visible langsung
        key={placement}
        width={500}
        className="rounded-3xl p-2"
      >
        <div className="flex flex-col justify-between gap-6">
          <div>
            <Icon icon="icon-park-twotone:close-one" />
          </div>
          <div className="text-center flex flex-col gap-4">
            <div className="py-2 rounded-full bg-[#ff335f] text-[#ffffff]">
              <p>Masuk</p>
            </div>
            <div className="py-2 border border-[#ff335f] rounded-full bg-[#ffffff] text-[#ff335f]">
              <p>Daftar</p>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ModalLogin;
