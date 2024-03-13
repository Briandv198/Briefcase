import { ReactNode } from 'react';

type props = {
  children: ReactNode;
};
const _Layout = ({ children }: props) => <main className="p-10 flex flex-col gap-4 justify-center items-center">{children}</main>;

export default _Layout;
