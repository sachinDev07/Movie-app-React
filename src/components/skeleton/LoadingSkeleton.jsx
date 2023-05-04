import React from "react";

import "./loadingSkeleton.scss";

const LoadingSkeleton = () => {
  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
      </div>
    </>
  );
};

export default LoadingSkeleton;
