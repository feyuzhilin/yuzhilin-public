import VideoDanmu from "./danmu/index"
const danmuData = [
    {
        content: "我是一条弹幕0",
        speed: 2,
        runTime: 0,
        color: 'red'
    },
    {
        content: "我是一条弹幕11",
        speed: 2,
        runTime: 5,
        color: 'green'
    },
    {
        content: "我是一条弹幕222",
        speed: 7,
        runTime: 8,
        color: 'yellow'
    },
    {
        content: "我是一条弹幕3333",
        speed: 2,
        runTime: 8,
        color: 'skyblue'
    },
    {
        content: "我是一条弹幕44444",
        speed: 3,
        runTime: 10,
        color: 'blue'
    },
    {
        content: "我是一条弹幕555555",
        speed: 5,
        runTime: 20,
        color: 'pink'
    },
    {
        content: "我是一条弹幕6666666",
        speed: 5,
        runTime: 20,
        color: ''
    }
];
; (function (doc) {
    //获取video canvas dom对象
    const oDanmuVideo = doc.getElementById('y_danmuVideo'),
        oDanmuCanvas = doc.getElementById('y_danmuCanvas'),
        oDanmuBtn = doc.getElementById('y_danmuBtn'),
        oDanmuInput = doc.getElementById('y_danmuInput'),
        oDanmuColorInput = doc.getElementById('y_danmuColorInput');

    //模块初始化函数
    const init = () => {
        window.videoDanmu = new VideoDanmu(
            oDanmuVideo,
            oDanmuCanvas,
            {
                danmuData
            }
        )
        bindEvent()
    }
    //绑定事件处理函数
    function bindEvent() {
        oDanmuVideo.addEventListener("play", handlePlayEvent, false)
        oDanmuVideo.addEventListener("pause", handlePauseEvent, false)
        oDanmuVideo.addEventListener("seeked", handleSeekedEvent, false)
        oDanmuBtn.addEventListener("click", handleSeedEvent, false)
        oDanmuInput.onkeypress = function(e){
            if(e.key === "Enter"){
                handleSeedEvent()
            }
        }
    }
    function handlePlayEvent() {
        videoDanmu.danmupaused = false
        videoDanmu.render()
    }
    function handlePauseEvent() {
        videoDanmu.danmupaused = true
    }
    function handleSeekedEvent() {
        videoDanmu.reset()
    }
    function handleSeedEvent() {
        if(!oDanmuInput.value) return;
        let _data = {
            content: oDanmuInput.value,
            color: oDanmuColorInput.value,
            runTime: oDanmuVideo.currentTime
        }
        videoDanmu.addDanmu(_data)
        oDanmuInput.value = ''

    }
    init()
})(document);