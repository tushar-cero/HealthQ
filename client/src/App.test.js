import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './user_pages/LoginPage';
import Chat from './user_pages/chat';
import Dashboard from '../components/Dashboard';
import axios from 'axios';

jest.mock('axios');

describe('LoginPage', () => {
  it('should call login API with correct credentials', async () => {
    const mockResponse = { data: { token: 'test_token' } };
    axios.post.mockResolvedValue(mockResponse);

    const { getByLabelText, getByText } = render(<LoginPage />);

    const emailInput = getByLabelText(/email/i);
    const passwordInput = getByLabelText(/password/i);
    const loginButton = getByText(/login/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/api/login', {
        email: 'test@example.com',
        password: 'testpassword',
      });
    });
  });
});

describe('Chat', () => {
  it('should send a message and receive a response', async () => {
    const mockResponse = {
      choices: [
        {
          message: {
            content: 'This is a test response',
          },
        },
      ],
    };

    axios.post.mockResolvedValue({ data: mockResponse });

    const { getByPlaceholderText, getByText, findByText } = render(<Chat />);

    const inputField = getByPlaceholderText(/write your message!/i);
    const sendButton = getByText(/send/i);

    fireEvent.change(inputField, { target: { value: 'Hello, how are you?' } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'https://api.openai.com/v1/chat/completions',
        expect.anything(),
        expect.anything()
      );
    });

    const userMessage = await findByText('Hello, how are you?');
    const assistantMessage = await findByText('This is a test response');

    expect(userMessage).toBeInTheDocument();
    expect(assistantMessage).toBeInTheDocument();
  });
});

describe('Dashboard', () => {
  it('should render the dashboard with doctors list', () => {
    render(<Dashboard />);

    // Check if the page title is rendered
    const pageTitle = screen.getByText(/Your Appointments/i);
    expect(pageTitle).toBeInTheDocument();

    // Check if the search bar is rendered
    const searchBar = screen.getByPlaceholderText(/Find doctors near you/i);
    expect(searchBar).toBeInTheDocument();

    // Check if the doctors list is rendered
    const doctors = screen.getAllByRole('listitem');
    expect(doctors.length).toBeGreaterThan(0);
  });

  it('should open the modal when the book appointment button is clicked', () => {
    render(<Dashboard />);

    const bookAppointmentButton = screen.getByText(/BOOK APPOINTMENT/i);
    fireEvent.click(bookAppointmentButton);

    // Check if the modal is opened
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });

  it('should show a toast message when an appointment is booked', () => {
    render(<Dashboard />);

    const bookAppointmentButton = screen.getByText(/BOOK APPOINTMENT/i);
    fireEvent.click(bookAppointmentButton);

    const confirmAppointmentButton = screen.getByText(/Confirm/i);
    fireEvent.click(confirmAppointmentButton);

    // Check if the toast message is shown
    const toastMessage = screen.getByText(/Your appointment has been confirmed/i);
    expect(toastMessage).toBeInTheDocument();
  });
});

describe('Prescription', () => {
  it('should render the prescription list', () => {
    render(<Prescription />);

    // Check if the page title is rendered
    const pageTitle = screen.getByText(/Your Prescriptions/i);
    expect(pageTitle).toBeInTheDocument();

    // Check if the prescription list is rendered
    const prescriptions = screen.getAllByRole('listitem');
    expect(prescriptions.length).toBeGreaterThan(0);
  });

  it('should open the prescription view when the view button is clicked', () => {
    render(<Prescription />);

    const viewButton = screen.getByText(/VIEW/i);
    fireEvent.click(viewButton);

    // Check if the prescription view is opened
    const prescriptionView = screen.getByTestId('prescription-view');
    expect(prescriptionView).toBeInTheDocument();
  });
});