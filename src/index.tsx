import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ClerkProvider } from "@clerk/clerk-react";
import { ptPT } from "@clerk/localizations";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

const stripePublishableKey =
  process.env.REACT_APP_ENV === "LOCAL"
    ? process.env.REACT_APP_STRIPE_TEST_PUBLISHABLE_KEY
    : process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

const stripePromise = loadStripe(stripePublishableKey as string);

const CLERK_PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

root.render(
  <React.StrictMode>
    <ClerkProvider
      localization={ptPT}
      publishableKey={CLERK_PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      <Elements stripe={stripePromise}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Elements>
    </ClerkProvider>
  </React.StrictMode>
);
