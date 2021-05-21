const products = [
	{
		name: 'CROSS QUANTUM  29" E-MTB 510MM',
		images: ['../images/36190_9435_Quantum_29 - 1.png'],
		rating: 4,
		numReviews: 3,
		price: 10799,
		category: 'Electric Bike',
		countInStock: 5,
		productInfo: {
			mainDetails: {
				brand: 'CROSS',
				categorie: 'Mountain Bike',
				marime: ['S', 'M', 'L'],
				greutate: 23,
			},
			cadru: {
				materialCadru: 'Aluminiu',
				furca: 'Suntour XCM34 Boost, Lock-out, Tapered, 15mm, Cursa 100mm',
			},
			transmisie: {
				transmisie: '1x10 viteze',
				pinioane: 'Shimano Deore RD-M6000',
				maneteSchimbator: 'Shimano Deore SL-M6000',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Shimano MT200',
			},
			roti: {
				jante: 'Crosser X20 double wall',
				butuci: 'Shimano FH-MT400',
				cauciucuri: 'Schwalbe Nobby Nic Addix Performance 29x3.00 (75-584)',
			},
			sistemElectric: {
				cycloComputer: 'Shimano Steps',
				motor: 'Shimano Steps E8000',
				baterie: 'Shimano Steps 504Wh, 36V',
			},
		},
	},
	{
		name: 'MERIDA EONE-FORTY 500 XL 2021',
		images: ['../images/Merida_eONE-FORTY_500_grnred_MY2021.png'],
		rating: 4.5,
		numReviews: 4,
		category: 'Electric Bike',
		price: 21690,
		countInStock: 7,
		productInfo: {
			mainDetails: {
				brand: 'Merida',
				categorie: 'Mountain Bike',
				marime: ['S', 'M', 'L'],
				greutate: 23,
			},
			cadru: {
				materialCadru: 'Aluminiu',
				furca:
					'Marzocchi Z2 eMTB+ - Air - 140 STR - Tapered - 51mm fork offset',
				cuvete: 'MERIDA-8152',
			},
			transmisie: {
				transmisie: '1x11 viteze',
				angrenaj: 'Shimano CRE70-B - 34 dinti',
				pinioane: 'Shimano M5100',
				maneteSchimbator: 'Shimano SL -MT500-IL',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Shimano M4100',
			},
			roti: {
				jante: 'MERIDA COMP TR 29 IWR',
				butuci: 'Shimano MT400-B',
				cauciucuri: 'MAXXIS REKON - 29x2.4 wire',
			},
			sistemElectric: {
				cycloComputer: 'Shimano SC-E5003A',
				motor: 'Shimano EP8 - 85Nm',
				baterie: 'Shimano E8036 - 630Wh',
			},
		},
	},
	{
		name: 'SPECIALIZED TURBO CREO SL COMP CARBON GREEN/BLACK',
		images: ['../images/specialized_turbo_carbon_green_black_2020.jpg'],
		rating: 4.5,
		numReviews: 2,
		category: 'Electric Bike',
		price: 29399,
		countInStock: 3,
		productInfo: {
			mainDetails: {
				brand: 'SPECIALIZED',
				categorie: 'Road Bike',
				marime: ['S', 'M', 'L'],
				greutate: 15,
			},
			cadru: {
				materialCadru: 'Carbon',
				furca: 'Future Shock 2.0 w/ Smooth Boot, Boost 12x110mmmm thru-axle',
			},
			transmisie: {
				transmisie: '1x11 viteze',
				angrenaj: 'Praxis, Forged alloy M30, custom offset',
				pinioane: 'Sunrace, 11-speed, alloy spider, 11-42t',
				maneteSchimbator:
					'Shimano GRX 810 hydraulic brake levers, mechanical shifting',
				lant: '	Shimano Ultegra',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Shimano GRX 810 hydraulic disc',
			},
			roti: {
				jante: 'DT R470 Boost, 12x110mm F / DT R470 Boost, 12x148mm R',
				cauciucuri: 'Pathfinder Pro 2Bliss Ready, 700x38mm',
			},
			sistemElectric: {
				cycloComputer:
					'Specialized TCU, 10-LED State charge, 3-LED Ride Mode, ANT+/Bluetooth',
				motor: 'Specialized SL 1.1, custom lightweight motor',
				baterie: 'Specialized SL1-320, fully integrated, 320Wh',
			},
		},
	},
	{
		name: 'MERIDA ESPRESSO 200 EQ LADY S(47) ALBASTRU (ARGINTIU) 2019',
		images: ['../images/merida-eSPRESSO_L_200_noEQ_bluslv_MY2019_2.jpg'],
		rating: 5,
		numReviews: 7,
		category: 'Electric Bike',
		price: 9499,
		countInStock: 4,
		productInfo: {
			mainDetails: {
				brand: 'Merida',
				categorie: 'Trekking Bike',
				marime: ['S', 'M', 'L'],
				greutate: 22,
			},
			cadru: {
				materialCadru: 'Aluminiu',
				furca: 'Suntour NEX-PM-DS Coil 63mm suspension travel',
				cuvete: 'Merida 2346 Neck',
			},
			transmisie: {
				transmisie: '1x9 viteze',
				angrenaj: '	Shimano HG400 12-36 teeth 9 speed',
				pinioane: 'Sunrace, 11-speed, alloy spider, 11-42t',
				maneteSchimbator: '	Shimano Altus rapidfire',
				lant: 'KMC X9e',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Shimano MT-200',
			},
			roti: {
				jante: '	MERIDA Comp TK 20mm inner width',
				butuci: 'Shimano TX505 100x9mm 32 spoke holes Centerlock',
				cauciucuri: 'Continental RIDE Tour 622-42 reflective stripe',
			},
			sistemElectric: {
				motor: 'Shimano E5000 40Nm',
				baterie: 'Shimano E8014 418Wh',
			},
		},
	},
	{
		name: 'CROSS ELEGRA LS 28" E-CITY - 450MM',
		images: ['../images/Cross_Elegra_IGH_SHIMANO.jpg'],
		rating: 5,
		numReviews: 7,
		category: 'Electric Bike',
		price: 9399,
		countInStock: 4,
		productInfo: {
			mainDetails: {
				brand: 'Cross',
				categorie: 'City Bike',
				marime: ['S', 'M', 'L'],
				greutate: 24,
			},
			cadru: {
				materialCadru: 'Aluminiu',
				furca: 'Suntour CR85-E25, Cursa 63mm',
				cuvete: 'Merida 2346 Neck',
			},
			transmisie: {
				transmisie: '	1x7 viteze',
				pinioane: 'Sunrace, 11-speed, alloy spider, 11-42t',
				maneteSchimbator: '	Shimano Nexus 7',
			},
			sistemFranare: {
				tipFrana: 'V-brake > hidraulica',
				frane: 'Magura HS-11',
			},
			roti: {
				jante: 'MERIDA Comp TK 20mm inner width',
				butuci: 'Shimano TX505 100x9mm 32 spoke holes Centerlock',
				cauciucuri: 'Schwalbe Century 622-50 28x2.00',
			},
			sistemElectric: {
				cycloComputer: 'Shimano Steps',
				motor: 'Shimano Steps E6000',
				baterie: 'Shimano Steps 418Wh, 36V',
			},
		},
	},
	{
		name: 'SPECIALIZED TURBO VADO SL 4.0 ',
		images: ['../images/specialized-turbo-vado-sl-4.0.jpg'],
		rating: 3,
		numReviews: 2,
		category: 'Electric Bike',
		price: 16199,
		countInStock: 2,
		productInfo: {
			mainDetails: {
				brand: 'SPECIALIZED',
				categorie: 'City Bike',
				marime: ['S', 'M', 'L'],
				greutate: 22,
			},
			cadru: {
				materialCadru: 'Aluminiu',
				furca:
					'Rigid full aluminum disc, Boost 12x110mm, front- rack-compatible',
			},
			transmisie: {
				transmisie: '1x10 viteze',
				angrenaj: 'Praxis, Forged alloy M30, custom offset',
				pinioane: 'Shimano Deore, 10spd, 11-42t',
				maneteSchimbator:
					'Shimano Deore, RapidFire Plus, 10-speed w/ Optical Gear Display',
				lant: 'KMC e10S, 10-speed w/ Missing Link',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Tektro HD-R290, hydraulic disc, 160mm',
			},
			roti: {
				jante: '700C disc, 22mm rim depth, 21mm internal width',
				butuci:
					'Specialized alloy, sealed cartridge bearings, 12x110mm, Center Lock',
				cauciucuri: 'Nimbus II Sport Reflect, 700x38mm',
			},
			sistemElectric: {
				cycloComputer:
					'Specialized TCU, 10-LED State charge, 3-LED Ride Mode, ANT+/Bluetooth',
				motor: 'Specialized SL 1.1, custom lightweight motor',
				baterie: 'Specialized SL1-320, fully integrated, 320Wh',
			},
		},
	},
	{
		name: 'CANNONDALE TRAIL 5 20 XL GRAFIT 2021',
		images: ['../images/cannondale-trail-5-2021-graphite.jpg'],
		rating: 4,
		numReviews: 3,
		category: 'Bike',
		price: 4395,
		countInStock: 7,
		productInfo: {
			mainDetails: {
				brand: 'Cannondale',
				categorie: 'Mountain Bike',
				marime: ['S', 'M', 'L'],
				greutate: 15,
			},
			cadru: {
				materialCadru: 'Aluminiu',
				furca:
					'SR Suntour XCR32 RL 100 mm - remote lockout - Coil 46mm offset (29")',
				cuvete: 'Semi Integrati - 1-1/8"',
			},
			transmisie: {
				transmisie: '	2x10 viteze',
				angrenaj: 'Shimano M4100 - 36/26',
				pinioane: 'Sunrace - 11-42 - 10-viteze',
				maneteSchimbator: 'Shimano Deore M4100 - 10-speed',
				lant: 'KMC X10 - 10-speed',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Shimano MT200 hidraulic disc - 160/160mm RT10 disc frana',
			},
			roti: {
				jante: 'Shimano HBTX 505 ',
				cauciucuri: 'Schwalbe Rocket Rick - 27.5/29" x 2.25 - K-Guard',
			},
		},
	},
	{
		name: 'MERIDA BIG NINE 100-2X M (17") BRONZ|ALBASTRU 2021',
		images: ['../images/Merida_MTB_BIG_NINE_100_brzblu_MY2021.png'],
		rating: 5,
		numReviews: 10,
		category: 'Bike',
		price: 3790,
		countInStock: 4,
		productInfo: {
			mainDetails: {
				brand: 'Merida',
				categorie: 'Mountain Bike',
				marime: ['S', 'M', 'L'],
				greutate: 14,
			},
			cadru: {
				materialCadru: 'Aluminiu',
				furca: 'Suntour XCR32 LOR - Air - 100 STR - Lockout - 46mm fork offset',
				cuvete: 'MERIDA M2345',
			},
			transmisie: {
				transmisie: '2x9 viteze',
				angrenaj: 'Shimano MT101-2 - 36-22 dinti',
				pinioane: 'Shimano HG200 - 11-36 dinti - 9 viteze',
				maneteSchimbator: 'Shimano Altus',
				lant: 'KMC M99',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Shimano MT-200',
			},
			roti: {
				jante: 'MERIDA COMP CC - 20 IWR - Aluminiu',
				butuci: 'Shimano TX505',
				cauciucuri: 'Maxxis Ikon - 29x2.2" - wire',
			},
		},
	},
	{
		name: 'MERIDA CROSSWAY XT-EDITION NEGRU|ARGINTIU MAT 2021',
		images: ['../images/Merida_CROSSWAY_XT-EDITION_blkslv_MY2021.jpg'],
		rating: 4.5,
		numReviews: 7,
		category: 'Bike',
		price: 6990,
		countInStock: 9,
		productInfo: {
			mainDetails: {
				brand: 'Merida',
				categorie: 'Trekking Bike',
				marime: ['S', 'M', 'L'],
				greutate: 12,
			},
			cadru: {
				materialCadru: 'Aluminiu',
				furca: 'Suntour NCX E-RL - Air - 63 STR - Remote Lockout',
				cuvete: 'MERIDA M2340 Neck',
			},
			transmisie: {
				transmisie: '3x10 viteze',
				angrenaj: 'Shimano XT - 48-36-26 dinti',
				pinioane: 'Shimano HG500 - 11-34 dinti - 10 viteze',
				maneteSchimbator: 'Shimano XT',
				lant: 'KMC X10',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Shimano MT-500',
			},
			roti: {
				jante: 'MERIDA COMP TK - 20 IWR - 17 HRI - Aluminiu',
				butuci: 'Shimano M4050',
				cauciucuri:
					'Maxxis Overdrive II - 700x40C - reflective stripe, Silkworm ',
			},
		},
	},
	{
		name: 'CROSS QUEST MAN- 28" City Bike',
		images: ['../images/Cross_Quest_Man_Trekking_1.jpg'],
		rating: 4.5,
		numReviews: 7,
		category: 'Bike',
		price: 4150,
		countInStock: 6,
		productInfo: {
			mainDetails: {
				brand: 'Cross',
				categorie: 'City Bike',
				marime: ['S', 'M', 'L'],
				greutate: 14,
			},
			cadru: {
				materialCadru: 'Aluminiu',
				furca: 'Aluminiu rigida',
				cuvete: 'Glory Wheel ZS44/28.6 ZS44/30 - 1-1/8" negru',
			},
			transmisie: {
				transmisie: '3x10 viteze',
				angrenaj: 'Shimano Deore 3*48T, 175 mm',
				pinioane: 'Shimano HG500',
				maneteSchimbator: 'Shimano Deore',
				lant: 'KMC X10',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Shimano M200',
			},
			roti: {
				jante: 'Crosser X15 duble',
				butuci: 'Shimano 32H Disc QR center lock * Negru',
				cauciucuri: 'Schwalbe Citizen 47-622',
			},
		},
	},
	{
		name: 'CANNONDALE TESORO MIXTE 2 55CM METEOR GRAFIT 2020',
		images: ['../images/cannondale-tesoro-mixte-2-2020.jpg'],
		rating: 4,
		numReviews: 12,
		category: 'Bike',
		price: 6300,
		countInStock: 3,
		productInfo: {
			mainDetails: {
				brand: 'Cannondale',
				categorie: 'City Bike',
				marime: ['S', 'M', 'L'],
				greutate: 14,
			},
			cadru: {
				materialCadru: 'Aluminiu',
				furca: 'Fatty OPI Rigid 1.5"',
				cuvete: 'Tange Si 1.5"',
			},
			transmisie: {
				transmisie: '3x10 viteze',
				angrenaj: 'Shimano Deore 48/36/26T',
				pinioane: 'Shimano HG500, 12-28, 10-viteze',
				maneteSchimbator: 'Shimano Deore, 3x10 viteze',
				lant: 'KMC X10, 10-viteze',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Shimano MT200 hydro disc, 160/160mm RT10 disc',
			},
			roti: {
				jante: 'DC3.0, double wall w/eyelet, 32-hole',
				butuci: 'Shimano Dynamo hub',
				cauciucuri: 'Schwalbe Marathon Supreme 700x40c RaceGuard ',
			},
		},
	},
	{
		name: 'CANNONDALE TOPSTONE CARBON 5 GRAPHITE 2021',
		images: ['../images/Cannondale Road Bike.png'],
		rating: 5,
		numReviews: 9,
		category: 'Bike',
		price: 14995,
		countInStock: 2,
		productInfo: {
			mainDetails: {
				brand: 'Cannondale',
				categorie: 'Road Bike',
				marime: ['S', 'M', 'L'],
				greutate: 9,
			},
			cadru: {
				materialCadru: 'Carbon',
				furca:
					'BallisTec Full Carbon,flat mount disc, 55mm OutFront offset internal routing',
				cuvete: 'Integrated, 1.5" lower to 1-1/8", 25mm Alloy top cap',
			},
			transmisie: {
				transmisie: '2x11 viteze',
				angrenaj: 'Cannondale, BB30a, OPI SpideRing, 46/30',
				pinioane: 'Shimano 105, 11-34, 11-viteze',
				maneteSchimbator: 'Shimano GRX 600, 2x11-speed',
				lant: 'KMC X11, 11-viteze',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Shimano GRX 400 hydraulic disc, 160/160mm RT64 rotor',
			},
			roti: {
				jante: 'WTB ST i23 TCS, 28h, tubeless ready',
				butuci: 'Formula CL-712, 12x100 centerlock',
				cauciucuri: '	WTB Riddler TCS Light, 700 x 37c, tubeless ready',
			},
		},
	},
	{
		name: 'SPECIALIZED DIVERGE E5 - SATIN BLACK/CHARCOAL CAMO 52',
		images: [
			'../images/SPECIALIZED-Diverge-E5-Satin-Black-Charcoal-Camo_1.jpg',
		],
		rating: 4,
		numReviews: 12,
		category: 'Bike',
		price: 5100,
		countInStock: 3,
		productInfo: {
			mainDetails: {
				brand: 'Specialized',
				categorie: 'Road Bike',
				marime: ['S', 'M', 'L'],
				greutate: 10,
			},
			cadru: {
				materialCadru: 'Aluminiu',
				furca: 'Specialized FACT carbon, flat-mount disc, 12x100mm thru-axle',
				cuvete: 'Tange Si 1.5"',
			},
			transmisie: {
				transmisie: '2x10 viteze',
				angrenaj: 'Praxis Alba',
				pinioane: 'SunRace, 11-34t, 10-speed',
				maneteSchimbator: 'Shimano Tiagra hydraulic disc, ST4725',
				lant: 'KMC X10, 10-speed w/ reusable Missing Link',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Shimano Tiagra R4770, flat-mount hydraulic disc',
			},
			roti: {
				jante: 'Axis Sport Disc',
				cauciucuri:
					'Specialized Roadsport, 60TPI, wire bead, Flak Jacket protection, 700x35mm',
			},
		},
	},
	{
		name: 'Cube Nature Iridium/Black 28" 2021',
		images: ['../images/cube-nature-iridium-black-28-2021.jpeg'],
		rating: 4,
		numReviews: 12,
		category: 'Bike',
		price: 2900,
		countInStock: 3,
		productInfo: {
			mainDetails: {
				brand: 'Cube',
				categorie: 'Trekking Bike',
				marime: ['S', 'M', 'L'],
				greutate: 14,
			},
			cadru: {
				materialCadru: 'Aluminiu',
				furca: 'SR Suntour NEX HLO, 63mm, Lockout',
				cuvete: 'VP Integrated, Top 1 1/8", Bottom 1 1/2"',
			},
			transmisie: {
				transmisie: '2x8 viteze',
				angrenaj: 'Praxis Alba',
				pinioane: 'Shimano CS-HG31, 11-34T',
				maneteSchimbator: '	Shimano Altus SL-M315, Rapidfire-Plus',
				lant: 'KMC Z51',
			},
			sistemFranare: {
				tipFrana: 'Disc > hidraulica',
				frane: 'Tektro HD-M275, Hydr. Disc Brake 160',
			},
			roti: {
				jante: 'CUBE ZX20, 32H, Disc',
				butuci: 'CUBE Alloy Light, QR, 6-Bolt',
				cauciucuri: 'Schwalbe Land Cruiser, Active, 50-622',
			},
		},
	},
];

export default products;
