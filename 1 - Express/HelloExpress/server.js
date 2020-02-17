const express = require("express");
const app = express();
// app.get('/', (request, response) => {
//     response.send("Hello Express!");
// });
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// app.get("/users", (req, res) => {
//     // hard-coded user data
//     var users_array = [
//         {name: "Michael", email: "michael@codingdojo.com"}, 
//         {name: "Jay", email: "jay@codingdojo.com"}, 
//         {name: "Brendan", email: "brendan@codingdojo.com"}, 
//         {name: "Andrew", email: "andrew@codingdojo.com"}
//     ];
//     res.render('users', {users: users_array});
// })

var allCats = [
    {
        name: "Precious",
        url: "/precious",
        image: "cat.jpg",
        age: 1,
        food: "Paper",
        sleeping: [
            "In the dryer",
            "In the gutter",
            "On top of old smokey"
        ]
    },
    {
        name: "Dropsy",
        url: "/dropsy",
        image: "cat.jpg",
        age: 2,
        food: "Litter",
        sleeping: [
            "In boxes",
            "In the trash can",
            "On top of old smokey"
        ]
    },
    {
        name: "Dina",
        url: "/dina",
        image: "cat.jpg",
        age: 3,
        food: "Venison",
        sleeping: [
            "In warm, dry places",
            "On the microwave",
            "On top of old smokey"
        ]
    },
    {
        name: "Patter",
        url: "/patter",
        image: "cat.jpg",
        age: 1,
        food: "Fancy Feast",
        sleeping: [
            "In bed",
            "On the bed",
            "On top of old smokey"
        ]
    }

]

app.get("/", (req, res) => {
    res.render('index');
    });

// app.get("/cars", (req, res) => {
//     res.render('cars');
//     });

// app.get("/cars/new", (req, res) => {
//     res.render('form');
//     });

app.get('/cats', (req,res) => {
    res.render('cats', {allCats:allCats});
})
//INDIVIDUAL CAT PAGES
app.get('/precious', (req,res) => {
    res.render('cat', {cat: allCats[0]});
})
app.get('/dropsy', (req,res) => {
    res.render('cat', {cat: allCats[1]});
})
app.get('/dina', (req,res) => {
    res.render('cat', {cat: allCats[2]});
})
app.get('/patter', (req,res) => {
    res.render('cat', {cat: allCats[3]});
})