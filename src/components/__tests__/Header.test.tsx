import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header Component", () => {
  it("renders header text correctly", () => {
    render(<Header />);

    expect(screen.getByText("Create VA Bank Muamalat")).toBeInTheDocument();
    expect(screen.getByText(/Aplikasi ini membantu Anda/)).toBeInTheDocument();
  });

  it("has correct styling classes", () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toHaveClass("mb-8");
    expect(container.firstChild).toHaveClass("text-center");
  });
});
