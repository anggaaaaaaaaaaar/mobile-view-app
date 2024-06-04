import { IProfileData } from "@/types/types";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import dayjs from "dayjs";
import React from "react";

interface ILabelData {
  title: string;
  value: string | number;
}
const LabelData: React.FC<ILabelData> = ({ title, value }) => (
  <Paragraph className="text-white/35">
    {title}: <Text className="text-white font-bold">{value}</Text>{" "}
  </Paragraph>
);

const About = (props: IProfileData) => {
  if (!props.email)
    return (
      <Paragraph className="text-gray-400 font-bold">
        Add in your about to help others know you better
      </Paragraph>
    );
  return (
    <div>
      <LabelData
        title="Birthday"
        value={`${dayjs(props.birthday).format(
          "DD / MM / YYYY"
        )} (Age ${dayjs().diff(dayjs(props.birthday), "y")})`}
      />
      <LabelData title="Horoscope" value={props.horoscope} />
      <LabelData title="Zodiac" value={props.zodiac} />
      <LabelData title="Height" value={`${props.height} cm`} />
      <LabelData title="Weight" value={`${props.weight} kg`} />
    </div>
  );
};

export default About;
