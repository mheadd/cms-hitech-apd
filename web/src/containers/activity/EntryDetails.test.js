import { shallow } from 'enzyme';
import React from 'react';

import { plain as EntryDetails, mapStateToProps } from './EntryDetails';

describe('the (Activity) EntryDetails component', () => {
  const props = {
    activityIndex: 2,
    activityKey: 'activity key',
    fundingSource: 'money pit',
    name: 'activity name'
  };

  test('renders correctly with the modal closed', () => {
    const component = shallow(<EntryDetails {...props} />);
    expect(component).toMatchSnapshot();

    const review = component.find('Review').dive();
    review.find('Button').simulate('click');

    // Modal is now open
    expect(component).toMatchSnapshot();

    component.find('ActivityDialog').prop('closeModal')();

    // Modal is now closed again
    expect(component).toMatchSnapshot();
  });

  test('maps state to props', () => {
    const state = {
      apd: {
        data: {
          activities: [
            {
              fundingSource: 'money pit',
              key: 'key1',
              name: 'that free money guy'
            },
            {
              fundingSource: 'black market kidneys',
              key: 'key2',
              name: 'scary alley'
            },
            {
              fundingSource: 'appropriations',
              key: 'key3',
              name: 'Congress Dollars'
            },
            {
              fundingSource: 'blackjack',
              key: 'key4',
              name: 'Lucky Pete'
            }
          ]
        }
      }
    };

    expect(mapStateToProps(state, { activityIndex: 2 })).toEqual({
      activityKey: 'key3',
      fundingSource: 'appropriations',
      name: 'Congress Dollars'
    });
  });
});
