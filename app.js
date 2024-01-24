const express = require('express');
const app = express();

app.get('/foo', (req, res, next) => {
    //random number (0 or 1)
    const randomNumber = Math.floor(Math.random() * 2);

    if (randomNumber === 0) {
        // Sometimes respons with 'sometimes this'
        res.send('sometimes this');
    } else {
        // Pass control to next route
        next();
    }
});
app.get('/foo', (req, res) => {
    // next response
    res.send('and sometimes that');
});
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server in running on port ${port}`);
});