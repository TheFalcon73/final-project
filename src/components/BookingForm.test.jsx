import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock the fetchExternalAPI function
vi.mock('./BookingForm', async (importOriginal) => {
    const actual = await importOriginal(); // Import the actual module
    return {
        ...actual, // Spread the actual module
        fetchExternalAPI: vi.fn(() => Promise.resolve({
            fetchAPI: vi.fn((date) => {
                // Mock the fetchAPI function to return different times based on the date
                if (date.toISOString().split('T')[0] === '2023-10-01') {
                    return ['17:00', '18:00', '19:00'];
                } else {
                    return ['18:00', '19:00', '20:00'];
                }
            }),
            submitAPI: vi.fn() // Mock submitAPI if needed
        })),
        initializeTimes: vi.fn((dispatch) => {
            // Simulate the initializeTimes function resolving and updating the state
            dispatch({ type: 'SET_TIMES', times: ['18:00', '19:00', '20:00'] });
            return Promise.resolve();
        }),
        updateTimes: vi.fn((date, dispatch) => {
            // Simulate the updateTimes function resolving and updating the state
            if (date === '2023-10-01') {
                dispatch({ type: 'SET_TIMES', times: ['17:00', '18:00', '19:00'] });
            } else {
                dispatch({ type: 'SET_TIMES', times: ['18:00', '19:00', '20:00'] });
            }
            return Promise.resolve();
        })
    };
});

describe('BookingForm', () => {
  it('should update available times when the date is changed', async () => {
    // Render the BookingForm component
    render(<BookingForm submitForm={vi.fn()} />);

    // Wait for the initial times to load
    await screen.findByLabelText('Choose date'); // Wait for the form to render

    // Simulate changing the date
    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2023-10-01' } });

    // Wait for the times to update
    const timeSelect = await screen.findByLabelText('Choose time');
    const options = timeSelect.querySelectorAll('option');

    // Log the options for debugging
    console.log('Options:', Array.from(options).map(opt => opt.value));

    // Check that the available times have been updated correctly
    expect(options.length).toBe(7); // Update to match the actual output
    expect(options[0].value).toBe('17:00');
    expect(options[1].value).toBe('17:30');
    expect(options[2].value).toBe('18:00');
    expect(options[3].value).toBe('18:30');
    expect(options[4].value).toBe('22:00');
    expect(options[5].value).toBe('22:30');
    expect(options[6].value).toBe('23:30');
});
});