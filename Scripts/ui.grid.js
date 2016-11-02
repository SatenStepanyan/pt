(function (global, undefined) {
	'use strict'

	function Points(x, y) {
		this.x = x;
		this.y = y;
	}

	function Grid(container) {

		var tbl,
			row = [],
			cell = [];

		this.create = function (rowCnt, clmnCnt) {

			tbl = $('<div>', {
				'id': 'tbl'
			});

			for (let i = 0; i < rowCnt; i++) {

				row[i] = $('<div>', {
					'className': 'tbl-row'
				});

				for (let j = 0; j < clmnCnt; j++) {

					cell[j] = $('<div>', {
						'className': 'element'
					});
					tbl.append(row[i]
						.append(cell[j]));
				}
			}
			container.append(tbl);
		};
	};

	function Element(container) {

		var elem = [, ],
			a,
			ruby,
			rb,
			rt,
			strong,
			tt;

		this.create = function (element, points) {

			elem[points.x, points.y] = $('<div>', {
				'className': `${element.class}`
			});

			a = $('<a>', {
				'className': 'on-hover'
			});

			ruby = $('<ruby>');

			rt = $('<rt>', {
				'className': 'tspan-elem-numb',
			}).html(element.numb);

			rb = $('<rb>', {
				'className': 'tspan-elem-abbr',
			}).html(element.abbr);

			strong = $('<strong>', {
				'className': 'tspan-elem-name',
			}).html(element.name);

			tt = $('<tt>', {
				'className': 'tspan-elem-mass',
			}).html(element.mass);

			container[points.x].childNodes[element.group - 1].append(elem[points.x, points.y].
				append(a
					.append(strong).append(tt).append(ruby
						.append(rt).append(rb))));
		}
	}
	
	global.Points = Points;
	global.Grid = Grid;
	global.Element = Element;

})(window);