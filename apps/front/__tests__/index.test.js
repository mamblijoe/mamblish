import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IndexPage from '../src/pages';

describe('Home', () => {
    it('renders a heading', () => {
        render(<IndexPage />);

        const heading = screen.getByTestId('main-header', {
            name: /welcome to next\.js!/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
