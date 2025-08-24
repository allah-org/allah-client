export default defineNuxtPlugin(() => {
  const bus = {
    events: {} as Record<string, Function[]>,
    
    on(event: string, callback: Function) {
      if (!this.events[event]) {
        this.events[event] = []
      }
      this.events[event].push(callback)
    },
    
    emit(event: string, ...args: any[]) {
      if (this.events[event]) {
        this.events[event].forEach(callback => callback(...args))
      }
    },
    
    off(event: string, callback?: Function) {
      if (!this.events[event]) return
      if (callback) {
        this.events[event] = this.events[event].filter(cb => cb !== callback)
      } else {
        delete this.events[event]
      }
    }
  }

  return {
    provide: {
      bus
    }
  }
})
