"use client";
import React from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import data from "@/data/analytics";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "../ui/card";
import { Monoton } from "next/font/google";
export default function AnalyticsChart() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Analytics for this year</CardTitle>
          <CardDescription>Views per month</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart width={1100} height={300} data={data}>
                <Line type={"monotone"} dataKey="uv" stroke="#888" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
