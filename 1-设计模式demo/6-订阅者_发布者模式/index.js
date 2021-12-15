class EmitEvent {
    constructor() {
        this.handlers = {}
    }
    on(eventName, callback) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = []
        }
        this.handlers[eventName].push(callback)
    }
    emit(eventName, ...args) {
        if (this.handlers[eventName]) {
            const handlers = this.handlers[eventName].slice()
            // 如果有，则逐个调用队列里的回调函数
            handlers.forEach((callback) => {
                callback(...args)
            })
        }
    }
    remove(eventName) {
        delete this.handlers[eventName]
    }
    once(eventName, callback) {
        const wrapper = (...args) => {
            callback(...args)
            this.remove(eventName)
        }
        this.on(eventName, wrapper)
    }
}