// Get all users
//GET
const getUsers = (req, res) => {
  res.status(200).json({ message: "Get all users" });
};

// Create user
// POST
const createUser = (req, res) => {
  console.log("Request Body: ", req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("Missing Fields");
  }
  res.status(201).json({ message: "Create a new user" });
};

// Get user
// GET
const getUser = (req, res) => {
  res.status(200).json({ message: `Get user ${req.params.id}` });
};

// Update user
// PUT
const updateUser = (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
};

// Delete user
// DELETE
const deleteUser = (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
};

module.exports = { getUsers, createUser, getUser, updateUser, deleteUser };
