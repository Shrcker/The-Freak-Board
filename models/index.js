const Post = require("./Post");
const User = require("./User");

Post.belongsTo(User, {
	foreignKey: "user_id",
});
User.hasMany(Post, {
	foreignKey: "post_id",
	onDelete: "CASCADE",
});

module.exports = { User, Post };
