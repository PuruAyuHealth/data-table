import "@/styles/globals.css";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import BasicLayout from "../../Layout/BasicLayout";

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </ConfigProvider>
  );
}
