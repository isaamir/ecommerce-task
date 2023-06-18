import "@/styles/globals.css";
import Layout from "./layout";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useStore } from "@/state";


export default function App({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
