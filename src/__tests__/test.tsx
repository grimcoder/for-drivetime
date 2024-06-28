import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../app/page';
import { useRouter } from 'next/router';

// Mocking the useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('HomePage', () => {
  it('renders the welcome message', () => {
    render(<HomePage />);
    const welcomeMessage = screen.getByText(/Welcome to Lithia Motors Service!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders the image with correct alt text', () => {
    render(<HomePage />);
    const image = screen.getByAltText('Car Service');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/car-service.png');
  });

  it('renders the description', () => {
    render(<HomePage />);
    const description = screen.getByText(/Lithia motors wants to put you in full control of your car-owning experience by providing easy to book service appointments from the comfort of your own home!/i);
    expect(description).toBeInTheDocument();
  });

  it('renders the Get Started button', () => {
    render(<HomePage />);
    const getStartedButton = screen.getByText(/Get Started/i);
    expect(getStartedButton).toBeInTheDocument();
  });

  it('Get Started button links to /services', () => {
    render(<HomePage />);
    const getStartedButton = screen.getByText(/Get Started/i).closest('a');
    expect(getStartedButton).toHaveAttribute('href', '/services');
  });
});