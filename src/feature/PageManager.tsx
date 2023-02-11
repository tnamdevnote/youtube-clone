import React from 'react'

interface PageMangerProps {
  children: React.ReactNode;
}

export default function PageManager({ children }: PageMangerProps) {
  return <div className="pt-14">{children}</div>;
}