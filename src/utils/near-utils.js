import getConfig from '../config/near.config';
import * as nearAPI from 'near-api-js';

const { Contract } = nearAPI;

export function getContract(account) {
    return new Contract(account, contractName, { ...contractMethods });
}
export const getBooks = async () => {
    const near = await nearAPI.connect({
        networkId, nodeUrl, walletUrl, deps: { keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore() },
    });
    const wallet = new nearAPI.WalletAccount(near);
    return { near, wallet };
};
export const addBook = async ({ title, description, status, image }) => {
    return await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            title, description, status, image,
            ...(await getSignature(account))
        })
    }).then((res) => res.json());
};