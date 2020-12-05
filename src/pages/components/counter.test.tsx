import React from 'react';
import { render, screen } from '@testing-library/react';

import { Counter } from './counter';

describe('カウンターのテスト', () => {
  it('初期表示はカウントが0である', () => {
    render(<Counter />);

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.queryByText('1')).not.toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
  });
});
