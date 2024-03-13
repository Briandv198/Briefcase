import { ReactNode } from 'react';

type props = {
  children: ReactNode;
};
const _Layout = ({ children }: props) => <main className="min-h-screen flex flex-col gap-4 items-center">{children}</main>;

export default _Layout;
