import { VFC } from "react";
import Loader from "react-loader-spinner";

export const Spinner:VFC = () => {
  return (
    <div className="flex justify-center items-center h-48">
      <Loader type="TailSpin" color="#6ee7b7" height={80} width={80} />
    </div>
  );
}
