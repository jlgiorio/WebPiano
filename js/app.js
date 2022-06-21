document.addEventListener('DOMContentLoaded', () => { //this allow the html script call to be in the begining of the file, before the HTML content.
    const keys = document.querySelectorAll('.key')
    keys.forEach((key => {
        const keyPlay = key.dataset.note

        document.addEventListener('keydown', (e) => {
            const keyPressed = e.code
            if(keyPressed == keyPlay){
                console.log("Tocou: ", keyPlay)
            }
        })
        
    }))
    

})