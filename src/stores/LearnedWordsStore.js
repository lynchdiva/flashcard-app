import { makeAutoObservable, reaction } from 'mobx';

class LearnedWordsStore {
  learnedWords = JSON.parse(localStorage.getItem('learnedWords')) || [];

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.learnedWords.slice(),
      learnedWords =>
        localStorage.setItem('learnedWords', JSON.stringify(learnedWords))
    );
  }

  addLearnedWord(newWord) {
    if (!this.learnedWords.includes(newWord.english)) {
      this.learnedWords.push(newWord.english);
    }
  }

  updateLearnedWord(prevLearnedWord, updatedLearnedWord) {
    this.learnedWords = this.learnedWords.map(word =>
      word === prevLearnedWord.english ? updatedLearnedWord.english : word
    );
  }

  deleteLearnedWord(word) {
    this.learnedWords = this.learnedWords.filter(
      learned => learned !== word.english
    );
  }
}

export const learnedWordsStore = new LearnedWordsStore();
