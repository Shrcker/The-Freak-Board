const format_date = (date) => date.toLocaleDateString();
const format_amount = (amount) => parseInt(amount).toLocaleString();
const if_equals = (arg1, arg2, options) => {
	return arg1 == arg2 ? options.fn(this) : options.inverse(this);
};

module.exports = {
	format_date,
	format_amount,
	if_equals,
};
