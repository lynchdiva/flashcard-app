import { makeAutoObservable, runInAction } from 'mobx';
import { learnedWordsStore } from './LearnedWordsStore';
import { wordService } from '../api/wordService';
import { serverFeedbackStore } from './ServerFeedBackStore';

class WordsStore {
  pendingRequests = 0;
  words = [];
  isLoading = false;
  serverFeedback = serverFeedbackStore;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(loading) {
    this.pendingRequests += loading ? 1 : -1;
    this.isLoading = this.pendingRequests > 0;
  }

  get inProgressWords() {
    return this.words.filter(
      word => !learnedWordsStore.learnedWords.includes(word.english)
    );
  }

  async fetchWords() {
    this.setLoading(true);
    this.serverFeedback.reset();

    try {
      const data = await wordService.fetchWords();
      runInAction(() => {
        this.words = data;
      });
    } catch (err) {
      runInAction(() => {
        this.serverFeedback.error = err.message;
        this.serverFeedback.status = false;
      });
    } finally {
      this.setLoading(false);
    }
  }

  async addWord(newWord) {
    this.setLoading(true);
    this.serverFeedback.reset();

    try {
      const data = await wordService.addWord(newWord);
      runInAction(() => {
        this.words.push(data);
        this.serverFeedback.status = true;
      });
    } catch (err) {
      runInAction(() => {
        this.serverFeedback.error = err.message;
        this.serverFeedback.status = false;
      });
    } finally {
      this.setLoading(false);
    }
  }

  async updateWord(updatedWord) {
    this.setLoading(true);
    this.serverFeedback.reset();

    try {
      const data = await wordService.updateWord(updatedWord);
      runInAction(() => {
        this.words = this.words.map(word => {
          if (word.id === updatedWord.id) {
            learnedWordsStore.updateLearnedWord(
              word.english,
              updatedWord.english
            );
            return data;
          } else {
            return word;
          }
        });
      });
    } catch (err) {
      runInAction(() => {
        this.serverFeedback.error = err.message;
        this.serverFeedback.status = false;
      });
    } finally {
      this.setLoading(false);
    }
  }

  async deleteWord(deletedWord) {
    this.setLoading(true);
    this.serverFeedback.reset();

    try {
      await wordService.deleteWord(deletedWord.id);
      runInAction(() => {
        this.words = this.words.filter(word => word.id !== deletedWord.id);
        learnedWordsStore.deleteLearnedWord(deletedWord.english);
      });
    } catch (err) {
      runInAction(() => {
        this.serverFeedback.error = err.message;
        this.serverFeedback.status = false;
      });
    } finally {
      this.setLoading(false);
    }
  }
}
export const wordsStore = new WordsStore();
