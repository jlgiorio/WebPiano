document.addEventListener('DOMContentLoaded', () => { //this allow the html script call to be in the begining of the file, before the HTML content.
    //Global variables declaration
    const keys     = document.querySelectorAll('.key')
    const speakers = document.querySelectorAll('.speaker')
    const bases    = document.querySelectorAll('.base')
    

    keys.forEach((key => {

        const keyPlay = key.dataset.key
        const note    = key.dataset.note

        document.addEventListener('keydown', (e) => {
            const keyPressed = e.code
            if(keyPressed == keyPlay){
                
                speakerBump()
                baseGlow()
                
                const noteSound = new Audio('../samples/'+note+'.mp3')
                const classAdd = key.classList.add('key-active')
                const classRemove = setTimeout(removeClass,100)
                
                noteSound.play()
                         
                function removeClass(){
                    key.classList.remove('key-active')
                    
                }
            }
        }) 
    }))


    //Functions
    function speakerBump(){
        
        speakers.forEach(speaker => {

            speaker.classList.add('speaker-active')
            const classRemove = setTimeout(removeSpeaker,100)
            
            function removeSpeaker(){
                speaker.classList.remove('speaker-active')
            }
        })
    }

    function baseGlow(){
        
        bases.forEach(base => {

            base.classList.add('base-active')
            const classRemove = setTimeout(removeBase,100)
            
            function removeBase(){
                base.classList.remove('base-active')
            }
        })
    }
})