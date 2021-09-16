import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalCrossingContainer from './AnimalCrossingContainer';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';

// const mockServer = setupServer(
//   rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
//     return res(
//       ctx.json({
//         results: [
//           {
//             id: '5f5fb4bbbfd05c2aed8e474',
//             name: 'Aurora',
//             image: 'example.com/image.png',
//             species: 'penguin',
//             personality: 'normal',
//             quote: 'Always keep your cool.',
//           }
//         ]
//       })
//     );
//   })
// );

describe('AnimalCrossingContainer', () => {
//   beforeAll(() => mockServer.listen());
//   afterAll(() => mockServer.close());
  
  it('renders a list of villagers to the page', async () => {
    render(<MemoryRouter><AnimalCrossingContainer /></MemoryRouter>);
  
    screen.getByAltText('loading spinner of flying package with balloon');
  
    const ul = await screen.findByRole('list', { name: 'villagers' });
  
    expect(ul).toMatchSnapshot();
  });
});
