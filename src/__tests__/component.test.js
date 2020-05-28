import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Header from '../Components/Header/Header';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('testing for profile photo', () => {
  test('Renders out display photo', () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    expect(container.textContent).toContain('test');
  });
});
