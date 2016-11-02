var periods = [
	//1st row
	[
		{ 'abbr': 'H', 'class': 'nonmetal', 'group': 1, 'mass': 1.008, 'name': 'Hydrogen', 'numb': 1 },
		{ 'abbr': 'He', 'class': 'noble', 'group': 18, 'mass': 4.002602, 'name': 'Helium', 'numb': 2 }
	],
	//2nd row
	[
		{ 'abbr': 'Li', 'class': 'alkali', 'group': 1, 'mass': 6.94, 'name': 'Lithium', 'numb': 3 },
		{ 'abbr': 'Be', 'class': 'alkaline', 'group': 2, 'mass': 9.0121831, 'name': 'Beryllium', 'numb': 4 },
		{ 'abbr': 'B', 'class': 'metalloid', 'group': 13, 'mass': 10.81, 'name': 'Boron', 'numb': 5 },
		{ 'abbr': 'C', 'class': 'nonmetal', 'group': 14, 'mass': 12.011, 'name': 'Carbon', 'numb': 6 },
		{ 'abbr': 'N', 'class': 'nonmetal', 'group': 15, 'mass': 14.007, 'name': 'Nitrogen', 'numb': 7 },
		{ 'abbr': 'O', 'class': 'nonmetal', 'group': 16, 'mass': 15.999, 'name': 'Oxygen', 'numb': 8 },
		{ 'abbr': 'F', 'class': 'halogen', 'group': 17, 'mass': 18.998403163, 'name': 'Fluorine', 'numb': 9 },
		{ 'abbr': 'Ne', 'class': 'noble', 'group': 18, 'mass': 20.1797, 'name': 'Neon', 'numb': 10 }
	],
	////3rd row
	[
		{ 'abbr': 'Na', 'class': 'alkali', 'group': 1, 'mass': 22.98976928, 'name': 'Sodium', 'numb': 11 },
		{ 'abbr': 'Mg', 'class': 'alkaline', 'group': 2, 'mass': 24.305, 'name': 'Magnesium', 'numb': 12 },
		{ 'abbr': 'Al', 'class': 'poor', 'group': 13, 'mass': 26.9815385, 'name': 'Aluminium', 'numb': 13 },
		{ 'abbr': 'Si', 'class': 'metalloid', 'group': 14, 'mass': 28.085, 'name': 'Silicon', 'numb': 14 },
		{ 'abbr': 'P', 'class': 'nonmetal', 'group': 15, 'mass': 30.973761998, 'name': 'Phosphorus', 'numb': 15 },
		{ 'abbr': 'S', 'class': 'nonmetal', 'group': 16, 'mass': 32.06, 'name': 'Sulfur', 'numb': 16 },
		{ 'abbr': 'Cl', 'class': 'halogen', 'group': 17, 'mass': 35.45, 'name': 'Chlorine', 'numb': 17 },
		{ 'abbr': 'Ar', 'class': 'noble', 'group': 18, 'mass': 39.948, 'name': 'Argon', 'numb': 18 }
	],
	//4th row
	[
		{ 'abbr': 'K', 'class': 'alkali', 'group': 1, 'mass': 39.0983, 'name': 'Potassium', 'numb': 19 },
		{ 'abbr': 'Ca', 'class': 'alkaline', 'group': 2, 'mass': 40.078, 'name': 'Calcium', 'numb': 20 },
		{ 'abbr': 'Sc', 'class': 'transition', 'group': 3, 'mass': 44.955908, 'name': 'Scandium', 'numb': 21 },
		{ 'abbr': 'Ti', 'class': 'transition', 'group': 4, 'mass': 47.867, 'name': 'Titanium', 'numb': 22 },
		{ 'abbr': 'V', 'class': 'transition', 'group': 5, 'mass': 50.9415, 'name': 'Vanadium', 'numb': 23 },
		{ 'abbr': 'Cr', 'class': 'transition', 'group': 6, 'mass': 51.9961, 'name': 'Chromium', 'numb': 24 },
		{ 'abbr': 'Mn', 'class': 'transition', 'group': 7, 'mass': 54.938044, 'name': 'Manganese', 'numb': 25 },
		{ 'abbr': 'Fe', 'class': 'transition', 'group': 8, 'mass': 55.845, 'name': 'Iron', 'numb': 26 },
		{ 'abbr': 'Co', 'class': 'transition', 'group': 9, 'mass': 58.933194, 'name': 'Cobalt', 'numb': 27 },
		{ 'abbr': 'Ni', 'class': 'transition', 'group': 10, 'mass': 58.6934, 'name': 'Nickel', 'numb': 28 },
		{ 'abbr': 'Cu', 'class': 'transition', 'group': 11, 'mass': 63.546, 'name': 'Copper', 'numb': 29 },
		{ 'abbr': 'Zn', 'class': 'transition', 'group': 12, 'mass': 65.38, 'name': 'Zinc', 'numb': 30 },
		{ 'abbr': 'Ga', 'class': 'poor', 'group': 13, 'mass': 69.723, 'name': 'Gallium', 'numb': 31 },
		{ 'abbr': 'Ge', 'class': 'metalloid', 'group': 14, 'mass': 72.63, 'name': 'Germanium', 'numb': 32 },
		{ 'abbr': 'As', 'class': 'metalloid', 'group': 15, 'mass': 74.921595, 'name': 'Arsenic', 'numb': 33 },
		{ 'abbr': 'Se', 'class': 'nonmetal', 'group': 16, 'mass': 78.971, 'name': 'Selenium', 'numb': 34 },
		{ 'abbr': 'Br', 'class': 'halogen', 'group': 17, 'mass': 79.904, 'name': 'Bromine', 'numb': 35 },
		{ 'abbr': 'Cr', 'class': 'noble', 'group': 18, 'mass': 83.798, 'name': 'Krypton', 'numb': 36 }
	],
	//5th row
	[
		{ 'abbr': 'Rb', 'class': 'alkali', 'group': 1, 'mass': 85.4678, 'name': 'Rubidium', 'numb': 37 },
		{ 'abbr': 'Sr', 'class': 'alkaline', 'group': 2, 'mass': 87.62, 'name': 'Strontium', 'numb': 38 },
		{ 'abbr': 'Y', 'class': 'transition', 'group': 3, 'mass': 88.90584, 'name': 'Yttrium', 'numb': 39 },
		{ 'abbr': 'Zr', 'class': 'transition', 'group': 4, 'mass': 91.224, 'name': 'Zirconium', 'numb': 40 },
		{ 'abbr': 'Nb', 'class': 'transition', 'group': 5, 'mass': 92.90637, 'name': 'Niobium', 'numb': 41 },
		{ 'abbr': 'Mo', 'class': 'transition', 'group': 6, 'mass': 95.95, 'name': 'Molybdenum', 'numb': 42 },
		{ 'abbr': 'Tc', 'class': 'transition', 'group': 7, 'mass': (98), 'name': 'Technetium', 'numb': 43 },
		{ 'abbr': 'Ru', 'class': 'transition', 'group': 8, 'mass': 101.07, 'name': 'Ruthenium', 'numb': 44 },
		{ 'abbr': 'Rh', 'class': 'transition', 'group': 9, 'mass': 102.90550, 'name': 'Rhodium', 'numb': 45 },
		{ 'abbr': 'Pd', 'class': 'transition', 'group': 10, 'mass': 106.42, 'name': 'Palladium', 'numb': 46 },
		{ 'abbr': 'Ag', 'class': 'transition', 'group': 11, 'mass': 107.8682, 'name': 'Silver', 'numb': 47 },
		{ 'abbr': 'Cd', 'class': 'transition', 'group': 12, 'mass': 112.414, 'name': 'Cadmium', 'numb': 48 },
		{ 'abbr': 'In', 'class': 'poor', 'group': 13, 'mass': 114.818, 'name': 'Indium', 'numb': 49 },
		{ 'abbr': 'Sn', 'class': 'poor', 'group': 14, 'mass': 118.710, 'name': 'Tin', 'numb': 50 },
		{ 'abbr': 'Sb', 'class': 'metalloid', 'group': 15, 'mass': 121.760, 'name': 'Antimony', 'numb': 51 },
		{ 'abbr': 'Te', 'class': 'metalloid', 'group': 16, 'mass': 127.60, 'name': 'Tellurium', 'numb': 52 },
		{ 'abbr': 'I', 'class': 'halogen', 'group': 17, 'mass': 126.90447, 'name': 'Iodine', 'numb': 53 },
		{ 'abbr': 'Xe', 'class': 'noble', 'group': 18, 'mass': 131.293, 'name': 'Xenon', 'numb': 54 }
	],
	//6th row
	[
		{ 'abbr': 'Cs', 'class': 'alkali', 'group': 1, 'mass': 132.90545196, 'name': 'Caesium', 'numb': 55 },
		{ 'abbr': 'Ba', 'class': 'alkaline', 'group': 2, 'mass': 137.327, 'name': 'Barium', 'numb': 56 },
		{ 'abbr': 'Hf', 'class': 'transition', 'group': 4, 'mass': 138.90547, 'name': 'Hafnium', 'numb': 72 },
		{ 'abbr': 'Ta', 'class': 'transition', 'group': 5, 'mass': 140.116, 'name': 'Tantalum', 'numb': 73 },
		{ 'abbr': 'W', 'class': 'transition', 'group': 6, 'mass': 140.90766, 'name': 'Tungsten', 'numb': 74 },
		{ 'abbr': 'Re', 'class': 'transition', 'group': 7, 'mass': 144.242, 'name': 'Rhenium', 'numb': 75 },
		{ 'abbr': 'Os', 'class': 'transition', 'group': 8, 'mass': (145), 'name': 'Osmium', 'numb': 76 },
		{ 'abbr': 'Ir', 'class': 'transition', 'group': 9, 'mass': 150.36, 'name': 'Iridium', 'numb': 77 },
		{ 'abbr': 'Pt', 'class': 'transition', 'group': 10, 'mass': 151.964, 'name': 'Platinum', 'numb': 78 },
		{ 'abbr': 'Au', 'class': 'transition', 'group': 11, 'mass': 157.25, 'name': 'Aurum', 'numb': 79 },
		{ 'abbr': 'Hg', 'class': 'transition', 'group': 12, 'mass': 158.92535, 'name': 'Mercury', 'numb': 80 },
		{ 'abbr': 'Tl', 'class': 'poor', 'group': 13, 'mass': 162.500, 'name': 'Thallium', 'numb': 81 },
		{ 'abbr': 'Pb', 'class': 'poor', 'group': 14, 'mass': 164.93033, 'name': 'Lead', 'numb': 82 },
		{ 'abbr': 'Be', 'class': 'poor', 'group': 15, 'mass': 167.259, 'name': 'Bismuth', 'numb': 83 },
		{ 'abbr': 'Po', 'class': 'metalloid', 'group': 16, 'mass': 168.93422, 'name': 'Polonium', 'numb': 84 },
		{ 'abbr': 'At', 'class': 'halogen', 'group': 17, 'mass': 173.054, 'name': 'Astatine', 'numb': 85 },
		{ 'abbr': 'Rn', 'class': 'noble', 'group': 18, 'mass': 174.9668, 'name': 'Radon', 'numb': 86 }
	],
	//7th row
	[
		{ 'abbr': 'Fr', 'class': 'noble', 'group': 1, 'mass': 178.49, 'name': 'Francium', 'numb': 87 },
		{ 'abbr': 'Ra', 'class': 'noble', 'group': 2, 'mass': 180.94788, 'name': 'Radium', 'numb': 88 },
		{ 'abbr': 'Rf', 'class': 'noble', 'group': 4, 'mass': 183.84, 'name': 'Rutherfordium', 'numb': 104 },
		{ 'abbr': 'Db', 'class': 'noble', 'group': 5, 'mass': 186.207, 'name': 'Dubnium', 'numb': 105 },
		{ 'abbr': 'Sg', 'class': 'noble', 'group': 6, 'mass': 190.23, 'name': 'Seaborgium', 'numb': 106 },
		{ 'abbr': 'Bh', 'class': 'noble', 'group': 7, 'mass': 192.217, 'name': 'Bohrium', 'numb': 107 },
		{ 'abbr': 'Hs', 'class': 'noble', 'group': 8, 'mass': 195.084, 'name': 'Hassium', 'numb': 108 },
		{ 'abbr': 'Mt', 'class': 'noble', 'group': 9, 'mass': 196.966569, 'name': 'Meitnerium', 'numb': 109 },
		{ 'abbr': 'Ds', 'class': 'noble', 'group': 10, 'mass': 200.59, 'name': 'Darmstadtium', 'numb': 110 },
		{ 'abbr': 'Rg', 'class': 'noble', 'group': 11, 'mass': 204.38, 'name': 'Roentgenium', 'numb': 111 },
		{ 'abbr': 'Cn', 'class': 'noble', 'group': 12, 'mass': 207.2, 'name': 'Copernicium', 'numb': 112 },
		{ 'abbr': 'Nh', 'class': 'noble', 'group': 13, 'mass': 208.98040, 'name': 'Nihonium', 'numb': 113 },
		{ 'abbr': 'Fl', 'class': 'noble', 'group': 14, 'mass': (209), 'name': 'Flerovium', 'numb': 114 },
		{ 'abbr': 'Mc', 'class': 'noble', 'group': 15, 'mass': (210), 'name': 'Moscovium', 'numb': 115 },
		{ 'abbr': 'Lv', 'class': 'noble', 'group': 16, 'mass': (222), 'name': 'Livermorium', 'numb': 116 },
		{ 'abbr': 'Ts', 'class': 'noble', 'group': 17, 'mass': (223), 'name': 'Tennessine', 'numb': 117 },
		{ 'abbr': 'Og', 'class': 'noble', 'group': 18, 'mass': (226), 'name': 'Oganesson', 'numb': 118 }
	]
];