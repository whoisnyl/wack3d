import { createContext } from "react";

export const LayoutContext = createContext({
  loading: false,
  setLoading: () => {},
  error: false,
  setError: () => {},
  response: "",
  setResponse: () => {},
});
