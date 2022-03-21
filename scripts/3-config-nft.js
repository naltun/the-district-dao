import { readFileSync } from "fs";
import sdk from "./1-initialize-sdk.js";

export const bundle_drop_addr = "0x7eB18a81671902d649A40119f57c47Aa891caB5a";
const bundleDrop = sdk.getBundleDropModule(bundle_drop_addr);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Washington, DC Flag",
                description: "This NFT will give you access to The District Dao.",
                image: readFileSync("scripts/assets/the-district.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch(err) {
        console.error(`Failed to create the new NFT: ${err}`);
    }
})();
