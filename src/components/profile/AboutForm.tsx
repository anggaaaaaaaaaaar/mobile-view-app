import { ProfileService } from "@/service";
import { IPayloadProfileData, IProfileData } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  DatePicker,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Select,
  notification,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import Paragraph from "antd/es/typography/Paragraph";
import React, { Dispatch, SetStateAction } from "react";

interface IAboutForm {
  form: FormInstance;
  setIsEditAbout: Dispatch<SetStateAction<boolean>>;
}

const AboutForm: React.FC<IAboutForm> = ({ form, setIsEditAbout }) => {
  const queryClient = useQueryClient();

  const { mutateAsync: updateProfile } = useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: async (payload: IPayloadProfileData) =>
      await ProfileService.updateProfile(payload),
  });

  const onFinish = (values: IProfileData) => {
    console.log("values ", values);

    const payload: IPayloadProfileData = {
      name: values.name,
      birthday: values.birthday,
      height: values.height,
      weight: values.weight,
      gender: values.gender,
    };
    updateProfile(payload)
      .then((res) => {
        console.log("res", res);
        queryClient.refetchQueries({ queryKey: ["getProfile"] });
        setIsEditAbout(false);
      })
      .catch((err) => {
        console.log("Err", err);
        notification.error({ message: "Failed update profile" });
      });
  };

  return (
    <Form
      name="form-about"
      form={form}
      layout="horizontal"
      wrapperCol={{ span: 12 }}
      //   labelCol={{ span: 4 }}
      labelWrap
      colon={false}
      requiredMark={false}
      onFinish={onFinish}
    >
      <FormItem
        name="name"
        label={<Paragraph className="text-white">Display name</Paragraph>}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Input placeholder="Enter name" />
      </FormItem>

      <FormItem
        name="gender"
        label={<Paragraph className="text-white">Gender</Paragraph>}
      >
        <Select
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          placeholder="Select Gender"
          className="w-full text-white"
          popupClassName="bg-slate-700 "
        />
      </FormItem>

      <FormItem
        name="birthday"
        label={<Paragraph className="text-white">Birthday</Paragraph>}
      >
        <DatePicker
          format="DD MM YYYY"
          placeholder="DD MM YYYY"
          className="w-full text-white"
        />
      </FormItem>

      <FormItem
        name="horoscope"
        label={<Paragraph className="text-white">Horoscope</Paragraph>}
      >
        <Input placeholder="--" disabled />
      </FormItem>

      <FormItem
        name="zodiac"
        label={<Paragraph className="text-white">Zodiac</Paragraph>}
      >
        <Input placeholder="--" disabled />
      </FormItem>

      <FormItem
        name="height"
        label={<Paragraph className="text-white">Height</Paragraph>}
      >
        <InputNumber placeholder="Add height" className="w-full" />
      </FormItem>

      <FormItem
        name="weight"
        label={<Paragraph className="text-white">Weight</Paragraph>}
      >
        <InputNumber placeholder="Add weight" className="w-full" />
      </FormItem>
    </Form>
  );
};

export default AboutForm;
