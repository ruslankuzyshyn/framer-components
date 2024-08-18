import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import AnagramText, {DEFAULT_PROPS} from './AnagramText';

jest.mock('framer');

describe('AnagramText', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  })

  afterEach(() => {
    jest.useRealTimers();
  })

  it('renders expected value after animation', async () => {
    const value = 'Test value';
    const {container} = render(<AnagramText value={value} />);

    act(() => {
        jest.advanceTimersByTime(100000); // To Make sure the animation is done
    })

    await waitFor(() => expect(container.textContent).toEqual(value));
  });

  it('renders default value', async () => {
    const {container} = render(<AnagramText />);

    act(() => {
      jest.advanceTimersByTime(100000); // To Make sure the animation is done
    })

    await waitFor(() => expect(container.textContent).toEqual(DEFAULT_PROPS.value));
  });
});
