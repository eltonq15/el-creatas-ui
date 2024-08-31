const createUser = async (req, res) => {
  const { name, surname, email, phone } = req.body;
  try {
    const user = await req.prisma.user.create({
      data: {
        name,
        surname,
        email,
        phone,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await req.prisma.user.findUnique({
      where: { id },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { name, surname, email, phone, shippingAddress, billingAddress } =
    req.body;
  try {
    const user = await req.prisma.user.update({
      where: { id },
      data: { name, surname, email, phone, shippingAddress, billingAddress },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    await req.prisma.user.delete({
      where: { id },
    });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
