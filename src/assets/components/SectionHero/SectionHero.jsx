import styles from './SectionHero.module.scss';

export default function SectionHero() {
  return (
    <section className={styles['section-hero']}>
      <div className={styles['section-hero__container']}>
        <h1 className={styles['section-hero__title']}>
          Learn <span className={styles['section-hero__accent']}>faster</span>,
          word <br /> by word!
          <svg className={styles['section-hero__icon']}>
            <use xlinkHref="src/assets/icons/sprite.svg#bulb"></use>
          </svg>
        </h1>

        <h2 className={styles['section-hero__subtitle']}>
          An intuitive flashcard app where <br /> you&apos;ll quickly build your
          English vocabulary.
        </h2>
      </div>

      <div className={styles['section-hero__img-box']}>
        <img
          className={styles['section-hero__img']}
          src="src/assets/images/girl.svg"
          alt="girl"
        />
      </div>
    </section>
  );
}
