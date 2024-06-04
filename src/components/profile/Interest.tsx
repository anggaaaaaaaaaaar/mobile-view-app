import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import React from "react";

const Interest: React.FC<{ interests: string[] }> = ({ interests }) => {
  if (!interests.length)
    return (
      <Paragraph className="text-gray-400 font-bold">
        Add in your interest to find better match
      </Paragraph>
    );
  return (
    <div className="space-x-3">
      {interests.map((res: string, i: number) => (
        <Text
          key={i}
          className="rounded-full px-3 py-2 bg-slate-700 text-white"
        >
          {res}
        </Text>
      ))}
    </div>
  );
};

export default Interest;
