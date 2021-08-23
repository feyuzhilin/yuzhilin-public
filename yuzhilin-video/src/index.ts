import { YPlayer } from "./components/player"

const yPlayer: YPlayer = new YPlayer({
    el: "yuzhilin-video-wrap",
    url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
})
yPlayer.init() 

// 函数柯里化-参数复用
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) { // 通过函数的length属性，来获取函数的形参个数
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    }
}

function buildUri(scheme, domain, path) {
    // console.log(`${scheme}-${domain}-${path}`)
}


const buildUriCurry = curry(buildUri);
const myGithubPath = buildUriCurry("hello", "world");

myGithubPath("yuzhilin");
myGithubPath("four");

//延迟计算
const add = function (a, b) {
    // console.log(a + b)
    return a + b;
};

const curried = curry(add);
curried(1)(2);