/* eslint-disable @typescript-eslint/no-unused-vars */
import createWithEqualityFn from "zustand";
import shallow from "zustand/shallow";
import { SEPOLIA_DAI } from "~~/utils/sablier/constants";
import type { IStoreFormLinear } from "~~/utils/sablier/types";

const initial: Omit<IStoreFormLinear, "api"> = {
  error: undefined,
  logs: [],

  amount: undefined,
  cancelability: true,
  cliff: undefined,
  duration: undefined,
  recipient: undefined,
  token: undefined,
  transferability: true,
};

const prefill: Omit<IStoreFormLinear, "api"> = {
  error: undefined,
  logs: [],

  amount: "100",
  cancelability: true,
  cliff: undefined,
  duration: "86400", // 1 day
  recipient: "0xCAFE000000000000000000000000000000000000",
  token: SEPOLIA_DAI,
  transferability: true,
};

const useStoreForm = createWithEqualityFn<IStoreFormLinear>(
  set => ({
    ...initial,
    api: {
      log: (value: string) =>
        set(prev => {
          return {
            logs: [...prev.logs, value],
          };
        }),
      update: (updates: Partial<IStoreFormLinear>) =>
        set(_prev => {
          return {
            ...updates,
          };
        }),
      reset: () =>
        set(_prev => {
          return initial;
        }),
    },
  }),
  // @ts-ignore
  shallow,
);

export { initial, prefill };
export default useStoreForm;
