import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Document Checklist",
  description:
    "Track your South African citizenship application documents. Check off items as you collect them, with exact locations, costs, and tips for each document.",
}

export default function ChecklistLayout({ children }: { children: React.ReactNode }) {
  return children
}
