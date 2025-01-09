import styles from './SectionWordList.module.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';
import WordList from '../WordList/WordList.jsx';
import { useState } from 'react';

export default function SectionWordList() {
  //хранить массив слов в локальном состоянии и передать обработчик к дочерним компонентам для изменения этого массива - временное решение до подключения менеджера состояния
  const data = [
    {
      id: '33026',
      english: 'precise',
      transcription: '[prɪˈsaɪs]',
      russian: 'точный',
      tags: ''
    },
    {
      id: '33027',
      english: 'analysis',
      transcription: '[əˈnæləsɪs]',
      russian: 'анализ',
      tags: ''
    },
    {
      id: '33028',
      english: 'approach',
      transcription: '[əˈprəʊtʃ]',
      russian: 'подход',
      tags: ''
    },
    {
      id: '33029',
      english: 'resilience',
      transcription: '[rɪˈzɪlɪəns]',
      russian: 'устойчивость',
      tags: ''
    },
    {
      id: '33047',
      english: 'pacification',
      transcription: '[ˌpæsəfəˈkeɪʃən]',
      russian: 'умиротворение',
      tags: ''
    },
    {
      id: '33050',
      english: 'persistent',
      transcription: '[pərˈsɪstənt]',
      russian: 'упорный',
      tags: ''
    },
    {
      id: '33051',
      english: 'flabbergasted',
      transcription: '[ˈflæbərˌɡæstəd]',
      russian: 'ошеломлённый',
      tags: ''
    },
    {
      id: '33067',
      english: 'kaiser',
      transcription: '[ˈkaɪzər]',
      russian: 'кайзер',
      tags: ''
    },
    {
      id: '33073',
      english: 'melodious',
      transcription: '[mɪˈloʊdɪəs]',
      russian: 'мелодичный, певучий',
      tags: ''
    },
    {
      id: '33074',
      english: 'tidily',
      transcription: '[ˈtaɪdɪli] ',
      russian: 'опрятно',
      tags: ''
    }
  ];

  const [words, changeWords] = useState(data);

  const handleWordsChange = replacement => {
    changeWords(
      words.map(originalWord => {
        return originalWord.id === replacement.id ? replacement : originalWord;
      })
    );
  };

  return (
    <section className={styles['section-words']}>
      <div className={styles['section-words__container']}>
        <p className={styles['section-words__title']}>
          Wordlist (<span>{words.length}</span>)
        </p>

        <div className={styles['section-words__box']}>
          <button className={styles['section-words__add-button']}>
            Add word
            <svg className={styles['section-words__plus-icon']}>
              <use xlinkHref="src/assets/icons/sprite.svg#add-button"></use>
            </svg>
          </button>

          <DropdownMenu />
        </div>
      </div>

      <WordList words={words} onSave={handleWordsChange} />
    </section>
  );
}
