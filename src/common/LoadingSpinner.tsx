import React from "react";
import UseAnimations from "react-useanimations";

import "./LoadingSpinner.scss";

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <UseAnimations
        animationKey="loading2"
        className="loading-spinner__spinner"
        size={36}
      />
    </div>
  );
}

export default React.memo(LoadingSpinner);
