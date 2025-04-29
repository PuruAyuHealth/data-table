import { Layout } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
const { Header, Content } = Layout;

function BasicLayout({ children }) {
  const router = useRouter();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          padding: 0,
          background: "#29104d",
          boxShadow: "0 1px 4px rgba(0,21,41,.08)",
          borderBottom: "1px solid #f5f6f7",
          top: "0",
          height: "fit-content",
          position: "fixed",
          zIndex: 999,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            minHeight: 60,
            marginLeft: 10,
          }}
        >
          <Image
            src="https://cdn.prod.website-files.com/66df39e52e08c9b81c286f7c/66e1d4939fc69d24fbf0fc7b_Gaana.png"
            width={200}
            alt="logo"
            height={50}
            style={{
              cursor: "pointer",
            }}
            objectFit="contain"
            onClick={() => router.replace("/")}
          />
        </div>
      </Header>
      <Content
        style={{
          marginTop: 60,
          overflowY: "auto",
          height: "calc(100vh-60px)",
          backgroundColor: "#29104d",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}

export default BasicLayout;
