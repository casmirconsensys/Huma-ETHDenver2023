import { setupSDK } from "../components/setUpSDK";
import { NftService } from "@liquality/wallet-sdk";
import React, { useState } from "react";

export default function Collectibles() {
  setupSDK();
  const [nfts, setNfts] = useState([]);
  const fetchNfts = async (address, chainId) => {
    const nfts = await NftService.getNfts(address, +chainId);
    console.log(JSON.stringify(nfts));
    setNfts(nfts);
  }
};