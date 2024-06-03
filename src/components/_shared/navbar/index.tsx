"use client";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Text from "antd/es/typography/Text";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();

  return (
    <div className="w-full max-w-md h-10 flex items-center margin-auto">
      <button
        className="flex items-center space-x-2"
        onClick={() => router.back()}
      >
        <MdKeyboardArrowLeft size={24} color="white" />
        <Text className="!text-white">Back</Text>
      </button>
    </div>
  );
};

export default Index;
