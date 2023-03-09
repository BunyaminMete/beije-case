import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { MyContext } from "../../context/shopContext";
import { useContext } from "react";

const DailyBoxPackage = () => {
  let count = 0;
  const d = new Date();

  const { products, setProducts } = useContext(MyContext);

  const ResetPackage = () => {
    setProducts({
      ...products,
      "Günlük Ped": 0,
      "Süper Günlük Ped": 0,
    });
  };

  return (
    <>
      {(products["Günlük Ped"] > 0 || products["Süper Günlük Ped"]) > 0 && (
        <Box
          sx={{
            marginTopet: "30px",
            width: "80%",
            marginLeft: "50px",
            padding: "20px",
            boxShadow:
              "rgb(0 0 0 / 3%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 5px 15px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="subtitle2" display="block" gutterBottom>
            <span id="packageLabel">Günlük Ped Paketleri</span>
          </Typography>

          <Typography variant="body2" gutterBottom>
            {Object.keys(products).map((item, key) => {
              if (
                products[item] !== 0 &&
                (item === "Günlük Ped" || item === "Süper Günlük Ped")
              ) {
                count++;
                return (
                  //DEĞİŞTİRİLECEK.  key={d.getMilliseconds()

                  <span key={d.getMilliseconds + count}>
                    {count === 2 && <> ve </>}
                    {products[item]} {item}
                  </span>
                );
              }
            })}
          </Typography>
          <button
            name="reset"
            aria-label="reset"
            className="resetbutton"
            onClick={ResetPackage}
          >
            Paketten Çıkar
          </button>
        </Box>
      )}
    </>
  );
};

export default DailyBoxPackage;
