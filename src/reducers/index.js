import { combineReducers } from 'redux';
import { stat } from 'fs';

const appState = JSON.parse(localStorage.getItem('reduxState'));  // eslint-disable-line

const initState = {
  selectedNoteId: null,
  notes: appState ? appState.notes : [],
  searchText: '',
  categories: appState ? appState.categories : [],
  filterCategory: '',
};

const updateNoteData = (index, data, notes) => {
  notes[index][data.type] = data.value; // eslint-disable-line
  return notes[index];
};

const remainNotes = (id, notes) => notes.filter(note => note.id !== id);

const notesList = (state = initState.notes, action) => {
  console.log(state);
  switch (action.type) {
    case 'ADD_NEW_NOTE':
      return [{
        title: '',
        content: '',
        id: Date.now(), // eslint-disable-line
        tags: [],
      },
      ...state,
      ];
    case 'DELETE_NOTE': {
      const clonedList = state.filter(note => note.id !== action.selectedNoteId);
      return clonedList;
    }
    case 'UPDATE_NOTE': {
      const updatingNoteIndex = state.findIndex(note => note.id === action.note.selectedNoteId);
      const currentNote = updateNoteData(updatingNoteIndex, action.note, state);
      return [
        ...state.slice(0, updatingNoteIndex),
        { ...currentNote },
        ...state.slice(updatingNoteIndex + 1),
      ];
    }
    case 'UPDATE_CATEGORY': {
      const updatingNoteIndex = state.findIndex(note => note.id === action.payload.selectedNoteId);
      console.log('updatingNoteIndex', updatingNoteIndex);
      const clonedList = [...state];
      clonedList[updatingNoteIndex].tags = action.payload.newValue;
      return clonedList;
    }
    default:
      return state;
  }
};

const selectedNoteId = (state = initState.selectedNoteId, action) => {
  switch (action.type) {
    case 'SELECT_NOTE':
      return action.selectedNoteId;
    default:
      return state;
  }
};

const searchText = (state = initState.searchText, action) => {
  switch (action.type) {
    case 'SEARCH_NOTE':
      console.log(action.text);
      return action.text;
    default:
      return state;
  }
};

const filterCategory = (state = initState.filterCategory, action) => {
  switch (action.type) {
    case 'FILTER_CATEGORY':
      console.log('action', action);
      return action.payload.value;
    default:
      return state;
  }
};

const categories = (state = initState.categories, action) => {
  switch (action.type) {
    case 'UPDATE_CATEGORY': {
      const clonedCate = [...state];
      if (action.payload.actionMeta.action === 'create-option') {
        const newOption = action.payload.newValue[action.payload.newValue.length - 1]; //eslint-disable-line
        clonedCate.push(newOption);
      }
      return clonedCate;
    }
    default:
      return state;
  }
};

const noteApp = combineReducers({
  notes: notesList,
  selectedNoteId,
  searchText,
  filterCategory,
  categories,
});

export default noteApp;
