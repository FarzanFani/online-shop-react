import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";

const ErrorPages = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center mt-20 flex-col gap-3">
        <h1 className="text-9xl text-blue-900 font-bold">404!</h1>
        <p className="text-3xl text-blue-700">Page Not Found</p>
        <Link to={"/"}>
          <p className="text-2xl font-bold mt-10 border-b-4 border-black">
            Home Page
          </p>
        </Link>
      </div>
    </>
  );
};

export default ErrorPages;
