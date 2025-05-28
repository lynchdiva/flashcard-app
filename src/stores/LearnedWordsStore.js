import { makeAutoObservable, reaction } from 'mobx';

class LearnedWordsStore {
  learnedWords = [];

  constructor() {
    makeAutoObservable(this);
    this.learnedWords = this.loadLearnedWordsFromLocalStorage();

    reaction(
      () => this.learnedWords.slice(),
      learnedWords =>
        localStorage.setItem('learnedWords', JSON.stringify(learnedWords))
    );
  }

  loadLearnedWordsFromLocalStorage() {
    const storedWords = localStorage.getItem('learnedWords');
    return storedWords ? JSON.parse(storedWords) : [];
  }

  addLearnedWord(englishText) {
    if (!this.learnedWords.includes(englishText)) {
      this.learnedWords.push(englishText);
    }
  }

  updateLearnedWord(prevEnglishText, updatedEnglishText) {
    this.learnedWords = this.learnedWords.map(text =>
      text === prevEnglishText ? updatedEnglishText : text
    );
  }

  deleteLearnedWord(englishText) {
    this.learnedWords = this.learnedWords.filter(
      learned => learned !== englishText
    );
  }
}

export const learnedWordsStore = new LearnedWordsStore();
