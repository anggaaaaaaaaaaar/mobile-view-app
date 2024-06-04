"use client";
import { useAuth } from "@/hooks";
import { Function } from "@/utils";
import { useRouter } from "next/navigation";
import React, { ComponentType, useEffect, useState } from "react";

const ProtectedPage = ({ children }: any) => {
  const router = useRouter();
  const { user } = useAuth();

  console.log("user pp ", user);

  useEffect(() => {
    if (!user?.access_token) {
      router.push("/auth");
    }
  }, [router]);

  if (user?.access_token) {
    return children;
  }

  return null;
};

export default ProtectedPage;
