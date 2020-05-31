import { createContext } from "react";

export const LayoutContext = createContext({
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
  response: "",
  setResponse: () => {},
});
