import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import beijeimg from "../../assets/packet.webp";
import classNames from "classnames";

import "./container.css";
import LabTabs from "../tabs/tabs";
import { MyContext } from "../../context/shopContext";
import BoxPackagePed from "../packagebox/packBox";
import DailyBoxPackage from "../packagebox/packbox-daily";
import TamponBoxPackage from "../packagebox/packbox-tampon";
import TotalPrice from "../totalprice/price";
import { Typography } from "@mui/material";
import FooterComp from "../footer/footer";

export default function SimpleContainer() {
  const { priceCheck } = React.useContext(MyContext);

  const cardRef = React.useRef();
  const bgRef = React.useRef();

  const openCard = () => {
    bgRef.current.className = "blackbg";
    cardRef.current.id = "cardMobile";
  };

  const offCard = () => {
    bgRef.current.className = "";
    cardRef.current.id = "card";
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div ref={bgRef}></div>
      <Box>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              marginTop: "250px",
            }}
          >
            <div className="describesx">
              <Box
                sx={{
                  height: 60,
                }}
              >
                <Typography variant="h4" gutterBottom id="crpackage">
                  Kendi Paketini Oluştur
                  <span id="howitworks">Nasıl Çalışır?</span>
                </Typography>
              </Box>

              <p className="altdesc">
                Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
                miktarlardan, sana özel bir paket oluşturalım.
              </p>

              <Box sx={{ marginTop: "50px" }}>
                <LabTabs></LabTabs>
                <button onClick={openCard} className="showCard">
                  Paketini Gör
                </button>
              </Box>
            </div>

            <div ref={cardRef} id="card">
              <div className="card-child">
                <div className="shopping">
                  <Box
                    sx={{
                      marginTop: "-20px",
                      marginLeft: "30px",
                      fontSize: "2rem",
                      fontWeight: "500",
                      letterSpacing: "0.2px",
                    }}
                  >
                    <button onClick={offCard} id="closeCard">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                    <p className="ozelpaketyazi">Özel Paketin</p>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "50px",
                      width: "80%",
                      marginLeft: "50px",
                      display: "flex",
                      boxShadow:
                        "rgb(0 0 0 / 3%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 5px 15px",
                      borderRadius: "10px",
                    }}
                  >
                    <p className="label2month">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        strokeWidth="1"
                      >
                        <path
                          d="m13 22-3-3m0 0 3-3m-3 3h5a7 7 0 0 0 3-13.326M6 18.326A7 7 0 0 1 9 5h5m0 0-3-3m3 3-3 3"
                          stroke="#343131"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="month2">2 ayda 1 gönderim</span>
                    </p>
                  </Box>
                  <img id="beije" alt="paket resmi" src={beijeimg}></img>
                  <BoxPackagePed></BoxPackagePed>
                  <DailyBoxPackage></DailyBoxPackage>
                  <TamponBoxPackage></TamponBoxPackage>
                  <button
                    className={classNames({
                      shopbutton: priceCheck,
                      shopbuttonDisabled: !priceCheck,
                    })}
                  >
                    Sepete Ekle <TotalPrice />
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </Container>
        <FooterComp />
      </Box>
    </React.Fragment>
  );
}
