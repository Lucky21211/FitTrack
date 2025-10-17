const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock data for users
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32 },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', age: 25 }
];

// Get all users
app.get('/users', (req, res) => {
  res.json({ 
    success: true,
    users: users 
  });
});

// Get user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(404).json({ success: false, message: 'User not found' });
  }
});

// Add new user
app.post('/users', (req, res) => {
  const { name, email, age } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
    age
  };
  users.push(newUser);
  res.json({ 
    success: true, 
    message: 'User created successfully',
    user: newUser 
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'User Service is running' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});