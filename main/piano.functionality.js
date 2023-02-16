// Initialize the synthesizer 
const synth = new Tone.Synth().toDestination();

// Takes input from the mouse pressing the keyboard buttons
const PlayTune = (tune_type) => { 
    const now = Tone.now();
    // trigger the attack immediately 
        //synth.triggerAttack(tune_type, now); 
    // wait one second before triggering the release
        //synth.triggerRelease(now + 0.5); //Second parameter is the time when the button is released
    
    //Can also combine the two together:
    synth.triggerAttackRelease(tune_type, "8n", now);
}

//Function is invoked upon the window finishing it's loading.
window.onload = function() {
    //This is adds an event listener to our whole document, capturing the keypresses
    document.addEventListener('keyup', (event) => {
            const key_name = event.key.toLowerCase();
            //console.log('Key pressed is ' + key_name); //Debugging purposes
            
            //An object containing the tune values for the key presses
            const key_converter = {
                'a': 'C4',
                's': 'D4',
                'd': 'E4',
                'f': 'F4',
                'g': 'G4',
                'h': 'A4',
                'j': 'B4',
                'k': 'C5',
                'l': 'D5',
                '.': 'E5',
                'w': 'C#4',
                'e': 'D#4',
                't': 'F#4',
                'y': 'G#4',
                'u': 'Bb4',
                'o': 'C#5',
                'p': 'D#5'
            }
            
            //If the key is in the key_converter object, return bool -> true / false
            const result = key_converter.hasOwnProperty(key_name);
            //console.log(result);  
            
            //If the result returns true, then send it to our PlayTune function to play the corresponding tune.
            if (result) {
                PlayTune(key_converter[key_name]);
            }
        });
}

