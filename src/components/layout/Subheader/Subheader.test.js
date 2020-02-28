import React from 'react';
import { shallow } from 'enzyme';
import { SubheaderComponent } from './Subheader';

describe('Component Subheader', () => {
  it('should render without crashing', () => {
    const component = shallow(<SubheaderComponent />);
    expect(component).toBeTruthy();
  });
});
