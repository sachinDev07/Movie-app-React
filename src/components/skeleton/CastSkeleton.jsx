import React from "react";

import "./castSkeleton.scss";

const CastSkeleton = () => {
  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="castSkeleton">
      {skeleton()}
      {skeleton()}
      {skeleton()}
      {skeleton()}
      {skeleton()}
      {skeleton()}
    </div>
  );
};

export default CastSkeleton;
