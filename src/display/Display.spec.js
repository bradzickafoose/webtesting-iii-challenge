// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('Display renders successfully', () => {
    expect(render(<Display />)).toMatchSnapshot();
});

// displays if gate is open/closed and if it is locked/unlocked
test('display if gate is open and unlocked', () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    expect(getByText('Open')).toMatchSnapshot();
    expect(getByText('Unlocked')).toMatchSnapshot();
})

test('display if gate is closed and unlocked', () => {
    const { getByText } = render(<Display closed={true} locked={false} />);
    expect(getByText('Closed')).toMatchSnapshot();
    expect(getByText('Unlocked')).toMatchSnapshot();
})

test('display if gate is closed and locked', () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    expect(getByText('Closed')).toMatchSnapshot();
    expect(getByText('Locked')).toMatchSnapshot();
})