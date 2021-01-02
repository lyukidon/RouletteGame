let RandomArr = [];
function createRandom(){
    const countValue = document.getElementById('count').value;
    const widthValue = document.getElementById('width').value;
    const heightValue = document.getElementById('height').value;
    for (let i=0;i<countValue;i++){
        RandomArr.push(Math.floor(Math.random() * widthValue * heightValue))
    }
}
startBtn.addEventListener('click', createRandom );


function playGame(arr){
    for (let k = 0 ; k < arr.length ; k++ ){
        arr[k].addEventListener('click', function(){
            // if(arr[k].backgroundColor === 'white'){
                for (let i=0;i<RandomArr.length;i++){
                    if (RandomArr[i] === k){
                        arr[k].style.backgroundColor = 'yellow';
                    }else{
                        arr[k].style.backgroundColor = 'skyblue';
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