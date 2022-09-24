// import modules
var express = require("express");
var {Devs, Pets} = require("../model/models");
// var {Pets} = require("../model/models");
var api = express.Router();



api.get("/home", function (request, response) {
    response.json("Welcome Home Developer..!");
});


// Endpoints for the Developers

api.get("/devs", function (request, response) {
    Devs.findAll().then((devs) => {
        response.json(devs);
    });
});

api.get("/dev/:userId", function (request, response) {
    // cretae variable to get the requested id
    const dev_id = request.params.userId;
    Devs.findOne({ where: { id: dev_id } }).then((dev) => {
        response.json(dev);
    });
});

api.post("/dev", function(request, response){
    Devs.create(request.body).then(()=>{
        response.json("Developer successfully SAVED!");
    });
});

api.put("/dev/:userId", function (request, response) {
    // get the requested Id
    const dev_id = request.params.userId;
    Devs.findOne({ where: { id: dev_id } }).then((dev) => {
        dev.fullName = request.body.fullName;
        dev.programmingLanguage = request.body.programmingLanguage;
        dev.skills = request.body.skills;
        dev.yearsInField = request.body.yearsInField;
        dev.email = request.body.email;
        dev.phone_number = request.body.phone_number;
        dev.save();
    }).then(() => {
        response.json("Developer successfully UPDATED!");
    });
});

api.delete("/dev/:userId", function (request, response) {
    // get the requested Id
    const dev_id = request.params.userId;
    Devs.destroy({ where: { id: dev_id } }).then(() => {
        response.json("Developer successfully DELETED!");
    });
});

// Endpoints  for the Pets
api.get("/pets/home", function(request, response){
    response.json("Welcome to the house of good Pets");
});

api.get("/pets", function(request, response){
    Pets.findAll().then((pets)=>{
        response.json(pets);
    });
});

api.get("/pet/:petId", function(request, response){
    // Get the requested ID
    const pet_id = request.params.petId;
    Pets.findOne({where:{id: pet_id}}).then((pet)=>{
        response.json(pet);
    });
});

api.post("/pet", function(request, response){
    Pets.create(request.body).then(()=>{
        response.json("Pet succesfully SAVED!");
    });
});

api.put("/pet/:petId", function(request, response){
    // Get the Pet ID
    const pet_id = request.params.petId;
    Pets.findOne({where: {id: pet_id}}).then((pet)=>{
        pet.petName = request.body.petName;
        pet.breed = request.body.breed;
        pet.lifeSpan = request.body.lifeSpan;
        pet.sex = request.body.sex;
        pet.years = request.body.years;
        pet.save();
    }).then(()=>{
        response.json("Pet succesfully Updated.");
    });
});

api.delete("/pet/:petId", function(request, response){
    // Get the pet Id from request
    const pet_id = request.params.petId;
    Pets.destroy({where:{id: pet_id}}).then(()=>{
        response.json("Pet succesfully DELETED!");
    });
});



module.exports = api;