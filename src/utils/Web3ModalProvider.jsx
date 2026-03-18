/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createAppKit } from "@reown/appkit/react";

import { WagmiProvider } from "wagmi";
import { mainnet } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { ConectivityProvider } from "./utils";
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient();

const projectId = "cba73ada547c01c1a64d7725fb732495";

const networks = [mainnet];

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  themeMode: "dark",
  allowUnsupportedChain: true,
  features: {
    swaps: false,
    onramp: false,
    email: false,
    socials: [],
  },
});

export function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter?.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConectivityProvider>
          <SnackbarProvider
            autoHideDuration={2000}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {children}
          </SnackbarProvider>
        </ConectivityProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
