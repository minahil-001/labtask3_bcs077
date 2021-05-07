
const express = require("express");
const app = express();
app.use(express.json());
const contacts = [
    {
      "id": 1,
      "name": "Hadi khan",
      "Reg ID": "FA18-BCS-93",
      "email": "abc@gmail.com",
      "conatct": "03211-288020",
      "program":"BSCS",
      "courses": "7",
      "Batch": {
        "section": "B",
        "batch_":"fa18",
        "semester": "6"
    
      }
    },
    {
      "id": 2,
      "name": "Humayun Ali",
      "Reg ID": "FA18-BSE-123",
      "email": "xvy@gmail.com",
      "conatct": "03201-009920",
      "program":"BS-SE",
      "courses": "7",
      "Batch": {
        "section": "B",
        "batch_":"fa18",
        "semester": "6"
    
      }
    },
    {
      "id": 3,
      "name": "Sana Javed",
      "Reg ID": "FA18-BCS-203",
      "email": "sana11@gmail.com",
      "conatct": "03211-0082542",
      "program":"BSCS",
      "courses": "4",
      "Batch": {
        "section": "C",
        "batch_":"fa18",
        "semester": "4"
    
      }
  
    },
    {
      "id": 4,
      "name": "Hafiz abdullah",
      "Reg ID": "FA20-BPHY-003",
      "email": "abd_ullah@gmail.com",
      "conatct": "03211-288020",
      "program":"BS-PHY",
      "courses": "2",
      "Batch": {
        "section": "B",
        "batch_":"fa20",
        "semester": "6"
    
      }
    }
    
  ];

app.get("/", function (req, res) {
  res.send("CONTACT CR");
});
app.get("/api/about", function (req, res) {
  res.send("<h1>ABOUT: </h1>");
});

//first parameter is url
//second is a function with two inputs one is request and one is response
app.get("/api/contacts", function (req, res) {
   
  res.send(contacts);
});
//get one resource
app.get("/api/contacts/:index", function (req, res) {
  if (!contacts[req.params.index])
    return res.status(400).send("No data found");
  res.send(contacts[req.params.index]);
});
//update one resource with id e.g. index
app.put("/api/contacts/:index", function (req, res) {
  //   console.log(req.body);
  contacts[req.params.index] = req.body.name;
  res.send(contacts[req.params.index]);
});
//delete one resource
app.delete("/api/contacts/:index", function (req, res) {
  contacts.splice(req.params.index, 1);
  res.send(contacts);
});
// //create one resource
app.post("/api/contacts", function (req, res) {
    contacts.push(req.body.name);
  res.send(contacts);
});

app.listen(3000);