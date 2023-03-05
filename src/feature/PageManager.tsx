import React from 'react'

interface PageMangerProps {
  children: React.ReactNode;
}

export default function PageManager({ children }: PageMangerProps) {
  return <div className="pt-14 dark:bg-yt-base-background-dark">{children}</div>;
}