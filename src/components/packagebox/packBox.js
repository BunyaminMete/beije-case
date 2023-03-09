import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { MyContext } from "../../context/shopContext";
import { useContext } from "react";
import "./boxpackages.css";

const BoxPackagePed = () => {
  let count = 0;
  const d = new Date();
  const { products, setProducts } = useContext(MyContext);

  const ResetPackage = () => {
    setProducts({
      ...products,
      "Standart Ped": 0,
      "Süper Ped": 0,
      "Süper+ Ped": 0,
    });
  };

  return (
    <>
      {(products["Standart Ped"] > 0 ||
        products["Süper Ped"] > 0 ||
        products["Süper+ Ped"]) > 0 && (
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
            <span id="packageLabel">Ped Paketleri</span>
          </Typography>

          <Typography variant="body2" gutterBottom>
            {Object.keys(products).map((item) => {
              if (
                products[item] !== 0 &&
                (item === "Standart Ped" ||
                  item === "Süper Ped" ||
                  item === "Süper+ Ped")
              ) {
                count++;
                return (
                  <span key={d.getMilliseconds + count}>
                    {count === 1 || count === 2 ? (
                      <span>
                        {count === 2 && <>, </>}
                        {products[item]} {item}&nbsp;
                      </span>
                    ) : (
                      <span>
                        ve {products[item]} {item}
                      </span>
                    )}
                  </span>
                );
              }
            })}
          </Typography>
          <button size="medium" className="resetbutton" onClick={ResetPackage}>
            Paketten Çıkar
          </button>
        </Box>
      )}
    </>
  );
};

export default BoxPackagePed;
