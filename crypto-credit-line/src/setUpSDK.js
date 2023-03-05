import { setup } from "@liquality/wallet-sdk";

export function setupSDK() {
  setup({
    alchemyApiKey: "D6z3cTrfd5ffFhHjKSRTB7MQ5ilJ6Z_Y",
    etherscanApiKey: "EV6YEWMRNIPYN9QHWE9DJ1C26I3JYDR1JY",
    infuraProjectId: "761519c1808f45f788da94df69dabea8",
    pocketNetworkApplicationID: "-",
    quorum: 1,
    slowGasPriceMultiplier: 1,
    averageGasPriceMultiplier: 1.5,
    fastGasPriceMultiplier: 2,
    gasLimitMargin: 2000,
  });
}