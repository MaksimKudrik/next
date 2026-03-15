
import { Session } from "next-auth";
import { create } from "zustand";

type SessionStatus = "loading" | "authenticated" | "unauthenticated";

interface AuthStore {
  isAuth: boolean;
  status: SessionStatus;
  session: Session | null;
  setAuthState: (status: SessionStatus, session: Session | null) => void;
}

export const useAuthStore = create<AuthStore>((set)=>({
  isAuth: false,
  status: "loading",
  session: null,
  setAuthState: (status: SessionStatus, session: Session | null) => 
    set({ 
      isAuth: status === "authenticated",
      status, 
      session 
    }),
}));