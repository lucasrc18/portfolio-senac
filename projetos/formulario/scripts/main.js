const form = document.querySelector("#jobApplicationForm");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	if (validarFormulario()) {
		form.submit();
	}
});

function validarFormulario() {
	const nome = document.querySelector("#name").value;
	const email = document.querySelector("#email").value;
	const mensagem = document.querySelector("#telefone").value;

	if (nome === "") {
		alert("Por favor, preencha o campo Nome.");
		return false;
	}

	if (email === "") {
		alert("Por favor, preencha o campo Email.");
		return false;
	}

	if (mensagem === "") {
		alert("Por favor, preencha o campo Mensagem.");
		return false;
	}

	return true;
}
