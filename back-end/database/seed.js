const { db } = require("./index.js");
const {Myimage} = require("./Myimage.js");

const sampleData = require("../data.json");

const insertSampleImages = function () {
    Myimage.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSampleImages();