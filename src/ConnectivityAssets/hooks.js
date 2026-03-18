import tokenAbi from "./tokenAbi.json";
import stakingAbi from "./stakingAbi.json";
import { tokenAddress, stakingAddress } from "./environment";
import {
  readContract,
  writeContract,
  waitForTransactionReceipt,
} from "@wagmi/core";
import { wagmiAdapter } from "../utils/Web3ModalProvider";

// const chainId = 97;

export const tokenReadFunction = async (functionName, args) => {
  const data = await readContract(wagmiAdapter?.wagmiConfig, {
    address: tokenAddress,
    abi: tokenAbi,
    functionName,
    args,
  });
  return data;
};

export const stakingReadFunction = async (functionName, args) => {
  const data = await readContract(wagmiAdapter?.wagmiConfig, {
    address: stakingAddress,
    abi: stakingAbi,
    functionName,
    args,
  });
  return data;
};

/// write functions
export const tokenWriteFunction = async (functionName, args) => {
  const hash = await writeContract(wagmiAdapter?.wagmiConfig, {
    address: tokenAddress,
    abi: tokenAbi,
    functionName,
    args,
  });
  const receipt = await waitForTransactionReceipt(wagmiAdapter?.wagmiConfig, {
    hash,
  });
  return receipt?.transactionHash;
};

export const stakingWriteFunction = async (functionName, args, value) => {
  const hash = await writeContract(wagmiAdapter?.wagmiConfig, {
    address: stakingAddress,
    abi: stakingAbi,
    functionName,
    args,
    value,
  });
  const receipt = await waitForTransactionReceipt(wagmiAdapter?.wagmiConfig, {
    hash,
  });
  return receipt?.transactionHash;
};
