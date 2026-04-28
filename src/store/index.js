import { create } from 'zustand'

const DEFAULTS = {
  color: '#2e2e2e',
  scale: 0.08,
}

const useMacbookStore = create((set) => ({
  ...DEFAULTS,
  setColor: (color) => set({ color }),
  setScale: (scale) => set({ scale }),
  reset: () => set(DEFAULTS),
}))

export default useMacbookStore;