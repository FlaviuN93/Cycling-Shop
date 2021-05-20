const products = [
	{
		name: 'BICICLETA CROSS QUANTUM  29" E-MTB 510MM',
		images: ['../images/36190_9435_Quantum_29 - 1.png'],
		rating: 4,
		numReviews: 3,
		ratingsAverage: 4,
		price: 2799,
		countInStock: 5,
		productInfo: {
			mainDetails: {
				brand: 'CROSS',
				categorie: { type: String, required: true },
				marime: {
					type: String,
					required: true,
					enum: {
						values: ['S', 'M', 'L'],
						message: 'Dimensions are either S, M, L',
					},
				},
				greutate: { type: Number },
				culori: [{ type: String }],
			},
			cadru: {
				materialCadru: { type: String },
				furca: { type: String },
				cuvete: { type: String },
			},
			transmisie: {
				transmisie: { type: String },
				angrenaj: { type: String },
				pinioane: { type: String },
				maneteSchimbator: { type: String },
				lant: { type: String },
			},
			sistemFranare: {
				tipFrana: { type: String },
				frane: { type: String },
			},
			roti: {
				jante: { type: String },
				butuci: { type: String },
				cauciucuri: { type: String },
			},
			sistemElectric: {
				cycloComputer: { type: String },
				motor: { type: String },
				baterie: { type: String },
			},
		},
	},
];
