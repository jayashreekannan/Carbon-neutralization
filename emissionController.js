const User = require('../models/users');

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });

  if (existingUser) return res.status(400).json({ message: 'User exists' });

  const newUser = new User({ username, password, emissions: [] });
  await newUser.save();
  res.status(201).json({ message: 'Signup successful' });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  res.status(200).json({ message: 'Login successful' });
};

exports.addEmission = async (req, res) => {
  const { username, fuel, electricity } = req.body;
  const user = await User.findOne({ username });

  if (!user) return res.status(404).json({ message: 'User not found' });

  user.emissions.push({
    fuel,
    electricity,
    date: new Date()
  });

  await user.save();
  res.status(200).json({ message: 'Emission data added' });
};

exports.getReport = async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username });

  if (!user) return res.status(404).json({ message: 'User not found' });

  const totalFuel = user.emissions.reduce((sum, e) => sum + e.fuel, 0);
  const totalElectricity = user.emissions.reduce((sum, e) => sum + e.electricity, 0);

  res.status(200).json({
    totalFuel,
    totalElectricity,
    totalCO2: (totalFuel * 2.31) + (totalElectricity * 0.92) // Sample CO2 conversion factors
  });
};
