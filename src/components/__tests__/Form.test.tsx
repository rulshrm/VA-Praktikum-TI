import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Form } from "../Form";

describe("Form Component", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("renders form elements correctly", () => {
    render(<Form />);

    expect(screen.getByLabelText(/Semester/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Praktikum/)).toBeInTheDocument();
    expect(screen.getByLabelText(/NIM/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Generate/ })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Reset/ })).toBeInTheDocument();
  });

  it("shows error when generating without selecting semester", () => {
    render(<Form />);

    fireEvent.click(screen.getByRole("button", { name: /Generate/ }));

    expect(
      screen.getByText("Silakan pilih semester terlebih dahulu.")
    ).toBeInTheDocument();
  });

  it("validates NIM input", () => {
    render(<Form />);

    const nimInput = screen.getByLabelText(/NIM/);
    fireEvent.change(nimInput, { target: { value: "abc" } });
    fireEvent.click(screen.getByRole("button", { name: /Generate/ }));

    expect(screen.getByText("NIM harus berupa angka.")).toBeInTheDocument();
  });

  it("filters praktikum options based on selected semester", () => {
    render(<Form />);

    const semesterSelect = screen.getByLabelText(/Semester/);
    fireEvent.change(semesterSelect, { target: { value: "1" } });

    const praktikumSelect = screen.getByLabelText(/Praktikum/);
    expect(praktikumSelect).not.toBeDisabled();
    expect(
      screen.getByText(/Praktikum Algoritma dan Pemrograman I/)
    ).toBeInTheDocument();
  });

  it("handles reset functionality", () => {
    render(<Form />);

    const nimInput = screen.getByLabelText(/NIM/);
    fireEvent.change(nimInput, { target: { value: "12345" } });

    fireEvent.click(screen.getByRole("button", { name: /Reset/ }));

    expect(nimInput).toHaveValue("");
    expect(localStorage.getItem("nim")).toBeNull();
  });
});
