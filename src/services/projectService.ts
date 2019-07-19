import { HttpService } from './HTTPService';

export interface Project {
  title: string;
  description: string;
  keywords: string[];
  logoFilename?: string;
  ctas?: ProjectCta[];
}

export interface ProjectCta {
  i18nKey: string;
  url: string;
}

export class ProjectService {
  public static async getProjects(): Promise<Project[]> {
    const getResult = await HttpService.get('data/projects/projects.json');

    if (!isProjectArray(getResult)) {
      throw new Error(`Got malformed projects.json`);
    }

    return getResult;
  }
}

const isProjectArray = (x: unknown[]): x is Project[] =>
  x.every(p => isProject(p));

const isProject = (x: unknown): x is Project => {
  const { ctas, description, keywords, logoFilename, title } = x as Project;

  if (
    [title, description, logoFilename ? logoFilename : undefined].some(
      s => typeof s !== 'string'
    )
  ) {
    console.error(
      `Expected title ${title} and description ${description} to be of type string. But got ${typeof title} for title and ${typeof description} for description`
    );

    return false;
  }

  if (keywords.some(s => typeof s !== 'string')) {
    console.error(
      `At least on entry in ${JSON.stringify(keywords)} is not of type string`
    );

    return false;
  }

  if (ctas && ctas.some(c => !isCta(c))) {
    // error message is given within the function isCta

    return false;
  }

  return true;
};

const isCta = (x: unknown): x is ProjectCta => {
  const { i18nKey, url } = x as ProjectCta;

  if ([i18nKey, url].some(s => typeof s !== 'string')) {
    console.error(
      `Expected i18nKey ${i18nKey} and url ${url} to be of type string, but got ${typeof i18nKey} for i18nKey and ${typeof url} for url`
    );

    return false;
  }

  return true;
};
