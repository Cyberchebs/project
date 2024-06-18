import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const featureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [Loading, SetLoading] = useState(false);
  const [enabledFlags, SetEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      SetLoading(true);
      //original service call
      const response = await featureFlagsDataServiceCall();
      SetEnabledFlags(response);
      SetLoading(false);
    } catch (error) {
      console.log(error);
      SetLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <featureFlagsContext.Provider value={{ Loading, enabledFlags }}>
      {children}
    </featureFlagsContext.Provider>
  );
}
