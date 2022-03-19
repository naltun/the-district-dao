import { useEffect, useMemo, useState } from "react";

import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  // Use the connectWallet hook to connect our wallet.
  const { connectWallet, address, error, provider } = useWeb3();
  console.log(`👋 Address: ${address}`);

  // Prompt the user to connect their wallet if it has not been done.
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to The District DAO</h1>
        <h2>Home of the native Washington, DC cryptocurrency and Decentralized Autonomous
          Organization <a href="https://ethereum.org/en/dao/" target="_blank" rel="noreferrer">(DAO)</a>.</h2>

        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }

  // Return if the user's wallet is connected.
  return (
    <div className="landing">
      <h1>Wallet connected</h1>
    </div>
  );
};

export default App;
