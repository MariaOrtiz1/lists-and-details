/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AnimalCrossingDetails from './AnimalCrossingDetails';
import DetailData from '../data/detailData.json';

const mockServer = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/:id', (req, res, ctx) => {
    return res(ctx.json(DetailData));
  })
);

describe('AnimalCrossingDetails', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('displays info about a single villager', async () => {
    const  { container }  = render(
      <MemoryRouter initialEntries={['/5f5fb4bbbfd05c2aed82e46e']}>
        <AnimalCrossingDetails />
      </MemoryRouter>
    );

    screen.getByAltText('loading spinner of flying package with balloon');

    await screen.findByText('Annalise', { exact: false });
    expect(container).toMatchSnapshot();
  });
});
