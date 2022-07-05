import React, { FC, ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => (
  <div className="py-10 bg-zinc-900">{children}</div>
);

export default Layout;
