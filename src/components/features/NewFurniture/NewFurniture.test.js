import React from 'react';
import { shallow } from 'enzyme';
import NewFurniture from './NewFurniture';

describe('Component NewFurniture', () => {
  const mockSetSceenType = jest.fn();
  it('should render without crashing', () => {
    const component = shallow(<NewFurniture setScreenType={mockSetSceenType} />);
    expect(component).toBeTruthy();
  });
});
