"use client";
import { About, AboutForm, Interest } from "@/components/profile";
import { ProfileService } from "@/service";
import { IProfileData } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { Image } from "antd";
import { useForm } from "antd/es/form/Form";
import Paragraph from "antd/es/typography/Paragraph";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PiPencilSimpleLine } from "react-icons/pi";

const initData: IProfileData = {
  birthday: "1995-08-25",
  horoscope: "Virgo",
  zodiac: "Pig",
  height: 175,
  weight: 59,
  username: "johndoe",
  gender: "male",
  name: "John Doe",
  email: "john@mail.com",
  interests: [],
};

const Index = () => {
  const router = useRouter();
  const [formAbout] = useForm();

  const [profile, setProfile] = useState<IProfileData>(initData);
  const [isEditAbout, setIsEditAbout] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: ["getProfile"],
    queryFn: async () => await ProfileService.getProfile(),
    initialData: initData,
    retry: 2,
  });

  console.log("data ", data);

  useEffect(() => {
    if (data?.data) {
      formAbout.setFieldsValue({
        ...data.data,
        birthday: dayjs(data.data.birthday),
      });
      setProfile(data?.data);
    }
  }, [data.data]);

  const onClickEditAbout = () => {
    if (!isEditAbout) {
      setIsEditAbout(true);
      return;
    }

    formAbout.submit();
  };

  return (
    <div className="p-2 space-y-5">
      <div className="relative">
        <div className="relative w-full h-32 rounded-xl overflow-hidden">
          <Image
            src="https://picsum.photos/300/100"
            alt="profile-picture"
            width="100%"
            height="100%"
            // className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-0 left-2 ">
          <Paragraph className="font-bold text-white m-0">
            {profile?.username}
            {profile?.birthday
              ? ", " + dayjs().diff(dayjs(profile.birthday), "y")
              : ""}
          </Paragraph>
          {profile?.gender && (
            <Paragraph className="font-bold text-white capitalize">
              {profile?.gender}
            </Paragraph>
          )}
        </div>
        <button className="absolute top-1 right-2">
          <PiPencilSimpleLine className="text-white" size={20} />
        </button>
      </div>

      <div className="relative bg-slate-800 px-5 py-2 rounded-xl animate-open-close">
        <Paragraph className="text-white font-bold">About</Paragraph>
        {!isEditAbout ? (
          <About {...profile} />
        ) : (
          <AboutForm form={formAbout} setIsEditAbout={setIsEditAbout} />
        )}

        <button className="absolute top-1 right-2" onClick={onClickEditAbout}>
          {isEditAbout ? (
            <Paragraph className="bg-gradient-gold bg-clip-text text-transparent">
              Save & Update
            </Paragraph>
          ) : (
            <PiPencilSimpleLine className="text-white" size={20} />
          )}
        </button>
      </div>

      <div className="relative bg-slate-800 px-5 py-2 rounded-xl">
        <Paragraph className="text-white font-bold">Interest</Paragraph>
        <Interest interests={profile.interests} />
        <button
          className="absolute top-1 right-2"
          onClick={() => router.push("/me/interests")}
        >
          <PiPencilSimpleLine className="text-white" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Index;
