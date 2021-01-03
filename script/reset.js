function resetGame(){
    RandomArr = [];
    const gameTable = document.getElementById('gameTable');
    while(gameTable.hasChildNodes()){
        gameTable.removeChild(gameTable.firstChild); 
    }
}
resetBtn.addEventListener( 'click', resetGame );