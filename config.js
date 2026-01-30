const { Cluster } = require('@solana/web3.js');

module.exports = {
    RPC_URL: "https://api.devnet.solana.com",
    // Warning: In production, use environment variables for keys
    PRIVATE_KEY: [0, 0, 0, 0], // Replace with your secret key array
    TOKEN_DECIMALS: 9,
    INITIAL_SUPPLY: 1000000
};
