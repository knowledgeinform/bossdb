import projects from "@/projects.js";
import { tagsBy } from "@/tags.js";
import _ from "lodash";

const imageModalities = [
  {category: 'SEM', label:'ATUM-SEM - Automatic Tape-collecting Ultra-Microtome SEM', tags:['ATUM-SEM']},
  {category: 'SEM', label:'SBEM - Serial block-face SEM', tags:['SBEM']},
  {category: 'SEM', label:'FIB-SEM - Focused Ion Beam SEM', tags:['FIB-SEM']},  
  {category: 'TEM', label:'SSTEM - Serial section Transmission Electron Microscope', tags:['ssTEM']},
  {category: 'TEM', label:'STEM - Scanning Transmission Electron Microscope', tags:['sTEM']},
  {category: 'TEM', label:'AT-TEM -  Array Tomography Transmission Electron Microscope', tags:['AT-TEM', 'AT']},
  {category: 'X-RAY', label:'XRM - X-Ray Microtomography', tags:['XRM']},
  {category: 'X-RAY', label:'XNH - X‐Ray Nanoholotomography', tags:['XNH']},
  {category: 'Other', label:'fMRI - Functional MRI', tags:['fMRI']},
  {category: 'Other', label:'DTI - Diffusion Tensor Imaging', tags:['DTI']},
  {category: 'Other', label:'CLARITY', tags:['CLARITY']}
];

const tagIsImageModality = (tag) => {
  return _.flatten(imageModalities.map(im => im.tags)).includes(tag);
}

export const imageModalitiesBy = ({facets, searchText, searchTextMatchCondition}) => {
  const refinedTags = tagsBy({facets:facets, searchText:searchText, searchTextMatchCondition:searchTextMatchCondition});
  return imageModalities.filter(im => im.tags.some(tag => refinedTags.includes(tag)));             
}

export default imageModalities;