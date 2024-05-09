module.exports = {
	format_date: (date) => {
		return date.toLocaleDateString();
	},
	format_amount: (amount) => {
		// formats large numbers with commas
		return parseInt(amount).toLocaleString();
	},
};
