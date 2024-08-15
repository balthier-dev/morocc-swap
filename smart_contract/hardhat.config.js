require('@nomiclabs/hardhat-waffle');
require("@nomicfoundation/hardhat-verify");
const { vars } = require("hardhat/config");

module.exports = {
  solidity: '0.8.20',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3'],
    },
    maxi: {
      url: 'https://rpc-testnet.maxi.network',
      accounts: [vars.get("TEST_PK")],
      apiKey: "YOUR_ETHERSCAN_API_KEY"
    }
  },
};
