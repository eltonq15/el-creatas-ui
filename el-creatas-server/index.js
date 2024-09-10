const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const {
  createAddress,
  getAddressById,
  updateAddressById,
  deleteAddressById,
} = require("./service/address");
const {
  updatePaymentById,
  deletePaymentById,
  getPaymentById,
  createPayment,
} = require("./service/payment");
const {
  deleteOrderById,
  updateOrderById,
  getOrderById,
  createOrder,
} = require("./service/order");
const {
  deleteProductById,
  createProduct,
  getProductById,
  getAllProducts,
  updateProductById,
} = require("./service/product");
const {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("./service/user");
const app = express();

const whitelist = [
  process.env.LOCAL_ENV,
  process.env.TEST_ENV,
  process.env.PROD_ENV,
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.post("/addresses", createAddress);
app.post("/payments", createPayment);
app.post("/products", createProduct);
app.post("/purchases", createOrder);
app.post("/users", createUser);

app.get("/addresses/:id", getAddressById);
app.get("/payments/:id", getPaymentById);
app.get("/products", getAllProducts);
app.get("/products/:id", getProductById);
app.get("/purchases/:id", getOrderById);
app.get("/users/:id", getUserById);

app.put("/addresses/:id", updateAddressById);
app.put("/payments/:id", updatePaymentById);
app.put("/products/:id", updateProductById);
app.put("/purchases/:id", updateOrderById);
app.put("/users/:id", updateUserById);

app.delete("/addresses/:id", deleteAddressById);
app.delete("/payments/:id", deletePaymentById);
app.delete("/products/:id", deleteProductById);
app.delete("/purchases/:id", deleteOrderById);
app.delete("/users/:id", deleteUserById);
