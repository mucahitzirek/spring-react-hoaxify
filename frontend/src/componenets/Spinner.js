import React from "react";
import RingLoader from "react-spinners/RingLoader";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <RingLoader color="#35C2A8"></RingLoader>
    </div>
    // <div className="d-flex justify-content-center">
    //   <div className="spinner-border text-black-50">
    //     {/* <spinner className="sr-only">Loading...</spinner> */}
    //   </div>
    // </div>
  );
};
export default Spinner;
