// Footer
let date = new Date()
let thisYear = date.getFullYear()

let footer = document.querySelector('footer')
let copyRight = document.createElement('p')
copyRight.innerHTML = `&copy; ${thisYear} Irelys Casillas`
footer.appendChild(copyRight)


// Add Skills
let skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Problem Solving', 'Continuous Learning']
let skillsList = document.querySelector('#skills ul')

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li')
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)
}
