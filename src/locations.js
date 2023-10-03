import projects from "@/projects.js";
import attributeValues, { attributeValuesBy } from "@/project_attribute_list.js";
import _ from "lodash";
import { nonEmpty } from "./project_attribute_list";

const locations = attributeValues({projects:projects, attribute:'brainloc', flatten:false});

export const locationsBy = ({facets, searchText, searchTextMatchCondition}) => {
  return attributeValuesBy(
    {
      projects:projects, 
      attribute:'brainloc', 
      facets:facets, 
      searchText:searchText, 
      searchTextMatchCondition:searchTextMatchCondition
    }
  );
}

export default locations;