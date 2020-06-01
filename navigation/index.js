import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Settings from '../screens/Settings';
import Product from '../screens/Product';

import { theme } from '../constants';

const screens = createStackNavigator(
	{
		Welcome,
		Login,
		Explore,
		Browse,
		Settings,
		Product,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {},
			headerBackImage: <Image />,
			headerBackTitle: null,
			headerLeftContainerStyle: {},
			headerRightContainerStyle: {},
		},
	}
);

export default createAppContainer(screens)