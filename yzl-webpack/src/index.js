// ./src/index.js

import './main.css';
import './sass.scss' // 引入 Sass 文件
import logo from './assets/avatar.png'

const a = 'Hello ITEM'
console.log(a)

const img = new Image()
img.src = logo

document.getElementById('imgBox').appendChild(img)

class Author {
    name = 'yuzhilin'
    age = 18
    email = 'yuzhilin3333@163.com'

    info = () => {
        return {
            name: this.name,
            age: this.age,
            email: this.email
        }
    }
}
class Author1 {
    name = 'yuzhilin'
    age = 18
    email = 'yuzhilin3333@163.com'

    info = () => {
        return {
            name: this.name,
            age: this.age,
            email: this.email
        }
    }
}
class Author2 {
    name = 'yuzhilin'
    age = 18
    email = 'yuzhilin3333@163.com'

    info = () => {
        return {
            name: this.name,
            age: this.age,
            email: this.email
        }
    }
}

class Author3 {
    name = 'yuzhilin'
    age = 18
    email = 'yuzhilin3333@163.com'

    info = () => {
        return {
            name: this.name,
            age: this.age,
            email: this.email
        }
    }
}

class Author4 {
    name = 'yuzhilin'
    age = 18
    email = 'yuzhilin3333@163.com'

    info = () => {
        return {
            name: this.name,
            age: this.age,
            email: this.email
        }
    }
}
let author = new Author()
console.log(test) //测试devtool
module.exports = Author