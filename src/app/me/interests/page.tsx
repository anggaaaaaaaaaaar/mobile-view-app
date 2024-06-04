"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import Text from "antd/es/typography/Text";
import Paragraph from "antd/es/typography/Paragraph";
import { Select, SelectProps, Tag, notification } from "antd";
import { ProfileService } from "@/service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IPayloadProfileData } from "@/types/types";
type TagRender = SelectProps["tagRender"];

const Index = () => {
  const router = useRouter();

  const [interests, setInterest] = useState<string[]>([]);

  const { data } = useQuery({
    queryKey: ["getProfile"],
    queryFn: async () => await ProfileService.getProfile(),
    retry: 2,
  });

  const { mutateAsync: updateProfile } = useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: async (payload: IPayloadProfileData) =>
      await ProfileService.updateProfile(payload),
  });

  useEffect(() => {
    if (data?.data) {
      setInterest(data?.data?.interests);
    }
  }, [data?.data]);

  const onClickSave = () => {
    const payload: IPayloadProfileData = {
      name: data.name,
      birthday: data.birthday,
      height: data.height,
      weight: data.weight,
      gender: data.gender,
      interests: interests,
    };
    updateProfile(payload)
      .then((res) => {
        notification.success({ message: "Success update interest" });
        router.push("/me");
      })
      .catch((err) => {
        notification.error({ message: "Failed update interest" });
      });
  };

  const handleChange = (value: string[]) => {
    setInterest(value);
  };

  const tagRender: TagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color="white"
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginInlineEnd: 10,
          marginTop: 5,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          height: "31px",
        }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <div>
      <div className="w-full max-w-md h-12 flex items-center justify-between px-2 py-4">
        <button
          className="flex items-center space-x-2"
          onClick={() => router.back()}
        >
          <MdKeyboardArrowLeft size={24} color="white" />
          <Text className="text-white">Back</Text>
        </button>
        <button
          className="bg-gradient-blue text-transparent bg-clip-text"
          onClick={onClickSave}
        >
          Save
        </button>
      </div>

      <div className="px-2 py-4">
        <Paragraph className="bg-gradient-gold text-transparent bg-clip-text">
          Tell everyone about yourself
        </Paragraph>
        <Paragraph className="text-3xl text-white font-bold">
          What interest you?
        </Paragraph>
        <Select
          value={interests}
          mode="tags"
          tagRender={tagRender}
          style={{ width: "100%" }}
          placeholder="Tell me your interest"
          onChange={handleChange}
          open={false}
        />
      </div>
    </div>
  );
};

export default Index;
