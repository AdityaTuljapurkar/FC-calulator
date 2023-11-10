const change =()=>{
const fv = document.getElementById('cd').value;
//  (0°C × 9/5) + 32 = 32°F
let cov = (fv*(9/5))+32;
document.getElementById('fd').value=cov;
// console.log(cov);
}