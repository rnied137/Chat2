import { create } from "zustand";

export const useChatRouteStore = create((set) => ({
	route: "/",
	setRoute: (newRoute) => set({ route: newRoute }),
}));

export const useChatWindow = create((set) => ({
	input: "",
	setInput: (newInput) => set({ input: newInput }),
}));
