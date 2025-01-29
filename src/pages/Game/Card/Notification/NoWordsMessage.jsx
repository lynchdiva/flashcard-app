import Notification from './Notification';

export default function NoWordsMessage() {
  return (
    <Notification src={'typing-woman.svg'} alt={'Typing woman'}>
      No words to study yet. <br /> Add some in progress!
    </Notification>
  );
}
