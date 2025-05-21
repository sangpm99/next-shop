"use client";
import "@ant-design/v5-patch-for-react-19";

import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

import type { ReactNode } from "react";

function AntdComponentsWrapper({ children }: { children: ReactNode }) {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "rgba(81,73,66)",
            colorSuccess: "rgba(0,128,96)",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
}

export default AntdComponentsWrapper;
