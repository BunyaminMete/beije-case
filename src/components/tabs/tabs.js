import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DiscreteSliderLabel from "../slider-range/range";

//her bir inputun value değeri sıra sıra obje ya da array tipindeki bir state tarafından kaydedilecek. numaralandırmaya göre her bir inputa ait fiyatlandırma statik olarak state'e el ile girilecek örneğin
// {products:{ value: 20 , price: 2}. Son olarak obje map ile taranıp totalprice adında bir değişkende toplanarak eklenecek. Kullanıcı 3 panelden herhangi birinden seçimini silmesi için her panel için ayrı silme
//butonu kullanılacak. Hangi Tabpanel valuesi(1,2,3) seçilmişse içerisindeki tüm rangelerin value değerleri sıfıra yuvarlanacak. Global state her onchange ya da remove için güncellenecek.

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  // const context = useContext(MyContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    tab: {
      color: "#4b4b4b",
      textTransform: "none",
      fontSize: "15px",
    },
    tabItemContainer: {
      background: "none",
    },
  };

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 10,
    },
    {
      value: 20,
    },
    {
      value: 30,
    },
    {
      value: 40,
    },
    {
      value: 50,
    },
    {
      value: 60,
      label: "60",
    },
  ];

  const marks2 = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 10,
    },
    {
      value: 20,
    },
    {
      value: 30,
    },
    {
      value: 40,
    },
    {
      value: 50,
    },
    {
      value: 60,
    },
    {
      value: 70,
    },
    {
      value: 80,
    },
    {
      value: 90,
    },
    {
      value: 100,
      label: "100",
    },
  ];

  return (
    <Box sx={{ typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            variant="fullWidth"
            onChange={handleChange}
            aria-label="lab API tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "black",
                color: "black",
              },
            }}
          >
            <Tab style={styles.tab} label="beije Ped" value="1" />
            <Tab style={styles.tab} label="beije Günlük Ped" value="2" />
            <Tab style={styles.tab} label="beije Tampon" value="3" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <DiscreteSliderLabel
            productCode={"Standart Ped"}
            maxVal="60"
            prodKey="0"
            label="Standart Ped"
            mark={marks}
            arialabel="test"
          />
          <DiscreteSliderLabel
            prodKey="0"
            productCode={"Süper Ped"}
            maxVal="60"
            label="Süper Ped"
            mark={marks}
          />
          <DiscreteSliderLabel
            productCode={"Süper+ Ped"}
            maxVal="60"
            label="Süper+ Ped"
            mark={marks}
          />
        </TabPanel>
        <TabPanel value="2">
          <DiscreteSliderLabel
            productCode={"Günlük Ped"}
            maxVal="100"
            label="Günlük Ped"
            mark={marks2}
          />
          <DiscreteSliderLabel
            productCode={"Süper Günlük Ped"}
            maxVal="100"
            label="Süper Günlük Ped"
            mark={marks2}
          />
        </TabPanel>
        <TabPanel value="3">
          <DiscreteSliderLabel
            productCode={"Mini Tampon"}
            maxVal="60"
            label="Mini Tampon"
            mark={marks}
          />
          <DiscreteSliderLabel
            productCode={"Standart Tampon"}
            maxVal="60"
            label="Standart Tampon"
            mark={marks}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
