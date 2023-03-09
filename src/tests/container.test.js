import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import MyProvider from "../context/shopContext";

import SimpleContainer from "../components/custompacketcontainer/container";

test("container renders correctly", () => {
  render(
    <MyProvider>
      <SimpleContainer />
    </MyProvider>
  );

  expect(screen.getByText(/Kendi Paketini/i)).toBeInTheDocument();
  expect(screen.getByText(/beije Ped/i)).toBeInTheDocument();
  expect(screen.getByText(/Özel Paket/i)).toBeInTheDocument();
  expect(screen.getByText(/2 ayda 1/i)).toBeInTheDocument();
});

test("product selecting function works properly", () => {
  render(
    <MyProvider>
      <SimpleContainer />
    </MyProvider>
  );

  const inputFind = screen.getByRole("slider", { name: /test/i });
  fireEvent.change(inputFind, { target: { value: 10 } });
  expect(screen.getByText(/10 Standart Ped/i)).toBeInTheDocument();
});
