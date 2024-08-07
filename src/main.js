document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const currentPosition = window.scrollY;
        if(currentPosition<alturaHero){
            ocultaElementosHeader();
        } else {
            exibeElementosHeader();
        }
    })
    

    //Seção de atrações, progamação das abas
    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            hideAllTabs();
            removeButtonUnderline();
            tab.classList.add('shows__list--is--active');
            botao.target.classList.add('shows__tabs__button--is--active')
        })
    }

    //Seção FAQ accordion
    for(let i=0; i<questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function abreOuFechaResposta(element){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = element.target.parentNode;

    elementoPai.classList.toggle(classe);

}

function hideAllTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i=0; i<tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}

function removeButtonUnderline(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i=0; i<buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

function ocultaElementosHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidding');
}

function exibeElementosHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidding');
}