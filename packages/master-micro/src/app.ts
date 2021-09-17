import { useState } from 'react';

export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState<number | undefined>();

  return {
    masterState,
    setMasterState,
  };
}

