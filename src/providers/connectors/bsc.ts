const ConnectToBinance = async (BscConnectProvider: any) => {
  const provider = new BscConnectProvider();

  await provider.activate();

  return provider.getProvider();
};

export default ConnectToBinance;
