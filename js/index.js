// Footer
let today = new Date()
let thisYear = today.getFullYear()

let footer = document.querySelector('footer')
document.body.appendChild(footer)

let copyRight = document.createElement('p')
copyRight.innerHTML = `&copy; ${thisYear} Irelys Casillas`
footer.appendChild(copyRight)


// Add Skills
let skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Problem Solving', 'Continuous Learning']

let skillsSection = document.getElementById('skills')
let skillsList = skillsSection.querySelector('ul')

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li')
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)
}
