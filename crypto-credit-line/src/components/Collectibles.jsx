import { setupSDK } from "../../sr/utils";
import { NftService } from "@liquality/wallet-sdk";
import React, { useState } from "react";

export default function Collectibles() {
    // In order to use getNFTs() we need to have called the sdk.setup
  setupSDK();
  const [nfts, setNfts] = useState([]);
  const fetchNfts = async (address, chainId) => {
    const nfts = await NftService.getNfts(address, +chainId);
    console.log(JSON.stringify(nfts));
    setNfts(nfts);
  }
};