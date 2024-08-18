import { addPropertyControls, ControlType } from 'framer';
import AnimatedSymbol from './AnimatedSymbol';

export interface AnagramTextProps {
  value?: string;
}

export const DEFAULT_PROPS: Required<AnagramTextProps> = {
  value: 'Hello, World!',
};

function AnagramText(props: AnagramTextProps) {
  // Override props with default values if not provided
  const value = props.value ?? DEFAULT_PROPS.value;

  const chars = value.split('');

  return (
    <>
      {chars.map((char, i) => (
        <AnimatedSymbol key={i} value={char} />
      ))}
    </>
  );
}

// @ts-expect-error - Framer type definitions are incorrect
addPropertyControls(AnagramText, {
  value: {
    type: ControlType.String,
    title: 'Text value 123',
    defaultValue: DEFAULT_PROPS.value,
  },
});

export default AnagramText;
