import { Project } from '../../services/projectService';
import React from 'react';
import { FullWidthContainer } from '../../atoms/fullWidthContainer/fullWidthContainer';
import { HorizontalLine } from '../../atoms/horizontalLine/horizontalLine';
import { ProjectTile } from '../../molecules/projectTile/projectTile';
import styled from '@emotion/styled';

/**
 * This class contains some functions that are meant to help rendering the projects view
 * based on a given array of projects and a number of projects that are meant to be in one
 * row togehter. These are put in a different class to make the Projects SFC a little smaller.
 *
 * You might argue that there are ways to this with css grids or flex-wrap, but the problem is that
 * the tiles need to be just as wide as the FullWidthContainer is, which is up to 940px while the horizontal
 * line needs to be as wide as the browser window is. If you have a simpler solution that still fulfills these
 * criteria, feel free to mail it to me at moin@joni.cool
 */
export class ProjectsUtil {
  /**
   * For a given array of Project, this function will render a view that contains of as many rows as
   * needed to display all of the projects with a given number of projects per row
   *
   * @param projects
   * @param projectsPerRow
   */
  public static renderProjects(
    projects: Project[],
    projectsPerRow: number
  ): React.ReactNode {
    const rows = this.renderRows(projects, projectsPerRow);

    return rows.map((row, index) => {
      const isLastRow = index + 1 === rows.length;

      return (
        <React.Fragment key={index}>
          <FullWidthContainer>{row}</FullWidthContainer>
          {/* after the last row, there musn't be a horizontal line */}
          {!isLastRow && (
            <HorizontalLineContainer>
              <HorizontalLine />
            </HorizontalLineContainer>
          )}
        </React.Fragment>
      );
    });
  }

  private static renderRows(
    projects: Project[],
    projectsPerRow: number
  ): React.ReactNode[] {
    // imagine an array with five projects and two projects per row
    // this leads to Math.ceil(5 / 2) = 3 rows
    const numRows = Math.ceil(projects.length / projectsPerRow);

    // this will create all of the rows and return them in an array
    return new Array(numRows).fill(null).map((_, index) => {
      // for the example above, the first row starts at 0 * 2 = 0, second row at 1 * 2 = 2, ...
      const indexStart = index * projectsPerRow;
      // for the example above, the first row ends at 0 + 2 = 2, the second row ends at 2 + 2 = 4, ...
      const indexEnd = indexStart + projectsPerRow;
      const projectsToRender = projects.slice(indexStart, indexEnd);

      return this.renderRow(projectsToRender, projectsPerRow, index);
    });
  }

  private static renderRow(
    projects: Project[],
    projectsPerRow: number,
    key: React.Key
  ): React.ReactNode {
    return (
      <Row key={key}>
        {new Array(projectsPerRow).fill(null).map((_, index) => {
          // if this is handling the last row, there might not be a project for every index...
          if (projects[index]) {
            return this.renderTile(projects[index], index);
          }
          // ... in this case the function returns an EmptyTile to keep the view balanced
          return <EmptyTile key={index} />;
        })}
      </Row>
    );
  }

  private static renderTile(project: Project, key?: React.Key) {
    return (
      <ProjectTile {...project} key={key} emotionStyles={projectTileStyles} />
    );
  }
}

const Row = styled('div')({
  display: 'flex',
  '&:not(:last-child)': {
    paddingBottom: '40px'
  }
});

const projectTileStyles = {
  flex: 1,
  ':not(:last-child)': {
    marginRight: '40px'
  }
};

const EmptyTile = styled('div')({
  flex: 1
});

const HorizontalLineContainer = styled('div')({
  margin: '40px 0px',
  width: '100vw'
});
