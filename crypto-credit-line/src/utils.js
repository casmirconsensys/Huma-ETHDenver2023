import { setup } from "@liquality/wallet-sdk";

export function setupSDK() {
    setup({
      alchemyApiKey: process.env.REACT_APP_PUBLIC_ALCHEMY_API_KEY,
      etherscanApiKey: process.env.REACT_APP_ETHERSCAN_API_KEY,
      infuraProjectId: "-",
      pocketNetworkApplicationID: "-",
      quorum: 1,
      slowGasPriceMultiplier: 1,
      averageGasPriceMultiplier: 1.5,
      fastGasPriceMultiplier: 2,
      gasLimitMargin: 2000,
    });
  }

export function getPrivateKey() {
    return JSON.parse(localStorage.getItem("loginResponse")).loginResponse.privateKey;
}