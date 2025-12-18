

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// // Load environment variables
// dotenv.config();

// // Connect DB
// connectDB();

// const app = express();



// // 1️⃣ CORS FIRST
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));
// app.options('/*', cors());  

// // 2️⃣ Body parser
// app.use(express.json());

// // 3️⃣ Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/rides', require('./routes/postRidesRoutes'));

// app.use(express.json());


// // // ✅ test route here
// // app.get('/test', (req, res) => {
// //   res.status(200).send('✅ Express server is reachable');
// // });


// // // Routes
// // app.use('/api/auth', require('./routes/auth'));
// // app.use('/api/rides', require('./routes/postRidesRoutes'));

// // Health check route
// // app.get('/', (req, res) => {
// //   res.send('🚗 Rideshare API is running...');
// // });

// // Start server
// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect DB
connectDB();

const app = express();

// 1️⃣ CORS
app.use(cors({
  origin: "*",  // allow all origins (you can restrict later)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// 2️⃣ Body parser
app.use(express.json());

// 3️⃣ Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/rides', require('./routes/postRidesRoutes'));

// 4️⃣ Health check route (optional)
app.get('/', (req, res) => {
  res.send('🚗 Backend API is running');
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
