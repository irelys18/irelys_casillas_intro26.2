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


//Form

let form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    
    let name = event.target.usersName.value
    let email = event.target.usersEmail.value
    let message = event.target.usersMessage.value

    let messageList = document.querySelector('#messages ul')
    let newMessage = document.createElement('li')
    newMessage.innerHTML = `<a href="mailto:${email}">${email}</a> <span>${message}</span> `

    messageList.appendChild(newMessage)

    let removeButton = document.createElement('button')
    removeButton.innerHTML= 'Remove'

    removeButton.addEventListener('click', function(){
        let entry = this.parentNode
        entry.remove()
    })

    newMessage.appendChild(removeButton)

    form.reset()


})
