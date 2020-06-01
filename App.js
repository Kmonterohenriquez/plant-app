import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading, Asset } from 'expo';
import Navigation from './navigation';
import { Block } from './components';

//import all used images
const images = [
	require('./assets/images/plants.png'),
	require('./assets/images/seeds.png'),
	require('./assets/images/flowers.png'),
	require('./assets/images/sprayers.png'),
	require('./assets/images/pots.png'),
	require('.assets/images/fertilizers.png'),
	require('./assets/images/plants_1.png'),
	require('./assets/images/plants_2.png'),
	require('./assets/images/plants_3.png'),
];
export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};

	handleResourcesAsync = async () => {
		const cacheImages = images.map((img) => {
			return Asset.fromModule(image).downloadAsync();
		});
		return Promise.all(cacheImages);
  };
  
	render() {
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen){
      return (
        <AppLoading 
        startAsync={this.handleResourcesAsync}
        onError={error => console.warn(error)}
        onFinish={()=> this.setState({isLoadingComplete: true}}
        />
      )
    }
		return (
			<View style={styles.container}>
				<Navigation />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
