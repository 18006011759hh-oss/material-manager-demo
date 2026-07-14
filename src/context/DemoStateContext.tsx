import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export interface DemoState {
  m088MarkedExpired: boolean;
  published: boolean;
  synced: boolean;
  moved: boolean;
  guideActive: boolean;
  guideStep: number;
  guideWelcomeSeen: boolean;
  guideComplete: boolean;
  batchUnavailableSet: boolean;
  batchImportantSet: boolean;
  classified: boolean;
}

const initialState: DemoState = {
  m088MarkedExpired: false,
  published: false,
  synced: false,
  moved: false,
  guideActive: false,
  guideStep: 0,
  guideWelcomeSeen: false,
  guideComplete: false,
  batchUnavailableSet: false,
  batchImportantSet: false,
  classified: false,
};

interface DemoContextValue {
  state: DemoState;
  markM088Expired: () => void;
  publishUpdate: () => void;
  syncUpdate: () => void;
  moveM088: () => void;
  resetDemo: () => void;
  startGuide: () => void;
  browseFreely: () => void;
  exitGuide: () => void;
  continueToEditor: () => void;
  setBatchUnavailable: () => void;
  setBatchImportant: () => void;
  continueToPublish: () => void;
  confirmAiClassification: () => void;
  restartGuide: () => void;
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
    syncUpdate: () => setState((current) => current.published ? { ...current, synced: true, guideStep: current.guideActive && current.guideStep === 3 ? 4 : current.guideStep } : current),
    moveM088: () => setState((current) => current.synced ? { ...current, moved: true, guideStep: current.guideActive && current.guideStep === 4 ? 5 : current.guideStep } : current),
    resetDemo: () => setState(initialState),
    startGuide: () => setState({ ...initialState, guideActive: true, guideStep: 1, guideWelcomeSeen: true }),
    browseFreely: () => setState((current) => ({ ...current, guideWelcomeSeen: true, guideActive: false, guideStep: 0 })),
    exitGuide: () => setState((current) => ({ ...current, guideActive: false, guideStep: 0, guideComplete: false, guideWelcomeSeen: true })),
    continueToEditor: () => setState((current) => ({ ...current, guideStep: current.guideActive && current.guideStep === 2 && current.published ? 3 : current.guideStep })),
    setBatchUnavailable: () => setState((current) => ({ ...current, batchUnavailableSet: true, m088MarkedExpired: true })),
    setBatchImportant: () => setState((current) => ({ ...current, batchImportantSet: true })),
    continueToPublish: () => setState((current) => ({ ...current, guideStep: current.guideActive && current.guideStep === 1 && current.batchUnavailableSet && current.batchImportantSet ? 2 : current.guideStep })),
    confirmAiClassification: () => setState((current) => ({ ...current, classified: true, guideComplete: current.guideActive && current.guideStep === 5 })),
    restartGuide: () => {
      localStorage.removeItem(STORAGE_KEY);
      setState({ ...initialState, guideActive: true, guideStep: 1, guideWelcomeSeen: true });
    },
  }), [state]);

  return <DemoStateContext.Provider value={value}>{children}</DemoStateContext.Provider>;
}

export function useDemoState() {
  const context = useContext(DemoStateContext);
  if (!context) throw new Error('useDemoState must be used within DemoStateProvider');
  return context;
}
