import { IAbstractConnectorOptions } from "../../helpers";

const ConnectToBsc = async (
  BscProvider: any,
) => {
  const provider = new BscProvider();

  await provider.enable();

  return provider;
};

