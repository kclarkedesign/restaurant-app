import { render, renderHook, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import BookingPage, { initializeTimes, updateTimes } from "./pages/BookingPage";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Renders the BookingForm date label", () => {
  render(<BookingForm />);
  // const dateLabel = screen.getByText(/Choose date/i);
  const dateLabel = screen.getByLabelText("Choose date");
  expect(dateLabel).toBeInTheDocument();
});

test("initializeTimes renders with options for time", () => {
  render(<BookingPage />);
  const timeLabel = screen.getByLabelText("Choose time");
  expect(timeLabel.value).not.toBeNull();
  expect(timeLabel.value).not.toBe("");
  expect(timeLabel.value.length).toBeGreaterThan(0);

  const expectedTimes = initializeTimes();
  const renderedOptions = Array.from(timeLabel.options).map(
    (option) => option.value
  );

  expect(renderedOptions).toEqual(expectedTimes);
});

test("updateTimes renders available times based on state", () => {
  render(<BookingPage />);
  const timeLabel = screen.getByLabelText("Choose time");
  expect(timeLabel.value).not.toBeNull();
  expect(timeLabel.value).not.toBe("");
  expect(timeLabel.value.length).toBeGreaterThan(0);

  const date = new Date();
  const expectedTimes = updateTimes(date);
  const renderedOptions = Array.from(timeLabel.options).map(
    (option) => option.value
  );

  expect(renderedOptions).toEqual(expectedTimes);
});
