// app/dashboard/layout.js
import { Sidebar } from "../../components/custom/Sidebar";
import React from "react";
import {SidebarProvider} from '../context/SidebarContext'


export default function Dashboard({ children }) {
  return (
    <SidebarProvider>
    <div className="flex">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
    </SidebarProvider>
  );
}
