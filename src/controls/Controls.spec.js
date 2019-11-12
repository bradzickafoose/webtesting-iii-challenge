// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('Controls renders successfully', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

test('Close button triggers toggle close', async () => {
    const mock = jest.fn()
    const { findByText } = render(
        <Controls toggleClosed={mock} closed={true} />
    )
    fireEvent.click(await findByText(/open gate/i));
    expect(mock).toHaveBeenCalled();
})
