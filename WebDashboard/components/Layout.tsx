import React, { ReactElement } from "react";

export const Layout = ({
  children,
  className,
}: {
  children: ReactElement;
  className: string;
}) => <main className={`mx-auto container p-4 ${className}`}>{children}</main>;
