var TodoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
deployer.deploy(TodoList);
};






// const TodoList = artifacts.require("TodoList.sol");
//
// module.exports = function(deployer) {
//   deployer.deploy(Migrations);
// };
