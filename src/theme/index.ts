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
    DatePicker: {
      colorTextBase: "#ff55ff",
      // colorText: "white",
      colorBgContainer: "transparent",
      colorTextPlaceholder: "rgba(255, 255, 255, 0.4)",
    },
    Form: {
      labelColor: "rgba(255, 255, 255, 0.35)",
    },
    Input: {
      colorText: "white",
      activeBg: "transparent",
      colorBgContainer: "transparent",
      colorBgBase: "transparent",
      colorTextPlaceholder: "rgba(255, 255, 255, 0.4)",
      colorTextDisabled: "rgba(255, 255, 255, 0.7)",
    },
    InputNumber: {
      colorText: "white",
      activeBg: "transparent",
      colorBgContainer: "transparent",
      colorBgBase: "transparent",
      colorTextPlaceholder: "rgba(255, 255, 255, 0.4)",
    },
    Select: {
      colorText: "white",
      selectorBg: "transparent",
      colorTextPlaceholder: "rgba(255, 255, 255, 0.4)",
    },
    Tabs: {
      inkBarColor: "#ffffff",
      itemColor: "#ff00ff",
      itemSelectedColor: "%00ff00",
    },
    Typography: {
      colorText: "#fff",
      margin: 0,
    },
  },
};

export default theme;
