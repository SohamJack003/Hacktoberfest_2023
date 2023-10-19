// const endDate = "11 July 2023 10:00 PM"
const val = document.querySelectorAll(".inputTime input")
let endDate = 0;
document.querySelector(".start").addEventListener("click", function(){
    endDate = val[0].value + " " + val[1].value + " " +  val[2].value + " " + val[3].value + ":" + val[4].value  + " " + val[5].value
});
console.log(endDate)
let input = document.querySelectorAll(".col input")
function clock(){
    let now = new Date();
    let end = new Date(endDate);
    let diff = (end - now);
// days conversion //
    input[0].value = Math.floor(((((diff/3600000)/24)/30)/12));
    input[1].value = Math.floor(((((diff/3600000)/24)/30)%12))
    input[3].value = Math.floor(((diff)/3600000)%24);
    input[2].value = Math.floor(((((((diff)/1000)/60)/60)/24)%30));
    input[4].value = Math.floor((((diff)/60000)%60));
    input[5].value = Math.floor(((diff/1000)%60));
}
// initial call
clock();
document.querySelector(".start").addEventListener("click", ()=>{
    setInterval(
        ()=>{
            clock();
        },
        1000
    )
})