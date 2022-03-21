import { bundle_drop_addr } from "./3-config-nft.js";
import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(bundle_drop_addr);

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();
        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 1_500,
            maxQuantityPerTransaction: 1,
        });

        await bundleDrop.setClaimCondition(0, claimConditionFactory);
        console.log(`✅ Successfully set claim condition on bundle drop. Bundle drop address: ${bundleDrop.address}`);
    } catch(err) {
        console.error(`Failed to set a claim condition: ${err}`);
    }
})();
