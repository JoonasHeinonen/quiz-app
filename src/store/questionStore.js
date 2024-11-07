import { create } from 'zustand';
import axios from 'axios';

const questionStore = create((set) => ({
  questions: [],
  fetchQuestions: async() => {
    const res = await axios.get('http://localhost:3001/questions')
    set({ questions: res.data });
  },
}));

export default questionStore;