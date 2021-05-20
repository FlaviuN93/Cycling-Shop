import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
	{
		review: { type: String, required: [true, 'A review cannot be empty'] },
		title: { type: String },
		user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
	},
	{ timestamps: true }
);

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		images: [{ type: String, required: true }],

		description: { type: String, required: true },
		reviews: [reviewSchema],
		rating: {
			type: Number,
			min: 1,
			max: 5,
		},
		numReviews: { type: Number, required: true, default: 0 },
		ratingsAverage: {
			type: Number,
			min: [1, 'Rating must be above 1.0'],
			max: [5, 'Rating must be below 5.0'],
			set: (val) => Math.round(val * 10) / 10,
		},
		price: { type: Number, required: true, default: 0 },
		countInStock: { type: Number, required: true, default: 0 },
		productInfo: {
			mainDetails: {
				brand: { type: String, required: true },
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
	{ timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;