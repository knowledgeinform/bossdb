import projects from "@/projects.js";
import _ from "lodash";

const nonEmpty = (arr) => _.filter(arr, item => item?.trim()?.length > 0);

const sortedIgnoreCase = (arr) => arr.sort((a, b) => {
  const a_lower = a.toLowerCase();
  const b_lower = b.toLowerCase();

  if (a_lower < b_lower) {
    return -1;
  } else if (a_lower > b_lower) {
    return 1;
  } else {
    return 0;
  }
});

const attributeValuesFromPublicProjects = (projects, attribute) => {
  return _.filter(projects, "public")
          .map((p) => p[attribute]);
}

export const projectMatchesFacet = (project, facet) => {
  const noSelectionForFacet = (facet.requiredValue.length === 0);   // Whether the facet type is string or Array, if nothing's selected it has length 0.

  return noSelectionForFacet || 
         (facet.equalIf ? 
            facet.equalIf(project[facet.attribute], facet.requiredValue) : 
            project[facet.attribute] === facet.requiredValue
         )
}

const attributeValues = ({projects, attribute, flatten}) => {
  const rawValues = attributeValuesFromPublicProjects(projects, attribute);
  const flattenedValues = flatten ? _.flatten(rawValues) : rawValues;

  const cleanedSortedValues = sortedIgnoreCase(
    _.uniq(
      nonEmpty(flattenedValues)                
    )
  );

  return cleanedSortedValues;
}

export const attributeValuesBy = ({projects, attribute, facets, searchText, searchTextMatchCondition}, flatten=false) => {
  const projectsByFacetedSearch = (p) => searchTextMatchCondition(p, searchText) && 
                                         facets.every(r => projectMatchesFacet(p, r));
  
  return attributeValues(
    {
      projects:_.filter(projects, projectsByFacetedSearch), 
      attribute:attribute, 
      flatten:flatten
    }
  );
}

export default attributeValues;