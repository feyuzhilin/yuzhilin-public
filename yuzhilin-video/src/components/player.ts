
interface IOption {
    el: String,
    url: String
}

export class YPlayer {
    private option: IOption
    constructor(option: IOption) {
        this.option = option
    }
    init() {
        const videoel: HTMLElement = document.getElementById(this.option.el as string)
        const video: HTMLElement = document.createElement('video')
        video.className = 'yuzhilin-video'
        video.setAttribute("controls", "controls");
        video.setAttribute('src',this.option.url as string)
        videoel.appendChild(video)

    }
}