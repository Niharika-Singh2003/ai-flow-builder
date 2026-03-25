import { create } from 'zustand';

const useFlowStore = create((set) => ({
  prompt: '',
  response: '',
  isLoading: false,
  isSaving: false,
  isFlowAnimating: false,
  flowAnimationKey: 0,
  setPrompt: (prompt) => set({ prompt }),
  setResponse: (response) => set({ response }),
  setLoading: (isLoading) => set({ isLoading }),
  setIsSaving: (isSaving) => set({ isSaving }),
  startFlowAnimation: () =>
    set((state) => ({
      isFlowAnimating: true,
      flowAnimationKey: state.flowAnimationKey + 1,
    })),
  stopFlowAnimation: () => set({ isFlowAnimating: false }),
}));

export default useFlowStore;
