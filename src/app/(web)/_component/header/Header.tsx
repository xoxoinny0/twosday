import { getServerSession } from "@/app/_lib/getServerSession";
import { redirect } from "next/navigation";
import SidebarToggle from "../sidebar/SidebarToggle";
import { fixed, title, wrap } from "./header.css";

export default async function Header() {
  const session = await getServerSession();

  return (
    <header className={wrap}>
      <div className={fixed}>
        <div>
          <SidebarToggle />
          <h1 className={title}>twosday</h1>
        </div>
        <div></div>
      </div>
    </header>
  );
}