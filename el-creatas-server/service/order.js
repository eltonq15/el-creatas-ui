const createOrder = async (req, res) => {
  const { userId, items, status } = req.body;

  try {
    const order = await req.prisma.order.create({
      data: {
        userId,
        status,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: { items: true },
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const orders = await req.prisma.order.findMany({
      include: {
        user: true,
        items: {
          include: {
            product: true,
          },
        },
        payment: true,
      },
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOrderById = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const order = await req.prisma.order.update({
      where: { id },
      data: { status },
      include: { items: true, payment: true },
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    await req.prisma.order.delete({
      where: { id },
    });
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};
