var HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = '00f7b8bf2f87d220bed966320ed6f4a57156593a7e217919569ba8ac61347a5d';
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {  
    development: {  
      host: "127.0.0.1",  
      port: 8545,  
      network_id: "*"  
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/772ec28487ec49a4911ef9d8ff960564`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  }  
};
