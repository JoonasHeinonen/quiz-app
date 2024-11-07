import { create } from 'zustand';

const scoreStore = create((set) => ({
  score: 0,
  maxScore: 0,
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set({ score: 0 }),
  setMaxScore: (newMaxScore) => set({ maxScore: newMaxScore })
}));

export default scoreStore;