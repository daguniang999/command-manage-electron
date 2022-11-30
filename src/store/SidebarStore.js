import { defineStore } from "pinia";

export const sidebarStore = defineStore('sidebar', {
  state: () => {
    return {
      isOpen: true
    }
  },
  actions: {
    changeOpen() {

    }
  }
})
