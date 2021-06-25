require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name random saddle umbrella include private equal general'; 
let testAccounts = [
"0x1104560faf9ba63e1d911510361b3667ed457a102e946278ab27932dd2cac0ec",
"0x87673df3410d12df53653a408bf89c3c4624409bfab66f38e0b4b4d5387473fb",
"0x92c8ed6dad0645617e0a0789477d4c821dfb72d6c6ab7a436d66be2d44ace342",
"0xbb90a17ea009137d49e1d7b45ce5073253879336d2575990e5ccb716a817bcc5",
"0x85b877669c9f59277f1275f9696a88124a66709ea25ab9138c8dcda442cdfe4a",
"0xe401babd75d718232c91a3edaf2e1e082da9ffbe0943c6e3e52ddfb8915d0dad",
"0x7b5b310eebbeaf0b5f2b972ec0327d47dcd5df0283defb2a479d2c24a7cf322c",
"0x29b45e9a06505b9386eeffd5a8f68ac6a74e657af96a8054bd694b29bad57cc7",
"0xef075a69427703a962513e3817cb5dc345f81fe2de4508edfe4f0fbc99a5f923",
"0x835b390f2eb655fe410b11b6e7b9f7b745dd71b3565d8b14de33406b94c482ff"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

