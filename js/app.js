document.addEventListener('DOMContentLoaded', () => { //this allow the html script call to be in the begining of the file, before the HTML content.
    //Global variables declaration
    const keys = document.querySelectorAll('.key')
    let keyClass

    keys.forEach((key => {

        const keyPlay = key.dataset.key
        const note    = key.dataset.note

        document.addEventListener('keydown', (e) => {
            const keyPressed = e.code
            if(keyPressed == keyPlay){

                if(note.substr(1,1) =='-'){
                    keyClass = "black-active"
                }else{
                    keyClass = "white-active"
                }
                
                const noteSound = new Audio('../samples/'+note+'.mp3')
                const classAdd = key.classList.add(keyClass)
                const classRemove = setTimeout(removeClass,100)

                noteSound.play()
                         
                function removeClass(){
                    key.classList.remove(keyClass)
                }
            }
        }) 
    }))
})