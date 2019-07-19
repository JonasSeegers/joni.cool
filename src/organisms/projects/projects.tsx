import React from 'react';
import styled from '@emotion/styled';
import { FullWidthContainer } from '../../atoms/fullWidthContainer/fullWidthContainer';
import { Paragraph } from '../../atoms/paragraph/paragraph';
import i18n from '../../utility/i18n';
import { Button } from '../../atoms/button/button';
import { Colors } from '../../constants/style';
import { Project, ProjectService } from '../../services/projectService';
import { ProjectTile } from '../../molecules/projectTile/projectTile';

interface ProjectsState {
  isLoading: boolean;
  projects: Project[];
}

export class Projects extends React.PureComponent<{}, ProjectsState> {
  constructor(props: {}) {
    super(props);

    this.state = { projects: [], isLoading: true };
  }

  public componentDidMount = async (): Promise<void> => {
    this.setProjects();
  };

  public render = (): React.ReactNode => {
    if (this.state.isLoading) {
      // TODO: Replace this with a loading spinner
      return <Paragraph>Loading...</Paragraph>;
    }

    return (
      <FullWidthContainer>
        {/* intro section */}
        <ParagraphContainer>
          <Paragraph>{i18n.t('projects.introtext')}</Paragraph>
        </ParagraphContainer>
        <CtaContainer>
          <Button>{i18n.t('general.contactCta')}</Button>
        </CtaContainer>

        {/* list of projects */}
        <Grid>{this.renderProjects(3)}</Grid>
      </FullWidthContainer>
    );
  };

  private setProjects = async (): Promise<void> => {
    const projects = await ProjectService.getProjects();
    this.setState(() => ({ projects, isLoading: false }));
  };

  private renderProjects = (projectsPerRow: number): React.ReactNode => {
    const { projects } = this.state;

    const test = [...projects].reduce((accRows, _, index, arr) => {
      const projectsCurrRow = arr.splice(0, projectsPerRow);

      const newRow = (
        <Row key={index}>
          {projectsCurrRow.map((p, i) => this.renderProject(p, i))}
        </Row>
      );

      return [...accRows, newRow];
    }, []);

    console.log(test);

    return test;
  };

  private renderProject = (project: Project, key?: React.Key) => (
    <ProjectTile
      {...project}
      key={key}
      emotionStyles={{ flex: 1, maxWidth: '300px' }}
    />
  );
}

const Row = styled('div')({
  paddingBottom: '40px',
  display: 'flex',
  '&:not(:last-child)': {
    borderBottom: `1px solid ${Colors.lineColor}`,
    marginBottom: '40px'
  }
});

const Grid = styled('div')({});

const ParagraphContainer = styled('div')({
  marginBottom: '20px'
});

const CtaContainer = styled('div')({
  marginBottom: '40px'
});
