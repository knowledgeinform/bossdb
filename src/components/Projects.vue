<template>
    <div style="width: 90vw; margin: auto">
        <div class="section projects-header">
            <div class="title-and-searchbar-container">
                <div class="columns">
                    <div class="column is-4">
                        <h1 class="title page-title">Projects</h1>
                    </div>
                    <div class="column is-8">
                        <div class="search-container field has-addons">
                            <div class="control has-icons-left search-box">
                                <input
                                    class="input"
                                    v-model="searchString"
                                    type="search"
                                    placeholder="Filter projects by keywords separated by spaces" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search-message-container">
                <div
                    v-if="wasfacetedSearchAttempted()"
                    class="search-hit-message">
                    <div v-if="facetedSearchResults(projects).length > 0">
                        {{ facetedSearchResults(projects).length }} of
                        {{ projects.length }} projects match the selected
                        filters
                    </div>
                    <div v-else>No projects match the selected filters</div>
                </div>
                <div v-else class="search-hit-message">
                    Showing all {{ projects.length }} projects
                </div>
                <span
                    class="tag is-dark facet-chip"
                    v-for="facet in getAllFacets()"
                    :key="facet">
                    {{ Array.isArray(facet) ? facet.join(" / ") : facet }}
                    <button
                        class="delete is-small"
                        v-on:click="clearFacetSelection(facet)"></button>
                </span>
            </div>
        </div>
        <div class="columns">
            <div class="column filter-sidebar">
                <div class="facet-section-container">
                    <div class="facet-label">Data type:</div>
                    <div style="margin: 0.5em 0">
                        <span>
                            <DataTypeIcon
                                dataType="volumetric"
                                :isSelected="isDataTypeSelected('volumetric')"
                                :onclick="
                                    () =>
                                        toggleDataTypeSelectionStatus(
                                            'volumetric'
                                        )
                                " />
                            &nbsp;
                            <DataTypeIcon
                                dataType="segmentation"
                                :isSelected="isDataTypeSelected('segmentation')"
                                :onclick="
                                    () =>
                                        toggleDataTypeSelectionStatus(
                                            'segmentation'
                                        )
                                " />
                            &nbsp;
                            <DataTypeIcon
                                dataType="connectomics"
                                :isSelected="isDataTypeSelected('connectomics')"
                                :onclick="
                                    () =>
                                        toggleDataTypeSelectionStatus(
                                            'connectomics'
                                        )
                                " />
                            &nbsp;
                            <DataTypeIcon
                                dataType="mesh"
                                :isSelected="isDataTypeSelected('mesh')"
                                :onclick="
                                    () =>
                                        toggleDataTypeSelectionStatus(
                                            'mesh'
                                        )
                                " />
                            &nbsp;
                        </span>
                    </div>
                </div>
                <div class="facet-section-container">
                    <div class="facet-label">Image modality:</div>
                    <div class="select is-fullwidth">
                        <select
                            v-model="selectedImageModality"
                            v-on:change="handleImageModalityChange()"
                            class="location-dropdown">
                            <option
                                selected
                                v-bind:value="[]"
                                class="any-location-option">
                                — All modalities —
                            </option>
                            <optgroup
                                label="SEM"
                                v-if="
                                    any(
                                        byCategory({
                                            modalities: imageModalitiesBy(
                                                facetedSearchSelections()
                                            ),
                                            category: 'SEM',
                                        })
                                    )
                                ">
                                <option
                                    v-for="im in byCategory({
                                        modalities: imageModalitiesBy(
                                            facetedSearchSelections()
                                        ),
                                        category: 'SEM',
                                    })"
                                    :key="im.label"
                                    v-bind:value="im.tags">
                                    {{ im.label }}
                                </option>
                            </optgroup>
                            <optgroup
                                label="TEM"
                                v-if="
                                    any(
                                        byCategory({
                                            modalities: imageModalitiesBy(
                                                facetedSearchSelections()
                                            ),
                                            category: 'TEM',
                                        })
                                    )
                                ">
                                <option
                                    v-for="im in byCategory({
                                        modalities: imageModalitiesBy(
                                            facetedSearchSelections()
                                        ),
                                        category: 'TEM',
                                    })"
                                    :key="im.label"
                                    v-bind:value="im.tags">
                                    {{ im.label }}
                                </option>
                            </optgroup>
                            <optgroup
                                label="X-RAY"
                                v-if="
                                    any(
                                        byCategory({
                                            modalities: imageModalitiesBy(
                                                facetedSearchSelections()
                                            ),
                                            category: 'X-RAY',
                                        })
                                    )
                                ">
                                <option
                                    v-for="im in byCategory({
                                        modalities: imageModalitiesBy(
                                            facetedSearchSelections()
                                        ),
                                        category: 'X-RAY',
                                    })"
                                    :key="im.label"
                                    v-bind:value="im.tags">
                                    {{ im.label }}
                                </option>
                            </optgroup>
                            <optgroup
                                label="Other"
                                v-if="
                                    any(
                                        byCategory({
                                            modalities: imageModalitiesBy(
                                                facetedSearchSelections()
                                            ),
                                            category: 'Other',
                                        })
                                    )
                                ">
                                <option
                                    v-for="im in byCategory({
                                        modalities: imageModalitiesBy(
                                            facetedSearchSelections()
                                        ),
                                        category: 'Other',
                                    })"
                                    :key="im.label"
                                    v-bind:value="im.tags">
                                    {{ im.label }}
                                </option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="facet-section-container">
                    <div class="facet-label">Species:</div>
                    <div class="select is-fullwidth">
                        <select
                            v-model="selectedSpecies"
                            v-on:change="handleSpeciesChange()"
                            class="location-dropdown">
                            <option
                                selected
                                value=""
                                class="any-location-option">
                                — All species —
                            </option>
                            <option
                                v-for="s in speciesBy(
                                    facetedSearchSelections()
                                )"
                                :key="s"
                                v-bind:value="s">
                                {{ speciesName(s) }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="facet-section-container">
                    <div class="facet-label">Location:</div>
                    <div class="select is-fullwidth">
                        <select
                            v-model="selectedLocation"
                            class="location-dropdown">
                            <option
                                selected
                                value=""
                                class="any-location-option">
                                — All locations —
                            </option>
                            <option
                                v-for="loc in locationsBy(
                                    facetedSearchSelections()
                                )"
                                :key="loc"
                                v-bind:value="loc">
                                {{ loc }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="facet-section-container">
                    <span class="facet-label"
                        >Tag: ({{ selectedTags.length }} selected)</span
                    >
                    <button
                        class="float-right button is-small"
                        v-on:click="clearTagsFacet()">
                        Clear all
                    </button>
                    <div class="tag-list">
                        <div
                            v-for="tag in tagsBy(facetedSearchSelections())"
                            :key="tag"
                            class="facet">
                            <input
                                type="checkbox"
                                v-model="selectedTags"
                                v-bind:value="tag"
                                v-bind:id="tag"
                                v-on:click="handleTagChange(tag, $event)" />
                            &nbsp;
                            <span>{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-10-desktop is-8">
                <div class="columns is-multiline project-list">
                    <div
                        class="column is-4-desktop is-3-fullhd is-6-tablet"
                        v-for="proj in facetedSearchResults(projects)"
                        :key="proj.name">
                        <div class="card has-equal-height">
                            <router-link :to="'/project/' + proj.id">
                                <div class="card-image">
                                    <figure class="image is-3by2">
                                        <img
                                            :src="proj.media || proj.hero"
                                            :alt="proj.name"
                                            style="width: auto; margin: auto" />
                                    </figure>
                                </div>
                            </router-link>
                            <div class="card-content">
                                <div class="media-content">
                                    <router-link :to="'/project/' + proj.id">
                                        <div class="title is-4">
                                            {{ proj.name }}
                                            <span v-if="proj.species">
                                                <img
                                                    :src="
                                                        require('@/assets/species/' +
                                                            proj.species +
                                                            '.svg')
                                                    "
                                                    height="50"
                                                    width="50"
                                                    style="float: right" />
                                            </span>
                                        </div>
                                    </router-link>
                                    <div style="margin: 0.5em 0">
                                        <span>
                                            <DataTypeIcon
                                                dataType="volumetric"
                                                :isSelected="
                                                    isDataTypeSelected(
                                                        'volumetric'
                                                    )
                                                "
                                                :onclick="
                                                    () =>
                                                        toggleDataTypeSelectionStatus(
                                                            'volumetric'
                                                        )
                                                " />
                                            &nbsp;
                                            <DataTypeIcon
                                                v-if="
                                                    (proj.segmentation || [])
                                                        .length
                                                "
                                                dataType="segmentation"
                                                :isSelected="
                                                    isDataTypeSelected(
                                                        'segmentation'
                                                    )
                                                "
                                                :onclick="
                                                    () =>
                                                        toggleDataTypeSelectionStatus(
                                                            'segmentation'
                                                        )
                                                " />
                                            &nbsp;
                                            <DataTypeIcon
                                                v-if="
                                                    (proj.mesh || [])
                                                        .length
                                                "
                                                dataType="mesh"
                                                :isSelected="
                                                    isDataTypeSelected(
                                                        'mesh'
                                                    )
                                                "
                                                :onclick="
                                                    () =>
                                                        toggleDataTypeSelectionStatus(
                                                            'mesh'
                                                        )
                                                " />
                                            &nbsp;
                                            <DataTypeIcon
                                                v-if="
                                                    (proj.connectomes || [])
                                                        .length
                                                "
                                                dataType="connectomics"
                                                :isSelected="
                                                    isDataTypeSelected(
                                                        'connectomics'
                                                    )
                                                "
                                                :onclick="
                                                    () =>
                                                        toggleDataTypeSelectionStatus(
                                                            'connectomics'
                                                        )
                                                " />
                                        </span>
                                    </div>
                                    <div class="tags">
                                        <span
                                            v-for="tag in proj.tags"
                                            :key="tag"
                                            v-bind:class="{
                                                tag: true,
                                                'is-rounded': true,
                                                'is-success': true,
                                                'is-light': !isTagSelected(tag),
                                                'is-clickable': true,
                                            }"
                                            v-on:click="
                                                toggleTagSelectionStatus(tag)
                                            ">
                                            {{ tag }}
                                        </span>
                                    </div>
                                </div>
                                <br />
                                <router-link :to="'/project/' + proj.id">
                                    <small class="content">
                                        {{ proj.blurb }}
                                    </small>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    </div>
</template>


<script>
import projects from "@/projects.js";
import tags, { tagsBy } from "@/tags.js";
import { projectMatchesFacet } from "@/project_attribute_list.js";
import locations, { locationsBy } from "@/locations.js";
import imageModalities, { imageModalitiesBy } from "@/image_modalities.js";
import species, { speciesBy } from "@/species.js";
import _ from "lodash";

import DataTypeIcon from "./datatypes/DataTypeIcon.vue";
import router from "@/router.js";

// The following project fields are searched when searching for projects:

const SEARCHABLE_ATTRIBUTES = ["name", "tags", "blurb", "species", "brainloc"];

/**
 * Performs case-insentive partial matching of the value against the token (e.g. the value "Drosophila" matches the tokens
 * "dros", and "phila", but not "fly").
 */
function valueMatchesToken(value, token) {
    return value.toLowerCase().includes(token.toLowerCase());
}

function tokenMatchesProjectAttributeValue(
    token,
    project,
    searchableAttribute
) {
    const value = project[searchableAttribute];

    // If we have a value that is an array, we only need to match one value to match.
    // For example, the tag attribute is an array, in which case we need the token to match at least one of the tags.

    if (Array.isArray(value)) {
        return value.some((item) => valueMatchesToken(item, token));
    } else {
        // If the value is a string (which is usually the case), just do a straight comparison with the token:
        return valueMatchesToken(value, token);
    }
}
function tokenMatchesProject(token, project) {
    return SEARCHABLE_ATTRIBUTES.some((searchableAttribute) =>
        tokenMatchesProjectAttributeValue(token, project, searchableAttribute)
    );
}

export default {
    components: {
        DataTypeIcon,
    },
    created() {
        if (this.$route.query.selectedTags) {
            this.selectedTags = JSON.parse(this.$route.query.selectedTags);
        }
    },
    methods: {
        // Packages up the facet selections in the format needed by imageLocationsBy, speciesBy, locationsBy, and tagsBy to let them
        // return the subset of their respective values that matches the selected facets and the search string.
        //
        // The format is {FACETS, SEARCH_STRING, SEARCH_STRING_MATCH_CONDITION}, where
        //
        // - FACETS is an array of entries that tell the xBy function in question which project attribute to compare against
        //    which value, and optionally (if "equalIf" is provided) how to determine that the project attribute's value matches the
        //    specified value. It's how the xBy method knows how to filter projects on the facets.
        //
        // - SEARCH_STRING is the search text entered by the user. It is passed to SEARCH_STRING_MATCH_CONDITION to determine whether
        //    the search text matches a given project.
        //
        // - SEARCH_STRING_MATCH_CONDITION is used to determine whether the search text matches a given project.
        facetedSearchSelections() {
            return {
                facets: [
                    // Image modality
                    {
                        attribute: "tags",
                        requiredValue: this.selectedImageModality,
                        equalIf: (projectTags, imTags) =>
                            imTags.some((t) => projectTags.includes(t)),
                    },
                    // Species
                    {
                        attribute: "species",
                        requiredValue: this.selectedSpecies,
                    },
                    // Location
                    {
                        attribute: "brainloc",
                        requiredValue: this.selectedLocation,
                    },
                    // Tags
                    {
                        attribute: "tags",
                        requiredValue: this.selectedTags,
                        equalIf: (projectTags, selectedTags) =>
                            selectedTags.every((t) => projectTags.includes(t)),
                    },
                    // Data types
                    {
                        attribute: "dataTypes",
                        requiredValue: this.selectedDataTypes,
                        equalIf: (projectDataTypes, selectedDataTypes) =>
                            selectedDataTypes.every((t) =>
                                projectDataTypes.includes(t)
                            ),
                    },
                ],

                searchText: this.searchString,
                searchTextMatchCondition: this.projectMatchesSearchText,
            };
        },

        // NOTE: The v-model attribute on the Image Modality select handles binding to track the selected image modality.
        // This method ensures that whenever a new image modality is selected it's tag is automatically selected and the
        // tag for the previous image modality is automatically deselected.
        handleImageModalityChange() {
            // NOTE: image modalities with multiple tags won't have any impact on the selected tags. Only image modalities with
            // a single tag cause changes to the selected tags array.

            const previousIMTag = this.previousImageModality[0];
            const selectedIMTag = this.selectedImageModality[0];

            // Clear the tag for the previous image modality since it's not selected any more:
            if (
                this.previousImageModality.length === 1 &&
                this.isTagSelected(previousIMTag)
            ) {
                this.deselectTag(previousIMTag, true);
            }

            // Select the tag for the current image modality that the user just selected:
            if (
                this.selectedImageModality.length === 1 &&
                this.isTag(selectedIMTag) &&
                !this.isTagSelected(selectedIMTag)
            ) {
                this.selectTag(selectedIMTag);
            }

            // Store a reference to the current image modality so next go-round we can access it as the previous image modality:
            this.previousImageModality = this.selectedImageModality;
        },

        handleTagChange(tag, event) {
            if (!event.target.checked) {
                this.updateOtherFacetsDueToTagDeselection(tag);
            }
            this.toggleTagSelectionStatus(tag);
            this.$router.replace({
                name: "projects",
                query: {
                    ...this.$route.query,
                    selectedTags: JSON.stringify(this.selectedTags),
                },
            });
        },

        handleSpeciesChange() {
            const previousSpeciesTag = this.previousSpecies;
            const selectedSpeciesTag = this.selectedSpecies;
            // Clear the tag for the previous species since it's not selected any more:
            if (
                this.previousSpecies != "" &&
                this.isTagSelected(previousSpeciesTag)
            ) {
                this.deselectTag(previousSpeciesTag, true);
            }
            // Select the tag for the current species that the user just selected:
            if (
                this.selectedSpecies != "" &&
                this.isTag(selectedSpeciesTag) &&
                !this.isTagSelected(selectedSpeciesTag)
            ) {
                this.selectTag(selectedSpeciesTag);
            }
            // Store a reference to the current species so next go-round we can access it as the previous species:
            this.previousSpecies = this.selectedSpecies;
            this.$router.replace({
                name: "projects",
                query: {
                    ...this.$route.query,
                    selectedSpecies: this.selectedSpecies,
                },
            });
        },

        updateOtherFacetsDueToTagDeselection(tag) {
            if (
                this.selectedImageModality.length === 1 &&
                this.selectedImageModality[0] === tag
            ) {
                this.selectedImageModality = [];
            }
            this.$router.replace({
                name: "projects",
                query: {
                    ...this.$route.query,
                    selectedTags: JSON.stringify(this.selectedTags),
                },
            });
        },

        clearTagsFacet() {
            // NOTE: while it looks like it would be cleaner to simply call clearTag inside the forEach loop,
            // modifying the selectedTags array while iterating over it doesn't work. But this does:

            // Handle secondary effects of clearing all the tags...
            this.selectedTags.forEach((tag) => {
                this.updateOtherFacetsDueToTagDeselection(tag);
            });

            // ...and then clear the tags:
            this.selectedTags = [];
            this.$router.replace({
                name: "projects",
                query: {
                    ...this.$route.query,
                    selectedTags: JSON.stringify(this.selectedTags),
                },
            });
        },

        speciesName(species) {
            const mapping = {
                celegans: "C. elegans",
                fruitfly: "Fruit fly (D. melanogaster)",
                human: "Human",
                mouse: "Mouse",
                rat: "Rat",
                zebrafish: "Zebrafish",
                zebrafinch: "Zebrafinch",

                mouse_fly: "Mouse and fruit fly",
            };
            if (species in mapping) {
                return mapping[species];
            }
            return species;
        },

        toggleTagSelectionStatus(tag) {
            if (this.isTagSelected(tag)) {
                this.deselectTag(tag);
            } else {
                this.selectTag(tag);
            }
        },

        deselectTag(tag, noUpdateOtherFacets) {
            this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);

            if (noUpdateOtherFacets === undefined) {
                this.updateOtherFacetsDueToTagDeselection(tag);
            }
            this.$router.replace({
                name: "projects",
                query: {
                    ...this.$route.query,
                    selectedTags: JSON.stringify(this.selectedTags),
                },
            });
        },

        selectTag(s) {
            this.selectedTags.push(s);
            this.$router.replace({
                name: "projects",
                query: {
                    ...this.$route.query,
                    selectedTags: JSON.stringify(this.selectedTags),
                },
            });
        },

        toggleDataTypeSelectionStatus(dataType) {
            if (this.isDataTypeSelected(dataType)) {
                this.deselectDataType(dataType);
            } else {
                this.selectDataType(dataType);
            }
        },

        deselectDataType(dataType) {
            this.selectedDataTypes.splice(
                this.selectedDataTypes.indexOf(dataType),
                1
            );
        },

        selectDataType(s) {
            this.selectedDataTypes.push(s);
        },

        isTag(s) {
            return _.isString(s) && tags.includes(s);
        },

        isValidTag(s) {
            return (
                this.isTag(s) &&
                tagsBy(this.facetedSearchSelections()).includes(s)
            );
        },

        isTagSelected(tag) {
            return this.selectedTags.includes(tag);
        },

        isDataTypeSelected(dataType) {
            return this.selectedDataTypes.includes(dataType);
        },

        wasfacetedSearchAttempted() {
            return (
                this.searchString.trim().length > 0 ||
                this.selectedTags.length > 0 ||
                this.selectedDataTypes.length > 0 ||
                this.selectedImageModality.length > 0 ||
                this.selectedSpecies !== "" ||
                this.selectedLocation !== ""
            );
        },

        getAllFacets() {
            return _.uniq(
                this.selectedTags
                    .concat(this.getIMFilterIfNotTag())
                    .concat(this.getSpeciesIfNotTag())
                    .concat(this.getLocationIfNotTag())
                    .concat(this.selectedDataTypes)
            );
        },

        getIMFilterIfNotTag() {
            return this.selectedImageModality.length > 1
                ? [this.selectedImageModality]
                : [];
        },

        getSpeciesIfNotTag() {
            if (this.selectedSpecies === "") {
                return [];
            } else {
                return this.isTag(this.selectedSpecies) &&
                    this.isTagSelected(this.selectedSpecies)
                    ? []
                    : [this.selectedSpecies];
            }
        },

        getLocationIfNotTag() {
            if (this.selectedLocation === "") {
                return [];
            } else {
                return this.isTag(this.selectedLocation) &&
                    this.isTagSelected(this.selectedLocation)
                    ? []
                    : [this.selectedLocation];
            }
        },

        clearFacetSelection(facet) {
            // NOTE: this is intentionally NOT an if-elseif-else tree; any or all of these if blocks can be entered at once.

            if (this.isTag(facet) && this.isTagSelected(facet)) {
                this.deselectTag(facet);
            }

            if (facet === this.selectedSpecies) {
                this.selectedSpecies = "";
            }

            if (facet === this.selectedLocation) {
                this.selectedLocation = "";
            }

            if (this.selectedDataTypes.includes(facet)) {
                const facetIndex = this.selectedDataTypes.indexOf(facet);
                this.selectedDataTypes.splice(facetIndex, 1);
            }

            if (Array.isArray(facet)) {
                if (_.isEqual(this.selectedImageModality, facet)) {
                    this.selectedImageModality = [];
                }
            } else {
                if (
                    this.selectedImageModality.length === 1 &&
                    this.selectedImageModality.includes(facet)
                ) {
                    this.selectedImageModality = [];
                }
            }
        },

        /**
         * Returns true if every space-separated token in searchText matches at least one searchable field in the project, or
         * if searchText is empty, undefined, or null, in which case we want to show all of the projects.
         */
        projectMatchesSearchText(project) {
            if (this.searchString?.trim().length > 0) {
                // Split the space-delimited search string into non-space-containing tokens
                const searchTokens = this.searchString.split(/\W/);
                return searchTokens.every((token) =>
                    tokenMatchesProject(token, project)
                );
            } else {
                return true;
            }
        },

        facetedSearchResults(projects) {
            const fs = this.facetedSearchSelections();

            let results = projects.filter(
                (p) =>
                    fs.searchTextMatchCondition(p, fs.searchText) &&
                    fs.facets.every((f) => projectMatchesFacet(p, f))
            );

            return results;
        },

        byCategory({ modalities, category }) {
            return _.filter(modalities, { category: category });
        },

        any(arr) {
            return arr.length > 0;
        },
    },

    data() {
        return {
            tempSearchString: "",
            searchString: "",
            tags: tags,
            locations: locations,
            imageModalities: imageModalities,
            locationsBy: locationsBy,
            tagsBy: tagsBy,
            speciesBy: speciesBy,
            imageModalitiesBy: imageModalitiesBy,
            species: species,
            selectedLocation: "",
            selectedImageModality: [],
            selectedSpecies: "",
            previousImageModality: [],
            previousSpecies: "",
            previousLocation: "",
            selectedTags: [],
            selectedDataTypes: [],
            projects: _.sortBy(
                _.filter(projects, "public"),
                (i) => i.date * -1
            ),
        };
    },
};
</script>


<style lang="scss" scoped>
.projects-header {
    padding-left: 0;
    padding-right: 0;
}

.project-list {
    margin-top: 5px;
}

.has-equal-height {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.search-container {
    display: flex;
    width: 100%;
    padding-bottom: 15px;
}

.search-label {
    font-weight: bold;
}

.search-box {
    width: 100%;
    border-radius: 5px 5px 5px 5px;
    border-color: lightgrey;
}

.search-message-container {
    margin-left: 20px;
    min-height: 3.5em;
}

.search-hit-message {
    font-style: italic;
}

.facet-label {
    font-weight: bold;
}

.tag-list {
    margin-top: 15px;
    width: 100%;
    overflow-y: auto;
    height: 30vh;
    font-size: 90%;
}

.facet {
    width: 100%;
}

.facet-section-container {
    padding-bottom: 20px;
    margin-left: 20px;
}

.filter-sidebar {
    top: 10vh;
    position: sticky;
    height: 70vh;
}

.facet-chip {
    margin-right: 10px;
}

.location-dropdown {
    margin-top: 5px;
}

.any-location-option {
    font-style: italic;
}

.float-right {
    float: right;
}

.is-clickable {
    cursor: pointer;
    -webkit-user-select: none; // Safari
    -ms-user-select: none; // IE
    user-select: none; // Standard
}
</style>
