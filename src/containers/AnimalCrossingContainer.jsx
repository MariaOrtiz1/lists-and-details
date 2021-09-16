import React, { Component } from 'react';
import { findVillagers } from '../services/animalCrossing';
import VillagerList from '../components/villagers/VillagerList';


export default class AnimalCrossingContainer extends Component {
    state = {
      loading: true,
      villagers: [],
    };

    componentDidMount() {
      findVillagers().then((villagers) => 
        this.setState({ villagers, loading: false })
      );
    }

    render() {
      const { loading, villagers } = this.state;
      if(loading) {
        return (
          <img 
            src="https://i.giphy.com/media/XE7hLtlphwAK70mP3i/giphy.webp" 
            alt="loading spinner of flying package with balloon" 
            style={{
              'display': 'flex',
              'justifyContent': 'center',
              'alignSelf': 'center',
            }}/>
        );
      }

      return <VillagerList villagers={villagers} />;
    }
}
