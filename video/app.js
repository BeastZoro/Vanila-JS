const button = document.querySelector('.video_controls')
const video = document.querySelector('video')

button.addEventListener('click', () =>{
    if(button.classList.contains('switch')){
        button.classList.remove('switch')
        video.play()
    } else {
        button.classList.add('switch')
        video.pause()
    }
})