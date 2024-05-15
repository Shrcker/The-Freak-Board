const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuthorization = require("../../utils/auth");

router.get("/", async (req, res) => {
	try {
		const postData = await Post.findAll();
		res.status(200).json(postData);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ["name"],
				},
				{
					model: Comment,
				},
			],
		});

		if (!postData) {
			res.status(404).json({ message: "No post was found with that id" });
			return;
		}

		res.status(200).json(postData);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/", withAuthorization, async (req, res) => {
	try {
		const postData = await Post.create({
			title: req.body.title,
			content: req.body.content,
			user_id: req.session.user_id,
		});

		res.status(200).json(postData);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.put("/:id", withAuthorization, async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [{ model: User }],
		});

		if (!postData) {
			res.status(404).json({ message: "No post was found with that id" });
			return;
		}

		const updatedData = await postData.update({
			title: req.body.title,
			content: req.body.content,
			// Add an "updated" flag to posts later
		});

		res.status(200).json(updatedData);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete("/:id", withAuthorization, async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [{ model: User }],
		});

		if (!postData) {
			res.status(404).json({ message: "No post was found with that id" });
			return;
		}

		postData.destroy();
		res.status(200).json({ message: "Post was deleted successfully!" });
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
