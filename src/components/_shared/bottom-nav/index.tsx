"use client";
import { ConfigProvider, Tabs, TabsProps } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";

interface ILabelTab {
  icon: React.ReactNode;
  label: string;
  tabSelected: string;
}
const LabelTab: React.FC<ILabelTab> = ({ icon, label, tabSelected }) => (
  <div className="flex flex-col justify-center items-center flex-1 w-full">
    {icon}
    <Paragraph
      className={`${
        tabSelected === label.toLowerCase()
          ? "bg-gradient-gold bg-clip-text text-transparent"
          : "text-gray-400"
      }`}
    >
      {label}
    </Paragraph>
  </div>
);

const Index = ({ children }: any) => {
  const router = useRouter();
  const pathname = usePathname();

  console.log("pathname ", pathname);

  const [tabSelected, setTabSelected] = useState<string>("message");
  const onChange = (key: string) => {
    setTabSelected(key);
    router.push(`/${key}`);
  };

  const items: TabsProps["items"] = [
    {
      key: "message",
      label: (
        <LabelTab
          icon={
            <LuMessagesSquare
              size={24}
              className="text-white bg-clip-text text-transparent"
            />
          }
          label="Messages"
          tabSelected={tabSelected}
        />
      ),
      children: children,
    },
    {
      key: "metaphysics",
      label: (
        <LabelTab
          icon={
            <LuMessagesSquare
              size={24}
              className="text-white bg-clip-text text-transparent"
            />
          }
          label="Metaphysics"
          tabSelected={tabSelected}
        />
      ),
      children: children,
    },
    {
      key: "matches",
      label: (
        <LabelTab
          icon={
            <LuMessagesSquare
              size={24}
              className="text-white bg-clip-text text-transparent"
            />
          }
          label="Matches"
          tabSelected={tabSelected}
        />
      ),
      children: children,
    },
    {
      key: "likes",
      label: (
        <LabelTab
          icon={
            <LuMessagesSquare
              size={24}
              className="text-white bg-clip-text text-transparent"
            />
          }
          label="Likes"
          tabSelected={tabSelected}
        />
      ),
      children: children,
    },
    {
      key: "me",
      label: (
        <LabelTab
          icon={
            <LuMessagesSquare
              size={24}
              className="text-white bg-clip-text text-transparent"
            />
          }
          label="Me"
          tabSelected={tabSelected}
        />
      ),
      children: children,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            inkBarColor:
              "linear-gradient(90deg, #94783E 5%, #F3EDA6 30%, #F8FAE5 35%, #FFE2BE 56%, #D5BE88 70%, #F8FAE5 80%, #D5BE88 90%)",
            itemColor:
              "linear-gradient(90deg, #94783E 5%, #F3EDA6 30%, #F8FAE5 35%, #FFE2BE 56%, #D5BE88 70%, #F8FAE5 80%, #D5BE88 90%)",
            itemActiveColor:
              "linear-gradient(90deg, #94783E 5%, #F3EDA6 30%, #F8FAE5 35%, #FFE2BE 56%, #D5BE88 70%, #F8FAE5 80%, #D5BE88 90%)",
          },
        },
      }}
    >
      <Tabs
        rootClassName="navtab"
        items={items}
        tabPosition="bottom"
        onChange={onChange}
        className="flex-grow"
        // indicator={{
        //     size: 30,
        //   align: "end",
        // }}
      />
    </ConfigProvider>
  );
};

export default Index;
