$(function () {

	var main = $('main'),
		row,
		grid,
		element;

	grid = new Grid(main);
	grid.create(periods.length, GROUPS);

	row = $('.tbl-row');
	element = new Element(row);

	for (let i = 0; i < periods.length; i++) {
		for (let j = 0; j < periods[i].length; j++) {
			element.create(periods[i][j], new Points(i, j));
		}
	}
});