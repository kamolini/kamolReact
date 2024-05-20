import React from "react";
import Slider from "react-slider";

const SliderComponent = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Slider
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SliderComponent;