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
}));
export default useRegisterModal;
