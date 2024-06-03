/* eslint-disable no-empty */
import { useState } from "react";
import { Function } from "@/utils";

export const useLocalStorage = (keyName: string, defaultValue: any) => {
  const ttl = 86400000 * 1; // days
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = Function.getWithExpiry(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        Function.setWithExpiry(keyName, JSON.stringify(defaultValue), ttl);
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue: any, ttls: number) => {
    try {
      Function.setWithExpiry(keyName, JSON.stringify(newValue), ttls || ttl);
    } catch (err) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
