/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { mq } from '../utils';
import theme from '../theme';

const PluginsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: row;
  gap: 2rem;
  overflow-x: auto;

  border-bottom: 1px solid ${theme.colors.lightestGray};
  background-color: ${theme.colors.white};
`;

function PluginsCategories({ categories }) {
  return (
    <PluginsList>
      {categories.map((category, index) => (
        <li key={index}>
          <Link to={`/plugins#${category.slug}`}>{category.name}</Link>
        </li>
      ))}
    </PluginsList>
  );
}

export default PluginsCategories;
