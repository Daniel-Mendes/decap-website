import React from 'react';
import { css } from '@emotion/react';

import { mq } from '../utils';
import Grid from './grid';
import theme from '../theme';

function CommunityChannelsList({ channels }) {
  return (
    <Grid
      cols={channels.length}
      css={css`
        ${mq[2]} {
          align-items: flex-start;
        }
      `}
    >
      {channels.map(({ title, description, link }, channelIdx) => (
        <div
          key={channelIdx}
          css={css`
            margin-bottom: ${theme.space[4]};
          `}
        >
          <h3
            css={css`
              font-weight: 500;
            `}
          >
            {title}
          </h3>
          <p>{description}</p>
          <a href={link.href}>{link.text}</a>
        </div>
      ))}
    </Grid>
  );
}

export default CommunityChannelsList;
