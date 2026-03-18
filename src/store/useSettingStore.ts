import { create } from "zustand";

interface SettingState {
    showDummy : boolean
    toggleShowDummy : () => void
    autoBackup : boolean
    toggleAutoBackup : () => void
    reminder : boolean
    toggleReminder : () => void
    sortBy : 'none' | 'name' | 'status' | 'date' | 'amount'
    setSortBy : (sortBy : 'none' | 'name' | 'status' | 'date' | 'amount') => void
}

const useSettingStore = create<SettingState>((set) => ({
    showDummy: true,
    toggleShowDummy: () =>
        set((state) => ({ showDummy: !state.showDummy })),

    autoBackup: false,
    toggleAutoBackup: () =>
        set((state) => ({ autoBackup: !state.autoBackup })),

    reminder: false,
    toggleReminder: () =>
        set((state) => ({ reminder: !state.reminder })),
    sortBy : 'none',
    setSortBy : (sortBy) => set({sortBy : sortBy}),
}));

export default useSettingStore;