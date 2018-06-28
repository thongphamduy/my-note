// eslint-disable-file
export const addNewNote = () => ({
  type: 'ADD_NEW_NOTE',
});

export const searchNote = text => ({
  type: 'SEARCH_NOTE',
  text,
});

export const filterCategory = newValue => ({
  type: 'FILTER_CATEGORY',
  payload: newValue || { value: '' },
});

export const updateNote = (value, selectedNoteId, type) => ({
  type: 'UPDATE_NOTE',
  note: { value, selectedNoteId, type },
});

export const selectNote = selectedNoteId => ({
  type: 'SELECT_NOTE',
  selectedNoteId,
});

export const deleteNote = selectedNoteId => ({
  type: 'DELETE_NOTE',
  selectedNoteId,
});

export const updateNoteCategory = (newValue, actionMeta, selectedNoteId) => ({
  type: 'UPDATE_CATEGORY',
  payload: {
    newValue,
    actionMeta,
    selectedNoteId,
  },
});
