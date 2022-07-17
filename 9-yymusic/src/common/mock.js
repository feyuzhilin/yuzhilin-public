import data from './songData.json'

export default function mock() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, 500)
    }, reject => {
        reject({ code: 500, result: null })
    })
}