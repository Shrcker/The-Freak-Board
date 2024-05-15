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
			document.location.replace("/");
		} else {
			alert("Error publishing post");
		}
	}
};

const newCommentHandler = async (event) => {
	event.preventDefault();

	console.log(event.target);

	if (event.target.hasAttribute("id")) {
		const id = event.target.getAttribute("id");
		const post_id = Number(id);
		const content = await document
			.getElementById(`content-${post_id}`)
			.value.trim();
		console.log(post_id);
	}

	// if (content) {
	// 	const response = await fetch("/api/comments", {
	// 		method: "POST",
	// 		body: JSON.stringify({ content, post_id }),
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	});

	// 	if (response.ok) {
	// 		document.location.replace("/");
	// 	} else {
	// 		alert("Error publishing comment");
	// 	}
	// }
};

const commentButtons = Array.from(document.getElementsByClassName("commenter"));

commentButtons.forEach((button) => {
	button.addEventListener("submit", newCommentHandler);
});

document
	.getElementsByClassName("poster")[0]
	.addEventListener("submit", newPostHandler);
