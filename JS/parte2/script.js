const element = document.getElementById('blog-title') // element
const element2 = document.getElementsByClassName('one') // HTML collection
const element3 = document.getElementsByTagName('h1') // HTML collection
const element4 = document.querySelector('.one') // element
const element5 = document.querySelectorAll('.one') // Nodelist
console.log(element)
console.log(element2)
console.log(element3)
console.log(element4)
console.log(element5)

// Manipulando conteúdo - TextContent
const element6 = document.querySelector('h1')
//element6.textContent += " Olá mundo!"

// Manipulando conteúdo - InnerText
// element6.innerText = "Olá devs"

// Manipulando conteúdo - InnerHTML
element6.innerHTML = "Olá devss! <small>!!!</small>"

// Manipulando conteúdo - value
const element7 = document.querySelector('input')
element7.value = "Amo muito Milena"

// Manipulando conteúdo - Atributos
const header = document.querySelector('header')
//header.setAttribute('id', 'header')
//const headerID = document.querySelector('#header')
//console.log(headerID.getAttribute('id'))
//header.removeAttribute('id')

// Atribuindo estilos
const element8 = document.querySelector('body')
//element8.style.backgroundColor = '#f9f3d2'
//console.log(element8.style.backgroundColor)

// Alterando estilos - ClassList
element8.classList.add('active', 'green')
console.log(element8.classList)
element8.classList.remove('active')
element8.classList.toggle('active')

// Navegando pelos elementos - parentNode parentElement
console.log(element8.parentNode)
console.log(element8.parentElement)

// Navegando pelos elementos filhos - childNodes Children
console.log(element8.childNodes)
console.log(element8.children)
// firstChild
console.log(element8.firstChild)
console.log(element8.firstElementChild)

//lastChild
console.log(element8.lastChild)
console.log(element8.lastElementChild)

// Navegando pelos elementos - nextSibling - previousSibling
console.log(header.nextSibling)
console.log(header.nextElementSibling)
console.log(header.previousSibling)

// Criando e adicionando elementos

const div = document.createElement('div');
div.innerText = "Olá Devs!-"

// append prepend, insertBefore, header.nextSibling
element8.prepend(div) // pelo visto só pode adicionar uma vez
element8.append(div)
const script = document.querySelector('script')
element8.insertBefore(div, script)