import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "../Modal";

describe("Modal Component", () => {
  const mockOnClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders nothing when closed", () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose}>
        <div>Test Content</div>
      </Modal>
    );

    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });

  it("renders content when open", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <div>Test Content</div>
      </Modal>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("calls onClose when clicking outside modal", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <div>Test Content</div>
      </Modal>
    );

    const modalOverlay = screen.getByRole("dialog");
    fireEvent.click(modalOverlay);

    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls onClose when pressing Escape key", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <div>Test Content</div>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(mockOnClose).toHaveBeenCalled();
  });
});
