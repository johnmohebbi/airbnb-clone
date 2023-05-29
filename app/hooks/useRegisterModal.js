import { create } from "zustand";

const useRegisterModal = create((set) => ({
  isOpen: false,
  registerInputsValue: {
    name: "",
    email: "",
    password: "",
  },
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  changeHandler: (inputId, inputV) =>
    set((state) => ({
      ...state,
      registerInputsValue: { ...state.registerInputsValue, [inputId]: inputV },
    })),
  ResetregisterInputsValue: () =>
    set((state) => ({
      ...state,
      registerInputsValue: {
        name: "",
        email: "",
        password: "",
      },
    })),
}));
export default useRegisterModal;
