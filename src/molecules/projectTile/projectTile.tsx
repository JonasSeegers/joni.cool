import React from 'react';
import styled from '@emotion/styled';
import { SubSubHeading } from '../../atoms/subsubheading/subsubheading';
import { Paragraph } from '../../atoms/paragraph/paragraph';
import { Styleable } from '../../utility/types';
import { Project, ProjectCta } from '../../services/projectService';
import { Fonts } from '../../constants/style';
import { Button } from '../../atoms/button/button';
import i18n from '../../utility/i18n';

const IMAGE_DIR = 'assets';

interface ProjectTileProps extends Styleable, Project {}

export const ProjectTile: React.SFC<ProjectTileProps> = props => {
  const {
    title,
    logoFilename,
    ctas,
    keywords,
    description,
    emotionStyles
  } = props;

  return (
    <StyledTile emotionStyles={emotionStyles}>
      {logoFilename && (
        <LogoContainer logoUrl={`${IMAGE_DIR}/${logoFilename}`} />
      )}
      <SubSubHeading>{title}</SubSubHeading>

      <DescriptionContainer>
        <Paragraph>{description}</Paragraph>
      </DescriptionContainer>

      <KeywordsContainer>
        <Paragraph style={{ fontWeight: Fonts.fontWeightBold }}>
          {keywords.join(', ')}
        </Paragraph>
      </KeywordsContainer>

      {ctas && (
        <CtasContainer>{ctas.map((c, i) => renderCta(c, i))}</CtasContainer>
      )}
    </StyledTile>
  );
};

const renderCta = (
  { i18nKey, url }: ProjectCta,
  key?: React.Key
): React.ReactNode => {
  return (
    <ButtonContainer key={key}>
      <Button onClick={() => window.open(url, '_blank')}>
        {i18n.t(i18nKey)}
      </Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled('div')({
  '&:not(:last-child)': {
    marginBottom: '10px'
  }
});

const CtasContainer = styled('div')({ marginTop: '20px' });

const KeywordsContainer = styled('div')({ marginTop: '10px' });

const DescriptionContainer = styled('div')({});

const LogoContainer = styled('div')(({ logoUrl }: { logoUrl: string }) => ({
  backgroundImage: `url('${logoUrl}')`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  height: '30px',
  width: '100%',
  marginBottom: '20px'
}));

const StyledTile = styled('div')(
  ({ emotionStyles }: Pick<Styleable, 'emotionStyles'>) => ({
    ...emotionStyles
  })
);
