import React from 'react';
import styled from '@emotion/styled';
import { FullWidthContainer } from '../../atoms/fullWidthContainer/fullWidthContainer';
import { Paragraph } from '../../atoms/paragraph/paragraph';
import i18n from '../../utility/i18n';
import { Button } from '../../atoms/button/button';
import { Project, ProjectService } from '../../services/projectService';
import { Breakpoint } from '../../utility/responsive';
import { Breakpoints } from '../../constants/style';
import { ProjectsUtil } from './projectsUtil';

interface ProjectsState {
  isLoading: boolean; // if this is true, show a loading state instead of the projects
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
    const { isLoading, projects } = this.state;

    if (isLoading) {
      return <Paragraph>Loading...</Paragraph>;
    }

    return (
      <React.Fragment>
        {/* intro section */}
        <FullWidthContainer>
          <ParagraphContainer>
            <Paragraph>{i18n.t('projects.introText')}</Paragraph>
          </ParagraphContainer>
          <CtaContainer>
            <Button>{i18n.t('general.contactCta')}</Button>
          </CtaContainer>
        </FullWidthContainer>

        {/* list of projects */}
        <ProjectsContainer>
          <Breakpoint
            minWidth={Breakpoints.tablet + 1}
            renderFunction={() => ProjectsUtil.renderProjects(projects, 3)}
          />

          <Breakpoint
            maxWidth={Breakpoints.tablet}
            minWidth={Breakpoints.mobile}
            renderFunction={() => ProjectsUtil.renderProjects(projects, 2)}
          />

          <Breakpoint
            maxWidth={Breakpoints.mobile - 1}
            renderFunction={() => ProjectsUtil.renderProjects(projects, 1)}
          />
        </ProjectsContainer>
      </React.Fragment>
    );
  };

  /**
   * This function updates this component's state with the projects to render
   */
  private setProjects = async (): Promise<void> => {
    const projects = await ProjectService.getProjects();
    this.setState(() => ({ projects, isLoading: false }));
  };
}

const ProjectsContainer = styled('div')({
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const ParagraphContainer = styled('div')({
  marginBottom: '20px'
});

const CtaContainer = styled('div')({
  marginBottom: '40px'
});
