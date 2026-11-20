import express, { json } from 'express';
import data from '../register/Settings.json' with { type: 'json' };

const app = express();

let UserData = []

// Middleware to parse JSON bodies
app.use(json());

// Basic route
app.get('/', (req, res) => {
    res.send('dawdwaf');
});

app.post('/register', (req, res) => {
    let obj = req.body;

    if (obj.password.length == 0 || obj.name.length == 0) {
        return res.send({ status: 0, message: 'Input Name and Password' });
    }
    if (obj.password.length < 8) {
        return res.send({ status: 0, message: 'Password must be at least 8 characters long' });
    }
    if (obj.name.length < 3) {
        return res.send({ status: 0, message: 'Name must be at least 3 characters long' });
    }

    let existingUser = UserData.find(user => user.name === obj.name);
    if (existingUser) {
        return res.send({ status: 0, message: 'User already exists' });
    } else {
        UserData.push(obj);
        return res.send({ status: 1, message: 'User registered successfully' });
    }
});

app.post('/users', (req, res) => {
    res.send(UserData);
});

app.post('/delete', (req, res) => {
    let obj = req.body.data;
    UserData = UserData.filter(user => user.name !== obj.name);
    res.send({ status: 1, message: 'User deleted successfully' });
});

app.listen(data.port, data.ip, () => {
    console.log(`Server is running on http://${data.ip}:${data.port}`);
});