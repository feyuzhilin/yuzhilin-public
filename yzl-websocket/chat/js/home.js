; ((doc, storage, location) => {

    const oInput = doc.querySelector('#wsInput')
    const oEnterBtn = doc.querySelector('#chatRoomEnterBtn')

    const init = () => {
        bindEvent()
    }

    function bindEvent() {
        oEnterBtn.addEventListener("click", handleEnterBtnClick, false)
    }
    function handleEnterBtnClick() {
        let userName = oInput.value
        if (!userName.trim().length) return;
        storage.setItem("username", userName)
        oInput.value = ''
        location.href = 'chatRoom.html'
    }

    init()

})(document, localStorage, location);