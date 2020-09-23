/* alert('Toto pochází z externího souboru'); */
let nadpis = document.getElementById('nadpis');
let footer = document.querySelector('footer');
let img = document.querySelector('img');

img.addEventListener('mouseover', function(){
    img.src = '01/manka.jpg';
});

img.addEventListener('mouseleave', function(){
    img.src = '01/rumcajs.jpg';
});

nadpis.addEventListener('mouseover', function(){
    nadpis.innerHTML = 'Ahoj <i>Karle<i/>';
    nadpis.style.color = 'blue';
    nadpis.style.fontFamily = 'serif';
    nadpis.classList.add('text-right');
    nadpis.classList.add('text-info');
    nadpis.classList.remove('text-uppercase');
});

footer.addEventListener('mouseover', function(){
    console.log('funguje');
    this.classList.add('jumbotron');
    this.classList,add('bg-primary');
});