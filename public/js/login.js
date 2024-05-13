const loginHandler = async (event) => {
	event.preventDefault();

	const email = document.getElementById("email-login").value.trim();
	const password = document.getElementById("password-login").value.trim();

	if (email && password) {
		const response = await fetch("api/users/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/profile");
		} else {
			alert(response.statusText);
		}
	}
};

const createAccountHandler = async (event) => {
	event.preventDefault();

	const name = document.getElementById("name-signup").value.trim();
	const email = document.getElementById("email-signup").value.trim();
	const password = document.getElementById("password-signup").value.trim();

	if (name && email && password) {
		const response = await fetch("/api/users", {
			method: "POST",
			body: JSON.stringify({ name, email, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/profile");
		} else {
			alert(response.statusText);
		}
	}
};

document
	.getElementsByClassName("login-form")[0]
	.addEventListener("submit", loginHandler);

document
	.getElementsByClassName("signup-form")[0]
	.addEventListener("submit", createAccountHandler);
