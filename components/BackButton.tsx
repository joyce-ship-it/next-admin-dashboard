import React from "react";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface backButtonProps {
  text: string;
  link: string;
}
export default function BackButton({ link, text }: backButtonProps) {
  return (
    <Link href={link} className="mb-2 flex gap-1 text-gray-600 hover:underline">
      <ArrowLeftCircle size={20} />
      {text}
    </Link>
  );
}
