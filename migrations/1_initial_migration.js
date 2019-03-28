var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};




// const Migrations = artifacts.require("Migrations");
//
// module.exports = function(deployer) {
//   deployer.deploy(Migrations);
// };
