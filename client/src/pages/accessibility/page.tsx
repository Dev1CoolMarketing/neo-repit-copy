import React from "react";
import AccessibilityStatement from "./statement";
import SiteFooter from "@/components/site-footer";
import FueNavBar from "@/components/fue/fue-nav-bar";

const AccessibilityPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7] text-slate-900">
      <FueNavBar />
      <main id="main-content" tabIndex={-1} className="flex-1 pt-28 pb-16">
        <div className="mx-auto w-full max-w-4xl px-6">
          <AccessibilityStatement className="rounded-3xl bg-white p-10 text-slate-900 shadow-md" />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default AccessibilityPage;
