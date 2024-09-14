import { defineStore } from 'pinia'

interface State {
  data: ScanDocument[],
  saveable: Ref<Boolean>,
  scannable: Ref<Boolean>
}

export const useScanDocumentStore = defineStore('scanDocument', {
  state: (): State => {
    return {
      data: [],
      saveable: ref(false),
      scannable: ref(false)
    }
  },
  getters: {
    list(): ScanDocument[] {
      return this.data
    }
  },
  actions: {
    addItem(scan: ScanDocument): void {
      this.data.push(scan)
    }
  }
})

interface ScanDocument {
  id: Number,
  reference: String,
  image: String,
  text: String
}
