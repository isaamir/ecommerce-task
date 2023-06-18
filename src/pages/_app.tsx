import "@/styles/globals.css";
import Layout from "./layout";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistor, useStore } from "@/state";
import { PersistGate } from "redux-persist/integration/react";


export default function App({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </PersistGate>
    </Provider>
  );
}
