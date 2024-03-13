import './Loader.css';

const Loader = () => {
  return (
    <div className={`w-screen h-screen absolute justify-center items-center bg-primary-dark bg-opacity-25 z-50 flex`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
