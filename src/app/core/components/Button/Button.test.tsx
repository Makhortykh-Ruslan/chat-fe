import { Button } from '@core/components/Button/Button.tsx';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('button', () => {
  test('button render to dom', () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    expect(screen.getByTestId('data-test-id')).toBeInTheDocument();
  });

  test('test clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await userEvent.click(screen.getByTestId('data-test-id'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('to be disabled button', async () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Click me
      </Button>,
    );
    const btn = screen.getByTestId('data-test-id');
    expect(btn).toBeDisabled();
    await userEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
