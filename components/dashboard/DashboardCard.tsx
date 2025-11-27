import React from "react";
import { Card, CardContent } from "../ui/card";
import { Newspaper } from "lucide-react";
export default function DashboardCard() {
  return (
    <Card className="bg-slate-100 p-4 pb-0 dark:bg-slate-800">
      <CardContent>
        <h3 className="pb-4 text-center text-3xl font-bold text-slate-500 dark:text-slate-200">
          Posts
        </h3>
        <div className="flex items-center justify-center gap-5">
          <Newspaper size={72} className="text-slate-500" />
          <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
            45
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}
