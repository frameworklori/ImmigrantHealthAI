import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../src/frontend/App';

describe('Frontend Integration', () => {
test('Camera submit', () => {
render(<App />);
fireEvent.click(screen.getByText('Detect Allergy'));
expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('Allergy'));
});

test('Record submit', () => {
render(<App />);
fireEvent.click(screen.getByText('Save Record'));
expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('Record ID'));
});
});

