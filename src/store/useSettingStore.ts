import { create } from "zustand";

interface SettingState {
    displayDummy : boolean
    toggleDisplayDummy : () => void
    autoBackup : boolean
    toggleAutoBackup : () => void
    reminder : boolean
    toggleReminder : () => void
}

const useSettingStore = create<SettingState>((set) => ({
    displayDummy: true,
    toggleDisplayDummy: () =>
        set((state) => ({ displayDummy: !state.displayDummy })),

    autoBackup: false,
    toggleAutoBackup: () =>
        set((state) => ({ autoBackup: !state.autoBackup })),

    reminder: false,
    toggleReminder: () =>
        set((state) => ({ reminder: !state.reminder })),
}));

export default useSettingStore;