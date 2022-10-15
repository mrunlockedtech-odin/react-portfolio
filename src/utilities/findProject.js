import { projects } from "../data/projects";
import { hyphenateWords } from "./hyphenateWords";

export function findProject(projectString) {
  let matchingProject = projects.filter(project => hyphenateWords(project.title) === projectString)
  return matchingProject[0]
}