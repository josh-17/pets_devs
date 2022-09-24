// import sequelize module
var {Sequelize, DataTypes} = require("sequelize");

// instantiate sequelize and Database connection
var sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "pets_devs.sqlite"
});

// Establish connectionto the database
sequelize.sync().then(()=>{
    console.log("Connection to Database established.");
}).catch((error)=>{
    console.log("Unable to make connection to Database", error);
});

// pets and devs models
var Pets = sequelize.define("Pets",{
    petName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lifeSpan: {
        type:DataTypes.INTEGER,
    allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false
    },
    years: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

var Devs = sequelize.define("Devs", {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    programmingLanguage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    skills: {
        type: DataTypes.STRING,
        allowNull: false
    },
    yearsInField: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Create the Database tables as described respectively
sequelize.sync().then(()=>{
    console.log("Database Table created successfully.");
}).catch((error)=>{
    console.log("Failed to create Database Tables.", error);
});


// export the models for usage
module.exports = {Pets, Devs};