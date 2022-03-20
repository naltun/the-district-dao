import { readFileSync } from "fs";
import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const alchemy_addr = "0x8dE43b32605743bdE377244A2894A3205d844299";
const app = sdk.getAppModule(alchemy_addr);

(async () => {
    try {
        // Metadata around our NFT bundle
        const bundleDropModule = await app.deployBundleDropModule({
            name: "The District DAO Membership",
            description: "A DAO for the Washington, DC community",
            image: readFileSync("scripts/assets/the-district.png"),
            // Use address 0x0 since we do not want to charge for the drop.
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log(`✅ Successfully deployed bundleDrop module, address: ${bundleDropModule.address}`);
        console.log("✅ bundleDrop metadata:", await bundleDropModule.getMetadata());
    } catch(err) {
        console.error(`Failed to deploy bundleDrop module: ${err}`);
    }
})();
