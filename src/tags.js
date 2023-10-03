import projects from "@/projects.js";
import attributeValues, { attributeValuesBy } from "@/project_attribute_list.js";
import _ from "lodash";

const tags = attributeValues({projects:projects, attribute:'tags', flatten:true});

export const tagsBy = ({facets, searchText, searchTextMatchCondition}) => {
  return attributeValuesBy(
    {
      projects:projects, 
      attribute:'tags', 
      facets:facets, 
      searchText:searchText, 
      searchTextMatchCondition:searchTextMatchCondition
    },
    true
  );
}

export default tags;