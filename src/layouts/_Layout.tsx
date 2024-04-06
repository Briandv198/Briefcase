import { ReactNode, useEffect, useState } from 'react';
import Footer from '../components/footer/Footer';
import './_Layout.css';

type props = {
  children: ReactNode;
};
const _Layout = ({ children }: props) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    var htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      {darkMode ? (
        <div className="bg-animation -z-50">
          <div className="dark-stars"></div>
          <div className="dark-stars2"></div>
          <div className="dark-stars3"></div>
          <div className="dark-stars4"></div>
        </div>
      ) : (
        <div className="bg-animation -z-50">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <div className="stars4"></div>
        </div>
      )}

      <div
        className="absolute top-0 right-0 m-4 p-2 inline-block z-50 bg-light-secondary-container dark:bg-dark-secondary-container rounded-full shadow-sm shadow-light-shadow dark:shadow-dark-shadow hover:cursor-pointer hover:scale-110 transition-all ease-in-out"
        onClick={handleDarkMode}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-light-on-secondary-container dark:text-dark-on-secondary-container"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      </div>

      <main className="min-h-screen pb-20 flex flex-col gap-4 items-center">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default _Layout;
