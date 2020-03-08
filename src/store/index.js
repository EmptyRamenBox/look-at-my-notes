import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [
      {
        id: 0,
        title: "STP - Spanning Tree Protocol",
        content:
        "Layer 2 Protocol that uses STA, to prevent switching loops, by blocking some ports that are used in redundant links."
      },
      {
        id: 1,
        title: "IP - Internet Protocol",
        content:
        "A Route Protocol that functions at Layer 3 of the OSI Model. Used to assign an logical address to a device in an IP network."
      }
    ]
  },
  getters: {
    getNotes: state => state.notes,
    getNote: state => id => state.notes.find(note => note.id === id)
  },
  mutations: {
    addingNote: (state, newNote) => state.notes.push(newNote),
    removingNote: (state, id) =>
      (state.notes = state.notes.filter(note => note.id != id))
  },
  actions: {
    addNote: ({ commit }, newNote) => commit("addingNote", newNote),
    removeNote: ({ commit }, id) => commit("removingNote", id)
  }
});
