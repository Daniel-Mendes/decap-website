/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import styled from '@emotion/styled';

import { mq } from '../utils';
import theme from '../theme';

const PluginsWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledPluginsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const PluginCategory = styled.h3`
  scroll-margin-top: ${theme.space[3]};

  ${mq[2]} {
    scroll-margin-top: ${theme.space[7]};
  }
`;

const PluginCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  border: 1px solid ${theme.colors.lightestGray};
  background-color: ${theme.colors.lightGray};
  padding: 1rem;

  &:hover {
    box-shadow: ${theme.colors.lightestGray} 0px 8px 24px;
  }

  position: relative;
`;

const PluginLogo = styled.img`
  height: 56px;
  object-fit: contain;
`;

const PluginTitle = styled.a`
  font-size: 1.25rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';

    position: absolute;
    inset: 0;
  }

  ${(props) =>
    props.official &&
    css`
      &::after {
        content: '';
        background-image: url('/img/plugins/official.svg');
        background-size: contain;
        background-repeat: no-repeat;

        width: 1.25rem;
        height: 1.25rem;
      }
    `}
`;

const PluginBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const DownloadIcon = styled.img`
  width: 20px;
`;

function PluginsList({ categories }) {
  return (
    <PluginsWrapper>
      {categories.map(({ name, slug, plugins }) => (
        <li key={slug}>
          <PluginCategory id={slug}>{name}</PluginCategory>

          <StyledPluginsList>
            {plugins.map(
              ({
                name,
                title,
                slug,
                description,
                image,
                npmUrl,
                repoUrl,
                homepageUrl,
                downloads,
                official,
              }) => (
                <PluginCard key={slug}>
                  {image && <PluginLogo src={image} alt={`${title} logo`} />}
                  <PluginTitle
                    href={homepageUrl || repoUrl || npmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    official={official}
                  >
                    {name}
                  </PluginTitle>
                  <p>{description}</p>
                  <PluginBadge
                    css={css`
                      color: ${theme.colors.gray};
                    `}
                  >
                    <DownloadIcon src="/img/plugins/downloads.svg" />
                    {downloads}
                  </PluginBadge>
                </PluginCard>
              )
            )}
          </StyledPluginsList>
        </li>
      ))}
    </PluginsWrapper>
  );
}

export default PluginsList;
