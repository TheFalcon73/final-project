import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import BookingForm from './BookingForm'; // Adjusted for the same directory
import '@testing-library/jest-dom';

// Mock the BookingForm component and any necessary functions
vi.mock('./BookingForm', () => ({
  default: vi.fn(() => <div>Mocked Booking Form</div>), // Provide a mock default export
  fetchAPI: vi.fn(() => Promise.resolve(['12:00 PM', '1:00 PM', '2:00 PM'])),
}));

// Mock image import
vi.mock('./assets/panoramic.jpg', () => ({
  default: 'mocked-image-url',
}));

describe('BookingForm', () => {
  test('initializes available times after API loads', async () => {
    render(<BookingForm />);

    // Wait for the loading text to disappear
    await waitFor(() => expect(screen.queryByText(/Loading available times.../i)).not.toBeInTheDocument());

    // Ensure the select dropdown options are correct
    const timeSelect = screen.getByLabelText('Choose time'); // Make sure the label text matches exactly
    const options = timeSelect.querySelectorAll('option');
    
    expect(options.length).toBe(3); // Updated expected value to match the mock
    expect(options[0].textContent).toBe('12:00 PM');
    expect(options[1].textContent).toBe('1:00 PM');
    expect(options[2].textContent).toBe('2:00 PM');
  });

  test('calls the submitForm function when the form is submitted', async () => {
    render(<BookingForm />);

    // Wait for the available times to be populated
    await waitFor(() => expect(screen.queryByText(/Loading available times.../i)).not.toBeInTheDocument());

    // Simulate user interactions
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2025-02-20' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '12:00 PM' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '4' } });

    // Mock submit function and simulate form submission
    const submitForm = vi.fn();
    fireEvent.submit(screen.getByRole('form'));
    
    // Ensure the submitForm function is called
    expect(submitForm).toHaveBeenCalled();
  });

  test('updates available times when the date is changed', async () => {
    render(<BookingForm />);

    // Wait for the loading text to disappear
    await waitFor(() => expect(screen.queryByText(/Loading available times.../i)).not.toBeInTheDocument());

    // Change the date to trigger available time updates
    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2025-02-21' } });

    // Mock the API to return a new set of available times
    const { fetchAPI } = require('./BookingForm'); // Correct way to require a mock function
    fetchAPI.mockReturnValueOnce(Promise.resolve(['5:00 PM', '6:00 PM', '7:00 PM']));

    // Wait for the times to update
    await waitFor(() => {
      const timeSelect = screen.getByLabelText('Choose time');
      const options = timeSelect.querySelectorAll('option');
      expect(options.length).toBe(3);
      expect(options[0].textContent).toBe('5:00 PM');
      expect(options[1].textContent).toBe('6:00 PM');
      expect(options[2].textContent).toBe('7:00 PM');
    });
  });
});
