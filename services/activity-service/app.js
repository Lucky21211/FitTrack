const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock data for activities
const activities = [
  { id: 1, type: 'running', duration: 30, distance: 5, calories: 300 },
  { id: 2, type: 'cycling', duration: 45, distance: 15, calories: 400 },
  { id: 3, type: 'walking', duration: 60, distance: 4, calories: 200 }
];

// Get all activities
app.get('/activities', (req, res) => {
  res.json({ 
    success: true,
    activities: activities 
  });
});

// Add new activity
app.post('/activities', (req, res) => {
  const { type, duration, distance, calories } = req.body;
  const newActivity = {
    id: activities.length + 1,
    type,
    duration,
    distance,
    calories
  };
  activities.push(newActivity);
  res.json({ 
    success: true, 
    message: 'Activity added successfully',
    activity: newActivity 
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Activity Service is running' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Activity Service running on port ${PORT}`);
});