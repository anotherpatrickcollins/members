import React from 'react';
import EditableText from '../../forms/EditableText';
import EditableMarkdown from '../../forms/EditableMarkdown';
import EditableSkills from '../../forms/EditableSkills';
import EditableUsers from '../../forms/EditableUsers';
import EditableImageLink from '../../forms/EditableImageLink';
import ProjectIssues from './ProjectIssues';
import EditableWaffleAndGithubLinks from '../../forms/EditableWaffleAndGithubLinks';
import { ProjectSectionFieldsFragment } from '../../generated-models';

interface ProjectSectionProps {
  project: ProjectSectionFieldsFragment;
  editing: boolean;
  onFormDataChange: (value: any) => void;
}

const ProjectSection: React.SFC<ProjectSectionProps> = ({
  project,
  editing,
  onFormDataChange
}) => {
  const {
    name,
    description,
    skills,
    champions,
    repoName,
    headerImage
  } = project;
  const commonProps = {
    onChange: onFormDataChange,
    editing
  };
  return (
    <React.Fragment>
      <EditableImageLink
        value={headerImage}
        label="Header image"
        alt="header image"
        name="headerImage"
        {...commonProps}
      />
      <h1>
        <EditableText value={name} label="Title" name="name" {...commonProps} />
      </h1>
      <EditableMarkdown
        value={description}
        label="Description"
        name="description"
        {...commonProps}
      />
      <h2>Project Champions</h2>
      <EditableUsers
        value={champions}
        name="champions"
        label="Add Champion"
        {...commonProps}
      />
      <h2>Skills Needed</h2>
      <EditableSkills
        value={skills}
        name="skills"
        label="Add Skill"
        {...commonProps}
      />
      {editing || (repoName && <h2>Links</h2>)}
      <EditableWaffleAndGithubLinks value={repoName} {...commonProps} />
      {!editing && repoName && <ProjectIssues repoName={repoName} />}
    </React.Fragment>
  );
};

export default ProjectSection;
