import React from 'react';
import Lottie from "lottie-react";
import error404 from "./assets/84918-404-error-doodle-animation.json";

const App = () => {
  return (
    <div>
      <Lottie animationData={error404} loop={true} />
    </div>
  );
};

export default App;