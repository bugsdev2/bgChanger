
const btn = document.querySelector('#btn');
const root = document.querySelector(':root');

function random(num){
	return Math.floor(Math.random() * num);
}

btn.addEventListener('click', function(){
	root.style.setProperty('--r', random(256));
	root.style.setProperty('--g', random(256));
	root.style.setProperty('--b', random(256));
	document.body.style = 'background: rgba(var(--r),var(--g),var(--b))'
})
