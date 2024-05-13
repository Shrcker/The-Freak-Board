const format_date = (date) => date.toLocaleDateString();
const format_amount = (amount) => parseInt(amount).toLocaleString();

module.exports = {
	format_date,
	format_amount,
};
