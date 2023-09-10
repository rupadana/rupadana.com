import { create } from 'zustand';

export interface InitialCommandState {
    isOpen: boolean;
    showCommand(): void;
    hideCommand(): void;
    toggleCommand(): void;
}

export const useCommand = create<InitialCommandState>()(set => ({
    isOpen: false,
    showCommand: () => set({ isOpen: true }),
    hideCommand: () => set({ isOpen: false }),
    toggleCommand: () => set(prev => ({ isOpen: !prev.isOpen }))
}));
