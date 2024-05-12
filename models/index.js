const Post = require("./Post");
const User = require("./User");

User.hasMany(Post, {
	foreignKey: "postId",
	onDelete: "CASCADE",
});
Post.belongsTo(User, {
	foreignKey: "userId",
});

module.exports = { User, Post };
