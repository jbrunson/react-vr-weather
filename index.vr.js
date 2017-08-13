import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import WeatherCard from './vr/components/WeatherCard';
import WindCloud from './vr/components/WindCloud';
import { API_KEY } from './config/keys';

export default class WeatherApp extends Component {
  state = {
    weatherObject: {
      name: '',
      main: {
        temp: 0
      },
      weather: [
        { description: '' }
      ],
      wind: {
        deg: 1,
        speed: 1
      }
    }
  };

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=${API_KEY}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({ weatherObject: json }));
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Pano source={asset('lombard-vr.jpg')}/>
        <WeatherCard weatherObject={this.state.weatherObject} />
        <WindCloud wind={this.state.weatherObject.wind} />
      </View>
    );
  }
};

AppRegistry.registerComponent('WeatherApp', () => WeatherApp);
