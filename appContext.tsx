/* eslint-disable import/no-extraneous-dependencies */
"use client";
import React, { FC, useState, createContext } from "react";

type ContextType = {
  headerStick: boolean;
  setHeaderStick: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppCtx = createContext<ContextType | undefined>({
  headerStick: false,
  setHeaderStick: () => {},
});

const AppCtxProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [headerStick, setHeaderStick] = useState<boolean>(false);

  const values = {
    headerStick,
    setHeaderStick,
  };

  return <AppCtx.Provider value={values}>{children}</AppCtx.Provider>;
};

export default AppCtxProvider;
