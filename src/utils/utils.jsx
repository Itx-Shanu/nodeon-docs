/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useAccount, useConfig } from "wagmi";

let initialState = {
  account: null,
  chainIdArray: [],
  chainId: 0,
};

export const defaultChainId = 1;

export const AppContext = createContext(initialState);
export const ConectivityProvider = ({ children }) => {
  const { address, isDisconnected, chainId } = useAccount();
  const { chains } = useConfig();
  const chainIds = chains?.map((info) => info?.id);

  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({
      account: address ?? null,
    });
  }, [isDisconnected, address]);
  return (
    <AppContext.Provider
      value={{
        account: state.account,
        chainIdArray: chainIds,
        chainId: chainId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
