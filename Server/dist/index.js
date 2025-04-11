import express from 'express';
import cors from "cors";
import 'dotenv/config';
const port = process.env.PORT || 7000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('Its Working 🔥');
});
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
