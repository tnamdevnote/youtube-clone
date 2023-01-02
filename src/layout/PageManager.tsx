import React from 'react'

interface PageMangerProps {
  children: React.ReactNode;
}

export default function PageManager({ children }: PageMangerProps) {
  return <div>{children}</div>;
}
