const newPostHandler = async (event) => {
	event.preventDefault();

	const title = document.getElementById("poster-title").value.trim();
	const content = document.getElementById("poster-content").value.trim();

	if (title && content) {
		const response = await fetch("/api/posts", {
			method: "POST",
			body: JSON.stringify({ title, content }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.replace("/profile");
		} else {
			alert("Error publishing post");
		}
	}
};

document
	.getElementsByClassName("poster")[0]
	.addEventListener("submit", newPostHandler);
