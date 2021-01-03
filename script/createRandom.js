let RandomArr = [];
function createRandom(){
    const countValue = document.getElementById('count').value;
    const widthValue = document.getElementById('width').value;
    const heightValue = document.getElementById('height').value;
    while (RandomArr.length<countValue){
        const random = Math.floor(Math.random() * widthValue * heightValue)
        let chk = 1;
        for (let i=0;i<RandomArr.length;i++){
            if (random === RandomArr[i]){
                chk = 0;
            }
        }
        if (chk === 1){
            RandomArr.push(random)
        }
    }
}
startBtn.addEventListener('click', createRandom );


function playGame(arr){
    for (let k = 0 ; k < arr.length ; k++ ){
        arr[k].addEventListener('click', function(){
            arr[k].style.backgroundColor = 'skyblue';
            for (let i=0;i<RandomArr.length;i++){
                if (RandomArr[i] === k){
                    arr[k].style.backgroundColor = 'red';
                }
            }
            
        })
    }
}

let BoxArr;
startBtn.addEventListener('click', function(){
    BoxArr = document.getElementsByClassName('Box');
    playGame(BoxArr);
})