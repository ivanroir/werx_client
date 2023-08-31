import React from "react";
import BusinessCard from "@/components/BusinessCard";
import { useGetUserQuery } from "@/state/api";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  console.log("🚀 ~ file: index.jsx:10 ~ Dashboard ~ data:", data);

  return (
    <>
      <BusinessCard user={data || {}} />
    </>
  );
};

export default Dashboard;
