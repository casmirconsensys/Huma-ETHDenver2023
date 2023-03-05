import { AuthService, ERC20Service, NftService, tryRegisterSW } from "@liquality/wallet-sdk";
import { create } from "istanbul-reports";
import { nextTick } from "process";

const createNewWallet = async () => {

// Register a service worker hosted at the root of the site using the default scope.
    const registration = tryRegisterSW("/serviceworker/sw.js");

    const directParams = {
        baseUrl: `http://localhost:3005/serviceworker`,
        enableLogging: true,
        networkUrl: "https://goerli.infura.io/v3/a8684b771e9e4997a567bbd7189e0b27",
        network: "testnet",
      };

    // const tKey = AuthService.init(directParams);

    const verifierMap: Record<string, any> = {
        google: {
          name: "Google",
          typeOfLogin: "google",
          clientId:
            "852640103435-0qhvrgpkm66c9hu0co6edkhao3hrjlv3.apps.googleusercontent.com",
          verifier: "liquality-google-testnet",
        },
      };
      //TODO: Implement this functionality to be able to sign in with wallet. 

    // const response = await AuthService.createWallet(tKey, verifierMap);
    // const accountTokenList = await ERC20Service.listAccountTokens(
    //     response.loginResponse.publicAddress,
    //     1
    // );

    // const address = response.loginResponse.publicAddress
    // const web3Balance = await web3.eth.getBalance(address)
    // const balance = await AccountSerivce.getBalance(
    //     address,
    //     1
    // )

    // const nfts = await NftService.getNfts(address, 1);
    // const nftsAlchemy = await alchemy.nft.getNftsForOwner(address)

    // console.log({ address, web3Balance, balance, nfts, nftsAlchemy: nftsAlchemy.ownedNfts })
}

export default createNewWallet