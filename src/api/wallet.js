import Web3 from 'web3';

import siteConfig from '../config/site.config';

const connect = async () => {
  const { ethereum } = window;
  if (ethereum) {
    try {
      const web3 = new Web3(Web3.givenProvider);
      const accounts = await web3.eth.requestAccounts();
      const networkId = await ethereum.request({
        method: "net_version",
      });
      if (networkId == siteConfig.NETWORK.ID) {
        if (accounts.length !== 0)
          return Promise.resolve({
            message: 'success',
            account: accounts[0]
          })
      }
      else {
        return Promise.reject({message: `Change network to ${siteConfig.NETWORK.NAME}.`})
      }
    }
    catch (error) {
      return Promise.reject({message: "Something went wrong."})
    }
  }
  else {
    return Promise.reject({message: "Install Metamask."})
  }
}

export {
  connect
}
