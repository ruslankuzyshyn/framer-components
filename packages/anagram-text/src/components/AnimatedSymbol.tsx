import { useState, useEffect } from 'react';
import {
  ANIMATION_CHARS,
  ANIMATION_INTERVALS,
  MAX_ANIMATION_ITERATIONS,
} from '../constants';
import { getRandomValueBetweenMinAndMax } from '../utils';

interface AnimatedSymbolProps {
  value: string;
}

export default function AnimatedSymbol({ value }: AnimatedSymbolProps) {
  const [step, setStep] = useState<number>(1);
  const [displayValue, setDisplayValue] = useState<string>(
    ANIMATION_CHARS[
      getRandomValueBetweenMinAndMax(0, ANIMATION_CHARS.length - 1)
    ],
  );

  useEffect(() => {
    setTimeout(
      () => {
        if (step < MAX_ANIMATION_ITERATIONS) {
          const randomChar =
            ANIMATION_CHARS[
              getRandomValueBetweenMinAndMax(0, ANIMATION_CHARS.length - 1)
            ];
          setStep((step) => step + 1);
          setDisplayValue(randomChar);
        } else {
          setDisplayValue(value);
        }
      },
      ANIMATION_INTERVALS[
        getRandomValueBetweenMinAndMax(0, ANIMATION_INTERVALS.length - 1)
      ],
    );
  }, [step]);

  return <span>{displayValue}</span>;
}
