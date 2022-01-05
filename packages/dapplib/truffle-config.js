require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember minor imitate private fringe spider'; 
let testAccounts = [
"0x99616273a89c6303e321359c638a3dcf3e4209172ffc381c5ee3520c6204fb69",
"0x6f3a725cc8e6ae61ab6f055dc2741c21c796d2807df6148d4a8efd46b9b3fa95",
"0x0a65217005d3bd310a8322c22c064f349f033e76a3fe923d1db4bb9cff555928",
"0xd719d6ab706093167c1b9a014d8f629d361d5ae66a8fa4ce61464fad8207a0e6",
"0x120d29ea23c8bae9671b8a0de20b15e4b2cf2dc3daa17e55eaf1b4063dedad94",
"0xf6b0e4d8ad9699ef87212f131e8e799a767d94b4e4c77f03ee16d4e5609455a6",
"0x0d384c066859011b67679157ba03589a39a23a0f2a9a9a3b944b713eaa421eb7",
"0xe48a61c1cdcb3d713c6669dfa3f1d7335de62495e4938d5273a90bca6b1f7b65",
"0xf391226e1bf721f3c85162f1a0b837ce5078ec91a21608766599f6722e7f6a1c",
"0x4a4ff01876244ed5050b66776f502863290a589a037677dec9eec9d417d2f6a1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


