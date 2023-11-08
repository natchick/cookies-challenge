//sets a cookie when routed to /login with their name
//if a cookie is present with a name key, then it says 
//"Welcome {name}! when the user routes to /hello"

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser())

app.get('/login/:name', (req, res) => {
    let { name } = req.params
    res.cookie('name', name);
    res.end();
})

app.get('/hello', (req, res) => {
    if (req.cookies.name) res.end('Welcome ' + req.cookies.name)
    else {
        res.redirect('/login/Natasha');
}
})
const port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});