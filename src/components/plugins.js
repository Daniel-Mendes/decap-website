/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import styled from '@emotion/styled';

import { mq } from '../utils';
import Markdownify from './markdownify';
import PageHero from './page-hero';
import HeroTitle from './hero-title';
import Lead from './lead';
import theme from '../theme';
import PluginsCategories from './plugins-categories';
import PluginsList from './plugins-list';

const PluginsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Plugins({ headline, subhead, categories }) {
  return (
    <PageHero>
      <div
        css={css`
          margin-bottom: ${theme.space[6]};
        `}
      >
        <HeroTitle>
          <Markdownify source={headline} />
        </HeroTitle>
        <Lead light>
          <Markdownify source={subhead} />
        </Lead>
      </div>

      <PluginsWrapper>
        <PluginsCategories categories={categories} />
        <PluginsList categories={categories} />
      </PluginsWrapper>
    </PageHero>
  );
}

export default Plugins;
