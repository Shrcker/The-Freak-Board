const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuthorization = require("../../utils/auth");

router.get("/", async (req, res) => {
	try {
		const commentData = await Comment.findAll({
			include: [
				{
					model: User,
					attributes: ["name"],
				},
				{
					model: Post,
					attributes: ["title"],
				},
			],
		});

		res.status(200).json(commentData);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/", withAuthorization, async (req, res) => {
	try {
		const commentData = await Comment.create({
			content: req.body.content,
			user_id: req.session.user_id,
			post_id: req.body.post_id,
		});

		res.status(200).json(commentData);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

router.delete("/:id", withAuthorization, async (req, res) => {
	try {
		const commentData = await Comment.findByPk(req.params.id, {
			include: [
				{
					model: User,
				},
				{
					model: Post,
				},
			],
		});

		if (!commentData) {
			res.status(404).json({ message: "No post was found with that id" });
			return;
		}

		commentData.destroy();
		res.status(200).json({ message: "Comment deleted successfully!" });
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
