import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "../components/BookingForm";

describe("BookingForm - HTML5 Validation", () => {
  test("Date input should have min attribute set to today's date", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");
    const today = new Date().toISOString().split("T")[0];

    expect(dateInput).toHaveAttribute("min", today);
  });

  test("Date input should have required attribute and pattern validation", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");

    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("pattern");
  });

  test("Time select should have required attribute", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    const timeSelect = screen.getByLabelText("Select a reservation time");
    expect(timeSelect).toHaveAttribute("required");
  });

  test("Guests input should have min and max constraints", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("Occasion select should have required attribute", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    const occasionSelect = screen.getByLabelText("Select an occasion");
    expect(occasionSelect).toHaveAttribute("required");
  });

  test("Submit button should have aria-label", () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    const submitButton = screen.getByLabelText("Submit reservation form");
    expect(submitButton).toBeInTheDocument();
  });
});

describe("BookingForm - JavaScript Validation", () => {
  test("Form should prevent submission if required fields are empty", async () => {
    const mockSubmit = jest.fn();
    render(
      <BookingForm
        availableTimes={[]}
        dispatch={jest.fn()}
        submitForm={mockSubmit}
      />
    );

    const submitButton = screen.getByLabelText("Submit reservation form");

    await userEvent.click(submitButton);

    expect(mockSubmit).not.toHaveBeenCalled(); //
  });

  test("Form should allow submission when all fields are filled", async () => {
    const mockSubmit = jest.fn();
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={mockSubmit}
      />
    );

    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Select a reservation time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Select an occasion");
    const submitButton = screen.getByLabelText("Submit reservation form");

    // Fill in form fields
    await userEvent.type(dateInput, "2025-03-10");
    await userEvent.selectOptions(timeSelect, "18:00");
    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, "4");
    await userEvent.selectOptions(occasionSelect, "Birthday");

    await userEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith({
      date: "2025-03-10",
      time: "18:00",
      guests: "4",
      occasion: "Birthday",
    });
  });

  test("Guests input should not allow values less than 1", async () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    const guestsInput = screen.getByLabelText("Number of guests");

    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, "0"); // Enter invalid value
    expect(guestsInput.value).toBe("0"); // Still allows typing

    await userEvent.tab(); // Trigger blur event
    expect(guestsInput.validationMessage).not.toBe(""); // HTML5 validation should trigger
  });

  test("Guests input should not allow values greater than 10", async () => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    const guestsInput = screen.getByLabelText("Number of guests");

    await userEvent.clear(guestsInput);
    await userEvent.type(guestsInput, "11"); // Enter invalid value
    expect(guestsInput.value).toBe("11"); // Still allows typing

    await userEvent.tab(); // Trigger blur event
    expect(guestsInput.validationMessage).not.toBe(""); // HTML5 validation should trigger
  });
});
