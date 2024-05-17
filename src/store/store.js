import { create } from 'zustand';

const useStore = create((set) => ({
  user: {},
  transactions:{},
  loginUser: (userObj) => set({ user: userObj }),
  addTransactios: (transactionsObj) => set({ transactions: transactionsObj }),

}));

export default useStore;
