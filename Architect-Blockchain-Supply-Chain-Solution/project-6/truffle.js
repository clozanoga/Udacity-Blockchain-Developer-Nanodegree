const HDWallet = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      //provider: () => new HDWallet('wash tray glide radar choice wreck avoid seat adult guide mouse ivory', 'http://localhost:8545'),
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    
    goerli: {
     // 09fefd7063ff4a68ac03e215c5b16164
     // wheel night biology margin sheriff frequent gauge tail erupt action tail human
      provider: () => new HDWallet('stuff jacket symbol flush recipe paddle awkward fee supreme boost toddler tissue', 'https://goerli.infura.io/v3/52c013c2cc184c8ebbb137ae8448341b'),
      network_id: 5,
      //networkCheckTimeout: 99999,
      gas: 3800000,
      gasPrice: 10992342 //43584994560,
    }
    // 0xcc0bc1b0cb210fa6663e97e5c94709ff83df02c28f91c7bd2b3f20c486880598
  }
};
