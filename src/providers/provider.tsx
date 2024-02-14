"use client";

import client from "@/client/apolloClient";
import DarkModeProvider from "@/context/DarkMode";
import { ApolloProvider } from "@apollo/client";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <DarkModeProvider>{children}</DarkModeProvider>
    </ApolloProvider>
  );
}
