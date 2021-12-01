import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(initialValue) {
  const [darkModeValue, setDarkModeValue] = useLocalStorage(
    "darkModeValue",
    initialValue
  );
  return [darkModeValue, setDarkModeValue];
}
