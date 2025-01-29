import Notification from './Notification';

export default function CompletionMessage() {
  return (
    <Notification src={'man-with-flag.svg'} alt={'Man with flag'}>
      Great job! <br /> You&apos;ve completed your session.
    </Notification>
  );
}
