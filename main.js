alert('Input your surname and first name in the box, reload to check another.')
let input = prompt("What is your name")
let names = ['binuyo josephine', 'ibidunmoye victor', 'nduka james', 'oyedijo olarenwaju']
const matric = [221979, 223207, 223010, 222207]
let matricNo = document.getElementById('matric_no')
const name = document.getElementById('name')
const intro = document.getElementById('intro')
const outro = document.getElementById('outro')
const currentDate = new Date()


for (let i = 0; i < names.length; i++) {
    if (input.toLowerCase() === names[i]) {
        console.log(`Your matric number is ${matric[i]}`)
        intro.textContent = `This is to certify that you are checking your matric number on ${currentDate}`
        name.textContent = `Your name is ${input.toUpperCase()} and`
        matricNo.textContent = `your matric number is ${matric[i]}`
        outro.textContent = `Happy Learning!!!`
        break;
    } else {
        matricNo.textContent = `Matric number not found, ASUU is on strike!`
    }
}

