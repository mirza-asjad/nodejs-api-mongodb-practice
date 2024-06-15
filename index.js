const express = require('express');
const userRouter = require('./routes/user_route');
const { connectMongoDB } = require('./components/connection');
const { firstMiddleware, secondMiddleware } = require('./middlewares/user_middleware');

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

// Middleware to log request details
app.use(firstMiddleware);
app.use(secondMiddleware);

// Connect MongoDB
connectMongoDB('mongodb://127.0.0.1:27017/testing-api-from-nodejs')
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('ERROR IS : ' + error));

app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
