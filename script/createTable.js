function createTable(){
    const widthValue = document.getElementById('width').value;
    const heightValue = document.getElementById('height').value;
    //테이블 없애는 코드
    const gameTable = document.getElementById("gameTable");
    while(gameTable.hasChildNodes()){
            gameTable.removeChild(gameTable.firstChild); 
    }
    //테이블 만드는 코드
    for (let i=0;i<+heightValue;i++){
        let div = document.createElement('div');
        for (let j=0;j<+widthValue;j++){
            const newDiv = document.createElement('div')
            newDiv.className = 'Box inlineBlock'
            div.appendChild(newDiv);
        }
        gameTable.appendChild(div);
    }
}
startBtn.addEventListener('click', createTable );