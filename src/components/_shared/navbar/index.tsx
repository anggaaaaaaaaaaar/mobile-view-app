import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Text from "antd/es/typography/Text";

const Index = () => {
  return (
    <div className="h-10 flex items-center">
      <div className="flex items-center space-x-2">
        <MdKeyboardArrowLeft size={24} color="white" />
        <Text className="!text-white">Back</Text>
      </div>
    </div>
  );
};

export default Index;
