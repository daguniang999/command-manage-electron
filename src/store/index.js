import { defineStore } from "pinia";

import { sidebarStore } from './SidebarStore.js'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
      isOpen: sidebarStore().isOpen
    }
  }
})
