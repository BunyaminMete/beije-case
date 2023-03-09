import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import MyProvider from "../context/shopContext";

import CustomPacket from "../pages/custompacket/custom";

test("delete package button works properly", () => {
  render(
    <MyProvider>
      <CustomPacket />
    </MyProvider>
  );

  const inputFind = screen.getByRole("slider", { name: /test/i });
  fireEvent.change(inputFind, { target: { value: 10 } });

  const removeButton = screen.getByRole("button", { name: /Paketten/i });
  expect(removeButton).toBeInTheDocument();
  fireEvent.click(removeButton);
});
