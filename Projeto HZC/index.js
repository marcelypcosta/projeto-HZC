const botaoMenu = document.querySelector('.cabecalho_menu') // acessar o seletor com a classe .cabecalho_menu
const menu = document.querySelector('.menu-lateral') // acessar o seletor com a classe .menu-lateral

botaoMenu.addEventListener('click', () =>{
    menu.classList.toggle('menu-lateral--ativo')
})
