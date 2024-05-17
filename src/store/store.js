import { create } from 'zustand';

const useStore = create((set) => ({
  user: {},
  loginUser: (userObj) => set({ user: userObj }),
}));

export default useStore;
