import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import CustomLink from './';

describe('CustomLink component', () => {
  it('Should contain text node', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <CustomLink to="main">Главная</CustomLink>
      </MemoryRouter>
    );
    expect(getByText('Главная')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <li
        class="component"
      >
        <a
          class=""
          href="/main"
        >
          Главная
        </a>
      </li>
    `);
  });
});
