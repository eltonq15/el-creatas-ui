const createProduct = async (req, res) => {
  const { name, description, size, price } = req.body;
  try {
    const product = await req.prisma.product.create({
      data: { name, description, size, price },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await req.prisma.product.findFirst({
      where: { id },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, size } = req.body;
  try {
    const product = await req.prisma.product.update({
      where: { id },
      data: { name, description, price, size },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    await req.prisma.product.delete({
      where: { id },
    });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
