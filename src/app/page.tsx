"use client";
import { Heading } from "@/components/ui-components/Typography";
import DarkModeProvider, { useDarkMode } from "@/context/DarkMode";
import styled from "styled-components";

export default function Home() {
  const { isDarkMode } = useDarkMode();

  return (
    <main className={isDarkMode ? " dark" : ""}>
      <Heading>Dentalkart Website</Heading>
    </main>
  );
}
