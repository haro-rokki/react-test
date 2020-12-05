import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';

import { Counter } from './counter';

describe('カウンターのテスト', () => {
  it('初期表示はカウントが0である', () => {
    render(<Counter />);

    const normal = within(screen.getByTestId('normal'));
    expect(normal.getByText('0')).toBeInTheDocument();
    expect(normal.queryByText('1')).not.toBeInTheDocument();
    expect(normal.getByText('+')).toBeInTheDocument();
    expect(normal.getByText('-')).toBeInTheDocument();
  });

  it('+を押すと1増えること', () => {
    render(<Counter />);

    const normal = within(screen.getByTestId('normal'));

    fireEvent.click(normal.getByText('+'));

    expect(normal.getByText('1')).toBeInTheDocument();
    expect(normal.getByText('+')).toBeInTheDocument();
    expect(normal.getByText('-')).toBeInTheDocument();
  });

  it('-を押すと1減ること', () => {
    render(<Counter />);

    const normal = within(screen.getByTestId('normal'));

    fireEvent.click(normal.getByText('-'));

    expect(normal.getByText('-1')).toBeInTheDocument();
    expect(normal.getByText('+')).toBeInTheDocument();
    expect(normal.getByText('-')).toBeInTheDocument();
  });

  it('+10を押すと10増えること', () => {
    render(<Counter />);

    const ten = within(screen.getByTestId('ten'));

    fireEvent.click(ten.getByText('+'));

    expect(ten.getByText('10')).toBeInTheDocument();
    expect(ten.getByText('+')).toBeInTheDocument();
    expect(ten.getByText('-')).toBeInTheDocument();
  });
});
