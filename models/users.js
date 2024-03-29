'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    permissions: DataTypes.ENUM("admin","normal")
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
