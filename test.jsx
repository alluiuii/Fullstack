let k = 0
let d = 0
let a = 0
const kdat = document.getElementsByClassName('kda-record')

for (let kda of kdat) {
    data = kda.outerText.split("/")
    k += parseInt(data[0])
    d += parseInt(data[1])
    a += parseInt(data[2])
}
const avg_kda = ((k+a)/d).toFixed(2)
const newDiv = document.createElement('div')
newDiv.textContent = `Average KDA last 15 matches: ${avg_kda}`
newDiv.style.textAlign = 'center'
newDiv.style.fontSize = '24px'
newDiv.style.lineHeight = '10vh'
const parentElement = document.getElementsByClassName('header-content-container')[0]
parentElement.appendChild(newDiv);