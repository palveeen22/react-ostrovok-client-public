const { Customer, Product } = require("../models");

const authorize = async (req, res, next) => {
  try {
    const { CustomerId } = req.loginInfo;
    const { id } = req.params;

    const user = await Customer.findOne({
      where: {
        id: CustomerId,
      },
    });

    if (!user) {
      throw new Error("Forbidden");
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authorize };
