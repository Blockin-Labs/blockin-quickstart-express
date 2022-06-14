import EthDriver from 'blockin-eth-driver';
import AlgoDriver from 'blockin-algo-driver';
/**
 * Blockin is built on the core concept of a ChainDriver: https://blockin.gitbook.io/blockin/reference/library-documentation/chain-drivers
 *
 * Blockin provides an Ethereum ChainDriver already implemented via the blockin-eth-driver npm package using ethers.js and Moralis SDK.
 *
 * However, you may also choose to implement the ChainDriver interface on your own. It is pretty easy, see:
 * https://blockin.gitbook.io/blockin/reference/library-documentation/chain-drivers
 *
 * Sign-In with Ethereum, by default, doesn't need to lookup any data on the blockchain, so a ChainDriver with an API key IS NOT mandatory.
 *
 * However if you want to use any of the following additional Blockin features that do lookup data, you will need
 * to use a ChainDriver with an API key:
 * - Checking user's ownership of certain NFTs
 * - Generating a nonce using a recent block info, such as a timestamp or hash
 * - Checking an asset's metadata
 */
export const getChainDriver = (chain) => {
    //This uses the Blockin provided EthDriver template. You can also choose to custom implement on your own.

    /**
     * If an API key is not desired, leave the second parameter undefined.
     *
     * If one is desired, visit https://docs.moralis.io/moralis-dapp/getting-started/create-a-moralis-dapp#create-a-moralis-dapp
     * to set up a Moralis dApp free account.
     */
    const ethDriver = new EthDriver(
        'Mainnet',
        undefined
        // {
        //     serverUrl: process.env.SERVER_URL,  //add a .env file with these values
        //     appId: process.env.APP_ID,
        //     masterKey: process.env.MASTER_KEY
        // }
    );

    const algoDriver = new AlgoDriver(
        'Mainnet',
        undefined
        // process.env.API_KEY  //add a .env file with this value
    );

    switch (chain) {
        case 'Ethereum':
            return ethDriver;
        default:
            return ethDriver;
    }
};
