//! Listen keybord //
window.addEventListener('keydown',function(t){
//! take the audio data and key data //
    const audio  = this.document.querySelector(`audio[data-key = "${t.keyCode}"]`)
    const key  = this.document.querySelector(`.key[data-key = "${t.keyCode}"]`)  
//! Stop to playing all //
if (!audio){
    return
}
//! rewind to sound not a playing all the time //
audio.currentTime= 0 
audio.play()
key.classList.add('playing')

})

const removeTransition = function(s){
    if (s.propertyName !== 'transform') 
      return
    this.classList.remove('playing')
  }

  //! press keybord on the page to listen //
const keys = document.querySelectorAll('.key')
console.log(keys)
keys.forEach(function(key){
  key.addEventListener('transitionend', removeTransition)
})