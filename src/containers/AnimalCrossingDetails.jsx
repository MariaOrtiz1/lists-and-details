import React, { Component } from 'react';
import { findOneVillager } from '../services/animalCrossing';

export default class AnimalCrossingDetails extends Component {
    state = {
      loading: true,
      villager: {},
    };

    componentDidMount() {
      const id = location.pathname.split('/')[1];
      findOneVillager(id).then((villager) => 
        this.setState({ villager, loading: false })
      );
    }

    render() {
      const { loading, villager } = this.state;
      const { id, name, image, species, personality, quote } = villager;
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

      return (
        <div>
          <p>{id}</p>
          <p>{name}</p>
          <img src={image} alt={name} style={{
            'height': '300px',
            'width': '250px',
            'backgroundColor': '#edcadb',
            'borderRadius': '30px',
            'border': '3px dotted #a27cbf',
          }}/>
          <p>{species}</p>
          <p>{personality}</p>
          <p>{quote}</p>
        </div>
      );
    }
}
