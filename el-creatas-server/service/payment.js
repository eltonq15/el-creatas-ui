const createPayment = async (req, res) => {
  const { purchaseId, amount, method, status } = req.body;
  try {
    const payment = await req.prisma.payment.create({
      data: {
        purchaseId,
        amount,
        method,
        status,
      },
    });
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const payment = await req.prisma.payment.findFirst({
      where: { purchaseId: req.params.id },
    });
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePaymentById = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const payment = await req.prisma.payment.update({
      where: { id },
      data: { status },
    });
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePaymentById = async (req, res) => {
  const { id } = req.params;
  try {
    await req.prisma.payment.delete({
      where: { id },
    });
    res.json({ message: "Payment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPayment,
  getPaymentById,
  updatePaymentById,
  deletePaymentById,
};
