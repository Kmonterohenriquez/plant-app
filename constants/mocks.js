const categories = [
	{
		id: 'plants',
		name: 'Plants',
		tags: ['products', 'inspirations', 'shop'],
		count: 147,
		image: require('../assets/images/plants.png'),
	},
	{
		id: 'seeds',
		name: 'Seeds',
		tags: ['products', 'shop'],
		count: 147,
		image: require('../assets/images/seeds.png'),
	},
	{
		id: 'flowers',
		name: 'Flowers',
		tags: ['products', 'inspirations'],
		count: 68,
		image: require('../assets/images/flowers.png'),
	},
	{
		id: 'splayers',
		name: 'Splayers',
		tags: ['products', 'inspirations'],
		count: 147,
		image: require('../assets/images/sprayers.png'),
	},
	{
		id: 'pots',
		name: 'Pots',
		tags: ['products', 'inspirations'],
		count: 147,
		image: require('../assets/images/pots.png'),
	},
	{
		id: 'fertilizers',
		name: 'Fertilizers',
		tags: ['products', 'inspirations'],
		count: 147,
		image: require('../assets/images/fertilizers.png'),
	},
];

const products = [
	{
		id: 1,
		name: '16 Best Plants That Thrive In Your Bedroom',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum suscipit nisi sed auctor. Phasellus eu dapibus augue. Etiam elementum at turpis id volutpat. Pellentesque nec vulputate risus, ac suscipit augue.',
		tags: ['interior', '27m', 'Ideas'],
		gallery: [
			require('../assets/images/plants_1.png'),
			require('../assets/images/plants_2.png'),
			require('../assets/images/plants_3.png'),
			require('../assets/images/plants_4.png'),
			require('../assets/images/plants_5.png'),
			require('../assets/images/plants_6.png'),
		],
	},
];

const explore = [
	//images
	require('../assets/images/explore_1.png'),
	require('../assets/images/explore_2.png'),
	require('../assets/images/explore_3.png'),
	require('../assets/images/explore_4.png'),
	require('../assets/images/explore_5.png'),
	require('../assets/images/explore_6.png'),
];

const profile = {
    username: 'react-ui-kit',
    location: 'Europe',
    email: 'kevinmontero1997@gmail.com',
    avatar: require('../assets/images/avatar.png'),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false
};

export { categories, products, profile, explore };
