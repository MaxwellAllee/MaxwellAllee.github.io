var db = require("../models");

module.exports = function (app) {
  // Load index page


  // Load example page and pass in an example by id
  app.get("/", function (req, res) {
    res.render("bio");
  });
  app.get("/contact", function (req, res) {
    res.render("contact");
  });
  app.get("/port", function (req, res) {
    db.Portfolio.findAll({})
      .then(function(data) {
        res.render("port", { websites: data });
      });
  });

// Render 404 page for any unmatched routes
app.get("*", function (req, res) {
  res.render("404");
});
};
