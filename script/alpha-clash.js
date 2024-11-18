// // home screen section
// function playNow() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     // showing the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continiueGame() {
    const alphabet = getARabdomAlphabet();
    // console.log('your random alphabet:', alphabet)


    // showing the random alphabets here
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    // set background color
    setBackgroundColorById(alphabet);

}
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // stop/quite the game
    if (playerPressed === 'Escape') {
        gameOver();
    }
    // get the expected alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    const alphabet = currentAlphabet.innerText;
    const expectedAlphabet = alphabet.toLocaleLowerCase();
    console.log(currentAlphabet, playerPressed);
    // check pressed alphabet matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // GET ELEMENT BY ID OPTION 1
        // // 1 get the current score
        // const currentScorElement = document.getElementById('current-score');
        // const currentScoreText = currentScorElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // // 2 increse score
        // const newScore = currentScore + 1;
        // // 3 showing the update score
        // currentScorElement.innerText = newScore;
        // console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continiueGame();
    }
    else {
        console.log('wrong pressed')
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }

        // GET ELEMENT BY ID OPTION 1
        // // 1 get the current life Element
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // 2 reduce the life count
        // const newLife = currentLife - 1;
        // // 3 display/showing the update life
        // currentLifeElement.innerText = newLife;
        // if (newLife === 0) {
        //     gameOver();
        // }

    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);
function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continiueGame();
}
function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // update the total score
    const totalScore = getTextElementValueById('current-score');
    console.log(totalScore);
    setTextElementValueById('total-score', totalScore);

    // clear the last using alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}