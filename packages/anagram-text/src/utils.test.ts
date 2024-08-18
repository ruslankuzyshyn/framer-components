import { getRandomValueBetweenMinAndMax } from './utils';
import { expect } from '@storybook/jest';

describe('Utils', () => {
  describe('getRandomValueBetweenMinAndMax', () => {
    it('returns value in specified range', () => {
      const random = getRandomValueBetweenMinAndMax(0, 10);

      expect(random).toBeGreaterThanOrEqual(0);
      expect(random).toBeLessThanOrEqual(10);
    });

    it('always returns the same value if range is a single digit', () => {
      let random = getRandomValueBetweenMinAndMax(1, 1);

      expect(random).toBe(1);

      random = getRandomValueBetweenMinAndMax(5, 5);

      expect(random).toBe(5);
    });
  });
});
