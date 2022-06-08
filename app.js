const q1a = document.getElementById("q1-a")
const q1c = document.getElementById("q1-c")

const q2b = document.getElementById("q2-b")
const q2c = document.getElementById("q2-c")

const q3a = document.getElementById("q3-a")
const q3b = document.getElementById("q3-b")

const q4a = document.getElementById("q4-a")
const q4c = document.getElementById("q4-c")

var score = 0;
var scoredata = document.getElementById("scoredata")
let submit= () => {
     const ans1b = document.getElementById("q1-b");
    if (ans1b.checked == true) {
        score++
        alert("Q1 answer is right")
    }
    else {
        alert("Q1 answer is wrong")
    }
     const ans2a = document.getElementById("q2-a")
    if (ans2a.checked == true) {
        score++
        alert("Q2 answer is right")
    }
    else {
        alert("Q2 answer is wrong")
    }
     const ans3c = document.getElementById("q3-c")
    if (ans3c.checked == true) {
        score++
        alert("Q3 answer is right")
    }
    else {
        alert("Q3 answer is wrong")
    }
     const ans4b = document.getElementById("q4-b")
     
    if (ans4b.checked == true) {
        score++
        alert("Q4 answer is right")
    }
    else {
        alert("Q4 answer is wrong")
    }



    q1a.checked = false
    ans1b.checked = false
    q1c.checked = false
    ans2a.checked = false
    q2b.checked = false
    q2c.checked = false
    q3a.checked =  false
    q3b.checked = false
    ans3c.checked = false
    q4a.checked = false
    ans4b.checked = false
    q4c.checked = false


    scoredata.innerHTML = score;
    

}
let clearScore = () =>{
   scoredata.innerHTML = 0;
}