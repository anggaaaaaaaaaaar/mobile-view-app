"use client";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Text from "antd/es/typography/Text";
import { useRouter } from "next/navigation";
import Paragraph from "antd/es/typography/Paragraph";
import { BsThreeDots } from "react-icons/bs";

const Index = () => {
  const router = useRouter();

  return (
    <div className="w-full max-w-md h-12 flex items-center justify-between px-2 py-4">
      <button
        className="flex items-center space-x-2"
        onClick={() => router.back()}
      >
        <MdKeyboardArrowLeft size={24} color="white" />
        <Text className="!text-white">Back</Text>
      </button>

      <Paragraph className="text-white font-bold m-0">@JohnDOe</Paragraph>
      <BsThreeDots className="text-white" size={20} />
    </div>
  );
};

export default Index;
