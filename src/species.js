import projects from "@/projects.js";
import attributeValues, { attributeValuesBy } from "@/project_attribute_list.js";
import _ from "lodash";

const species = attributeValues({projects:projects, attribute:'species', flatten:false});

export const speciesBy = ({facets, searchText, searchTextMatchCondition}) => {
  return attributeValuesBy(
    {
      projects:projects, 
      attribute:'species', 
      facets:facets, 
      searchText:searchText, 
      searchTextMatchCondition:searchTextMatchCondition
    }
  );
}

export default species;