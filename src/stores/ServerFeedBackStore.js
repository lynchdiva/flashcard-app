import { makeAutoObservable } from 'mobx';

class ServerFeedbackStore {
  status = null;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  reset() {
    this.status = null;
    this.error = null;
  }
}

export const serverFeedbackStore = new ServerFeedbackStore();
