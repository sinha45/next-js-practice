import Link from "next/link";
import React from "react";

export default function AboutLayout({ children }) {
  return (
    <div className="mt-10 mb-10">
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
