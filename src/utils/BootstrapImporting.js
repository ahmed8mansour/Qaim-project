"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from "next/dynamic";

const BootstrapScript = dynamic(
  async () => {
    if (typeof window !== "undefined") {
      await import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
    return () => null;
  },
  { ssr: false }
);

export default function BootstrapClient() {
  return <BootstrapScript />;
}