// https://eth-goerli.g.alchemy.com/v2/n_cWr_o8C8hQ2fn0VKV-J_AT9T_bmopj
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/n_cWr_o8C8hQ2fn0VKV-J_AT9T_bmopj',
      accounts: ['13a1d68911757b5f95be33fc402504e73fdda7ac8a54ab6f8fc4902216f03f59']
    }
  }
}