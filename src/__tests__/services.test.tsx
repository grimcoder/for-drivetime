import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import mockAxios from 'axios-mock-adapter';
import ServicesPage from '../app/services/page';

const mock = new mockAxios(axios);

describe('ServicesPage', () => {
  beforeEach(() => {
    mock.reset();
  });

  it('renders the services page', async () => {
    mock.onGet('/api/services').reply(200, [
      { id: '1', name: 'Service 1', duration: 3600 },
      { id: '2', name: 'Service 2', duration: 5400 },
    ]);

    render(<ServicesPage />);

    expect(screen.getByText('Select a Service')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Service 1')).toBeInTheDocument();
      expect(screen.getByText('Service 2')).toBeInTheDocument();
    });
  });

  it('fetches and displays appointments when a service is clicked', async () => {
    mock.onGet('/api/services').reply(200, [
      { id: '1', name: 'Service 1', duration: 3600 },
      { id: '2', name: 'Service 2', duration: 5400 },
    ]);

    mock.onGet('/api/appointments?serviceId=1').reply(200, [
      { id: 'a1', date: '2023-07-01', time: '10:00 AM' },
      { id: 'a2', date: '2023-07-01', time: '11:00 AM' },
    ]);

    render(<ServicesPage />);

    await waitFor(() => {
      expect(screen.getByText('Service 1')).toBeInTheDocument();
      expect(screen.getByText('Service 2')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Service 1'));

    await waitFor(() => {
      expect(screen.getByText('Available appointments')).toBeInTheDocument();

    });
  });

  it('selects an appointment and displays Book Now button', async () => {
    mock.onGet('/api/services').reply(200, [
      { id: '1', name: 'Service 1', duration: 3600 },
      { id: '2', name: 'Service 2', duration: 5400 },
    ]);

    mock.onGet('/api/appointments?serviceId=1').reply(200, [
      { id: 'a1', date: '2023-07-01', time: '10:00 AM' },
      { id: 'a2', date: '2023-07-01', time: '11:00 AM' },
    ]);

    render(<ServicesPage />);

    await waitFor(() => {
      expect(screen.getByText('Service 1')).toBeInTheDocument();
      expect(screen.getByText('Service 2')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Service 1'));

    await waitFor(() => {
      expect(screen.getByText('Available appointments')).toBeInTheDocument();

    });


    expect(screen.getByText('Book Now')).toBeInTheDocument();
  });
});
