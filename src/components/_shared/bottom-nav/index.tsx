"use client";
import { ConfigProvider, Tabs, TabsProps } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { RiHeartsLine } from "react-icons/ri";

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

  const [tabSelected, setTabSelected] = useState<string>("message");

  useEffect(() => {
    setTabSelected(pathname.split("/")[1]);
  }, [pathname]);

  const onChange = (key: string) => {
    setTabSelected(key);
    router.push(`/${key}`);
  };

  const items: TabsProps["items"] = [
    {
      key: "messages",
      label: (
        <LabelTab
          icon={
            <LuMessagesSquare
              size={24}
              className={
                tabSelected === "messages" ? "text-gold" : "text-gray-400"
              }
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
            <GiMeditation
              size={24}
              className={
                tabSelected === "metaphysics" ? "text-gold" : "text-gray-400"
              }
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
            <RiHeartsLine
              size={24}
              className={
                tabSelected === "matches" ? "text-gold" : "text-gray-400"
              }
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
            <FaRegHeart
              size={24}
              className={
                tabSelected === "likes" ? "text-gold" : "text-gray-400"
              }
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
            <IoPersonCircleOutline
              size={24}
              className={tabSelected === "me" ? "text-gold" : "text-gray-400"}
            />
          }
          label="Me"
          tabSelected={tabSelected}
        />
      ),
      children: children,
    },
  ];

  if (pathname === "/" || pathname === "/auth") return children;
  return (
    <Tabs
      rootClassName="navtab"
      items={items}
      tabPosition="bottom"
      onChange={onChange}
      className="flex-grow"
      activeKey={tabSelected}
      tabBarGutter={0}
    />
  );
};

export default Index;
