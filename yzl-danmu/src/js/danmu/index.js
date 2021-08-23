import { isObject, isArray } from "./utils";
import Danmu from "./danmu";


export default class VideoDanmu {
    constructor(video, canvas, options) {
        if (!video || !canvas || !options || !isObject(options)) return;;
        if (!options.danmuData || isArray(!options.danmuData)) return;
        this.video = video
        this.canvas = canvas
        this.canvasCtx = canvas.getContext('2d')
        this.canvas.width = video.offsetWidth
        this.canvas.height = video.offsetHeight
        this.danmupaused = true

        Object.assign(this, options, {
            speed: 2,
            runTime: 0,
            color: "#fff"
        })
        this.danmuPool = this.createDanmu()
    }

    createDanmu() {
        return this.danmuData.map(dm => new Danmu(dm, this))
    }

    render() {
        this.clearRect()
        this.drawDanmu()
        !this.danmupaused && requestAnimationFrame(this.render.bind(this))
    }

    reset() {
        this.clearRect()
        let currentTime = this.video.currentTime
        this.danmuPool.map(danmu => {
            danmu.stopDrawing = false
            if (currentTime >= danmu.runTime) {
                danmu.isinited = false
            } else {
                danmu.stopDrawing = true
            }
        })
    }
    addDanmu(data){
        this.danmuPool.push(new Danmu(data,this))
    }

    drawDanmu() {
        let currentTime = this.video.currentTime
        this.danmuPool.map(danmu => {
            if (!danmu.stopDrawing && currentTime >= danmu.runTime) {
                if (!danmu.isinited) {
                    danmu.init()
                    danmu.isinited = true
                }
                danmu.X -= danmu.speed
                danmu.draw()
                if (danmu.X <= danmu.width * -1) {
                    danmu.stopDrawing = true
                }
            }
        })
    }

    clearRect() {
        this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}