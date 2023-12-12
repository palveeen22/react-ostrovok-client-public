const ImageKit = require("imagekit");
// const dotenv = require("dotenv").config();

const imagekit = new ImageKit({
  publicKey: "public_/O20lvX+/1vmr/r6djYMfnm6RPk=",
  privateKey: "private_cHvYVFNMxp1BxT+8GN79y5qymBo=",
  urlEndpoint: "https://ik.imagekit.io/kvdqz2t4a",
});

module.exports = imagekit;
