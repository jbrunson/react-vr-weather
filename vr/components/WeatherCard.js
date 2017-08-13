import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-vr';

export default class WeatherCard extends Component {
	render() {
		const { weatherObject } = this.props;
		return (
			<View style={styles.weatherCard}>
				<Text style={styles.weatherText}>Location: {weatherObject.name}</Text>
				<Text style={styles.weatherText}>Current Weather: {weatherObject.weather[0].description}</Text>
				<Text style={styles.weatherText}>Temperature: {weatherObject.main.temp}°</Text>
				<Text style={styles.weatherText}>Wind Speed: {weatherObject.wind.speed}mph</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	weatherCard: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		opacity: 0.8,
		borderRadius: 0.1,
		borderColor: '#000',
		borderWidth: 0.05,
		padding: 0.5,
		layoutOrigin: [-0.5, 0],
		transform: [
			{ translate: [-3, 0, -7]}
		]
	},
	weatherText: {
		textAlign: 'center',
		fontSize: 0.3,
		color: '#000'
	}
});
