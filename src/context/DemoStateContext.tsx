import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export interface DemoState {
  m088MarkedExpired: boolean;
  published: boolean;
  synced: boolean;
  moved: boolean;
}

const initialState: DemoState = {
  m088MarkedExpired: false,
  published: false,
  synced: false,
  moved: false,
};

interface DemoContextValue {
  state: DemoState;
  markM088Expired: () => void;
  publishUpdate: () => void;
  syncUpdate: () => void;
  moveM088: () => void;
  resetDemo: () => void;
}

const DemoStateContext = createContext<DemoContextValue | null>(null);
const STORAGE_KEY = 'material-manager-demo-state-v1';

export function DemoStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DemoState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...initialState, ...JSON.parse(saved) } : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<DemoContextValue>(() => ({
    state,
    markM088Expired: () => setState((current) => ({ ...current, m088MarkedExpired: true })),
    publishUpdate: () => setState((current) => current.m088MarkedExpired ? { ...current, published: true } : current),
    syncUpdate: () => setState((current) => current.published ? { ...current, synced: true } : current),
    moveM088: () => setState((current) => current.synced ? { ...current, moved: true } : current),
    resetDemo: () => setState(initialState),
  }), [state]);

  return <DemoStateContext.Provider value={value}>{children}</DemoStateContext.Provider>;
}

export function useDemoState() {
  const context = useContext(DemoStateContext);
  if (!context) throw new Error('useDemoState must be used within DemoStateProvider');
  return context;
}
