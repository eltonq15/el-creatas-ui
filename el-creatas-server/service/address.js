const createAddress = async (req, res) => {
  const { street, zip, city, country, type, userId } = req.body;
  try {
    const addressCreated = await req.prisma.address.create({
      data: { street, zip, city, country, type, userId },
    });
    res.status(201).json(addressCreated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAddressById = async (req, res) => {
  const { id } = req.params;
  try {
    const address = await req.prisma.address.findUnique({
      where: { id },
    });
    res.json(address);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAddressById = async (req, res) => {
  const { id } = req.params;
  const { street, zip, city, country, type, userId } = req.body;
  try {
    const address = await req.prisma.address.update({
      where: { id },
      data: { street, zip, city, country, type, userId },
    });
    res.json(address);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAddressById = async (req, res) => {
  const { id } = req.params;
  try {
    await req.prisma.address.delete({
      where: { id },
    });
    res.json({ message: "Address deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAddress,
  getAddressById,
  updateAddressById,
  deleteAddressById,
};
