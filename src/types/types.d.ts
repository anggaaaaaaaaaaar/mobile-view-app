export interface IPayloadLogin {
  email: string;
  username: string;
  password: string;
  passwordConfirm?: string;
}

export interface IProfileData {
  email: string;
  username: string;
  name: string;
  birthday: string;
  horoscope: string;
  zodiac: string;
  height: number;
  weight: number;
  interests: string[];
  gender: string;
}

export interface IPayloadProfileData {
  name: string;
  birthday: string;
  height: number;
  weight: number;
  interests?: string[];
  gender: string;
}
