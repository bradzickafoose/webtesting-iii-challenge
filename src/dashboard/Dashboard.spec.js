// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

// shows the controls and display
describe('<Dashboard />', () => {
    it('should match snapshot', () => {
        const dashboard = renderer.create(<Dashboard />).toJSON();

        expect(dashboard).toMatchSnapshot();
    });
});
