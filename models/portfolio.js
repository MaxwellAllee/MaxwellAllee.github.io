module.exports = function(sequelize, DataTypes) {
  var Portfolio = sequelize.define("Portfolio", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      
    },
    html: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cli: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    database: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    project: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photo:{
      type: DataTypes.STRING
    }
  });
  return Portfolio;
};
