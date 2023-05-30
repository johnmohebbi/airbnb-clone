import { create } from "zustand";

const useLoginModal = create((set) => ({
  isOpen: false,
  loginInputsValue: {
    email: "",
    password: "",
  },
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  changeHandler: (inputId, inputV) =>
    set((state) => ({
      ...state,
      loginInputsValue: { ...state.loginInputsValue, [inputId]: inputV },
    })),
  ResetLoginInputsValue: () =>
    set((state) => ({
      ...state,
      loginInputsValue: {
        email: "",
        password: "",
      },
    })),
}));
export default useLoginModal;
