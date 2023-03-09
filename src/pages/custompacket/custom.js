import SimpleContainer from "../../components/custompacketcontainer/container";
import Navigate from "../../components/navbar/navbar";
import MyProvider from "../../context/shopContext";

const CustomPacket = () => {
  return (
    <>
      <MyProvider>
        <Navigate />
        <SimpleContainer />
      </MyProvider>
    </>
  );
};

export default CustomPacket;
