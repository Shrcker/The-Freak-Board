const logOut = async (event) => {
	event.preventDefault();

	const response = await fetch("/api/users/logout", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
	});

	if (response.ok) {
		document.location.replace("/");
	} else {
		alert(response.statusText);
	}
};

document.getElementById("log-out").addEventListener("click", logOut);
