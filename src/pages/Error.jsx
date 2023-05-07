import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("error", error);
  return (
    <div className="error">
      <h1>Error Please Try Again!</h1>
      <p>{error.message || error.statusText}</p>
    </div>
  );
};

export default Error;
