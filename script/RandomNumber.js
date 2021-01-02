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


startBtn.addEventListener('click', function(){
    const classArr = document.getElementsByClassName('Box');
    console.log(classArr.length)
    for (let k = 0 ; k < classArr.length ; k++ ){
        classArr[k].addEventListener('click', function(){
            console.log('1')
            if(classArr[k].backgroundColor === 'white'){
                for (let i=0;i<RandomArr.length;i++){
                    if (RandomArr[i] === k){
                        this.style.backgroundColor = 'yellow';
                    }else{
                        this.style.backgroundColor = 'skyblue';
                    }
                }
            }else{
                alert('이미 누른 곳입니다.');
            }
        })
    }
});

function resetGame(){
    RandomArr = [];
}
resetBtn.addEventListener( 'click', resetGame );