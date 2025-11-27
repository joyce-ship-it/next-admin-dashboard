import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

import PostsTable from "@/components/posts/PostsTable";
export default function Home() {
  return (
    <>
      <div className="mb-5 flex flex-wrap justify-between gap-5 md:flex-row">
        <DashboardCard
          title="Posts"
          icon={<Newspaper size={72} className="text-slate-500" />}
          count={100}
        />
        <DashboardCard
          title="Categories"
          icon={<Folder size={72} className="text-slate-500" />}
          count={4}
        />
        <DashboardCard
          title="Users"
          icon={<User size={72} className="text-slate-500" />}
          count={1245}
        />
        <DashboardCard
          title="Comments"
          icon={<MessageCircle size={72} className="text-slate-500" />}
          count={1200}
        />
      </div>
      <PostsTable title="Latest posts" limit={5} />
    </>
  );
}
