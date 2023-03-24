const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Get all users
//GET
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// Create user
// POST
const createUser = asyncHandler(async (req, res) => {
  console.log("Request Body: ", req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("Missing Fields");
  }

  const user = await User.create({ name, email });
  res.status(201).json(user);
});

// Get user
// GET
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  if (!user) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(user);
});

// Update user
// PUT
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  if (!user) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
});

// Delete user
// DELETE
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  if (!user) {
    res.status(404);
    throw new Error("Contact not found");
  }

  await User.findByIdAndRemove(req.params.id);
  res.status(200).json(user);
});

module.exports = { getUsers, createUser, getUser, updateUser, deleteUser };
