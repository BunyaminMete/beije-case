import React from "react";
import Box from "@mui/material/Box";

import "./footer.css";

const FooterComp = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgb(24, 24, 24)",
          height: "500px",
          color: "white",
          marginTop: "100px",
        }}
      >
        <Box
          sx={{
            padding: "50px",
          }}
        >
          <div className="leftcontainer">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="56.39"
              height="24"
              viewBox="0 0 1001 426"
            >
              <path
                className="svgpath3"
                d="M191.13 291.98c-19.73 21.7-44.58 32.35-74.97 32.35-11.84 0-24.86-3.16-38.67-9.47-13.81-6.31-24.07-15-30.78-26.04v32.35H.95V0H47.9v141.65c6.71-11.05 16.57-19.73 30.38-25.65 13.81-6.31 26.83-9.47 39.06-9.47 30.78 0 55.64 11.05 74.57 33.14 19.34 22.1 28.8 47.35 28.8 75.36.01 29.61-9.85 55.25-29.58 76.95zM47.11 215.43c0 18.54 5.92 34.33 17.36 47.35 11.83 12.63 27.22 18.94 45.77 18.94 18.54 0 33.93-6.31 45.37-18.94 11.84-13.02 17.76-28.8 17.76-47.35s-5.92-34.33-17.76-47.35c-11.44-13.02-26.83-19.34-45.37-19.34-18.55 0-33.94 6.31-45.77 19.34-11.44 13.03-17.36 28.81-17.36 47.35zm248.56 14.21c.39 15.78 6.71 28.8 18.94 39.46 12.23 10.26 26.44 15.39 42.61 15.39 26.44 0 45.38-11.05 56.82-32.75l33.93 22.49c-17.76 32.75-52.08 50.9-89.96 50.9-31.17 0-57.61-10.26-78.91-31.17-20.91-20.91-31.57-47.35-31.57-78.52 0-30.38 10.26-56.03 30.38-77.34 20.12-21.31 45.37-31.96 75.76-31.96 31.96 0 57.21 9.87 75.36 29.99 18.15 20.13 27.23 46.17 27.23 78.91 0 6.31-.4 11.05-.79 14.6h-159.8zm2.36-35.51h110.48c-1.58-29.6-24.86-47.74-54.84-47.74-28.8 0-51.3 18.94-55.64 47.74zM498.06 20.52c12.23-12.63 31.17-12.63 43.4 0 12.23 12.23 12.23 31.17 0 43.4-12.23 12.23-31.17 12.23-43.4 0-12.23-12.23-12.23-31.17 0-43.4zm45.37 300.66h-46.95v-210.7h46.95v210.7zm104.95-210.7v235.56c0 53.27-25.65 79.71-76.55 79.71-7.5 0-14.6-1.18-21.3-3.16v-41.04c3.55 1.18 7.5 1.58 11.83 1.58 28.02 0 38.67-10.66 38.67-42.22V110.48h47.35zm7.5-68.26c0 16.97-14.2 30.77-31.57 30.77-16.97 0-30.78-13.81-30.78-30.77 0-16.97 13.81-31.17 30.78-31.17 17.36 0 31.57 14.2 31.57 31.17zm81.27 187.42c.4 15.78 6.71 28.8 18.94 39.46 12.23 10.26 26.43 15.39 42.61 15.39 26.43 0 45.37-11.05 56.82-32.75l33.93 22.49c-17.75 32.75-52.08 50.9-89.96 50.9-31.17 0-57.61-10.26-78.91-31.17-20.91-20.91-31.57-47.35-31.57-78.52 0-30.38 10.26-56.03 30.38-77.34 20.12-21.31 45.38-31.96 75.76-31.96 31.96 0 57.21 9.87 75.36 29.99 18.15 20.13 27.22 46.17 27.22 78.91 0 6.31-.39 11.05-.79 14.6H737.15zm2.37-35.51H850c-1.58-29.6-24.86-47.74-54.85-47.74-28.8 0-51.29 18.94-55.63 47.74z"
              />
              <path
                className="svgpath4"
                d="M1000.95 291.38c0 9.05-6.91 15.72-12.84 21.65-5.93 5.93-12.6 10.84-21.65 10.84s-15.08-5.55-21.01-11.48c-5.93-5.93-10-11.96-10-21.01s-.65-19.8 5.28-25.73c5.93-5.93 16.68-9.15 25.73-9.15s17.18 5.84 23.11 11.77 11.38 14.06 11.38 23.11z"
              />
            </svg>
            <div className="sublabel">
              <b>Arayı açmayalım!</b> <br />
              Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.
            </div>
          </div>
          <hr className="hrline"></hr>
        </Box>
      </Box>
    </>
  );
};

export default FooterComp;
