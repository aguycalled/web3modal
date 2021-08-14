const ConnectToBinance = async () => {
  let provider = null;
  if (typeof window.BinanceChain !== 'undefined') {
    provider = window.BinanceChain;
    try {
      await provider.request({ method: 'eth_requestAccounts' })
    } catch (error) {
      throw new Error("User Rejected");
    }
    provider = window.web3.currentProvider;
  } else {
    throw new Error("No Web3 Provider found");
  }
  return provider;
};

export default ConnectToBinance;
