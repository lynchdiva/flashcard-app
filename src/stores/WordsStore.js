import { makeAutoObservable, runInAction } from 'mobx';
import { learnedWordsStore } from './LearnedWordsStore';
import { wordService } from '../api/wordService';

class WordsStore {
  pendingRequests = 0;
  words = [];
  isLoading = false;
  error = null;
  serverFeedback = { status: null };

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(loading) {
    runInAction(() => {
      this.pendingRequests += loading ? 1 : -1;
      this.isLoading = this.pendingRequests > 0;
    });
  }

  get inProgressWords() {
    return this.words.filter(
      word => !learnedWordsStore.learnedWords.includes(word.english)
    );
  }

  async fetchWords() {
    this.setLoading(true);
    try {
      const data = await wordService.fetchWords();
      runInAction(() => {
        this.words = data;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        this.serverFeedback = { status: false };
      });
    } finally {
      this.setLoading(false);
    }
  }

  async addWord(newWord) {
    this.setLoading(true);
    try {
      const data = await wordService.addWord(newWord);
      runInAction(() => {
        this.words.push(data);
        this.serverFeedback = { status: true };
      });
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        this.serverFeedback = { status: false };
      });
    } finally {
      this.setLoading(false);
    }
  }

  async updateWord(updatedWord) {
    this.setLoading(true);
    try {
      const data = await wordService.updateWord(updatedWord);
      runInAction(() => {
        this.words = this.words.map(word => {
          if (word.id === updatedWord.id) {
            learnedWordsStore.updateLearnedWord(word, updatedWord);
            return data;
          } else {
            return word;
          }
        });
      });
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        this.serverFeedback = { status: false };
      });
    } finally {
      this.setLoading(false);
    }
  }

  async deleteWord(deletedWord) {
    this.setLoading(true);
    try {
      await wordService.deleteWord(deletedWord.id);
      runInAction(() => {
        this.words = this.words.filter(word => word.id !== deletedWord.id);
        learnedWordsStore.deleteLearnedWord(deletedWord);
      });
    } catch (err) {
      runInAction(() => {
        this.error = err.message;
        this.serverFeedback = { status: false };
      });
    } finally {
      this.setLoading(false);
    }
  }
}
export const wordsStore = new WordsStore();
