
import { getConfig } from '../config/near.config.js';
import * as nearAPI from 'near-api-js';



export async function initContract() {

    const nearConfig = getConfig(process.env.NODE_ENV || 'testnet');
    const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();
    const near = await nearAPI.connect({ keyStore, ...nearConfig });
    const walletConnection = new nearAPI.WalletConnection(near);

    // Load in user's account data
    let currentUser;
    if (walletConnection.getAccountId()) {
        currentUser = {
            // Gets the accountId as a string
            accountId: walletConnection.getAccountId(),
            // Gets the user's token balance
            balance: (await walletConnection.account().state()).amount,
        };
    }
    const contract = await new nearAPI.Contract(

        walletConnection.account(),
        nearConfig.contractName,
        {
            viewMethods: ["get_book", "get_books"],
            changeMethods: ["add_book", "update_book", "delete_book"],
            sender: walletConnection.getAccountId(),
        }
    );

    return { contract, currentUser, nearConfig, walletConnection };
}
