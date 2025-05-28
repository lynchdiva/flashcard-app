export const wordService = {
  async fetchWords() {
    const response = await fetch('/api/words');
    if (!response.ok) throw new Error('Error loading words');
    return response.json();
  },

  async addWord(newWord) {
    const response = await fetch('/api/words/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWord)
    });
    if (!response.ok) throw new Error('Error adding word');
    return response.json();
  },

  async updateWord(updatedWord) {
    const response = await fetch(`/api/words/${updatedWord.id}/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedWord)
    });
    if (!response.ok) throw new Error('Error updating word');
    return response.json();
  },

  async deleteWord(wordId) {
    const response = await fetch(`/api/words/${wordId}/delete`, {
      method: 'POST'
    });
    if (!response.ok) throw new Error('Error deleting word');
  }
};
