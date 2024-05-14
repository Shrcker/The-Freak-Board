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

const deletePostHandler = async (event) => {
	event.preventDefault();

	if (event.target.hasAttribute("data-id")) {
		const id = event.target.getAttribute("data-id");

		const response = await fetch(`/api/posts/${id}`, {
			method: "DELETE",
		});

		if (response.ok) {
			document.location.replace("/profile");
		} else {
			alert("Error deleting post");
		}
	}
};

document
	.getElementsByClassName("poster")[0]
	.addEventListener("submit", newPostHandler);

document
	.getElementById("delete-post")
	.addEventListener("click", deletePostHandler);
