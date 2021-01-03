let RandomArr = [];
function createRandom(){
    const countValue = document.getElementById('count').value;
    const widthValue = document.getElementById('width').value;
    const heightValue = document.getElementById('height').value;
    for (let i=0;i<countValue;i++){
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
    console.log(RandomArr)
}
startBtn.addEventListener('click', createRandom );


function playGame(arr){
    for (let k = 0 ; k < arr.length ; k++ ){
        arr[k].addEventListener('click', function(){
            // if(arr[k].backgroundColor === 'white'){
                arr[k].style.backgroundColor = 'skyblue';
                for (let i=0;i<RandomArr.length;i++){
                    if (RandomArr[i] === k){
                        arr[k].style.backgroundColor = 'yellow';
                    }
                }
            // }else{
            //     alert('이미 누른 곳입니다.');
            // }
        })
    }
}

let classArr;
startBtn.addEventListener('click', function(){
    classArr = document.getElementsByClassName('Box');
    console.log(classArr.length)
    playGame(classArr);
})

function resetGame(){
    RandomArr = [];
}
resetBtn.addEventListener( 'click', resetGame );