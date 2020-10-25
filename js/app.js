const button = document.getElementById('button');

const saludo = () => {
	alert('Hola mundo');
};

button.addEventListener('click', () => {
	saludo();
});
