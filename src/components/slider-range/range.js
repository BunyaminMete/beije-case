import * as React from "react";
import Box from "@mui/material/Box";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { MyContext } from "../../context/shopContext";
import { useContext } from "react";
import "./range.css";

function valuetext(value) {
  return `${value}°C`;
}

const PrettoSlider = styled(Slider)({
  color: "rgb(52, 49, 49)",
  height: 4,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "rgb(52, 49, 49)",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
});

export default function DiscreteSliderLabel({
  label,
  maxVal,
  productCode,
  prodKey,
  mark,
  name,
  arialabel,
  ...props
}) {
  const DisplayConsole = React.useRef();

  //to call global state.
  const { products, setProducts } = useContext(MyContext);

  return (
    <Box className="sliderLabel" sx={{ minWidth: 250 }}>
      <Typography className="sliderLabel" gutterBottom>
        {label}
      </Typography>

      <PrettoSlider
        key={prodKey}
        value={products?.[productCode] || 0}
        onChange={(event) =>
          setProducts({
            ...products,
            [productCode]: event.target.value,
          })
        }
        name={name}
        ref={DisplayConsole}
        aria-label={arialabel}
        defaultValue={0}
        max={Number(maxVal)}
        getAriaValueText={valuetext}
        step={10}
        marks={mark}
        valueLabelDisplay="auto"
        className="slider"
      />
    </Box>
  );
}
