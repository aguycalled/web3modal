# WalletConnect

1. Install Provider Package

nothing to install

2. Set Provider Options

```typescript
import NoIndexedProvider from "@seascape/no-indexed-provider";

const providerOptions = {
  noindexedprovider: {
    package: NoIndexedProvider, // required
    options: {
      walletUrl: "https://metamask.io",
      title: "Install Metamask"
    }
  }
};
```

[See the full list of options for WalletConnect Web3 provider](https://docs.walletconnect.org/quick-start/dapps/web3-provider).

**Note:** A WalletConnect instance is available on the provider as `provider.wc`
