import { ReactNode } from 'react';
import Footer from '../components/footer/Footer';

type props = {
  children: ReactNode;
};
const _Layout = ({ children }: props) => (
  <>
    <main className="min-h-screen pb-20 flex flex-col gap-4 items-center">{children}</main>
    <Footer></Footer>
  </>
);

export default _Layout;
