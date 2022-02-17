//https://eth-rinkeby.alchemyapi.io/v2/2XSNqW5adb2zHqlOb96GxGpCOZt-blmi
// alchemy is blockchain developer. It would help us to deploy smart_contract to specific network.

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/2XSNqW5adb2zHqlOb96GxGpCOZt-blmi",
      accounts: [
        "3106623c49435e6175f24fcc31a0baa52c38b6a4014054b356f3eea868c37953",
      ],
      //the account we would use to fund the contract
    },
  },
};
