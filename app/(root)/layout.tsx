import Header from "@/components/ui/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
