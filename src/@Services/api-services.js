/**
 * Modified By @name Sukumar_Abhijeet,
 */

import Config from '../@Config/default';
const { BASE_PATH,API_PREFIX,SECURE_KEY } = Config;

function processResponse(response) {
    if (!response.ok) {
        throw response;
    }
    response = response.json();
    return response;
}

function signUp(email, phone) {
    const url = BASE_PATH + API_PREFIX + '/user/signup';
    return fetch(url, {
        method: 'POST',
        headers: {
            'x-api-key' : SECURE_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phoneNumber: phone,
            email,
        }),
    }).then(processResponse);
}

function recoverAccount(email, phone) {
    return fetch(BASE_PATH + API_PREFIX + '/user/recoveraccount', {
        method: 'POST',
        headers: {
            'x-api-key' : SECURE_KEY,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phoneNumber: phone,
            email,
        }),
    }).then(processResponse);
}

function signIn(email, phone) {
    return fetch(BASE_PATH + API_PREFIX + '/user/login', {
        method: 'POST',
        headers: {
            'x-api-key' : SECURE_KEY,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phoneNumber: phone,
            email
        }),
    }).then(processResponse);
}

function verifyOTP(email, phone, otp) {
    return fetch(BASE_PATH + API_PREFIX + '/user/verifyOTP', {
        method: 'POST',
        headers: {
            'x-api-key' : SECURE_KEY,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phoneNumber: phone,
            email,
            otp
        }),
    }).then(processResponse);
}

function resendOTP(email, phone) {
    return fetch(BASE_PATH + API_PREFIX + '/user/resendOTP', {
        method: 'POST',
        headers: {
            'x-api-key' : SECURE_KEY,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phoneNumber: phone,
            email
        }),
    }).then(processResponse);
}

function mnemonicGenerated(email, phone,walletAddress) {
    return fetch(BASE_PATH + API_PREFIX + '/user/mnemonicgenerated', {
        method: 'POST',
        headers: {
            'x-api-key' : SECURE_KEY,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phoneNumber: phone,
            email,
            walletAddress
        }),
    }).then(processResponse);
}

function getExchangePrice() {
    const url =  `${BASE_PATH}/v1/price/all`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key' : SECURE_KEY,
        },
    }).then(processResponse);
}

function getEtheriumBalance(address) {
    const url = `${BASE_PATH}/v1/l1/balance/all/${address}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key' : SECURE_KEY,
        },
    }).then(processResponse);
}

function getZkSyncTokens() {
    const url =  `${BASE_PATH}/v1/zksync/tokens`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key' : SECURE_KEY,
        },
    }).then(processResponse);
}

function getAccountBalances(address) {
    const url =  `${BASE_PATH}/v1/zksync/account/${address}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key' : SECURE_KEY,
        },
    }).then(processResponse);
}

function getTransferFundProcessingFee(symbol,address,type='transfer') {
    const url =  `${BASE_PATH}/v1/zksync/txfee/${type}/${symbol}/${address}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key' : SECURE_KEY,
        },
    }).then(processResponse);
}

function setTransactionDetailsWithServer(body){
    const url =  `${BASE_PATH+API_PREFIX}/transactions/create`;
    const stringifyObj = JSON.stringify(body);
    return fetch(url, {
        method: 'POST',
        headers: {
            'x-api-key' : SECURE_KEY,
            'Content-Type': 'application/json',
        },
        body : stringifyObj
    }).then(processResponse);
}

function getTransactionHistory(address) {
    const url =  `${BASE_PATH + API_PREFIX}/transactions/list-by-add/${address}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key' : SECURE_KEY,
        },
    }).then(processResponse);
}

function getCurrencyRate(Currency = 'USD') {
    const url =  `${BASE_PATH + API_PREFIX}/currency-exchange/${Currency}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key' : SECURE_KEY,
        },
    }).then(processResponse);
}

function getIsAccountUnlockedFromServer(accAddress) {
    const url =  `${BASE_PATH + API_PREFIX}/user/accountstatus/${accAddress}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key' : SECURE_KEY,
        },
    }).then(processResponse);
}

function updateIsAccountUnlockedWithServer(email,phone) {
    const url =  `${BASE_PATH + API_PREFIX}/user/updateaccountstatus`;
    const body = JSON.stringify({
        email: email,
        phoneNumber : phone
    });
    return fetch(url, {
        method: 'POST',
        body,
        headers: {
            'x-api-key' : SECURE_KEY,
            'Content-Type': 'application/json'
        },
    }).then(processResponse);
}

function getCurrencyList() {
    const url =  `${BASE_PATH + API_PREFIX}/currency-exchange/currency-list`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key' : SECURE_KEY,
        },
    }).then(processResponse);
}

function updateUserPhoneEmail(email,phone,newEmail,newPhone) {
    const url =  `${BASE_PATH + API_PREFIX}/user/update`;
    const body = JSON.stringify({
        email: email,
        phoneNumber : phone,
        newEmail : newEmail,
        newPhoneNumber : newPhone
    });
    return fetch(url, {
        method: 'POST',
        body,
        headers: {
            'x-api-key' : SECURE_KEY,
            'Content-Type': 'application/json'
        },
    }).then(processResponse);
}

export default (APIService = {
    signUp,
    recoverAccount,
    signIn,
    resendOTP,
    verifyOTP,
    mnemonicGenerated,
    getExchangePrice,
    getEtheriumBalance,
    getZkSyncTokens,
    getAccountBalances,
    getTransferFundProcessingFee,
    setTransactionDetailsWithServer,
    getTransactionHistory,
    getCurrencyRate,
    getCurrencyList,
    updateUserPhoneEmail,
    getIsAccountUnlockedFromServer,
    updateIsAccountUnlockedWithServer
});