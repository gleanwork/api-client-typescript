
import React from "react";

import { GleanCore } from "../core.js";

const GleanContext = React.createContext<GleanCore | null>(null);

export function GleanProvider(props: { client: GleanCore, children: React.ReactNode }): React.ReactNode { 
  return (
    <GleanContext.Provider value={props.client}>
      {props.children}
    </GleanContext.Provider>
  );
}

export function useGleanContext(): GleanCore { 
  const value = React.useContext(GleanContext);
  if (value === null) {
    throw new Error("SDK not initialized. Create an instance of GleanCore and pass it to <GleanProvider />.");
  }
  return value;
}
