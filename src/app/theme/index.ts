import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  //   token: {
  //     fontSize: 14,
  //     colorPrimary: "#52c41a",
  //   },
  components: {
    Button: {
      colorPrimary: "#4599DB",
    },
    Input: {
      activeBg: "transparent",

      colorText: "white",
      colorBgContainer: "transparent",
      colorBgBase: "transparent",
      colorTextPlaceholder: "rgba(255, 255, 255, 0.4)",
    },
    Typography: {
      colorText: "#fff",
    },
  },
};

export default theme;
