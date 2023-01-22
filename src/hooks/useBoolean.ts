import { useState, useCallback } from "react";

export default function useBoolean(defaultValue?: boolean) {
  const [value, setValue] = useState(!!defaultValue);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((value) => !value), []);
  return { value, setTrue, setFalse, toggle };
}
