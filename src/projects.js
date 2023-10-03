import { Validator } from "jsonschema";
import _ from "lodash";

/*
// COPY-PASTEABLE PROJECT TEMPLATE:

"PROJECT_ID": {
    name: "Author et al 2020",
    id: "PROJECT_ID",
    public: false,
    date: Date.parse("July 23, 2020"),
    hero: "",
    media: "",
    species: "",
    brainloc: "",
    blurb: "",
    description: [],
    tags: [],
    publications: [],
    links: [],
}
*/

let projects = _.mapValues({

    "yim_choe_bae2023": {
        name: "Yim, Choe, & Bae, et al 2023",
        id: "yim_choe_bae2023",
        public: true,
        date: Date.parse("August 7, 2023"),
        hero: require("@/assets/projects/yim_choe_bae2023.jpg"),
        media: require("@/assets/projects/yim_choe_bae2023.jpg"),
        locations: [{
            name: "dauer1_364",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "yim_choe_bae2023/dauer1_364/em",
            xs: [5969, 5969 + 1024],
            ys: [5200, 5200 + 1024],
            zs: [183, 183 + 6],
            res: 0
        }],
        mesh: [{}],

        blurb: "High-resolution transmission electron microscopy dataset of C. elegans dauer nerve ring.",
        description: [`A dauer is an alternative developmental stage of nematodes with distinct behavioral characteristics. In this study, we have collected high-resolution transmission electron microscopy (TEM) dataset of C. elegans dauer and have densely reconstructed every neuron and muscle cells in the volume. This dataset consists of whole body of length 18 um in the region including the nerve ring imaged at 1 x 1 x 50 nm resolution.`],
        tags: [
            "C. elegans", "celegans", "dauer", "nematode", "TEM", "EM", "connectomics", "nerve ring", "whole-brain", "segmentation", "meshes", "synapse", "connectivity"],
        species: "celegans",
        // brainloc: "nerve-ring",
        brainloc: "Celegans-Whole",
        publications: [{
            name: "Mind of a dauer: Comparative connectomics reveals developmental plasticity",
            url: "https://www.biorxiv.org/content/10.1101/2023.03.23.533915v2",
            authors: ["Hyunsoo Yim",
                "Daniel T. Choe",
                "J. Alexander Bae",
                "Hae-Mook Kang",
                "Ken C.Q. Nguyen",
                "Myung-kyu Choi",
                "Soungyub Ahn",
                "Sang-kyu Bahn",
                "Heeseung Yang",
                "David H. Hall",
                "Jinseop S. Kim",
                "Junho Lee"],
            citationName: "Yim, Choe, & Bae, et al 2023",
        }],
        neuroglancer: {
            name: "Visualize in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B1e-9%2C%22m%22%5D%2C%22y%22:%5B1e-9%2C%22m%22%5D%2C%22z%22:%5B5e-8%2C%22m%22%5D%7D%2C%22position%22:%5B4933.5%2C4996.5%2C183.5%5D%2C%22crossSectionScale%22:12.182493960703477%2C%22projectionOrientation%22:%5B-0.17712604999542236%2C0.321634978055954%2C-0.004783261567354202%2C0.9301367998123169%5D%2C%22projectionScale%22:8080.489314438557%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/yim_choe_bae2023/dauer1_364/em/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22dauer1_364%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/yim_choe_bae2023/dauer1_364/seg_oct22%22%2C%22tab%22:%22source%22%2C%22segments%22:%5B%22%21129%22%5D%2C%22name%22:%22seg_oct22%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/yim_choe_bae2023/dauer1_364/syn_seg_v8%22%2C%22tab%22:%22source%22%2C%22segments%22:%5B%5D%2C%22name%22:%22syn_seg_v8%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22syn_seg_v8%22%7D%2C%22layout%22:%224panel%22%7D"
        },
        links: [{
            name: 'Twitter Thread',
            url: 'https://twitter.com/jalex_bae/status/1639186795534630912'
        }]
    },

    "spirou_manis2023": {
        name: "Spirou & Manis, et al 2023",
        id: "spirou_manis2023",
        public: true,
        date: Date.parse("August 4, 2023"),
        hero: require("@/assets/projects/spirou_manis2023.png"),
        media: require("@/assets/projects/spirou_manis2023.png"),
        locations: [{
            name: "bin4",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "spirou_manis2023/vcn/bin4",
            xs: [1801, 1801 + 1024],
            ys: [1678, 1678 + 1024],
            zs: [900, 900 + 6],
            res: 0
        }],
        blurb: "Serial blockface scanning electron microscopy of mouse cochlear nucleus nerve root region and compartmental computational models of reconstructed neurons",
        description: [`
**Project Summary:**
The cochlear nucleus (CN) is the gateway for central nervous system processing of auditory information in mammals and other vertebrates. It has been proposed that parallel processing channels are set up in the CN, and these form the basis for further computation at higher stations of the auditory system. Despite decades of study, enumeration of CN cell types is incomplete and CN circuitry is described only superficially. The purpose of this project is to deliver a nanoscale map of component neural circuits in the CN, with enumerated cell types and their synaptic connections, at sufficient detail to support in silico, experimentally-constrained compartmental computational models. We employ tissue reconstruction from volume electron microscopy image sets and published biophysical data to drive the experimental pipeline. By connecting compartmental models to a published cochlear transduction model, responses of the model cells to arbitrary sounds can be explored. This image volume reports on convergent innervation of globular bushy cells in the auditory nerve root.

**Image Volume:**
A tissue volume of 148 x 158 x 111 µm was selected from the cochlear nerve root of a P60 FVB mouse. Imaging was performed with a pixel dwell time of 0.5 µs and pixel dimensions of 5.5 x 5.5 x 60 nm, requiring 7.5 days to image and yielding a total image size of ~1.5 TB. 31 complete cell bodies are contained within the image volume, consisting of 26 bushy cells and 5 multipolar cells. A Bin5 version is provided here for easier exploration than with the full resolution dataset.

**Project Leaders:**
George Spirou, PhD, University of South Florida, and Paul Manis, PhD, University of North Carolina at Chapel Hill, were co-leaders of this project.

**Contact Dr. George Spirou (gspirou@usf.edu) for access to higher resolution data.**
        `],
        tags: ["BRAIN Initiative", "mouse", "endbulb terminal", "synaptic integration", "coincidence detection", "auditory nerve", "phase-locking"],
        species: "mouse",
        brainloc: "Mouse-WholeBrain1",
        publications: [{
            name: "High-resolution volumetric imaging constrains compartmental models to explore synaptic integration and temporal processing by cochlear nucleus globular bushy cells",
            url: "https://elifesciences.org/articles/83393",
            authors: ["George A Spirou", "Matthew G Kersting", "Sean Carr", "Bayan Razzaq", "Carolyna Yamamoto Alves Pinto", "Mariah Dawson", "Mark H Ellisman", "Paul B Manis"],
            citationName: "Spirou & Manis, et al 2023"
        }],
        neuroglancer: {
            name: "Visualize in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4.4e-8%2C%22m%22%5D%2C%22y%22:%5B4.4e-8%2C%22m%22%5D%2C%22z%22:%5B5e-8%2C%22m%22%5D%7D%2C%22position%22:%5B1801.5%2C1678.5%2C916.5%5D%2C%22crossSectionScale%22:1%2C%22projectionScale%22:4096%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/spirou_manis2023/vcn/bin4%22%2C%22tab%22:%22source%22%2C%22name%22:%22bin4%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22bin4%22%7D%2C%22layout%22:%224panel%22%7D"
        },
        links: [{
            name: "Visualize bin4 on Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4.4e-8%2C%22m%22%5D%2C%22y%22:%5B4.4e-8%2C%22m%22%5D%2C%22z%22:%5B5e-8%2C%22m%22%5D%7D%2C%22position%22:%5B1801.5%2C1678.5%2C916.5%5D%2C%22crossSectionScale%22:1%2C%22projectionScale%22:4096%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/spirou_manis2023/vcn/bin4%22%2C%22tab%22:%22source%22%2C%22name%22:%22bin4%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22bin4%22%7D%2C%22layout%22:%224panel%22%7D"
        }, {
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/spirou_manis2023"
        }, {
            name: 'Spirou Lab, University of South Florida',
            url: 'https://spiroulabadcl.com/'
        }, {
            name: 'Manis Lab, University of North Carolina at Chapel Hill',
            url: 'http://www.manislab.org/'
        }]
    },
    "maher_briegel2023": {
        name: "Maher & Briegel et al 2023",
        id: "maher_briegel2023",
        public: true,
        date: Date.parse("January 31, 2023"),
        hero: require("@/assets/projects/maher_briegel2023_hero.jpg"),
        media: require("@/assets/projects/maher_briegel2023_media.jpg"),
        locations: [{
            name: "Lgn200",
            protocol: "https",
            server: "cvdb-bossdb-boss",
            uri: "MaherBriegel2023/Lgn200/sbem",
            xs: [1024, 1024 + 1024],
            ys: [1024, 1024 + 1024],
            zs: [30, 30 + 6],
            res: 0
        }, {
            name: "Lgn300",
            protocol: "https",
            server: "cvdb-bossdb-boss",
            uri: "MaherBriegel2023/Lgn300/sbem",
            xs: [1024, 1024 + 1024],
            ys: [1024, 1024 + 1024],
            zs: [30, 30 + 6],
            res: 0
        }],
        blurb: "Unbiased Terminal Sampling for Volume Based Sorting of Input Boutons on Geniculate Relay Cell and Interneuron Dendrite Segments.",
        description: [
            `
The visual signals evoked at the retinal ganglion cells are modified and modulated by various synaptic inputs that impinge on lateral geniculate nucleus cells before they are sent to the cortex. The selectivity of geniculate inputs for clustering or forming microcircuits on discrete dendritic segments of geniculate cell types may provide the structural basis for network properties of the geniculate circuitry and differential signal processing through the parallel pathways of vision. To reveal the patterns of input selectivity on morphologically discernable relay cell types and interneurons, we took advantage of Scanning Blockface Electron Microscopy (SBEM) technology and examined serial image stacks from the binocular core of the lateral geniculate nucleus. First, using unbiased data collection and statistical modeling approaches, we identified the criteria for volume-based sorting of geniculate boutons into their putative origins. Retinal terminals, initially identified by their unique mitochondrial morphology, displayed distinct subpopulations that can be further sorted by their volume distributions. Terminals deemed non-retinal based on the morphological criteria consisted of five distinct subpopulations, including small-sized putative corticothalamic and cholinergic boutons, two medium-sized, putative GABAergic inputs, and a large-sized bouton type that contains dark mitochondria. These criteria were then applied to a dataset of terminals that synapse on reconstructed segments of relay cells and a dataset of interneuron dendrites. Using a network analysis approach, we found an almost complete segregation of retinal and cortical terminals on putative X-type cell dendrite segments characterized by grape-like appendages and triads. On these cells, interneuron appendages intermingle with retinal and other medium size terminals to form triads within glomeruli. In contrast, a second, presumed Y-type cell displayed dendrodendritic puncta adherentia and received all terminal types without a selectivity for synapse location; these were not engaged in triads. The contribution of retinal and cortical synapses received by X-, Y- and interneuron dendrites differed such that over 60% of inputs to interneuron dendrites were from the retina, as opposed to 20% and 7% to X- and Y-type cells, respectively.  The results underlie differences in network properties of synaptic inputs from distinct origins on geniculate cell types.

Two electron microscope image stacks that are made available here are generated using Scanning Blockface Electron Microscopy approach. The Reconstruct software (https://synapseweb.clm.utexas.edu/software-0) was used for partial reconstructions of geniculate dendrite segments and terminal boutons. The datasets for reconstructed neurites and associated volumetric data are available from authors.
            `,
        ],
        tags: ["dLGN", "EM", "SBEM", "thalamus", "geniculate", "mouse", "retinal", "corticothalamic", "stereology", "unbiased sampling"],
        species: "mouse",
        brainloc: "Mouse-dLGN",
        publications: [{
            name: "3D electron microscopy and volume-based bouton sorting reveal the selectivity of inputs onto geniculate relay cell and interneuron dendrite segments",
            url: "https://www.frontiersin.org/articles/10.3389/fnana.2023.1150747/full",
            authors: [
                "Erin E. Maher",
                "Alex C. Briegel",
                "Shahrozia Imtiaz",
                "Michael A. Fox",
                "Hudson Golino",
                "Alev Erisir",
            ],
            citationName: "Maher & Briegel et al 2023"
        }],
        neuroglancer: {
            name: "Visualize in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B2.5e-8%2C%22m%22%5D%2C%22y%22:%5B2.5e-8%2C%22m%22%5D%2C%22z%22:%5B7.5e-8%2C%22m%22%5D%7D%2C%22position%22:%5B690.30029296875%2C887.9149780273438%2C128.5%5D%2C%22crossSectionScale%22:2.1181902904867327%2C%22crossSectionDepth%22:-4.4043165450599915%2C%22projectionScale%22:1638.4%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22boss://https://api.bossdb.io/MaherBriegel2023/Lgn200/sbem%22%2C%22tab%22:%22source%22%2C%22name%22:%22Lgn200%22%2C%22archived%22:true%7D%2C%7B%22type%22:%22new%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/sbem%22%2C%22tab%22:%22source%22%2C%22name%22:%22sbem%22%2C%22archived%22:true%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/sbem%22%2C%22tab%22:%22source%22%2C%22name%22:%22sbem1%22%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/traces_export%22%2C%22transform%22:%7B%22matrix%22:%5B%5B8%2C0%2C0%2C0%2C-875%5D%2C%5B0%2C8%2C0%2C0%2C0%5D%2C%5B0%2C0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B2.5e-8%2C%22m%22%5D%2C%22y%22:%5B2.5e-8%2C%22m%22%5D%2C%22z%22:%5B7.5e-8%2C%22m%22%5D%2C%22c%5E%22:%5B1%2C%22%22%5D%7D%7D%2C%22subsources%22:%7B%22default%22:true%2C%22bounds%22:true%7D%2C%22enableDefaultSubsources%22:false%7D%2C%22tab%22:%22source%22%2C%22opacity%22:0.92%2C%22shader%22:%22#uicontrol%20invlerp%20red%28channel=0%29%5Cn#uicontrol%20invlerp%20green%28channel=1%29%5Cn#uicontrol%20invlerp%20blue%28channel=2%29%5Cn#uicontrol%20invlerp%20alpha%28channel=3%29%5Cnvoid%20main%28%29%20%7B%5Cn%20%20emitRGBA%28vec4%28red%28%29%2C%20green%28%29%2C%20blue%28%29%2C%20alpha%28%29%29%29%3B%5Cn%7D%22%2C%22channelDimensions%22:%7B%22c%5E%22:%5B1%2C%22%22%5D%7D%2C%22name%22:%22traces_export%22%2C%22archived%22:true%7D%2C%7B%22type%22:%22new%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/synapses%22%2C%22tab%22:%22source%22%2C%22name%22:%22synapses%22%7D%2C%7B%22type%22:%22new%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/vessels%22%2C%22tab%22:%22source%22%2C%22name%22:%22vessels%22%7D%2C%7B%22type%22:%22new%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/cells%22%2C%22tab%22:%22source%22%2C%22name%22:%22cells%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/terminals%22%2C%22tab%22:%22source%22%2C%22name%22:%22terminals%22%7D%5D%2C%22showAxisLines%22:false%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22terminals%22%7D%2C%22layout%22:%22xy%22%7D"
        },
        links: [{
            name: "Visualize Lgn200 on Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B2.5e-8%2C%22m%22%5D%2C%22y%22:%5B2.5e-8%2C%22m%22%5D%2C%22z%22:%5B7.5e-8%2C%22m%22%5D%7D%2C%22position%22:%5B690.30029296875%2C887.9149780273438%2C128.5%5D%2C%22crossSectionScale%22:2.1181902904867327%2C%22crossSectionDepth%22:-4.4043165450599915%2C%22projectionScale%22:1638.4%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22boss://https://api.bossdb.io/MaherBriegel2023/Lgn200/sbem%22%2C%22tab%22:%22source%22%2C%22name%22:%22Lgn200%22%2C%22archived%22:true%7D%2C%7B%22type%22:%22new%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/sbem%22%2C%22tab%22:%22source%22%2C%22name%22:%22sbem%22%2C%22archived%22:true%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/sbem%22%2C%22tab%22:%22source%22%2C%22name%22:%22sbem1%22%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/traces_export%22%2C%22transform%22:%7B%22matrix%22:%5B%5B8%2C0%2C0%2C0%2C-875%5D%2C%5B0%2C8%2C0%2C0%2C0%5D%2C%5B0%2C0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B2.5e-8%2C%22m%22%5D%2C%22y%22:%5B2.5e-8%2C%22m%22%5D%2C%22z%22:%5B7.5e-8%2C%22m%22%5D%2C%22c%5E%22:%5B1%2C%22%22%5D%7D%7D%2C%22subsources%22:%7B%22default%22:true%2C%22bounds%22:true%7D%2C%22enableDefaultSubsources%22:false%7D%2C%22tab%22:%22source%22%2C%22opacity%22:0.92%2C%22shader%22:%22#uicontrol%20invlerp%20red%28channel=0%29%5Cn#uicontrol%20invlerp%20green%28channel=1%29%5Cn#uicontrol%20invlerp%20blue%28channel=2%29%5Cn#uicontrol%20invlerp%20alpha%28channel=3%29%5Cnvoid%20main%28%29%20%7B%5Cn%20%20emitRGBA%28vec4%28red%28%29%2C%20green%28%29%2C%20blue%28%29%2C%20alpha%28%29%29%29%3B%5Cn%7D%22%2C%22channelDimensions%22:%7B%22c%5E%22:%5B1%2C%22%22%5D%7D%2C%22name%22:%22traces_export%22%2C%22archived%22:true%7D%2C%7B%22type%22:%22new%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/synapses%22%2C%22tab%22:%22source%22%2C%22name%22:%22synapses%22%7D%2C%7B%22type%22:%22new%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/vessels%22%2C%22tab%22:%22source%22%2C%22name%22:%22vessels%22%7D%2C%7B%22type%22:%22new%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/cells%22%2C%22tab%22:%22source%22%2C%22name%22:%22cells%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/MaherBriegel2023/Lgn200/terminals%22%2C%22tab%22:%22source%22%2C%22name%22:%22terminals%22%7D%5D%2C%22showAxisLines%22:false%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22terminals%22%7D%2C%22layout%22:%22xy%22%7D"
        }, {
            name: "Visualize Lgn300 on Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B5e-9%2C%22m%22%5D%2C%22y%22:%5B5e-9%2C%22m%22%5D%2C%22z%22:%5B7.5e-8%2C%22m%22%5D%7D%2C%22position%22:%5B4057.003662109375%2C3683.14599609375%2C101.5%5D%2C%22crossSectionScale%22:15.87017468429724%2C%22projectionScale%22:8192%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://cvdb-bossdb-boss/MaherBriegel2023/Lgn300/sbem%22%2C%22tab%22:%22source%22%2C%22name%22:%22sbem%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22sbem%22%7D%2C%22layout%22:%224panel%22%7D"
        }, {
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/MaherBriegel2023"
        }, {
            name: 'Website or other Link',
            url: 'https://bossdb.org/project/MaherBriegel2023'
        }]
    },

    "nguyen_thomas2022": {
        name: "Nguyen & Thomas, et al 2022",
        id: "nguyen_thomas2022",
        public: true,
        date: Date.parse("September 26, 2022"),
        hero: require("@/assets/projects/nguyen_thomas2022_hero.jpg"),
        media: require("@/assets/projects/nguyen_thomas2022_media.jpg"),
        locations: [{
            name: "cb2",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "nguyen_thomas2022/cb2/em",
            xs: [123826, 123826 + 1024],
            ys: [111362, 111362 + 1024],
            zs: [600, 600 + 6],
            res: 0
        }],
        blurb: "A large-scale transmission electron microscopy dataset of an adult mouse cerebellum",
        description: ["The cerebellum is thought to detect and correct errors between intended and executed commands and is critical for social behaviors, cognition and emotion. Computations for motor control must be performed quickly to correct errors in real time and should be sensitive to small differences between patterns for fine error correction while being resilient to noise. Influential theories of cerebellar information processing have largely assumed random network connectivity, which increases the encoding capacity of the network's first layer. However, maximizing encoding capacity reduces resiliency to noise. To understand how neuronal circuits address this fundamental tradeoff, we mapped the feedforward connectivity in the mouse cerebellar cortex using automated large-scale transmission electron microscopy (EM) and convolutional neural network-based image segmentation. We found that both the input and output layers of the circuit exhibit redundant and selective connectivity motifs, which contrast with prevailing models. Numerical simulations suggest these redundant, non-random connectivity motifs increase discriminability of similar input patterns at a minimal cost to the network's overall encoding capacity. This work reveals how neuronal network structure can balance encoding capacity and redundancy, unveiling principles of biological network architecture with implications for artificial neural network design."],
        tags: ["BRAIN Initiative", "cerebellum", "mouse", "ssTEM", "TEM", "EM", "GridTape", "connectomics", "segmentation", "meshes", "neuroscience", "neuroanatomy", "Purkinje cells", "granule cells", "mossy fibers"],
        species: "mouse",
        brainloc: "Mouse-NguyenThomas2022",
        publications: [{
            name: "Structured cerebellar connectivity supports resilient pattern separation",
            url: "https://rdcu.be/c0hLW",
            authors: ["Tri M. Nguyen", "Logan A. Thomas", "Jeff L. Rhoades", "Ilaria Ricchi", "Xintong Cindy Yuan", "Arlo Sheridan", "David G. C. Hildebrand", "Jan Funke", "Wade G. Regehr", "Wei-Chung Allen Lee"],
            citationName: "Nguyen & Thomas, et al 2022"
        }],
        neuroglancer: {
            name: "Visualize in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!https://bossdb-neuvue-datalake.s3.amazonaws.com/public/states/54db2ef3-b456-4c28-8f62-330c787efbcf.json"
        },
        segmentation: [{
            sourceLocation: 0,
            name: "seg",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "nguyen_thomas2022/cb2_seg/seg",
            res: 0
        }],
        links: [{
            name: "Visualize cb2 on Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!https://bossdb-neuvue-datalake.s3.amazonaws.com/public/states/54db2ef3-b456-4c28-8f62-330c787efbcf.json"
        }, {
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/nguyen_thomas2022"
        }, {
            name: 'Lee lab website',
            url: 'https://www.lee.hms.harvard.edu/'
        }],
        mesh: [{}]
    },
    "microns-basil": {
        name: "IARPA MICrONS Basil",
        id: "microns-basil",
        public: true,
        date: Date.parse("Aug 22, 2022"),
        media: require("@/assets/projects/microns-basil-2022.jpg"),
        heroPosition: "center center",
        hero: require("@/assets/projects/microns-basil-2022.jpg"),
        species: "mouse",
        brainloc: "Mouse-VisualCortex",
        blurb: "High-resolution electron microscopy, segmentation, and morphological reconstruction of cortical circuits within the visual cortex of mouse.",
        description: [
            `
The [Machine Intelligence from Cortical Networks (MICrONS)](https://www.iarpa.gov/index.php/research-programs/microns) program seeks to revolutionize machine learning by reverse-engineering the algorithms of the brain.It is an ambitious program to map the function and connectivity of cortical circuits, using high throughput imaging technologies, with the goal of providing insights into the computational principles that underlie cortical function in order to advance the next generation of machine learning algorithms.

# Dataset

The visual cortex is a critical brain region that has been extensively studied in the context of visual information processing and has provided important insights into machine learning algorithms10. The previous connectome dataset that we released in a previous study provided a detailed map of over 200,000 neuron cells with densely reconstructed meshes and skeletons and the detection of 524 million synapses6. In this study, we have produced another valuable connectomic dataset covering all cortical layers of the mouse visual cortex with dense neuron reconstruction and synapse detection.

The dataset provides a comprehensive map of the neural circuitry in the visual cortex and can help researchers better understand the anatomy and visual information processing in this brain region. Moreover, neuroscience discoveries require multiple samples for validation and statistical analysis. This new dataset could serve as a valuable reference to compare with other related datasets, such as the previously released connectome dataset, and help researchers identify commonalities and differences in the neural connectivity of the visual cortex across multiple samples6,8. Overall, this new dataset can serve as an essential resource for the neuroscience community and can facilitate further research on the neural circuitry of the mouse visual cortex.

# [MICrONS Team](https://microns-explorer.org/team)

## Basil Manifest
<div class="table-container">
    <table class="table is-striped is-hoverable">
    <thead>
    <tr>
        <th>Name</th>
        <th>AWS Cloudpath</th>
        <th>Type</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Fine-aligned Image</td>
        <td>s3://bossdb-open-data/iarpa_microns/basil/em</td>
        <td>Image (Sharded Precompute)</td>
    </tr>
    <tr>
        <td>Automated Segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/basil/seg</td>
        <td>Compressed Segmentation (Precompute)</td>
    </tr>
    <tr>
        <td>PSD Segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/basil/clefts</td>
        <td>Compressed Segmentation (Precompute)</td>
    </tr>
    <tr>
        <td>Nucleus Segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/basil/nuclei</td>
        <td>Compressed Segmentation (Precompute)</td>
    </tr>
    <tr>
        <td>Synapse Graph</td>
        <td>s3://bossdb-open-data/iarpa_microns/basil/synapse_graph</td>
        <td>CSV</td>
    </tr>
    <tr>
        <td>MicroCT</td>
        <td>s3://bossdb-open-data/iarpa_microns/basil/microCT</td>
        <td>ZIP</td>
    </tr>
    </tbody>
    </table>
</div>

These data were collected and generated by a consortium of laboratories led by groups at the Allen Institute for Brain Science, Princeton University, and Baylor College of Medicine, with support from a broad array of teams.

### Allen Institute

* **Scientific Management:** Clay Reid, Nuno Maçarico Da Costa
* **Co-registration:** Nuno Maçarico da Costa, Adam Bleckert, Marc Takeno
* **Tissue Preparation:** Joann Buchanan, Marc Takeno, Nuno Maçarico da Costa
* **Sectioning:** Agnes Bodor, Adam Bleckert
* **EM Stitching and Rough Alignment:** Gayathri Mahalingam, Russel Torres, Yang Li
* **TEM Design and Maintenance:** Derrick Brittain, Clay Reid
* **TEM Operation:** Derrick Brittain, Wenjing Yin, Adam Bleckert, Marc Takeno, Daniel Bumbarger, Nuno Maçarico Da Costa
* **Connectome Versioning System:** Forrest Collman, Casey Schneider-Mizell
* **Analysis Infrastructure:** Forrest Collman, Casey Schneider-Mizell, Derrick Brittain
* **Proofreading:** Agnes Bodor, Nuno Maçarico da Costa, Casey Schneider-Mizell, Forrest Collman
* **Project Management:** Lynne Becker, Shelby Suckow

### Princeton University

* **Scientific Management:** Sebastian Seung
* **EM Stitching and Rough Alignment:** Thomas Macrina, Dodam Ih
* **EM Fine Alignment:** Thomas Macrina, Will Wong
* **Neuron segmentation:** Kisuk Lee, Jingpeng Wu
* **Agglomeration:**  Ran Lu
* **Synapse Detection:** Nicholas Turner, Jingpeng Wu
* **Neuroglancer Frontend:**  Nico Kemnitz, Manuel Castro
* **Proofreading Backend:** Sven Dorkenwald, Nico Kemnitz, Chris S. Jordan
* **Cloud Data Interface:** William Silversmith, Ignacio Tartavull
* **Connectome Versioning System:** Sven Dorkenwald
* **Analysis Infrastructure:** Sven Dorkenwald
* **Proofreading:** Szi-Chieh Yu, Alyssa Wilson, Sven Dorkenwald

### Baylor College of Medicine

* **Scientific Management:** Andreas S. Tolias, Jacob Reimer
* **Functional Imaging:** Emmanouil Froudarakis, Jacob Reimer, Andreas Tolias

### Johns Hopkins University Applied Physics Laboratory

* **MICrONS Test and Evaluation — Program Manager:** Joan Hoffmann
* **MICrONS Test and Evaluation — Project Manager:** Brock Wester
* **MICrONS Test and Evaluation — Technical Lead:** William Gray-Roncal
* **MICrONS Test and Evaluation — Evaluation Task Lead:** Caitlyn Bishop
* **MICrONS Test and Evaluation — Petascale Storage Task Lead:** Sandy Hider

### Intelligence Advanced Research Projects Activity (IARPA)

* **MICrONS Program Management:** David A. Markowitz, Jacob Vogelstein

## [Acknowledgements](https://microns-explorer.org/acknowledgments)

#### Allen Institute
> We would like to thank Hongkui Zeng, Ed Lein, Christof Koch, and Allan Jones for their support and leadership. We thank John Philips, Sill Coulter, and the Program Management team at the Allen Institute for Brain Science for their guidance for project strategy and operations.  We thank the Manufacturing and Process Engineering team at the Allen Institute for Brain Science for their help in implementing the EM imaging and sectioning pipeline. We thank Brian Youngstrom, Stuart Kendrick, Nathaniel Middleton, Scott Harrison, and the Allen Institute IT team for support with infrastructure, data management and data transfer. We thank the Facilities, Finance, and Legal teams at the Allen Institute for Brain Science for their support on the MICrONS contract.

#### Princeton University
> We would like to thank Garrett McGrath for computer system administration, and Larry and Janet Jackel for project administration.

#### Connectomics at Google

> We would like to thank the Connectomics team at Google, especially Jeremy Maitin-Shepard, for the development of neuroglancer, a critical tool for visualizing and sharing the data.
>
> We would also like to thank Viren Jain, Peter Li, and Google AI for supporting the development of the computational infrastructure behind this effort through helpful discussions and computing support.

## [Funding](https://microns-explorer.org/funding)

* This data collection was coordinated and funded by the Intelligence Advanced Research Projects Activity (IARPA) via Department of Interior / Interior Business Center (DoI / IBC) under contracts D16PC00003 (Baylor), D16PC00004 (Allen), and D16PC0005 (Princeton). The U.S.Government is authorized to reproduce and distribute reprints for Governmental purposes notwithstanding any copyright annotation thereon.Disclaimer: The views and conclusions contained herein are those of the authors and should not be interpreted as necessarily representing the official policies or endorsements, either expressed or implied, of IARPA, DoI / IBC, or the U.S. Government.
* The Allen Institute has provided internal support to fund staff and facilities to make this project and data release possible. We thank the Allen Institute founder, Paul G Allen, for his vision, encouragement, and support.
* The Princeton team is grateful for support from the Mathers and Samsung Foundations, ARO W911NF-12-1-0594, and assistance from Google, Amazon, and Intel.
* Research was also supported by the National Institute of Mental Health and National Institute of Neurological Disorders And Stroke under Award Numbers NIH/NINDS U19 NS104648, NIH/NEI R01 EY027036, NIH/NIMH U01 MH114824, NIH/NINDS R01NS104926, NIH/NIMH RF1MH117815 and U19MH114830. The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health.
* Research has also been funded by the NSF NeuroNex program through grant DBI-1707400.

`,

        ],
        tags: ["connectomics", "mouse", "segmentation", "TEM", "EM", "meshes", "visual cortex", "V1", "layer 2/3", "neuroscience", "neuroanatomy", "microns"],
        publications: [{
            name: "IARPA MICrONS Program Publications",
            url: "https://www.microns-explorer.org/publications",
            authors: [
                "(numerous publications & authors)"
            ]
        }],

        neuroglancer: {
            name: "Visualize in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B120398.46875%2C145769.34375%2C507.5%5D%2C%22crossSectionScale%22:1.5372575235482844%2C%22projectionScale%22:524288%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/basil/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/basil/seg%22%2C%22tab%22:%22source%22%2C%22name%22:%22seg%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22seg%22%7D%2C%22layout%22:%22xy%22%7D"
        },

        links: [{
            name: "MICrONS Explorer Website",
            url: "https://microns-explorer.org/"
        }, {
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/microns/basil"
        }],
        locations: [{
            name: "Basil EM",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "microns/basil/em",
            xs: [119296, 119296 + 1024],
            ys: [143872, 143872 + 1024],
            zs: [499, 499 + 6],
            res: 0
        }],
        segmentation: [{
            sourceLocation: 0,
            name: "Basil Segmentation",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "microns/basil_8x8x40/seg",
            res: 0
        }],
        connectomes: [{
            name: "Basil Synapse Graph (2GB)",
            type: "CSV",
            url: "https://bossdb-open-data.s3.amazonaws.com/iarpa_microns/basil/synapse_graph/cleaned_final.csv.gz"
        }],
        mesh: [{}]
    },
    "microns-interneuron": {
        name: "IARPA MICrONS Interneuron",
        id: "microns-interneuron",
        public: true,
        date: Date.parse("Aug 22, 2022"),
        media: require("@/assets/projects/microns-interneuron-2022.jpg"),
        heroPosition: "center center",
        hero: require("@/assets/projects/microns-interneuron-2022.jpg"),
        species: "mouse",
        brainloc: "Mouse-VisualCortex",
        blurb: "High-resolution electron microscopy, segmentation, and morphological reconstruction of cortical circuits within the visual cortex of mouse.",
        description: [
            `
The [Machine Intelligence from Cortical Networks (MICrONS)](https://www.iarpa.gov/index.php/research-programs/microns) program seeks to revolutionize machine learning by reverse-engineering the algorithms of the brain.It is an ambitious program to map the function and connectivity of cortical circuits, using high throughput imaging technologies, with the goal of providing insights into the computational principles that underlie cortical function in order to advance the next generation of machine learning algorithms.

# Dataset

This dataset consists of Electron Microscopy (EM) image data, segmentation data, and corresponding meshes of the cortical circuitry from the mouse visual cortex.  This dataset was acquired and analyzed in the initial phase of the MICrONS project.

## Interneuron Manifest
<div class="table-container">
    <table class="table is-striped is-hoverable">
    <thead>
    <tr>
        <th>Name</th>
        <th>AWS Cloudpath</th>
        <th>Type</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Fine-aligned Image</td>
        <td>s3://bossdb-open-data/iarpa_microns/interneuron/em</td>
        <td>Image (Sharded Precompute)</td>
    </tr>
    <tr>
        <td>Automated Segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/interneuron/seg-sharded</td>
        <td>Compressed Segmentation (Sharded Precompute)</td>
    </tr>
    <tr>
        <td>PSD Segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/interneuron/clefts</td>
        <td>Compressed Segmentation (Precompute)</td>
    </tr>
    <tr>
        <td>Synapse Graph</td>
        <td>s3://bossdb-open-data/iarpa_microns/interneuron/synapse_graph</td>
        <td>CSV</td>
    </tr>
    <tr>
        <td>MicroCT</td>
        <td>s3://bossdb-open-data/iarpa_microns/interneuron/microCT</td>
        <td>ZIP</td>
    </tr>
    <tr>
        <td>Functional Data</td>
        <td>s3://bossdb-open-data/iarpa_microns/interneuron/functional_data</td>
        <td>Various Files (Containers, SQL Dump, Arrays)</td>
    </tr>
    </tbody>
    </table>
</div>

# [MICrONS Team](https://microns-explorer.org/team)

These data were collected and generated by a consortium of laboratories led by groups at the Allen Institute for Brain Science, Princeton University, and Baylor College of Medicine, with support from a broad array of teams.

### Allen Institute

* **Scientific Management:** Clay Reid, Nuno Maçarico Da Costa
* **Co-registration:** Nuno Maçarico da Costa, Adam Bleckert, Marc Takeno
* **Tissue Preparation:** Joann Buchanan, Marc Takeno, Nuno Maçarico da Costa
* **Sectioning:** Agnes Bodor, Adam Bleckert
* **EM Stitching and Rough Alignment:** Gayathri Mahalingam, Russel Torres, Yang Li
* **TEM Design and Maintenance:** Derrick Brittain, Clay Reid
* **TEM Operation:** Derrick Brittain, Wenjing Yin, Adam Bleckert, Marc Takeno, Daniel Bumbarger, Nuno Maçarico Da Costa
* **Connectome Versioning System:** Forrest Collman, Casey Schneider-Mizell
* **Analysis Infrastructure:** Forrest Collman, Casey Schneider-Mizell, Derrick Brittain
* **Proofreading:** Agnes Bodor, Nuno Maçarico da Costa, Casey Schneider-Mizell, Forrest Collman
* **Project Management:** Lynne Becker, Shelby Suckow

### Princeton University

* **Scientific Management:** Sebastian Seung
* **EM Stitching and Rough Alignment:** Thomas Macrina, Dodam Ih
* **EM Fine Alignment:** Thomas Macrina, Will Wong
* **Neuron segmentation:** Kisuk Lee, Jingpeng Wu
* **Agglomeration:**  Ran Lu
* **Synapse Detection:** Nicholas Turner, Jingpeng Wu
* **Neuroglancer Frontend:**  Nico Kemnitz, Manuel Castro
* **Proofreading Backend:** Sven Dorkenwald, Nico Kemnitz, Chris S. Jordan
* **Cloud Data Interface:** William Silversmith, Ignacio Tartavull
* **Connectome Versioning System:** Sven Dorkenwald
* **Analysis Infrastructure:** Sven Dorkenwald
* **Proofreading:** Szi-Chieh Yu, Alyssa Wilson, Sven Dorkenwald

### Baylor College of Medicine

* **Functional Imaging Experimental Design:** Andreas Tolias, Xaq Pitkow, Jacob Reimer, Paul Fahey
* **Mouse Husbandry / Transgenics:** Paul Fahey, Jacob Reimer, Zheng H. Tan
* **Animal Surgery:** Taliah Muhammad
* **Microscope and Optics:** Emmanouil Froudarakis, Jacob Reimer, Paul Fahey
* **Calcium Imaging and Behavioral Data Collection:** Taliah Muhammad, Paul Fahey, Jacob Reimer, Saumil Patel
* **Calcium Imaging Processing:** Eric Cobos, Paul Fahey, Jacob Reimer, Dimitri Yatsenko
* **Behavioral Processing:** Eric Cobos, Paul Fahey, Jacob Reimer, Taliah Muhammad, Fabian Sinz, Donnie Kim
* **Functional Data Management:** Christos Papadopoulos, Paul Fahey
* **Parametric Stimulus:** Dimitri Yatsenko, Xaq Pitkow, Rajkumar Raju
* **Natural Stimulus:** Emmanouil Froudarakis, Jacob Reimer, Fabian Sinz
* **Rendered Stimulus:** Xaq Pitkow, Edgar Walker, Mitja Prelovsek (contractor)

### Johns Hopkins University Applied Physics Laboratory

* **MICrONS Test and Evaluation — Program Manager:** Joan Hoffmann
* **MICrONS Test and Evaluation — Project Manager:** Brock Wester
* **MICrONS Test and Evaluation — Technical Lead:** William Gray-Roncal
* **MICrONS Test and Evaluation — Evaluation Task Lead:** Caitlyn Bishop
* **MICrONS Test and Evaluation — Petascale Storage Task Lead:** Sandy Hider

### Intelligence Advanced Research Projects Activity (IARPA)

* **MICrONS Program Management:** David A. Markowitz, Jacob Vogelstein

## [Acknowledgements](https://microns-explorer.org/acknowledgments)

#### Allen Institute
> We would like to thank Hongkui Zeng, Ed Lein, Christof Koch, and Allan Jones for their support and leadership. We thank John Philips, Sill Coulter, and the Program Management team at the Allen Institute for Brain Science for their guidance for project strategy and operations.  We thank the Manufacturing and Process Engineering team at the Allen Institute for Brain Science for their help in implementing the EM imaging and sectioning pipeline. We thank Brian Youngstrom, Stuart Kendrick, Nathaniel Middleton, Scott Harrison, and the Allen Institute IT team for support with infrastructure, data management and data transfer. We thank the Facilities, Finance, and Legal teams at the Allen Institute for Brain Science for their support on the MICrONS contract.

#### Princeton University
> We would like to thank Garrett McGrath for computer system administration, and Larry and Janet Jackel for project administration.

#### Connectomics at Google

> We would like to thank the Connectomics team at Google, especially Jeremy Maitin-Shepard, for the development of neuroglancer, a critical tool for visualizing and sharing the data.
>
> We would also like to thank Viren Jain, Peter Li, and Google AI for supporting the development of the computational infrastructure behind this effort through helpful discussions and computing support.

## [Funding](https://microns-explorer.org/funding)

* This data collection was coordinated and funded by the Intelligence Advanced Research Projects Activity (IARPA) via Department of Interior / Interior Business Center (DoI / IBC) under contracts D16PC00003 (Baylor), D16PC00004 (Allen), and D16PC0005 (Princeton). The U.S.Government is authorized to reproduce and distribute reprints for Governmental purposes notwithstanding any copyright annotation thereon.Disclaimer: The views and conclusions contained herein are those of the authors and should not be interpreted as necessarily representing the official policies or endorsements, either expressed or implied, of IARPA, DoI / IBC, or the U.S. Government.
* The Allen Institute has provided internal support to fund staff and facilities to make this project and data release possible. We thank the Allen Institute founder, Paul G Allen, for his vision, encouragement, and support.
* The Princeton team is grateful for support from the Mathers and Samsung Foundations, ARO W911NF-12-1-0594, and assistance from Google, Amazon, and Intel.
* Research was also supported by the National Institute of Mental Health and National Institute of Neurological Disorders And Stroke under Award Numbers NIH/NINDS U19 NS104648, NIH/NEI R01 EY027036, NIH/NIMH U01 MH114824, NIH/NINDS R01NS104926, NIH/NIMH RF1MH117815 and U19MH114830. The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health.
* Research has also been funded by the NSF NeuroNex program through grant DBI-1707400.

`,

        ],
        tags: ["connectomics", "mouse", "segmentation", "TEM", "EM", "meshes", "visual cortex", "V1", "layer 2/3", "neuroscience", "neuroanatomy", "microns"],
        publications: [{
            name: "IARPA MICrONS Program Publications",
            url: "https://www.microns-explorer.org/publications",
            authors: [
                "(numerous publications & authors)"
            ]
        }],

        neuroglancer: {
            name: "Visualize in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B96826.234375%2C147502.1875%2C8673.5%5D%2C%22crossSectionScale%22:409.5258389166326%2C%22projectionScale%22:262144%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/interneuron/em%22%2C%22tab%22:%22rendering%22%2C%22shaderControls%22:%7B%22normalized%22:%7B%22range%22:%5B111%2C152%5D%7D%7D%2C%22name%22:%22em%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/interneuron/seg-sharded%22%2C%22tab%22:%22rendering%22%2C%22selectedAlpha%22:0.51%2C%22notSelectedAlpha%22:0.03%2C%22objectAlpha%22:0.59%2C%22name%22:%22seg-sharded%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/interneuron/clefts%22%2C%22tab%22:%22source%22%2C%22name%22:%22clefts%22%2C%22visible%22:false%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22clefts%22%7D%2C%22layout%22:%224panel%22%7D"
        },

        links: [{
            name: "MICrONS Explorer Website",
            url: "https://microns-explorer.org/"
        }, {
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/microns/interneuron_8x8x40"
        }, {
            name: "Interneuron Functional Data Release Documentation (V2)",
            url: "https://bossdb-open-data.s3.amazonaws.com/iarpa_microns/interneuron/functional_data/Interneuron_Functional_Data_Release_Documentation_v2.pdf"
        }],
        locations: [{
            name: "Interneuron EM",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "microns/interneuron_8x8x40/em",
            xs: [65536, 65536 + 1024],
            ys: [65536, 65536 + 1024],
            zs: [8673, 8673 + 6],
            res: 1
        }],
        segmentation: [{
            sourceLocation: 0,
            name: "Interneuron Segmentation",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "microns/interneuron/seg",
            res: 0
        }],
        connectomes: [],
        mesh: [{}]
    },

    "randlett2015": {
        name: "Randlett et al 2015",
        id: "randlett2015",
        public: true,
        date: Date.parse("September 14 2015"),
        hero: require("@/assets/projects/randlett2015.jpg"),
        media: require("@/assets/projects/randlett2015.jpg"),
        locations: [
            {
                protocol: "https",
                server: "api.bossdb.io",
                uri: "ZBrain/ZBrain/Anti_5HT_MeanOf40",
                xs: [447, 447 + 1024],
                ys: [0, 621],
                zs: [64, 64 + 6],
                res: 0
            }
        ],
        blurb: "Whole-brain activity mapping onto a zebrafish brain atlas",
        description: [`*This dataset contains 138 channels and meshes. View them all [here](https://api.bossdb.io/v1/mgmt/resources/ZBrain/ZBrain).*
In order to localize the neural circuits involved in generating behaviors, it is necessary to assign activity onto anatomical maps of the nervous system. Using brain registration across hundreds of larval zebrafish, we have built an expandable open-source atlas containing molecular labels and definitions of anatomical regions, the Z-Brain. Using this platform and immunohistochemical detection of phosphorylated extracellular signal–regulated kinase (ERK) as a readout of neural activity, we have developed a system to create and contextualize whole-brain maps of stimulus- and behavior-dependent neural activity. This mitogen-activated protein kinase (MAP)-mapping assay is technically simple, and data analysis is completely automated. Because MAP-mapping is performed on freely swimming fish, it is applicable to studies of nearly any stimulus or behavior. Here we demonstrate our high-throughput approach using pharmacological, visual and noxious stimuli, as well as hunting and feeding. The resultant maps outline hundreds of areas associated with behaviors.`],
        tags: ["NIH", "zebrafish", "atlas", "LM", "Light Microscopy", "ZBrain", "neurodata"],
        species: "zebrafish",
        brainloc: "Zebrafish",
        publications: [{
            name: "Whole-brain activity mapping onto a zebrafish brain atlas",
            url: "https://doi.org/10.1038/nmeth.3581",
            authors: ["Owen Randlett", "Caroline L Wee", "Eva A Naumann", "Onyeka Nnaemeka", "David Schoppik", "James E Fitzgerald", "Ruben Portugues", "Alix M B Lacoste", "Clemens Riegler", "Florian Engert", "Alexander F Schier"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/ZBrain/"
        }, {
            name: 'Visualize ALL experiments in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!https://bossdb-neuvue-datalake.s3.amazonaws.com/public/states/0545cf17-5d4c-4366-99a0-47c92daba52f.json'
        }, {
            name: 'Visualize ZBrain Atlas in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B7.98e-7%2C%22m%22%5D%2C%22y%22:%5B7.98e-7%2C%22m%22%5D%2C%22z%22:%5B0.0000020000000000000003%2C%22m%22%5D%7D%2C%22position%22:%5B572.5%2C311.5%2C74.5%5D%2C%22crossSectionScale%22:1.8682459574322223%2C%22projectionOrientation%22:%5B0.5%2C-0.5%2C0.5%2C-0.5%5D%2C%22projectionScale%22:1603.2007109877206%2C%22layers%22:%5B%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/ZBrain/atlas_owen%22%2C%22tab%22:%22source%22%2C%22objectAlpha%22:0.94%2C%22segments%22:%5B%221%22%2C%2210%22%2C%2211%22%2C%2212%22%2C%2213%22%2C%2214%22%2C%2215%22%2C%2216%22%2C%2217%22%2C%2218%22%2C%2219%22%2C%222%22%2C%2220%22%2C%2221%22%2C%2222%22%2C%2223%22%2C%2224%22%2C%2225%22%2C%2226%22%2C%2227%22%2C%2228%22%2C%2229%22%2C%223%22%2C%2230%22%2C%2231%22%2C%2232%22%2C%2233%22%2C%224%22%2C%225%22%2C%226%22%2C%227%22%2C%228%22%2C%229%22%5D%2C%22name%22:%22zbrain_atlas%22%7D%5D%2C%22showDefaultAnnotations%22:false%2C%22showSlices%22:false%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22zbrain_atlas%22%7D%2C%22layout%22:%223d%22%7D'
        }],
        mesh: [{}]
    },

    "yemini2021": {
        name: "Yemini et al 2021",
        id: "yemini2021",
        public: true,
        date: Date.parse("January 7 2021"),
        hero: require("@/assets/projects/yemini2021.png"),
        media: require("@/assets/projects/yeminimedia2021.jpg"),
        locations: [
            {
                name: "NeuroPAL Example Cutout",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "NeuroPAL_Left_Right_Views/11_YAaLR/BLUE",
                xs: [0, 284],
                ys: [0, 1011],
                zs: [20, 26],
                res: 0
            },
            {
                name: "NeuroPAL Example Cutout",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "NeuroPAL_Left_Right_Views/11_YApLR/BLUE",
            },
            {
                name: "NeuroPAL Example Cutout",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "NeuroPAL_Left_Right_Views/20_YAaLR/BLUE",
            },
            {
                name: "NeuroPAL Example Cutout",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "NeuroPAL_Left_Right_Views/20_YApLR/BLUE",
            },
            {
                name: "NeuroPAL Example Cutout",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "NeuroPAL_Left_Right_Views/62_YAaLR/BLUE",
            },
            {
                name: "NeuroPAL Example Cutout",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "NeuroPAL_Left_Right_Views/62_YApLR/BLUE",
            },
            {
                name: "NeuroPAL Example Cutout",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "NeuroPAL_Left_Right_Views/7_YAaLR/BLUE",
            },
            {
                name: "NeuroPAL Example Cutout",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "NeuroPAL_Left_Right_Views/7_YApLR/BLUE",
            },
            {
                name: "NeuroPAL Example Cutout",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "NeuroPAL_Left_Right_Views/70_YAaLR/BLUE",
            },
            {
                name: "NeuroPAL Example Cutout",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "NeuroPAL_Left_Right_Views/70_YApLR/BLUE",
            },
        ],
        blurb: "NeuroPAL C. elegans young-adult hermaphrodites with neuron-type identities annotated for their head and tail Species & ROI: C. elegans young-adult hermaphrodite heads and tails",
        description: [
            `Neuron-type identities and positions annotated within image volumes. This dataset is comprised of young-adult hermaphrodite NeuroPAL worms (C. elegans). 10 heads and 10 tails are annotated. This dataset was used to generate a young-adult hermaphrodite atlas of worm neurons positions and their variability (see Yemini E, et al, Cell 2021) .`,
            `This project is comprised of two collections, NeuroPAL Left Right Views and NeuroPAL Dorsal Ventral Views, both of which can be accessed in the Links section. Both collections are 3D volumetric images, visualized from different orientations.`,
            `3D image volumes with annotated neuronal identities are available for 10 young-adult NeuroPAL otIs669 (OH15262) hermaphrodites. Each filename (e.g., "7_YAa_ID.mat") begins with the animal's unique identifier (e.g., "7_"). Thereafter, the naming convention is as follows: YA = young adult, a = anterior or p = posterior, LR = left-right view or DV = dorsal-ventral view. The NeuroPAL Left Right Views collection is shown below`,
            `
| NeuroPAL Left Right Views ||
|-----------|----j'|

| <b>11_YAaLR | <a href="https://api.bossdb.io/v1/mgmt/resources/NeuroPAL_Left_Right_Views/11_YAaLR" >Dataset on BossDB.io</a> |
|-----------|----j'|

| <b>11_YApLR | <a href="https://api.bossdb.io/v1/mgmt/resources/NeuroPAL_Left_Right_Views/11_YApLR" >Dataset on BossDB.io</a> |
|-----------|----j'|

| <b>20_YAaLR | <a href="https://api.bossdb.io/v1/mgmt/resources/NeuroPAL_Left_Right_Views/20_YAaLR" >Dataset on BossDB.io</a> |
|-----------|----j'|

| <b>20_YApLR | <a href="https://api.bossdb.io/v1/mgmt/resources/NeuroPAL_Left_Right_Views/20_YApLR" >Dataset on BossDB.io</a> |
|-----------|----j'|

| <b>62_YAaLR | <a href="https://api.bossdb.io/v1/mgmt/resources/NeuroPAL_Left_Right_Views/62_YAaLR" >Dataset on BossDB.io</a> |
|-----------|----j'|

| <b>62_YApLR | <a href="https://api.bossdb.io/v1/mgmt/resources/NeuroPAL_Left_Right_Views/62_YApLR" >Dataset on BossDB.io</a> |
|-----------|----j'|

| <b>7_YAaLR | <a href="https://api.bossdb.io/v1/mgmt/resources/NeuroPAL_Left_Right_Views/7_YAaLR" >Dataset on BossDB.io</a> |
|-----------|----j'|

| <b>7_YApLR | <a href="https://api.bossdb.io/v1/mgmt/resources/NeuroPAL_Left_Right_Views/7_YApLR" >Dataset on BossDB.io</a> |
|-----------|----j'|

| <b>70_YAaLR | <a href="https://api.bossdb.io/v1/mgmt/resources/NeuroPAL_Left_Right_Views/70_YAaLR" >Dataset on BossDB.io</a> |
|-----------|----j'|

| <b>70_YApLR | <a href="https://api.bossdb.io/v1/mgmt/resources/NeuroPAL_Left_Right_Views/70_YApLR" >Dataset on BossDB.io</a> |
|-----------|----j'|

`

        ],
        tags: ["Caenorhabditis elegans", "nematode", "worm", "NeuroPAL", "young-adult", "hermaphrodite", "nervous system", "neurons", "cell identities", "celegans"],
        species: "celegans",
        brainloc: "",
        publications: [{
            name: "NeuroPAL: A Multicolor Atlas for Whole-Brain Neuronal Identification in C. elegans",
            url: "https://doi.org/10.1016/j.cell.2020.12.012",
            authors: ["Eviatar Yemini", "Albert Lin", "Amin Nejatbakhsh", "Erdem Varol", "Ruoxi Sun", "Gonzalo E. Mena", "Aravinthan D.T. Samuel", "Liam Paninski", "Vivek Venkatachalam", "Oliver Hobert"]
        }],
        links: [{
            name: "View at BossDB.io, Left Right Views",
            url: "https://api.bossdb.io/v1/mgmt/resources/NeuroPAL_Left_Right_Views"
        }, {
            name: "View at BossDB.io, Dorsal Ventral Views",
            url: 'https://api.bossdb.io/v1/mgmt/resources/NeuroPAL_Dorsal_Ventral_Views'
        }]
    },

    "wildenberg2021": {
        name: "Wildenberg et al, eLife, 2021",
        id: "wildenberg2021",
        public: true,
        date: Date.parse("December 20 2021"),
        hero: require("@/assets/projects/wildenberg2021.jpg"),
        media: require("@/assets/projects/wildenberg2021.jpg"),
        locations: [
            {
                name: "Wildenberg et al, eLife, 2021",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "wildenberg2021/VTA_dat12a_saline_control_Dendrites_6nm_aligned/image",
                xs: [10350 - 1024, 10350 + 1024],
                ys: [10775 - 1024, 10775 + 1024],
                zs: [80 - 5, 80 + 5],
                res: 0
            }, {
                server: "api.bossdb.io",
                protocol: "https",
                uri: "wildenberg2021/NAc_dat1_saline_control_axons_2ndmouse_15nm_bottom/image"
            }, {
                server: "api.bossdb.io",
                protocol: "https",
                uri: "wildenberg2021/NAc_dat1_saline_control_axons_2ndmouse_15nm_top/image"
            }, {
                server: "api.bossdb.io",
                protocol: "https",
                uri: "wildenberg2021/NAc_dat1_saline_control_axons_2ndmouse_7nm/image"
            }, {
                server: "api.bossdb.io",
                protocol: "https",
                uri: "wildenberg2021/NAc_dat29_cocaine_axon_2ndmouse_15nm_aligned/image"
            }, {
                server: "api.bossdb.io",
                protocol: "https",
                uri: "wildenberg2021/NAc_dat2b_saline_control_axons_1stmouse_20nm_aligned/image"
            }, {
                server: "api.bossdb.io",
                protocol: "https",
                uri: "wildenberg2021/NAc_dat2b_saline_control_axons_1stmouse_6nm_aligned/image"
            }, {
                server: "api.bossdb.io",
                protocol: "https",
                uri: "wildenberg2021/NAc_dat30_cocaine_axons_1stmouse_20nm_aligned/image"
            }, {
                server: "api.bossdb.io",
                protocol: "https",
                uri: "wildenberg2021/NAc_dat30_cocaine_axon_1stmouse_aligned_6nm/image"
            }, {
                server: "api.bossdb.io",
                protocol: "https",
                uri: "wildenberg2021/NAc_dat30_cocaine_axon_1stmouse_aligned_6nm_2ndstack/image"
            }, {
                server: "api.bossdb.io",
                protocol: "https",
                uri: "wildenberg2021/NAc_mito_apex_aligned01_6nm/image"
            }, {
                server: "api.bossdb.io",
                protocol: "https",
                uri: "wildenberg2021/NAc_mito_apex_aligned02_6nm/image"
            }, {
                server: "api.bossdb.io",
                protocol: "https",
                uri: "wildenberg2021/VTA_dat39_cocaine_Dendrites_6nm_aligned/image"
            }
        ],
        blurb: "Combined genetic labeling and connectomics of dopamine axons to reveal wiring properties and rewiring affects caused by cocaine. ",
        description: ["Dopaminergic (DA) neurons exert profound influences on behavior including addiction. However, how DA axons communicate with target neurons and how those communications change with drug exposure remains poorly understood. We leverage cell type specific labeling with large volume serial electron microscopy to detail DA connections in the Nucleus Accumbens (NAc) of the mouse (Mus musculus) before and after exposure to cocaine. We find that individual DA axons contain different varicosity types based on their vesicle contents. Spatially ordering along individual axons further suggests varicosity types are non-randomly organized. DA axon varicosities rarely make specific synapses (<2%, 6/410), but instead are more likely to form spinule-like structures (15%, 61/410) with neighboring neurons. Days after a brief exposure to cocaine, DA axons were extensively branched relative to controls, formed blind-ended “bulbs” filled with mitochondria, and were surrounded by elaborated glia. Finally, mitochondrial lengths increased by ~2.2 times relative to control only in DA axons and NAc spiny dendrites after cocaine exposure. We conclude that DA axonal transmission is unlikely to be mediated via classical synapses in the NAc and that the major locus of anatomical plasticity of DA circuits after exposure to cocaine are large scale axonal rearrangements with correlated changes in mitochondria."],
        tags: ["BRAIN Initiative", "NIH", "ATUM-SEM", "dopamine", "cocaine", "nucleus accumbens", "SEM", "connectomics", "Apex2", "EM"],
        species: "mouse",
        brainloc: "Mouse-Somatosensory",
        publications: [{
            "url": "https://doi.org/10.7554/eLife.71981",
            "name": "Partial connectomes of labeled dopaminergic circuits reveal non-synaptic communication and axonal remodeling after exposure to cocaine",
            "authors": ["Gregg Wildenberg",
                "Anastasia Sorokina",
                "Jessica Koranda",
                "Alexis Monical",
                "Chad Heer",
                "Mark Sheffield",
                "Xiaoxi Zhuang",
                "Daniel McGehee",
                "Bobby Kasthuri",]
        }],
        links: [{
            name: 'Visualize experiment VTA_dat12a_saline_control_Dendrites_6nm_aligned in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B10354.42578125%2C10777.6328125%2C81.3792495727539%5D%2C%22crossSectionScale%22:19.19311645490919%2C%22projectionScale%22:32768%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/VTA_dat12a_saline_control_Dendrites_6nm_aligned/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22image%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22image%22%7D%2C%22layout%22:%22xy%22%7D'
        }, {
            name: 'Visualize experiment VTA_dat12a_saline_control_Dendrites_6nm_aligned in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B10354.42578125%2C10777.6328125%2C81.3792495727539%5D%2C%22crossSectionScale%22:19.19311645490919%2C%22projectionScale%22:32768%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/VTA_dat12a_saline_control_Dendrites_6nm_aligned/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22image%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22image%22%7D%2C%22layout%22:%22xy%22%7D'
        }, {
            name: 'Visualize experiment NAc_dat1_saline_control_axons_2ndmouse_15nm_bottom in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B13902.5%2C13533.5%2C86.5%5D%2C%22crossSectionScale%22:0.9999999999999999%2C%22projectionOrientation%22:%5B-0.08480112999677658%2C0.09387152642011642%2C0.03665344789624214%2C0.9912887811660767%5D%2C%22projectionScale%22:32767.999999999996%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/NAc_dat1_saline_control_axons_2ndmouse_15nm_bottom/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22NAc_dat1_saline_control_axons_2ndmouse_15nm_bottom%22%7D%5D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment NAc_dat1_saline_control_axons_2ndmouse_15nm_top in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B17592.5%2C9430.5%2C164.5%5D%2C%22crossSectionScale%22:0.9999999999999999%2C%22projectionScale%22:65535.99999999999%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/NAc_dat1_saline_control_axons_2ndmouse_15nm_top/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22NAc_dat1_saline_control_axons_2ndmouse_15nm_top%22%7D%5D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment NAc_dat1_saline_control_axons_2ndmouse_7nm in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B18475.5%2C9647.5%2C164.5%5D%2C%22crossSectionScale%22:0.9999999999999999%2C%22projectionScale%22:65535.99999999999%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/NAc_dat1_saline_control_axons_2ndmouse_7nm/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22NAc_dat1_saline_control_axons_2ndmouse_7nm%22%7D%5D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment NAc_dat29_cocaine_axon_2ndmouse_15nm_aligned in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B5888.5%2C6128.15771484375%2C105.5%5D%2C%22crossSectionScale%22:15.999999999999998%2C%22projectionScale%22:65535.99999999999%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/NAc_dat29_cocaine_axon_2ndmouse_15nm_aligned/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22NAc_dat29_cocaine_axon_2ndmouse_15nm_aligned%22%7D%5D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment NAc_dat2b_saline_control_axons_1stmouse_20nm_aligned in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B5241.5%2C7687.5%2C97.5%5D%2C%22crossSectionScale%22:0.9999999999999999%2C%22projectionScale%22:16383.999999999998%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/NAc_dat2b_saline_control_axons_1stmouse_20nm_aligned/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22NAc_dat2b_saline_control_axons_1stmouse_20nm_aligned%22%7D%5D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment NAc_dat2b_saline_control_axons_1stmouse_6nm_aligned in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B9497.166015625%2C6199.4990234375%2C103.03334045410156%5D%2C%22crossSectionScale%22:7.999999999999999%2C%22projectionScale%22:16383.999999999998%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/NAc_dat2b_saline_control_axons_1stmouse_6nm_aligned/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22NAc_dat2b_saline_control_axons_1stmouse_6nm_aligned%22%7D%5D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment NAc_dat30_cocaine_axon_1stmouse_aligned_6nm in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B13116.5%2C10968.5%2C119.5%5D%2C%22crossSectionScale%22:7.999999999999999%2C%22projectionScale%22:32767.999999999996%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/NAc_dat30_cocaine_axon_1stmouse_aligned_6nm/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22NAc_dat30_cocaine_axon_1stmouse_aligned_6nm%22%7D%5D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment NAc_dat30_cocaine_axon_1stmouse_aligned_6nm_2ndstack in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B10648.724609375%2C10825.041015625%2C108.76666259765625%5D%2C%22crossSectionScale%22:3.9999999999999996%2C%22projectionScale%22:32767.999999999996%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/NAc_dat30_cocaine_axon_1stmouse_aligned_6nm_2ndstack/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22NAc_dat30_cocaine_axon_1stmouse_aligned_6nm_2ndstack%22%7D%5D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment NAc_dat30_cocaine_axons_1stmouse_20nm_aligned in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B8374.5%2C11146.5%2C107.5%5D%2C%22crossSectionScale%22:3.9999999999999996%2C%22projectionScale%22:32767.999999999996%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/NAc_dat30_cocaine_axons_1stmouse_20nm_aligned/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22NAc_dat30_cocaine_axons_1stmouse_20nm_aligned%22%7D%5D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment NAc_mito_apex_aligned01_6nm in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B7159.5%2C12359.5%2C134.5%5D%2C%22crossSectionScale%22:7.999999999999999%2C%22projectionScale%22:32767.999999999996%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/NAc_mito_apex_aligned01_6nm/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22NAc_mito_apex_aligned01_6nm%22%7D%5D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment NAc_mito_apex_aligned02_6nm in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B7158.509765625%2C12358.6484375%2C134.5%5D%2C%22crossSectionScale%22:3.9999999999999996%2C%22projectionScale%22:32767.999999999996%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/NAc_mito_apex_aligned02_6nm/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22NAc_mito_apex_aligned02_6nm%22%7D%5D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment VTA_dat39_cocaine_Dendrites_6nm_aligned in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B7159.5%2C12312.5%2C134.5%5D%2C%22crossSectionScale%22:3.9999999999999996%2C%22projectionScale%22:32767.999999999996%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/wildenberg2021/VTA_dat39_cocaine_Dendrites_6nm_aligned/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22VTA_dat39_cocaine_Dendrites_6nm_aligned%22%7D%5D%2C%22layout%22:%224panel%22%7D'
        }
        ],
    },

    "ohyama2015": {
        name: "Ohyama et al 2015",
        id: "ohyama2015",
        public: true,
        date: Date.parse("April 20 2015"),
        hero: require("@/assets/projects/cardona2015.jpg"),
        media: require("@/assets/projects/cardona2015.jpg"),
        locations: [
            {
                protocol: "https",
                server: "api.bossdb.io",
                uri: "cardona/acardona_abd1_5/image",
                xs: [12288 - 1024, 12288 + 1024],
                ys: [12288 - 1024, 12288 + 1024],
                zs: [230 - 5, 230 + 5],
            }
        ],
        blurb: "A multilevel multimodal circuit enhances action selection in Drosophila",
        description: ["Natural events present multiple types of sensory cues, each detected by a specialized sensory modality. Combining information from several modalities is essential for the selection of appropriate actions. Key to understanding multimodal computations is determining the structural patterns of multimodal convergence and how these patterns contribute to behaviour. Modalities could converge early, late or at multiple levels in the sensory processing hierarchy. Here we show that combining mechanosensory and nociceptive cues synergistically enhances the selection of the fastest mode of escape locomotion in Drosophila larvae. In an electron microscopy volume that spans the entire insect nervous system, we reconstructed the multisensory circuit supporting the synergy, spanning multiple levels of the sensory processing hierarchy. The wiring diagram revealed a complex multilevel multimodal convergence architecture. Using behavioural and physiological studies, we identified functionally connected circuit nodes that trigger the fastest locomotor mode, and others that facilitate it, and we provide evidence that multiple levels of multimodal integration contribute to escape mode selection. We propose that the multilevel multimodal convergence architecture may be a general feature of multisensory circuits enabling complex input–output functions and selective tuning to ecologically relevant combinations of cues."],
        tags: ["fruitfly", "EM", "neurodata"],
        species: "fruitfly",
        brainloc: "Drosophila-Whole",
        publications: [{
            name: "A multilevel multimodal circuit enhances action selection in Drosophila",
            url: "https://doi.org/10.1038/nature14297",
            authors: ["Tomoko Ohyama", "Casey M. Schneider-Mizell", "Richard D. Fetter", "Javier Valdes Aleman", "Romain Franconville", "Marta Rivera-Alba", "Brett D. Mensh", "Kristin M. Branson", "Julie H. Simpson", "James W. Truman", "Albert Cardona", "Marta Zlatic"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/cardona/"
        }, {
            name: 'Visualize experiment acardona_0111_8__12_03_2017 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B3.799999952316284,3.799999952316284,50.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/cardona/acardona_0111_8__12_03_2017/image%22,%22name%22:%22image%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment acardona_abd1_5 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B1.0,1.0,10.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/cardona/acardona_abd1_5/image%22,%22name%22:%22image%22%7D%5D%7D'
        }]
    },

    "weiler2014": {
        name: "Weiler et al 2014",
        id: "weiler2014",
        public: true,
        date: Date.parse("December 23 2014"),
        hero: require("@/assets/projects/weiler2014.jpg"),
        media: require("@/assets/projects/weiler2014.jpg"),
        locations: [
            {
                protocol: "https",
                server: "api.bossdb.io",
                uri: "weiler14/Ex10R55/Arc_5",
                xs: [1704 - 1024, 1704 + 1024],
                ys: [1704 - 1024, 1704 + 1024],
                zs: [35 - 5, 35 + 5],
            }
        ],
        blurb: "Synaptic molecular imaging in spared and deprived columns of mouse barrel cortex with array tomography",
        description: ["A major question in neuroscience is how diverse subsets of synaptic connections in neural circuits are affected by experience dependent plasticity to form the basis for behavioral learning and memory. Differences in protein expression patterns at individual synapses could constitute a key to understanding both synaptic diversity and the effects of plasticity at different synapse populations. Our approach to this question leverages the immunohistochemical multiplexing capability of array tomography (ATomo) and the columnar organization of mouse barrel cortex to create a dataset comprising high resolution volumetric images of spared and deprived cortical whisker barrels stained for over a dozen synaptic molecules each. These dataset has been made available through the Open Connectome Project for interactive online viewing, and may also be downloaded for offline analysis using web, Matlab, and other interfaces."],
        tags: ["AT", "Tomography", "EM", "light microscopy", "mouse", "neurodata"],
        species: "mouse",
        brainloc: "Mouse-Somatosensory",
        publications: [{
            name: "Synaptic molecular imaging in spared and deprived columns of mouse barrel cortex with array tomography",
            url: "https://doi.org/10.1038/sdata.2014.46",
            authors: ["Nicholas C Weiler", "Forrest Collman", "Joshua T Vogelstein", "Randal Burns", "Stephen J Smith"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/weiler14/"
        }, {
            name: 'Visualize experiment Ex10R55 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/Arc_5%22,%22name%22:%22Arc_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/Calbindin_7%22,%22name%22:%22Calbindin_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/DAPI_1%22,%22name%22:%22DAPI_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/DAPI_2%22,%22name%22:%22DAPI_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/DAPI_3%22,%22name%22:%22DAPI_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/DAPI_4%22,%22name%22:%22DAPI_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/DAPI_5%22,%22name%22:%22DAPI_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/DAPI_6%22,%22name%22:%22DAPI_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/DAPI_7%22,%22name%22:%22DAPI_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/DAPI_8%22,%22name%22:%22DAPI_8%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/GABAARa1_7%22,%22name%22:%22GABAARa1_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/GAD2_3%22,%22name%22:%22GAD2_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/Gephyrin_2%22,%22name%22:%22Gephyrin_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/GFP_4%22,%22name%22:%22GFP_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/GluR1_4%22,%22name%22:%22GluR1_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/GluR2_8%22,%22name%22:%22GluR2_8%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/GluR4_8%22,%22name%22:%22GluR4_8%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/NR2A_1%22,%22name%22:%22NR2A_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/NR2B_3%22,%22name%22:%22NR2B_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/PSD95_1%22,%22name%22:%22PSD95_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/PV25_5%22,%22name%22:%22PV25_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/Synapsin1_2%22,%22name%22:%22Synapsin1_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/Synapsin1_2_synapses%22,%22name%22:%22Synapsin1_2_synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/Synapsin1_2_synapses_l2ball%22,%22name%22:%22Synapsin1_2_synapses_l2ball%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/Synaptopodin_6%22,%22name%22:%22Synaptopodin_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/vGAT_4%22,%22name%22:%22vGAT_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/vGAT_5%22,%22name%22:%22vGAT_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/vGAT_6%22,%22name%22:%22vGAT_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/vGluT1_3%22,%22name%22:%22vGluT1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/vGluT2_2%22,%22name%22:%22vGluT2_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex10R55/YFP_1%22,%22name%22:%22YFP_1%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Ex12R75 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/DAPI_1%22,%22name%22:%22DAPI_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/DAPI_2%22,%22name%22:%22DAPI_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/DAPI_3%22,%22name%22:%22DAPI_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/DAPI_4%22,%22name%22:%22DAPI_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/DAPI_5%22,%22name%22:%22DAPI_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/DAPI_6%22,%22name%22:%22DAPI_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/GABAARa1_6%22,%22name%22:%22GABAARa1_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/GAD2_3%22,%22name%22:%22GAD2_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/Gephyrin_2%22,%22name%22:%22Gephyrin_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/GluR1_4%22,%22name%22:%22GluR1_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/GluR2_5%22,%22name%22:%22GluR2_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/NR2A_1%22,%22name%22:%22NR2A_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/NR2B_4%22,%22name%22:%22NR2B_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/PSD95_1%22,%22name%22:%22PSD95_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/PV25_5%22,%22name%22:%22PV25_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/Synapsin1_2%22,%22name%22:%22Synapsin1_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/Synapsin1_2_synapses%22,%22name%22:%22Synapsin1_2_synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/Synapsin1_2_synapses_l2ball%22,%22name%22:%22Synapsin1_2_synapses_l2ball%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/Synaptopodin_6%22,%22name%22:%22Synaptopodin_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/vGAT_3%22,%22name%22:%22vGAT_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/vGluT1_3%22,%22name%22:%22vGluT1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/vGluT2_2%22,%22name%22:%22vGluT2_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R75/YFP_1%22,%22name%22:%22YFP_1%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Ex12R76 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/DAPI_1%22,%22name%22:%22DAPI_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/DAPI_2%22,%22name%22:%22DAPI_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/DAPI_3%22,%22name%22:%22DAPI_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/DAPI_4%22,%22name%22:%22DAPI_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/DAPI_5%22,%22name%22:%22DAPI_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/DAPI_6%22,%22name%22:%22DAPI_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/GABAARa1_6%22,%22name%22:%22GABAARa1_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/GAD2_3%22,%22name%22:%22GAD2_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/Gephyrin_2%22,%22name%22:%22Gephyrin_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/GluR1_4%22,%22name%22:%22GluR1_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/GluR2_5%22,%22name%22:%22GluR2_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/NR2A_1%22,%22name%22:%22NR2A_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/NR2B_4%22,%22name%22:%22NR2B_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/PSD95_1%22,%22name%22:%22PSD95_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/PV25_5%22,%22name%22:%22PV25_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/Synapsin1_2%22,%22name%22:%22Synapsin1_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/Synapsin1_2_synapses%22,%22name%22:%22Synapsin1_2_synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/Synapsin1_2_synapses_l2ball%22,%22name%22:%22Synapsin1_2_synapses_l2ball%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/Synaptopodin_6%22,%22name%22:%22Synaptopodin_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/vGAT_3%22,%22name%22:%22vGAT_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/vGluT1_3%22,%22name%22:%22vGluT1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/vGluT2_2%22,%22name%22:%22vGluT2_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex12R76/YFP_1%22,%22name%22:%22YFP_1%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Ex13R51 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/DAPI_1%22,%22name%22:%22DAPI_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/DAPI_2%22,%22name%22:%22DAPI_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/DAPI_3%22,%22name%22:%22DAPI_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/DAPI_4%22,%22name%22:%22DAPI_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/DAPI_5%22,%22name%22:%22DAPI_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/DAPI_6%22,%22name%22:%22DAPI_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/GABAARa1_6%22,%22name%22:%22GABAARa1_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/GAD2_3%22,%22name%22:%22GAD2_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/Gephyrin_2%22,%22name%22:%22Gephyrin_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/GFP_4%22,%22name%22:%22GFP_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/GluR1_4%22,%22name%22:%22GluR1_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/GluR2_5%22,%22name%22:%22GluR2_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/NR2A_1%22,%22name%22:%22NR2A_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/NR2B_4%22,%22name%22:%22NR2B_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/PSD95_1%22,%22name%22:%22PSD95_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/PV25_5%22,%22name%22:%22PV25_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/Synapsin1_2%22,%22name%22:%22Synapsin1_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/Synapsin1_2_synapses%22,%22name%22:%22Synapsin1_2_synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/Synapsin1_2_synapses_l2ball%22,%22name%22:%22Synapsin1_2_synapses_l2ball%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/Synaptopodin_6%22,%22name%22:%22Synaptopodin_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/vGAT_3%22,%22name%22:%22vGAT_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/vGluT1_3%22,%22name%22:%22vGluT1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex13R51/vGluT2_2%22,%22name%22:%22vGluT2_2%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Ex14R58 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/Arc_7%22,%22name%22:%22Arc_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/DAPI_1%22,%22name%22:%22DAPI_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/DAPI_2%22,%22name%22:%22DAPI_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/DAPI_3%22,%22name%22:%22DAPI_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/DAPI_4%22,%22name%22:%22DAPI_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/DAPI_5%22,%22name%22:%22DAPI_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/DAPI_6%22,%22name%22:%22DAPI_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/DAPI_7%22,%22name%22:%22DAPI_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/GABAARa1_6%22,%22name%22:%22GABAARa1_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/GAD2_3%22,%22name%22:%22GAD2_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/Gephyrin_2%22,%22name%22:%22Gephyrin_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/GFP_5%22,%22name%22:%22GFP_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/GluR1_4%22,%22name%22:%22GluR1_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/GluR2_5%22,%22name%22:%22GluR2_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/NR2A_1%22,%22name%22:%22NR2A_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/NR2B_3%22,%22name%22:%22NR2B_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/PSD95_1%22,%22name%22:%22PSD95_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/PV25_5%22,%22name%22:%22PV25_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/Synapsin1_2%22,%22name%22:%22Synapsin1_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/Synaptopodin_7%22,%22name%22:%22Synaptopodin_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/vGAT_4%22,%22name%22:%22vGAT_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/vGluT1_4%22,%22name%22:%22vGluT1_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/vGluT1_6%22,%22name%22:%22vGluT1_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/vGluT2_2%22,%22name%22:%22vGluT2_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/vGluT2_3%22,%22name%22:%22vGluT2_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex14R58/YFP_1%22,%22name%22:%22YFP_1%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Ex2R18C1 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/DAPI_1%22,%22name%22:%22DAPI_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/DAPI_2%22,%22name%22:%22DAPI_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/DAPI_3%22,%22name%22:%22DAPI_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/DAPI_4%22,%22name%22:%22DAPI_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/DAPI_5a%22,%22name%22:%22DAPI_5a%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/DAPI_5b%22,%22name%22:%22DAPI_5b%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/DAPI_6%22,%22name%22:%22DAPI_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/DAPI_7%22,%22name%22:%22DAPI_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/GABAARa1_7%22,%22name%22:%22GABAARa1_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/GAD2_4%22,%22name%22:%22GAD2_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/Gephyrin_1%22,%22name%22:%22Gephyrin_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/GFP_5b%22,%22name%22:%22GFP_5b%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/GluR1_5a%22,%22name%22:%22GluR1_5a%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/GluR2_6%22,%22name%22:%22GluR2_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/GluR4_7%22,%22name%22:%22GluR4_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/NR2A_2%22,%22name%22:%22NR2A_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/NR2B_4%22,%22name%22:%22NR2B_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/PSD25_2%22,%22name%22:%22PSD25_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/PV25_1%22,%22name%22:%22PV25_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/Synapsin1_3%22,%22name%22:%22Synapsin1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/Synapsin1_3_synapses%22,%22name%22:%22Synapsin1_3_synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/Synapsin1_3_synapses_l2ball%22,%22name%22:%22Synapsin1_3_synapses_l2ball%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/Synaptopodin_6%22,%22name%22:%22Synaptopodin_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/vGAT_3%22,%22name%22:%22vGAT_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/vGluT1_3%22,%22name%22:%22vGluT1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/vGluT2_2%22,%22name%22:%22vGluT2_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C1/YFP_1%22,%22name%22:%22YFP_1%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Ex2R18C2 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/DAPI_1%22,%22name%22:%22DAPI_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/DAPI_2%22,%22name%22:%22DAPI_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/DAPI_3%22,%22name%22:%22DAPI_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/DAPI_4%22,%22name%22:%22DAPI_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/DAPI_5a%22,%22name%22:%22DAPI_5a%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/DAPI_5b%22,%22name%22:%22DAPI_5b%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/DAPI_6%22,%22name%22:%22DAPI_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/DAPI_7%22,%22name%22:%22DAPI_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/GABAARa1_7%22,%22name%22:%22GABAARa1_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/GAD2_4%22,%22name%22:%22GAD2_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/Gephyrin_1%22,%22name%22:%22Gephyrin_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/GFP_5b%22,%22name%22:%22GFP_5b%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/GluR1_5a%22,%22name%22:%22GluR1_5a%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/GluR2_6%22,%22name%22:%22GluR2_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/GluR4_7%22,%22name%22:%22GluR4_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/NR2A_2%22,%22name%22:%22NR2A_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/NR2B_4%22,%22name%22:%22NR2B_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/PSD25_2%22,%22name%22:%22PSD25_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/PV25_1%22,%22name%22:%22PV25_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/Synapsin1_3%22,%22name%22:%22Synapsin1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/Synapsin1_3_synapses%22,%22name%22:%22Synapsin1_3_synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/Synapsin1_3_synapses_l2ball%22,%22name%22:%22Synapsin1_3_synapses_l2ball%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/Synaptopodin_6%22,%22name%22:%22Synaptopodin_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/vGAT_3%22,%22name%22:%22vGAT_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/vGluT1_3%22,%22name%22:%22vGluT1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/vGluT2_2%22,%22name%22:%22vGluT2_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex2R18C2/YFP_1%22,%22name%22:%22YFP_1%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Ex3R43C1 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/Arc_3%22,%22name%22:%22Arc_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/DAPI_1%22,%22name%22:%22DAPI_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/DAPI_2%22,%22name%22:%22DAPI_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/DAPI_3%22,%22name%22:%22DAPI_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/DAPI_4%22,%22name%22:%22DAPI_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/DAPI_6%22,%22name%22:%22DAPI_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/DAPI_7%22,%22name%22:%22DAPI_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/DAPI_8%22,%22name%22:%22DAPI_8%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/GABAARa1_8%22,%22name%22:%22GABAARa1_8%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/GAD6567_4%22,%22name%22:%22GAD6567_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/Gephyrin_1%22,%22name%22:%22Gephyrin_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/GFP_4%22,%22name%22:%22GFP_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/GluR1_6%22,%22name%22:%22GluR1_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/GluR2_6%22,%22name%22:%22GluR2_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/GluR4_8%22,%22name%22:%22GluR4_8%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/NR2A_4%22,%22name%22:%22NR2A_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/NR2B_3%22,%22name%22:%22NR2B_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/NR2B_7%22,%22name%22:%22NR2B_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/PSD95_2%22,%22name%22:%22PSD95_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/PV25_1%22,%22name%22:%22PV25_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/Synapsin1_3%22,%22name%22:%22Synapsin1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/Synapsin1_3_synapses%22,%22name%22:%22Synapsin1_3_synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/Synapsin1_3_synapses_l2ball%22,%22name%22:%22Synapsin1_3_synapses_l2ball%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/Synaptopodin_7%22,%22name%22:%22Synaptopodin_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/vGAT_2%22,%22name%22:%22vGAT_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/vGluT1_2%22,%22name%22:%22vGluT1_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/vGluT2_1%22,%22name%22:%22vGluT2_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C1/vGluT2_7%22,%22name%22:%22vGluT2_7%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Ex3R43C2 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/Arc_3%22,%22name%22:%22Arc_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/DAPI_1%22,%22name%22:%22DAPI_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/DAPI_2%22,%22name%22:%22DAPI_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/DAPI_3%22,%22name%22:%22DAPI_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/DAPI_4%22,%22name%22:%22DAPI_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/DAPI_6%22,%22name%22:%22DAPI_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/DAPI_7%22,%22name%22:%22DAPI_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/DAPI_8%22,%22name%22:%22DAPI_8%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/GABAARa1_8%22,%22name%22:%22GABAARa1_8%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/GAD6567_4%22,%22name%22:%22GAD6567_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/Gephyrin_1%22,%22name%22:%22Gephyrin_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/GFP_4%22,%22name%22:%22GFP_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/GluR1_6%22,%22name%22:%22GluR1_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/GluR2_6%22,%22name%22:%22GluR2_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/GluR4_8%22,%22name%22:%22GluR4_8%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/NR2A_4%22,%22name%22:%22NR2A_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/NR2B_3%22,%22name%22:%22NR2B_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/NR2B_7%22,%22name%22:%22NR2B_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/PSD95_2%22,%22name%22:%22PSD95_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/PV25_1%22,%22name%22:%22PV25_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/Synapsin1_3%22,%22name%22:%22Synapsin1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/Synapsin1_3_synapses%22,%22name%22:%22Synapsin1_3_synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/Synapsin1_3_synapses_l2ball%22,%22name%22:%22Synapsin1_3_synapses_l2ball%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/Synaptopodin_7%22,%22name%22:%22Synaptopodin_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/vGAT_2%22,%22name%22:%22vGAT_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/vGluT1_2%22,%22name%22:%22vGluT1_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/vGluT2_1%22,%22name%22:%22vGluT2_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C2/vGluT2_7%22,%22name%22:%22vGluT2_7%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Ex3R43C3 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/Arc_3%22,%22name%22:%22Arc_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/DAPI_1%22,%22name%22:%22DAPI_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/DAPI_2%22,%22name%22:%22DAPI_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/DAPI_3%22,%22name%22:%22DAPI_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/DAPI_4%22,%22name%22:%22DAPI_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/DAPI_6%22,%22name%22:%22DAPI_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/DAPI_7%22,%22name%22:%22DAPI_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/DAPI_8%22,%22name%22:%22DAPI_8%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/GABAARa1_8%22,%22name%22:%22GABAARa1_8%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/GAD6567_4%22,%22name%22:%22GAD6567_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/Gephyrin_1%22,%22name%22:%22Gephyrin_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/GFP_4%22,%22name%22:%22GFP_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/GluR1_6%22,%22name%22:%22GluR1_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/GluR2_6%22,%22name%22:%22GluR2_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/GluR4_8%22,%22name%22:%22GluR4_8%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/NR2A_4%22,%22name%22:%22NR2A_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/NR2B_3%22,%22name%22:%22NR2B_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/NR2B_7%22,%22name%22:%22NR2B_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/PSD95_2%22,%22name%22:%22PSD95_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/PV25_1%22,%22name%22:%22PV25_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/Synapsin1_3%22,%22name%22:%22Synapsin1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/Synapsin1_3_synapses%22,%22name%22:%22Synapsin1_3_synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/Synapsin1_3_synapses_l2ball%22,%22name%22:%22Synapsin1_3_synapses_l2ball%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/Synaptopodin_7%22,%22name%22:%22Synaptopodin_7%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/vGAT_2%22,%22name%22:%22vGAT_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/vGluT1_2%22,%22name%22:%22vGluT1_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/vGluT2_1%22,%22name%22:%22vGluT2_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex3R43C3/vGluT2_7%22,%22name%22:%22vGluT2_7%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Ex6R15C1 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/DAPI_1%22,%22name%22:%22DAPI_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/DAPI_2%22,%22name%22:%22DAPI_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/DAPI_3%22,%22name%22:%22DAPI_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/DAPI_4%22,%22name%22:%22DAPI_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/DAPI_5%22,%22name%22:%22DAPI_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/DAPI_6%22,%22name%22:%22DAPI_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/GABAARa1_6%22,%22name%22:%22GABAARa1_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/GAD2_3%22,%22name%22:%22GAD2_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/Gephyrin_2%22,%22name%22:%22Gephyrin_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/GluR1_4%22,%22name%22:%22GluR1_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/GluR2_5%22,%22name%22:%22GluR2_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/NR2A_1%22,%22name%22:%22NR2A_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/NR2B_3%22,%22name%22:%22NR2B_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/PSD95_1%22,%22name%22:%22PSD95_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/PV25_5%22,%22name%22:%22PV25_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/Synapsin1_2%22,%22name%22:%22Synapsin1_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/Synapsin1_2_synapses%22,%22name%22:%22Synapsin1_2_synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/Synapsin1_2_synapses_l2ball%22,%22name%22:%22Synapsin1_2_synapses_l2ball%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/Synaptopodin_6%22,%22name%22:%22Synaptopodin_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/vGAT_4%22,%22name%22:%22vGAT_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/vGluT1_3%22,%22name%22:%22vGluT1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/vGluT2_2%22,%22name%22:%22vGluT2_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C1/YFP_1%22,%22name%22:%22YFP_1%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Ex6R15C2 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/DAPI_1%22,%22name%22:%22DAPI_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/DAPI_2%22,%22name%22:%22DAPI_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/DAPI_3%22,%22name%22:%22DAPI_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/DAPI_4%22,%22name%22:%22DAPI_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/DAPI_5%22,%22name%22:%22DAPI_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/DAPI_6%22,%22name%22:%22DAPI_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/GABAARa1_6%22,%22name%22:%22GABAARa1_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/GAD2_3%22,%22name%22:%22GAD2_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/Gephyrin_2%22,%22name%22:%22Gephyrin_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/GluR1_4%22,%22name%22:%22GluR1_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/GluR2_5%22,%22name%22:%22GluR2_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/NR2A_1%22,%22name%22:%22NR2A_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/NR2B_3%22,%22name%22:%22NR2B_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/PSD95_1%22,%22name%22:%22PSD95_1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/PV25_5%22,%22name%22:%22PV25_5%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/Synapsin1_2%22,%22name%22:%22Synapsin1_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/Synapsin1_2_synapses%22,%22name%22:%22Synapsin1_2_synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/Synapsin1_2_synapses_l2balls%22,%22name%22:%22Synapsin1_2_synapses_l2balls%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/Synaptopodin_6%22,%22name%22:%22Synaptopodin_6%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/vGAT_4%22,%22name%22:%22vGAT_4%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/vGluT1_3%22,%22name%22:%22vGluT1_3%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/vGluT2_2%22,%22name%22:%22vGluT2_2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/weiler14/Ex6R15C2/YFP_1%22,%22name%22:%22YFP_1%22%7D%5D%7D'
        }]
    },

    "templier2019": {
        name: "Templier et al 2019",
        id: "templier2019",
        public: true,
        date: Date.parse("July 11 2019"),
        hero: require("@/assets/projects/templier2019.jpg"),
        media: require("@/assets/projects/templier2019.jpg"),
        locations: [
            {
                protocol: "https",
                server: "api.bossdb.io",
                uri: "templier/Wafer1/C1_EM",
                xs: [25000 - 1024, 25000 + 1024],
                ys: [23000 - 1024, 23000 + 1024],
                zs: [250 - 5, 250 + 5],
                res: 0
            },
            {
                protocol: "https",
                server: "api.bossdb.io",
                uri: "templier/Wafer3/EM",
                xs: [25000 - 1024, 25000 + 1024],
                ys: [23000 - 1024, 23000 + 1024],
                zs: [250 - 5, 250 + 5],
                res: 0
            },
        ],
        blurb: "MagC, magnetic collection of ultrathin sections for volumetric correlative light and electron microscopy",
        description: ["The non-destructive collection of ultrathin sections on silicon wafers for post-embedding staining and volumetric correlative light and electron microscopy traditionally requires exquisite manual skills and is tedious and unreliable. In MagC introduced here, sample blocks are augmented with a magnetic resin enabling the remote actuation and collection of hundreds of sections on wafer. MagC allowed the correlative visualization of neuroanatomical tracers within their ultrastructural volumetric electron microscopy context."],
        tags: ["zebrafinch", "MagC", "EM", "neurodata"],
        species: "zebrafinch",
        brainloc: "Zebrafinch-Templier",
        publications: [{
            name: "MagC, magnetic collection of ultrathin sections for volumetric correlative light and electron microscopy",
            url: "https://doi.org/10.7554/eLife.45696",
            authors: ["Thomas Templier"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/templier/"
        }, {
            name: 'Visualize experiment Wafer1 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B300.0,300.0,50.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer1/C1_Beads_488%22,%22name%22:%22C1_Beads_488%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer1/C1_Beads_546%22,%22name%22:%22C1_Beads_546%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer1/C1_EM%22,%22name%22:%22C1_EM%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer1/C1_LM_488%22,%22name%22:%22C1_LM_488%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer1/C1_LM_546%22,%22name%22:%22C1_LM_546%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer1/C1_LM_647%22,%22name%22:%22C1_LM_647%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer1/C1_LM_brightfield%22,%22name%22:%22C1_LM_brightfield%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer1/C1_LM_contrastedbrightfield%22,%22name%22:%22C1_LM_contrastedbrightfield%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Wafer3 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22y%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22z%22:%5B5.0000000000000004e-8%2C%22m%22%5D%7D%2C%22position%22:%5B315.2762756347656%2C379.72491455078125%2C0%5D%2C%22crossSectionScale%22:10.085756440940512%2C%22projectionOrientation%22:%5B-0.08086290955543518%2C0.002209566766396165%2C0.06410305947065353%2C0.9946593046188354%5D%2C%22projectionScale%22:34746.12151352708%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer3/B6_Beads_488%22%2C%22tab%22:%22source%22%2C%22name%22:%22B6_Beads_488%22%2C%22visible%22:false%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer3/EM%22%2C%22tab%22:%22source%22%2C%22name%22:%22EM%22%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer3/B6_Beads_546%22%2C%22tab%22:%22source%22%2C%22name%22:%22B6_Beads_546%22%2C%22visible%22:false%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer3/B6_LM_647%22%2C%22tab%22:%22source%22%2C%22name%22:%22B6_LM_647%22%2C%22visible%22:false%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer3/B6_LM_brightfield%22%2C%22tab%22:%22source%22%2C%22name%22:%22B6_LM_brightfield%22%2C%22visible%22:false%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer3/B6_LM_contrastedbrightfield%22%2C%22tab%22:%22source%22%2C%22name%22:%22B6_LM_contrastedbrightfield%22%2C%22visible%22:false%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/templier/Wafer3/B6_SegmentedLM_647%22%2C%22tab%22:%22source%22%2C%22name%22:%22B6_SegmentedLM_647%22%2C%22visible%22:false%7D%2C%7B%22type%22:%22annotation%22%2C%22source%22:%7B%22url%22:%22local://annotations%22%2C%22transform%22:%7B%22outputDimensions%22:%7B%22x%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22y%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22z%22:%5B5.0000000000000004e-8%2C%22m%22%5D%7D%2C%22inputDimensions%22:%7B%220%22:%5B8e-9%2C%22m%22%5D%2C%221%22:%5B8e-9%2C%22m%22%5D%2C%222%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tool%22:%22annotateLine%22%2C%22tab%22:%22source%22%2C%22annotations%22:%5B%7B%22pointA%22:%5B8495.181640625%2C8503.50390625%2C0%5D%2C%22pointB%22:%5B8447.87890625%2C8501.751953125%2C10%5D%2C%22type%22:%22line%22%2C%22id%22:%22c29f2167d0b3531adbd1fc4a862e174de6d9981c%22%7D%2C%7B%22pointA%22:%5B8447.87890625%2C8501.751953125%2C10%5D%2C%22pointB%22:%5B8359.3447265625%2C8500.8798828125%2C36.884971618652344%5D%2C%22type%22:%22line%22%2C%22id%22:%221f2774e7d0f331a61a4031ae91008d7bf72fb64b%22%7D%2C%7B%22pointA%22:%5B8359.3447265625%2C8500.8798828125%2C36.884971618652344%5D%2C%22pointB%22:%5B8290.201171875%2C8521.0234375%2C73%5D%2C%22type%22:%22line%22%2C%22id%22:%22dc18db5f089843865b0aa77efe37492b16b36f37%22%7D%2C%7B%22pointA%22:%5B8290.201171875%2C8521.0234375%2C73%5D%2C%22pointB%22:%5B8244.208984375%2C8527.59375%2C92%5D%2C%22type%22:%22line%22%2C%22id%22:%224f9f25856f53f693f95c3f603a81926856ac56c1%22%7D%2C%7B%22pointA%22:%5B8244.208984375%2C8527.59375%2C92%5D%2C%22pointB%22:%5B8079.955078125%2C8577.5341796875%2C115%5D%2C%22type%22:%22line%22%2C%22id%22:%2266f8a474138eceff2a84f3bb6dce2889188ff937%22%7D%2C%7B%22pointA%22:%5B8079.955078125%2C8577.5341796875%2C115%5D%2C%22pointB%22:%5B8025.6435546875%2C8560.4541015625%2C130%5D%2C%22type%22:%22line%22%2C%22id%22:%22df30e53dccf5de7d1e37ed6347e02387f561c598%22%7D%2C%7B%22pointA%22:%5B8025.6435546875%2C8560.4541015625%2C130%5D%2C%22pointB%22:%5B7927.095703125%2C8587.6064453125%2C145%5D%2C%22type%22:%22line%22%2C%22id%22:%223d833ec4c0c56b7c804ed71631a98727dc7a879f%22%7D%2C%7B%22pointA%22:%5B7927.095703125%2C8587.6064453125%2C145%5D%2C%22pointB%22:%5B7828.9990234375%2C8623.4765625%2C154.86647033691406%5D%2C%22type%22:%22line%22%2C%22id%22:%22a666e37a7780e5b888831cfdb1f2be6aec9d0b2a%22%7D%2C%7B%22pointA%22:%5B7828.9990234375%2C8623.4765625%2C154.86647033691406%5D%2C%22pointB%22:%5B7787.81494140625%2C8644.11328125%2C171%5D%2C%22type%22:%22line%22%2C%22id%22:%224177341685ba0c46232991f72decca80873997dc%22%7D%2C%7B%22pointA%22:%5B7787.81494140625%2C8644.11328125%2C171%5D%2C%22pointB%22:%5B7752.33740234375%2C8672.5830078125%2C184%5D%2C%22type%22:%22line%22%2C%22id%22:%22e598f33ba83f7d68d873a5d4af42819070a3c19c%22%7D%2C%7B%22pointA%22:%5B7752.33740234375%2C8672.5830078125%2C184%5D%2C%22pointB%22:%5B7681.8212890625%2C8701.931640625%2C204%5D%2C%22type%22:%22line%22%2C%22id%22:%22dcd6f629b2f7b9a0257fc9f8cf8d91f9f7a1eb82%22%7D%5D%2C%22name%22:%22annotation%22%7D%2C%7B%22type%22:%22annotation%22%2C%22source%22:%7B%22url%22:%22local://annotations%22%2C%22transform%22:%7B%22outputDimensions%22:%7B%22x%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22y%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22z%22:%5B5.0000000000000004e-8%2C%22m%22%5D%7D%2C%22inputDimensions%22:%7B%220%22:%5B8e-9%2C%22m%22%5D%2C%221%22:%5B8e-9%2C%22m%22%5D%2C%222%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tool%22:%22annotateLine%22%2C%22tab%22:%22source%22%2C%22annotations%22:%5B%7B%22pointA%22:%5B9023.76953125%2C9017.9716796875%2C0%5D%2C%22pointB%22:%5B9089.859375%2C9020.8701171875%2C18%5D%2C%22type%22:%22line%22%2C%22id%22:%22427f68571d81258d781b3d264c6fa4785c1e39ee%22%7D%2C%7B%22pointA%22:%5B9089.859375%2C9020.8701171875%2C18%5D%2C%22pointB%22:%5B9179.1396484375%2C9056.234375%2C34%5D%2C%22type%22:%22line%22%2C%22id%22:%22e569d67ecf16bfc04bb3255643062d42cf10a0b7%22%7D%2C%7B%22pointA%22:%5B9179.1396484375%2C9056.234375%2C34%5D%2C%22pointB%22:%5B9286.388671875%2C9103.193359375%2C48%5D%2C%22type%22:%22line%22%2C%22id%22:%22aff952304ff7d3b98ceb98a37cbfa23f4f687e43%22%7D%2C%7B%22pointA%22:%5B9286.388671875%2C9103.193359375%2C48%5D%2C%22pointB%22:%5B9406.974609375%2C9162.3271484375%2C62%5D%2C%22type%22:%22line%22%2C%22id%22:%22e2f8f91713232ad37c33cc0e34893120bae12164%22%7D%2C%7B%22pointA%22:%5B9406.974609375%2C9162.3271484375%2C62%5D%2C%22pointB%22:%5B9654.259765625%2C9217.1201171875%2C82.30290985107422%5D%2C%22type%22:%22line%22%2C%22id%22:%227d7227a546f5cd186d06863d8c643942f35c5a0d%22%7D%2C%7B%22pointA%22:%5B9654.259765625%2C9217.1201171875%2C82.30290985107422%5D%2C%22pointB%22:%5B9847.6875%2C9289.150390625%2C101%5D%2C%22type%22:%22line%22%2C%22id%22:%222897ab0ef7704480cf530f42ffbc4f17db21be6d%22%7D%2C%7B%22pointA%22:%5B9847.6875%2C9289.150390625%2C101%5D%2C%22pointB%22:%5B9968.1650390625%2C9347.1171875%2C116.68415069580078%5D%2C%22type%22:%22line%22%2C%22id%22:%22216d494781b47d9a75bde60a2de2a634d4040562%22%7D%2C%7B%22pointA%22:%5B9968.1650390625%2C9347.1171875%2C116.68415069580078%5D%2C%22pointB%22:%5B10151.470703125%2C9422.4912109375%2C145%5D%2C%22type%22:%22line%22%2C%22id%22:%22a6bf5b2cb269420297f6397128362241d1acce07%22%7D%2C%7B%22pointA%22:%5B10151.470703125%2C9422.4912109375%2C145%5D%2C%22pointB%22:%5B10396.12109375%2C9542.501953125%2C165%5D%2C%22type%22:%22line%22%2C%22id%22:%224231de19ca5fb2140c37c04d09d7d494f6040725%22%7D%2C%7B%22pointA%22:%5B10396.12109375%2C9542.501953125%2C165%5D%2C%22pointB%22:%5B10531.779296875%2C9605.115234375%2C182%5D%2C%22type%22:%22line%22%2C%22id%22:%22a131658f58b2c9031c43f85f3df0bec66c34d58c%22%7D%2C%7B%22pointA%22:%5B10531.779296875%2C9605.115234375%2C182%5D%2C%22pointB%22:%5B10672.0751953125%2C9596.9990234375%2C199%5D%2C%22type%22:%22line%22%2C%22id%22:%22aacebad2747eb829976b20d00fb20728368bb0a3%22%7D%2C%7B%22pointA%22:%5B10672.0751953125%2C9596.9990234375%2C199%5D%2C%22pointB%22:%5B10706.859375%2C9605.6962890625%2C204%5D%2C%22type%22:%22line%22%2C%22id%22:%2247836ab098bfe98af613aac859c15fc266b0e3d5%22%7D%2C%7B%22pointA%22:%5B10706.859375%2C9605.6962890625%2C204%5D%2C%22pointB%22:%5B10706.859375%2C9605.6962890625%2C204%5D%2C%22type%22:%22line%22%2C%22id%22:%22e5365f51d1b1c4e29199ee36dee259c6366ae2ea%22%7D%5D%2C%22name%22:%22annotation1%22%7D%2C%7B%22type%22:%22annotation%22%2C%22source%22:%7B%22url%22:%22local://annotations%22%2C%22transform%22:%7B%22outputDimensions%22:%7B%22x%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22y%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22z%22:%5B5.0000000000000004e-8%2C%22m%22%5D%7D%2C%22inputDimensions%22:%7B%220%22:%5B8e-9%2C%22m%22%5D%2C%221%22:%5B8e-9%2C%22m%22%5D%2C%222%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tool%22:%22annotateLine%22%2C%22tab%22:%22source%22%2C%22annotations%22:%5B%7B%22pointA%22:%5B8493.3984375%2C9004.0625%2C0%5D%2C%22pointB%22:%5B8527.423828125%2C8943.62890625%2C25%5D%2C%22type%22:%22line%22%2C%22id%22:%22d593bd9ab22d2c48b40f031eb308f1a2004ac250%22%7D%2C%7B%22pointA%22:%5B8527.423828125%2C8943.62890625%2C25%5D%2C%22pointB%22:%5B8618.8310546875%2C8847.142578125%2C57%5D%2C%22type%22:%22line%22%2C%22id%22:%22b2f764220c799ff1a5bc685615fb5f83666433a9%22%7D%2C%7B%22pointA%22:%5B8618.8310546875%2C8847.142578125%2C57%5D%2C%22pointB%22:%5B8708.716796875%2C8800.93359375%2C84%5D%2C%22type%22:%22line%22%2C%22id%22:%22bc29cea516740af28d2dd81390bf1cc20755e948%22%7D%2C%7B%22pointA%22:%5B8708.716796875%2C8800.93359375%2C84%5D%2C%22pointB%22:%5B8656.9140625%2C8433.771484375%2C98%5D%2C%22type%22:%22line%22%2C%22id%22:%2241b11bff31d7457e15972b00d429b1b121b37b98%22%7D%2C%7B%22pointA%22:%5B8656.9140625%2C8433.771484375%2C98%5D%2C%22pointB%22:%5B8642.693359375%2C8245.869140625%2C117%5D%2C%22type%22:%22line%22%2C%22id%22:%22bd814c9b046b2e2518900be3412a39206c7cde77%22%7D%2C%7B%22pointA%22:%5B8642.693359375%2C8245.869140625%2C117%5D%2C%22pointB%22:%5B8560.9306640625%2C8153.951171875%2C137%5D%2C%22type%22:%22line%22%2C%22id%22:%22da147f1142ba1bc027db581d818d783a5212c304%22%7D%2C%7B%22pointA%22:%5B8560.9306640625%2C8153.951171875%2C137%5D%2C%22pointB%22:%5B8472.0625%2C7918.8173828125%2C162%5D%2C%22type%22:%22line%22%2C%22id%22:%22d46b1e27dd8087fa4937988991f2318b4b4749e4%22%7D%2C%7B%22pointA%22:%5B8472.0625%2C7918.8173828125%2C162%5D%2C%22pointB%22:%5B8476.1259765625%2C7762.40185546875%2C190%5D%2C%22type%22:%22line%22%2C%22id%22:%22854197c98ce8cf127a9f6c76bccbe15730076c9c%22%7D%2C%7B%22pointA%22:%5B8476.1259765625%2C7762.40185546875%2C190%5D%2C%22pointB%22:%5B8505.580078125%2C7684.70361328125%2C204%5D%2C%22type%22:%22line%22%2C%22id%22:%22444cbbeb88efa8451dae16f464686726ddbfe7ed%22%7D%5D%2C%22name%22:%22annotation2%22%7D%2C%7B%22type%22:%22annotation%22%2C%22source%22:%7B%22url%22:%22local://annotations%22%2C%22transform%22:%7B%22outputDimensions%22:%7B%22x%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22y%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22z%22:%5B5.0000000000000004e-8%2C%22m%22%5D%7D%2C%22inputDimensions%22:%7B%220%22:%5B8e-9%2C%22m%22%5D%2C%221%22:%5B8e-9%2C%22m%22%5D%2C%222%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tool%22:%22annotateLine%22%2C%22tab%22:%22source%22%2C%22annotations%22:%5B%7B%22pointA%22:%5B8999.4921875%2C8498.984375%2C0%5D%2C%22pointB%22:%5B9123.40625%2C8406.556640625%2C4%5D%2C%22type%22:%22line%22%2C%22id%22:%226cab6f046430e821128e4f225ee797c1089301b8%22%7D%2C%7B%22pointA%22:%5B9123.40625%2C8406.556640625%2C4%5D%2C%22pointB%22:%5B9121.3720703125%2C8350.1884765625%2C19%5D%2C%22type%22:%22line%22%2C%22id%22:%2263be1b3349495737080d501c80841301cc2f87f7%22%7D%2C%7B%22pointA%22:%5B9121.3720703125%2C8350.1884765625%2C19%5D%2C%22pointB%22:%5B9170.6318359375%2C8286.7109375%2C37%5D%2C%22type%22:%22line%22%2C%22id%22:%222b2df281b15082010fed1aecb82d315772331b3a%22%7D%2C%7B%22pointA%22:%5B9170.6318359375%2C8286.7109375%2C37%5D%2C%22pointB%22:%5B9222.939453125%2C8221.7060546875%2C61%5D%2C%22type%22:%22line%22%2C%22id%22:%22d37e071d7f44683a3f0860a8df6c63a236e56e77%22%7D%2C%7B%22pointA%22:%5B9222.939453125%2C8221.7060546875%2C61%5D%2C%22pointB%22:%5B9319.935546875%2C8188.69580078125%2C77%5D%2C%22type%22:%22line%22%2C%22id%22:%22d15b7b292d8c706ccc402e5e63839aa93d996373%22%7D%2C%7B%22pointA%22:%5B9319.935546875%2C8188.69580078125%2C77%5D%2C%22pointB%22:%5B9436.232421875%2C8151.62353515625%2C77%5D%2C%22type%22:%22line%22%2C%22id%22:%22b03c11db84104ba3ec70311144581fff9c9bcdf1%22%7D%2C%7B%22pointA%22:%5B9436.232421875%2C8151.62353515625%2C77%5D%2C%22pointB%22:%5B9495.6484375%2C8159.24072265625%2C86%5D%2C%22type%22:%22line%22%2C%22id%22:%22c5ede6cf9fea22cde1b6b8a3b4201b364fcc0c2e%22%7D%2C%7B%22pointA%22:%5B9495.6484375%2C8159.24072265625%2C86%5D%2C%22pointB%22:%5B9609.40234375%2C8231.8623046875%2C98%5D%2C%22type%22:%22line%22%2C%22id%22:%22a94aa697a02bd0d3aa5fe1f3fe22aaf39485aae3%22%7D%2C%7B%22pointA%22:%5B9609.40234375%2C8231.8623046875%2C98%5D%2C%22pointB%22:%5B9660.6923828125%2C8247.603515625%2C106%5D%2C%22type%22:%22line%22%2C%22id%22:%22b40a84dacfcb048a8d01fccf489d2063aca5b52e%22%7D%2C%7B%22pointA%22:%5B9660.6923828125%2C8247.603515625%2C106%5D%2C%22pointB%22:%5B9669.8330078125%2C8252.681640625%2C117%5D%2C%22type%22:%22line%22%2C%22id%22:%226127e76ddbcbd6512b808c089279157c4a944356%22%7D%2C%7B%22pointA%22:%5B9669.8330078125%2C8252.681640625%2C117%5D%2C%22pointB%22:%5B9670.3408203125%2C8253.189453125%2C134%5D%2C%22type%22:%22line%22%2C%22id%22:%228c448dcc67dd136df4920d19233559cac856ae11%22%7D%2C%7B%22pointA%22:%5B9670.3408203125%2C8253.189453125%2C134%5D%2C%22pointB%22:%5B9783.58984375%2C8250.6494140625%2C145%5D%2C%22type%22:%22line%22%2C%22id%22:%22ba2c2814260e11004955d5db15f872016d80cbca%22%7D%2C%7B%22pointA%22:%5B9783.58984375%2C8250.6494140625%2C145%5D%2C%22pointB%22:%5B9841.9892578125%2C8262.33203125%2C156%5D%2C%22type%22:%22line%22%2C%22id%22:%227265c9da15577e3791804e9dadd3c9b09da40f01%22%7D%2C%7B%22pointA%22:%5B9841.9892578125%2C8262.33203125%2C156%5D%2C%22pointB%22:%5B9904.453125%2C8254.712890625%2C185%5D%2C%22type%22:%22line%22%2C%22id%22:%22d1eec9f175fab15729fa58a9b53bcd0a74d58a90%22%7D%2C%7B%22pointA%22:%5B9904.453125%2C8254.712890625%2C185%5D%2C%22pointB%22:%5B9965.392578125%2C8287.2158203125%2C193%5D%2C%22type%22:%22line%22%2C%22id%22:%22f89e7fdfb063f9c9b6e11ed4e521e72e4240e915%22%7D%2C%7B%22pointA%22:%5B9965.392578125%2C8287.2158203125%2C193%5D%2C%22pointB%22:%5B10037.50390625%2C8323.2705078125%2C204%5D%2C%22type%22:%22line%22%2C%22id%22:%22bbfad02ccb1c0f2b6d3200b3bb54eb97ae1f7d12%22%7D%5D%2C%22name%22:%22annotation3%22%7D%2C%7B%22type%22:%22annotation%22%2C%22source%22:%7B%22url%22:%22local://annotations%22%2C%22transform%22:%7B%22outputDimensions%22:%7B%22x%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22y%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22z%22:%5B5.0000000000000004e-8%2C%22m%22%5D%7D%2C%22inputDimensions%22:%7B%220%22:%5B8e-9%2C%22m%22%5D%2C%221%22:%5B8e-9%2C%22m%22%5D%2C%222%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tool%22:%22annotateLine%22%2C%22tab%22:%22source%22%2C%22annotations%22:%5B%7B%22pointA%22:%5B8505.078125%2C9542.1513671875%2C0%5D%2C%22pointB%22:%5B8448.7080078125%2C9561.95703125%2C16%5D%2C%22type%22:%22line%22%2C%22id%22:%22f2ebfa927ccc0f4cba3fb975c2725016b9f62199%22%7D%2C%7B%22pointA%22:%5B8448.7080078125%2C9561.95703125%2C16%5D%2C%22pointB%22:%5B8437.5361328125%2C9572.619140625%2C24%5D%2C%22type%22:%22line%22%2C%22id%22:%22f67dcd8b6fa2b777e4eb63788ccad99095db3312%22%7D%2C%7B%22pointA%22:%5B8437.5361328125%2C9572.619140625%2C24%5D%2C%22pointB%22:%5B8337.9990234375%2C9630.513671875%2C34%5D%2C%22type%22:%22line%22%2C%22id%22:%22af14dd7b4a864eaf79d5b8f0386563236e312bab%22%7D%2C%7B%22pointA%22:%5B8337.9990234375%2C9630.513671875%2C34%5D%2C%22pointB%22:%5B8206.4677734375%2C9633.05078125%2C53%5D%2C%22type%22:%22line%22%2C%22id%22:%2219a752344c4e6f64f3e72ff471438bb1f26a5cd5%22%7D%2C%7B%22pointA%22:%5B8206.4677734375%2C9633.05078125%2C53%5D%2C%22pointB%22:%5B8180.5693359375%2C9685.359375%2C73%5D%2C%22type%22:%22line%22%2C%22id%22:%227f099937704a4f0dc7741ba91ea8f28d9c14fafb%22%7D%2C%7B%22pointA%22:%5B8180.5693359375%2C9685.359375%2C73%5D%2C%22pointB%22:%5B8148.5791015625%2C9685.353515625%2C91%5D%2C%22type%22:%22line%22%2C%22id%22:%22b5796dc2cac1eb81b93c843a0714782fdb4d5257%22%7D%2C%7B%22pointA%22:%5B8148.5791015625%2C9685.353515625%2C91%5D%2C%22pointB%22:%5B8108.4599609375%2C9706.17578125%2C118%5D%2C%22type%22:%22line%22%2C%22id%22:%226483a31e348f15d2384ba09fdb82d345b7844141%22%7D%2C%7B%22pointA%22:%5B8108.4599609375%2C9706.17578125%2C118%5D%2C%22pointB%22:%5B8043.45654296875%2C9735.884765625%2C148%5D%2C%22type%22:%22line%22%2C%22id%22:%22e7f62693afb422055f0f7f0e97d78f44989e474b%22%7D%2C%7B%22pointA%22:%5B8043.45654296875%2C9735.884765625%2C148%5D%2C%22pointB%22:%5B8086.623046875%2C9764.830078125%2C177%5D%2C%22type%22:%22line%22%2C%22id%22:%22d1d6e85ad8a6fa9370057011e1c48e06aa7d21a9%22%7D%2C%7B%22pointA%22:%5B8086.623046875%2C9764.830078125%2C177%5D%2C%22pointB%22:%5B8085.099609375%2C9762.7978515625%2C188%5D%2C%22type%22:%22line%22%2C%22id%22:%227339522d643af7601a953583bb0a3a063d147447%22%7D%2C%7B%22pointA%22:%5B8085.099609375%2C9762.7978515625%2C188%5D%2C%22pointB%22:%5B8050.05859375%2C9752.1337890625%2C204%5D%2C%22type%22:%22line%22%2C%22id%22:%22cdd9067c9904804472a92fb3723030d6c21a8b1b%22%7D%2C%7B%22pointA%22:%5B8050.05859375%2C9752.1337890625%2C204%5D%2C%22pointB%22:%5B8050.05859375%2C9752.1337890625%2C204%5D%2C%22type%22:%22line%22%2C%22id%22:%2297454d0205893a407da6dba53071895b53fb4ca3%22%7D%5D%2C%22name%22:%22annotation4%22%7D%2C%7B%22type%22:%22annotation%22%2C%22source%22:%7B%22url%22:%22local://annotations%22%2C%22transform%22:%7B%22outputDimensions%22:%7B%22x%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22y%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22z%22:%5B5.0000000000000004e-8%2C%22m%22%5D%7D%2C%22inputDimensions%22:%7B%220%22:%5B8e-9%2C%22m%22%5D%2C%221%22:%5B8e-9%2C%22m%22%5D%2C%222%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tool%22:%22annotateLine%22%2C%22tab%22:%22source%22%2C%22annotations%22:%5B%7B%22pointA%22:%5B9050.5302734375%2C9513.7119140625%2C0%5D%2C%22pointB%22:%5B9034.787109375%2C9486.2880859375%2C15%5D%2C%22type%22:%22line%22%2C%22id%22:%22ca5baab04533854033ccc6dda62ce57255aa15c2%22%7D%2C%7B%22pointA%22:%5B9034.787109375%2C9486.2880859375%2C15%5D%2C%22pointB%22:%5B9010.919921875%2C9446.171875%2C35%5D%2C%22type%22:%22line%22%2C%22id%22:%22a7b00e1c21d8453f6837ce593c30dfacdd75b7d6%22%7D%2C%7B%22pointA%22:%5B9010.919921875%2C9446.171875%2C35%5D%2C%22pointB%22:%5B9009.904296875%2C9409.0986328125%2C56%5D%2C%22type%22:%22line%22%2C%22id%22:%2292d04f9fa443c4d37598283f521189aa08255f7a%22%7D%2C%7B%22pointA%22:%5B9009.904296875%2C9409.0986328125%2C56%5D%2C%22pointB%22:%5B9011.935546875%2C9400.974609375%2C68%5D%2C%22type%22:%22line%22%2C%22id%22:%2242f2e4c91cc45aa1e0e66f09b48e33ccfa38ebc5%22%7D%2C%7B%22pointA%22:%5B9011.935546875%2C9400.974609375%2C68%5D%2C%22pointB%22:%5B9030.2177734375%2C9388.7861328125%2C85%5D%2C%22type%22:%22line%22%2C%22id%22:%226f1f05ff3cd8318b3c46d14f4b5b9551c0db6006%22%7D%2C%7B%22pointA%22:%5B9030.2177734375%2C9388.7861328125%2C85%5D%2C%22pointB%22:%5B9063.7353515625%2C9396.4033203125%2C110%5D%2C%22type%22:%22line%22%2C%22id%22:%220ffd5feeeb50af97303ae472066ecf721966e629%22%7D%2C%7B%22pointA%22:%5B9063.7353515625%2C9396.4033203125%2C110%5D%2C%22pointB%22:%5B9094.2060546875%2C9408.083984375%2C127%5D%2C%22type%22:%22line%22%2C%22id%22:%2220b262a19e142266075fb47dba61959233bf7ac9%22%7D%2C%7B%22pointA%22:%5B9094.2060546875%2C9408.083984375%2C127%5D%2C%22pointB%22:%5B9095.7294921875%2C9393.3564453125%2C147%5D%2C%22type%22:%22line%22%2C%22id%22:%22c315847ec3c30b9bf4aacbb0928231000ed527bc%22%7D%2C%7B%22pointA%22:%5B9095.7294921875%2C9393.3564453125%2C147%5D%2C%22pointB%22:%5B9081.509765625%2C9382.69140625%2C170%5D%2C%22type%22:%22line%22%2C%22id%22:%2229fdf89431bfee7e080490626b88778e6e5ff2fb%22%7D%2C%7B%22pointA%22:%5B9081.509765625%2C9382.69140625%2C170%5D%2C%22pointB%22:%5B9070.8447265625%2C9397.9267578125%2C190%5D%2C%22type%22:%22line%22%2C%22id%22:%22a18fd24420940ce4dca7d6553b5d056295cdac77%22%7D%2C%7B%22pointA%22:%5B9070.8447265625%2C9397.9267578125%2C190%5D%2C%22pointB%22:%5B9063.2275390625%2C9405.544921875%2C204%5D%2C%22type%22:%22line%22%2C%22id%22:%226bb5e994916c8e6f7738ab7130eeadc17dabf032%22%7D%5D%2C%22name%22:%22annotation5%22%7D%2C%7B%22type%22:%22annotation%22%2C%22source%22:%7B%22url%22:%22local://annotations%22%2C%22transform%22:%7B%22outputDimensions%22:%7B%22x%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22y%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22z%22:%5B5.0000000000000004e-8%2C%22m%22%5D%7D%2C%22inputDimensions%22:%7B%220%22:%5B8e-9%2C%22m%22%5D%2C%221%22:%5B8e-9%2C%22m%22%5D%2C%222%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tool%22:%22annotateLine%22%2C%22tab%22:%22source%22%2C%22annotations%22:%5B%7B%22pointA%22:%5B9501.015625%2C8498.4765625%2C0%5D%2C%22pointB%22:%5B9422.2998046875%2C8471.560546875%2C19%5D%2C%22type%22:%22line%22%2C%22id%22:%221e0c8a1f97b3435eb604bfc11ab34e934e8051dc%22%7D%2C%7B%22pointA%22:%5B9422.2998046875%2C8471.560546875%2C19%5D%2C%22pointB%22:%5B9373.546875%2C8420.7763671875%2C40%5D%2C%22type%22:%22line%22%2C%22id%22:%2202fedf73be24b1902656bc2e88d3a192ce8f6a33%22%7D%2C%7B%22pointA%22:%5B9373.546875%2C8420.7763671875%2C40%5D%2C%22pointB%22:%5B9302.44921875%2C8451.7578125%2C91%5D%2C%22type%22:%22line%22%2C%22id%22:%2268d7fd72eb86b28639876d75e9c449d0ba1a64fe%22%7D%2C%7B%22pointA%22:%5B9302.44921875%2C8451.7578125%2C91%5D%2C%22pointB%22:%5B9328.8583984375%2C8470.5498046875%2C106%5D%2C%22type%22:%22line%22%2C%22id%22:%221985cffa1d6e9e4737b3819e6f95ee4f9250ba36%22%7D%2C%7B%22pointA%22:%5B9328.8583984375%2C8470.5498046875%2C106%5D%2C%22pointB%22:%5B9312.607421875%2C8484.26171875%2C116%5D%2C%22type%22:%22line%22%2C%22id%22:%226f94ea010dfab3a9bbf586e1e5c4ceda40f81231%22%7D%2C%7B%22pointA%22:%5B9312.607421875%2C8484.26171875%2C116%5D%2C%22pointB%22:%5B9310.626953125%2C8562.001953125%2C116%5D%2C%22type%22:%22line%22%2C%22id%22:%227ba629f51a7927b0e300227cf04d35fb0753baf3%22%7D%2C%7B%22pointA%22:%5B9310.626953125%2C8562.001953125%2C116%5D%2C%22pointB%22:%5B9284.16796875%2C8573.1337890625%2C129%5D%2C%22type%22:%22line%22%2C%22id%22:%2226551308f989e0188de6412d71d3653f01cef7a3%22%7D%2C%7B%22pointA%22:%5B9284.16796875%2C8573.1337890625%2C129%5D%2C%22pointB%22:%5B9283.279296875%2C8571.6103515625%2C132%5D%2C%22type%22:%22line%22%2C%22id%22:%2225913899ab3131604f82303d1afcdef64347f3d1%22%7D%2C%7B%22pointA%22:%5B9283.279296875%2C8571.6103515625%2C132%5D%2C%22pointB%22:%5B9330.6337890625%2C8561.451171875%2C133%5D%2C%22type%22:%22line%22%2C%22id%22:%2271f59e104cf434a3a85568b7bdb9a3e8fd1b58e9%22%7D%2C%7B%22pointA%22:%5B9330.6337890625%2C8561.451171875%2C133%5D%2C%22pointB%22:%5B9328.0947265625%2C8563.482421875%2C137%5D%2C%22type%22:%22line%22%2C%22id%22:%2226c6122287c2b367d9e5dcc510d55fc18992fe30%22%7D%5D%2C%22name%22:%22annotation6%22%7D%2C%7B%22type%22:%22annotation%22%2C%22source%22:%7B%22url%22:%22local://annotations%22%2C%22transform%22:%7B%22outputDimensions%22:%7B%22x%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22y%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22z%22:%5B5.0000000000000004e-8%2C%22m%22%5D%7D%2C%22inputDimensions%22:%7B%220%22:%5B8e-9%2C%22m%22%5D%2C%221%22:%5B8e-9%2C%22m%22%5D%2C%222%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tool%22:%22annotateLine%22%2C%22tab%22:%22source%22%2C%22annotations%22:%5B%7B%22pointA%22:%5B9530.201171875%2C9037.580078125%2C0%5D%2C%22pointB%22:%5B9521.568359375%2C9022.3447265625%2C21%5D%2C%22type%22:%22line%22%2C%22id%22:%22b56729854ace003ffe505eaeca1ca5f2483b906d%22%7D%2C%7B%22pointA%22:%5B9521.568359375%2C9022.3447265625%2C21%5D%2C%22pointB%22:%5B9577.9384765625%2C9001.015625%2C84%5D%2C%22type%22:%22line%22%2C%22id%22:%22f539bb003ee8578dbeed593872c3954ba10b75cc%22%7D%2C%7B%22pointA%22:%5B9577.9384765625%2C9001.015625%2C84%5D%2C%22pointB%22:%5B9683.5703125%2C9054.8466796875%2C119%5D%2C%22type%22:%22line%22%2C%22id%22:%2293c8f062dfaae390b1b1dc597a070ac512c5dd66%22%7D%2C%7B%22pointA%22:%5B9683.5703125%2C9054.8466796875%2C119%5D%2C%22pointB%22:%5B9787.171875%2C9073.6357421875%2C151%5D%2C%22type%22:%22line%22%2C%22id%22:%22fa5a4b274a7f9c10f2b41e750d6155f59763e553%22%7D%2C%7B%22pointA%22:%5B9787.171875%2C9073.6357421875%2C151%5D%2C%22pointB%22:%5B9859.7939453125%2C9131.021484375%2C172%5D%2C%22type%22:%22line%22%2C%22id%22:%222a0b2411aa44ce646c91637d7ab64ea196e0a772%22%7D%2C%7B%22pointA%22:%5B9859.7939453125%2C9131.021484375%2C172%5D%2C%22pointB%22:%5B9954.759765625%2C9153.3671875%2C201%5D%2C%22type%22:%22line%22%2C%22id%22:%2280dfb46bee36ef6cbed2b1de0639f26bd760ce3b%22%7D%2C%7B%22pointA%22:%5B9954.759765625%2C9153.3671875%2C201%5D%2C%22pointB%22:%5B9957.806640625%2C9152.3515625%2C204%5D%2C%22type%22:%22line%22%2C%22id%22:%229e8a50b35de46d0ae26644603fad54f975221edf%22%7D%5D%2C%22name%22:%22annotation7%22%7D%2C%7B%22type%22:%22annotation%22%2C%22source%22:%7B%22url%22:%22local://annotations%22%2C%22transform%22:%7B%22outputDimensions%22:%7B%22x%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22y%22:%5B3.0000000000000004e-7%2C%22m%22%5D%2C%22z%22:%5B5.0000000000000004e-8%2C%22m%22%5D%7D%2C%22inputDimensions%22:%7B%220%22:%5B8e-9%2C%22m%22%5D%2C%221%22:%5B8e-9%2C%22m%22%5D%2C%222%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tool%22:%22annotateLine%22%2C%22tab%22:%22source%22%2C%22annotations%22:%5B%7B%22pointA%22:%5B9432.96484375%2C9485.2724609375%2C0%5D%2C%22pointB%22:%5B9421.7919921875%2C9442.10546875%2C15%5D%2C%22type%22:%22line%22%2C%22id%22:%223b4774299cbb38a376c9ea44f3a5304dec725241%22%7D%2C%7B%22pointA%22:%5B9421.7919921875%2C9442.10546875%2C15%5D%2C%22pointB%22:%5B9430.93359375%2C9411.63671875%2C39%5D%2C%22type%22:%22line%22%2C%22id%22:%22f6f8fc6c76b2d0db4130484b4ba57eaa56cf3222%22%7D%2C%7B%22pointA%22:%5B9430.93359375%2C9411.63671875%2C39%5D%2C%22pointB%22:%5B9500.5078125%2C9392.8466796875%2C62%5D%2C%22type%22:%22line%22%2C%22id%22:%2297d9a4814a27f377e96ebecdc5578b9c39c3807c%22%7D%2C%7B%22pointA%22:%5B9500.5078125%2C9392.8466796875%2C62%5D%2C%22pointB%22:%5B9538.087890625%2C9385.73828125%2C85%5D%2C%22type%22:%22line%22%2C%22id%22:%22e3093e8de4ea6812fa39ad5e7a76da34cf90f36c%22%7D%2C%7B%22pointA%22:%5B9538.087890625%2C9385.73828125%2C85%5D%2C%22pointB%22:%5B9543.166015625%2C9374.05859375%2C110%5D%2C%22type%22:%22line%22%2C%22id%22:%2203732e98bfac860f468c0bf66f787eb3c1f698bb%22%7D%2C%7B%22pointA%22:%5B9543.166015625%2C9374.05859375%2C110%5D%2C%22pointB%22:%5B9613.248046875%2C9362.3779296875%2C133%5D%2C%22type%22:%22line%22%2C%22id%22:%22b67cea59df99a2e2a581109d79e6f5d33cccf036%22%7D%2C%7B%22pointA%22:%5B9613.248046875%2C9362.3779296875%2C133%5D%2C%22pointB%22:%5B9748.3330078125%2C9401.9912109375%2C153%5D%2C%22type%22:%22line%22%2C%22id%22:%22e4a9a1d53a18a0102d09adf8ef67233fa88a4aed%22%7D%2C%7B%22pointA%22:%5B9748.3330078125%2C9401.9912109375%2C153%5D%2C%22pointB%22:%5B9795.0537109375%2C9462.9326171875%2C167%5D%2C%22type%22:%22line%22%2C%22id%22:%223213b01bcdcb5e2445a8404d89d3f039d739c484%22%7D%2C%7B%22pointA%22:%5B9795.0537109375%2C9462.9326171875%2C167%5D%2C%22pointB%22:%5B9858.5302734375%2C9562.4658203125%2C181%5D%2C%22type%22:%22line%22%2C%22id%22:%2277ba3bc3c2426d5c770c751bf7ead122ee714f55%22%7D%2C%7B%22pointA%22:%5B9858.5302734375%2C9562.4658203125%2C181%5D%2C%22pointB%22:%5B9875.79296875%2C9595.4716796875%2C182%5D%2C%22type%22:%22line%22%2C%22id%22:%22b53abd87e9ecc9d53d33dd7524c0a9744987c10e%22%7D%2C%7B%22pointA%22:%5B9875.79296875%2C9595.4716796875%2C182%5D%2C%22pointB%22:%5B9881.3798828125%2C9660.9775390625%2C181%5D%2C%22type%22:%22line%22%2C%22id%22:%22b57a02bb1c346694e9f172055b6377c1635d44b8%22%7D%2C%7B%22pointA%22:%5B9881.3798828125%2C9660.9775390625%2C181%5D%2C%22pointB%22:%5B9824.5009765625%2C9737.154296875%2C180%5D%2C%22type%22:%22line%22%2C%22id%22:%225df39b2468883d2cbc27a4d4b33df5857f4d1a27%22%7D%2C%7B%22pointA%22:%5B9824.5009765625%2C9737.154296875%2C180%5D%2C%22pointB%22:%5B9705.666015625%2C9740.2001953125%2C190%5D%2C%22type%22:%22line%22%2C%22id%22:%22e3b0880293b377f3bcc53d199d319e266aa9ca49%22%7D%2C%7B%22pointA%22:%5B9705.666015625%2C9740.2001953125%2C190%5D%2C%22pointB%22:%5B9628.9873046875%2C9742.23046875%2C192%5D%2C%22type%22:%22line%22%2C%22id%22:%2245f9df96aba1bab99a0a65986bfed99197730173%22%7D%2C%7B%22pointA%22:%5B9628.9873046875%2C9742.23046875%2C192%5D%2C%22pointB%22:%5B9511.6748046875%2C9772.1923828125%2C194%5D%2C%22type%22:%22line%22%2C%22id%22:%22a58c94fe9f16bccc66c2989af13a32dd617d8f6b%22%7D%2C%7B%22pointA%22:%5B9511.6748046875%2C9772.1923828125%2C194%5D%2C%22pointB%22:%5B9459.875%2C9794.5380859375%2C200%5D%2C%22type%22:%22line%22%2C%22id%22:%22da8fbaf3db27ffbb0a320de891d45683bc48e62e%22%7D%5D%2C%22name%22:%22annotation8%22%7D%5D%2C%22showSlices%22:false%2C%22layout%22:%224panel%22%7D'
        }]
    },

    "kristina2015": {
        name: "Micheva et al 2015",
        id: "kristina2015",
        public: true,
        date: Date.parse("July 6 2016"),
        hero: require("@/assets/projects/kristina2015.jpg"),
        media: require("@/assets/projects/kristina2015.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "kristina15/image/5HT1A_6th",
            xs: [913 - 1024, 913 + 1024],
            ys: [913 - 1024, 913 + 1024],
            zs: [20 - 5, 20 + 5]
        }],
        blurb: "Multi-channel array tomography data which is barrel cortex from an adult mouse (C57BL/6J).",
        description: ["Myelin is best known for its role in increasing the conduction velocity and metabolic efficiency of long-range excitatory axons. Accordingly, the myelin observed in neocortical gray matter is thought to mostly ensheath excitatory axons connecting to subcortical regions and distant cortical areas. Using independent analyses of light and electron microscopy data from mouse neocortex, we show that a surprisingly large fraction of cortical myelin (half the myelin in layer 2/3 and a quarter in layer 4) ensheathes axons of inhibitory neurons, specifically of parvalbumin-positive basket cells. This myelin differs significantly from that of excitatory axons in distribution and protein composition. Myelin on inhibitory axons is unlikely to meaningfully hasten the arrival of spikes at their pre-synaptic terminals, due to the patchy distribution and short path-lengths observed. Our results thus highlight the need for exploring alternative roles for myelin in neocortical circuits."],
        tags: ["Tomography", "neuroscience", "mouse", "EM", "AT", "cortex", "somatosensory cortex", "neurodata"],
        species: "mouse",
        brainloc: "Mouse-Somatosensory",
        publications: [{
            name: "A large fraction of neocortical myelin ensheathes axons of local inhibitory neurons",
            url: "https://doi.org/10.7554/eLife.15784",
            authors: [
                "Kristina D Micheva",
                "Dylan Wolman",
                "Brett D Mensh",
                "Elizabeth Pax",
                "JoAnn Buchanan",
                "Stephen J Smith",
                "Davi D Bock"
            ]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/kristina15/"
        }, {
            name: 'Visualize experiment image in Neuroglancer',
            url: "https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/5HT1A_6th%22,%22name%22:%225HT1A_6th%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/CR1_2ndA%22,%22name%22:%22CR1_2ndA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/dapi_1stA%22,%22name%22:%22dapi_1stA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/GABABR1_3rdA%22,%22name%22:%22GABABR1_3rdA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/GABARa1_4thA%22,%22name%22:%22GABARa1_4thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/GAD_6thA%22,%22name%22:%22GAD_6thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/gephyrin_1stA%22,%22name%22:%22gephyrin_1stA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/GluR2_2ndA%22,%22name%22:%22GluR2_2ndA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/NMDAR1_6thA%22,%22name%22:%22NMDAR1_6thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/NOS_9thA%22,%22name%22:%22NOS_9thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/NR2B_9thA%22,%22name%22:%22NR2B_9thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/psd_8thA%22,%22name%22:%22psd_8thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/PV_1stA%22,%22name%22:%22PV_1stA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/synapsinGP_5thA%22,%22name%22:%22synapsinGP_5thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/synapsinR_7thA%22,%22name%22:%22synapsinR_7thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/synapsinR_7thA_Anish_Synapses%22,%22name%22:%22synapsinR_7thA_Anish_Synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/synapsinR_7thA_Forrest_Synapses%22,%22name%22:%22synapsinR_7thA_Forrest_Synapses%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/Synpod_3rdA%22,%22name%22:%22Synpod_3rdA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/TH_5thA%22,%22name%22:%22TH_5thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/tubulin_8thA%22,%22name%22:%22tubulin_8thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/VAChT_4thA%22,%22name%22:%22VAChT_4thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/VGAT_5thA%22,%22name%22:%22VGAT_5thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/VGluT1_3rdA%22,%22name%22:%22VGluT1_3rdA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/VGluT1_8thA%22,%22name%22:%22VGluT1_8thA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/VGluT2_2ndA%22,%22name%22:%22VGluT2_2ndA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kristina15/image/VGluT3_1stA%22,%22name%22:%22VGluT3_1stA%22%7D%5D%7D"
        }]
    },

    "ishibashi2021": {
        name: "Ishibashi et al 2021",
        id: "ishibashi2021",
        public: true,
        date: Date.parse("September 29, 2021"),
        hero: require("@/assets/projects/ishibashi2021-hero.jpg"),
        media: require("@/assets/projects/ishibashi2021-thumb.jpg"),
        heroPosition: "top center",
        species: "mouse",
        brainloc: "Mouse-Retina",
        blurb: "Two FIB-SEM (focused ion beam-scanning electron microscopy) data sets of mouse OPL (the outer plexiform layer) with an isotropic resolution of 4nm, permitting imaging of electron-dense gap junctions",
        description: [
            `
Two FIB-SEM (focused ion beam-scanning electron microscopy) data sets of mouse OPL (the outer plexiform layer). OPL includes two photoreceptor cells, cone and rod. Gap junctions at contacts between cone and rod show dense staining. Locations of the darkly stained gap junctions in the EM are consistent with those of immuno-stained clusters of connexin 36 (Cx36) in light microscopy. The isotropic resolution of 4nm enable us to analyze size of the gap junctions.

These datasets were generated by groups at Oregon Health & Science University, and analyzed by groups at The University of Texas Health Science Center at Houston.


**Oregon Health & Science University**

* Catherine W. Morgans
* Sue A. Aicher
* James R. Carroll

**The University of Texas Health Science Center at Houston**

* Munenori Ishibashi
* Christophe P. Ribelayga
* Stephen C. Massey

            `
        ],
        tags: ["BRAIN Initiative", "NIH", "FIB-SEM", "EM", "SEM", "mouse", "retina", "OPL", "gap junction", "connexin", "Cx36", "photo receptor", "cone", "pedicle", "rod", "spherule"],
        publications: [{
            name: "Analysis of Rod/Cone Gap Junctions from the Reconstruction of Mouse Photoreceptor Terminals",
            url: "https://doi.org/10.7554/eLife.73039",
            authors: ["Munenori Ishibashi",
                "Joyce Keung",
                "Catherine W Morgans",
                "Sue A Aicher",
                "James R Carroll",
                "Joshua H Singer",
                "Li Jia",
                "Wei Li",
                "Iris Fahrenfort",
                "Christophe P Ribelayga",
                "Stephen C Massey",]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/ishibashi2021/"
        }],
        locations: [{
            name: "Ishibashi et al. 2021",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "ishibashi2021/EM1/em",
            xs: [2000 - 1024, 2000 + 1024],
            ys: [2000 - 1024, 2000 + 1024],
            zs: [100 - 5, 100 + 5],
            res: 0
        }, {
            name: "Ishibashi et al. 2021",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "ishibashi2021/EM2/em",
            xs: [2000 - 1024, 2000 + 1024],
            ys: [2000 - 1024, 2000 + 1024],
            zs: [100 - 5, 100 + 5],
            res: 0
        }],
    },


    "flywire": {
        name: "FlyWire",
        id: "flywire",
        public: true,
        date: Date.parse("August 30, 2021"),
        hero: require("@/assets/projects/flywire.jpg"),
        media: require("@/assets/projects/flywire.jpg"),
        heroPosition: "top center",
        species: "fruitfly",
        brainloc: "Drosophila-Whole",
        blurb: "A human-AI collaboration to map the fly connectome",
        description: [`

FlyWire is the first open, online community for connectomics of a whole brain (Dorkenwald et al. 2021), using a Drosophila brain imaged at Janelia ([Zheng, Lauritzen et al. 2018](https://www.cell.com/cell/fulltext/S0092-8674(18)30787-6)). In the Seung lab at Princeton, we applied deep learning methods to reconstruct putative neurons. Any players who would like to join(often but not always Drosophila neuroscientists) help correct errors of the automatic segmentation. By spring 2021, 160 scientists from 40 labs had proofread more than 15% of the brain (~15,000 neurons). FlyWire is a fully dynamic resource, displaying all edits to the community in real time.Users can reconstruct their circuits of interest, however all players are contributing to crowdsourcing a whole-brain connectome.

## Dataset

Female adult fly brain (FAFB) imaged at Janelia Research Campus (Zheng, Lauritzen et al. 2018)
Imaging method: TEM
Resolution: 8 × 8 × 40 nm

## Credits

Scientific publications derived in whole or in part from use of FlyWire should cite our preprint, Dorkenwald et al. 2020 and the website, [flywire.ai](https://flywire.ai). FlyWire is based on EM image data that was released by [Zheng, Lauritzen et al. 2018](https://www.cell.com/cell/fulltext/S0092-8674(18)30787-6) under a CC-BY-NC 4.0 International license, so this paper should also be cited in scientific publications. Data generated by FlyWire will be made publicly available to the scientific community, in accordance with FlyWire Principles. The segmentation approach is adapted from our earlier work, [Lee et al. 2017](https://arxiv.org/abs/1706.00120).

* Principal investigators: Sebastian Seung and Mala Murthy
* Community management: Claire McKellar
* Alignment: Thomas Macrina, Nico Kemnitz, Barak Nehoran, Sergiy Popovych, Zhen Jia, Eric Mitchell, Kai Li
* Design: Amy Sterling, Claire McKellar, Oluwaseun Ogedengbe, Chris Jordan, Marissa Sorek, Celia David, Devon Jones, Kai Kuehner, James Hebditch
* Segmentation: Kisuk Lee, Ran Lu, Jingpeng Wu
* Synapses: imported from the work of [Buhmann et al. 2019](https://www.biorxiv.org/content/10.1101/2019.12.12.874172v2). For using the “cleft_score” please also cite [Heinrich et al. 2018](https://link.springer.com/chapter/10.1007%2F978-3-030-00934-2_36). Transmitter predictions from [Eckstein et al. 2020](https://www.biorxiv.org/content/10.1101/2020.06.12.148775v1), with infrastructure contributed by Davi Bock, Gregory Jefferis and Eric Perlman. The prediction and dissemination of the neurotransmitter information was supported by NIH BRAIN Initiative (grant 1RF1MH120679-01); additional work including assembling ground truth data was also supported by Wellcome trust (203261/Z/16/Z).
* Proofreading platform: Sven Dorkenwald, Nico Kemnitz, Chris Jordan, Forrest Collman, William Silversmith, Manuel Castro, Akhilesh Halageri, Oluwaseun Ogedengbe, Jonathan Zung, Kai Kuehner, Casey Schneider-Mizell, FlyWire's frontend is an adapted fork of Neuroglancer by Jeremy Maitin-Shepard at Google.
* Training material: Claire McKellar, Diego Pacheco, Shruthi Ravindranath, Kathi Eichler
* Proofreading testers: Austin Burke, Jay Gager, James Hebditch, Selden Koolman, Merlin Moore, Sarah Morejohn, Ben Silverman, Kyle Willie, Ryan Willie, and Murthy Lab
* Annotation infrastructure (CAVE): Forrest Collman, Sven Dorkenwald, Casey Schneider-Mizell, Derrick Brittain, Chris Jordan
* Ground truth annotation: Szi-chieh Yu, Seung lab tracing team
* Image acquisition: [Zheng et al. 2018](https://www.cell.com/cell/fulltext/S0092-8674(18)30787-6?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0092867418307876%3Fshowall%3Dtrue).
* Montaging: Eric Trautman, Stephan Saalfeld
* Funding: NIH BRAIN Initiative RF1 MH117815-01 & Intelligence Advanced Research Projects Activity (IARPA) via Department of Interior/ Interior Business Center (DoI/IBC) contract numbers D16PC00003, D16PC00004, and D16PC0005. Disclaimer: The views and conclusions contained herein are those of the authors and should not be interpreted as necessarily representing the official policies or endorsements, either expressed or implied, of IARPA, DoI/IBC, or the U.S. Government. Additional support from the Mathers Foundation, as well as assistance from Google and Amazon.


With additional thanks to all the members of the Seung and Murthy labs, and the staff of Eyewire.


            `
        ],
        tags: ["BRAIN Initiative", "NIH", "Drosophila", "fruit fly", "fly", "fruitfly", "adult", "whole brain", "TEM", "EM", "connectomics", "AI", "segmentation"],
        publications: [{
            name: "FlyWire: Online community for whole-brain connectomics",
            url: "https://www.nature.com/articles/s41592-021-01330-0",
            authors: [
                "Sven Dorkenwald",
                "Claire E. McKellar",
                "Thomas Macrina",
                "Nico Kemnitz",
                "Kisuk Lee",
                "Ran Lu",
                "Jingpeng Wu",
                "Sergiy Popovych",
                "Eric Mitchell",
                "Barak Nehoran",
                "Zhen Jia",
                "J. Alexander Bae",
                "Shang Mu",
                "Dodam Ih",
                "Manuel Castro",
                "Oluwaseun Ogedengbe",
                "Akhilesh Halageri",
                "Kai Kuehner",
                "Amy R. Sterling",
                "Zoe Ashwood",
                "Jonathan Zung",
                "Derrick Brittain",
                "Forrest Collman",
                "Casey Schneider-Mizell",
                "Chris Jordan",
                "William Silversmith",
                "Christa Baker",
                "David Deutsch",
                "Lucas Encarnacion-Rivera",
                "Sandeep Kumar",
                "Austin Burke",
                "Doug Bland",
                "Jay Gager",
                "James Hebditch",
                "Selden Koolman",
                "Merlin Moore",
                "Sarah Morejohn",
                "Ben Silverman",
                "Kyle Willie",
                "Ryan Willie",
                "Szi-chieh Yu",
                "Mala Murthy",
                "H. Sebastian Seung",
            ]
        }],
        links: [{
            name: "Learn to play and make edits",
            url: "https://flywire.ai"
        }, {
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/flywire/"
        },],
        neuroglancer: {
            name: "Visualize experiment fafbv14 in Neuroglancer",
            url: "https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B4.0,4.0,40.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/flywire/fafbv14%22,%22name%22:%22em%22%7D%5D%7D"
        },
        locations: [{
            name: "FlyWire Example Cutout",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "flywire/fafbv14/em",
            xs: [100000 - 1024, 100000 + 1024],
            ys: [46000 - 1024, 46000 + 1024],
            zs: [2600 - 5, 2600 + 5],
            res: 0
        }],
    },

    "microns-minnie": {
        name: "IARPA MICrONS Minnie",
        id: "microns-minnie",
        public: true,
        date: Date.parse("July 31, 2021"),
        media: require("@/assets/projects/microns-minnie-2021.jpg"),
        heroPosition: "center center",
        hero: require("@/assets/projects/microns-minnie-2021-hero.jpg"),
        species: "mouse",
        brainloc: "Mouse-Minnie",
        blurb: "High-resolution electron microscopy, segmentation, and morphological reconstruction of cortical circuits within the visual cortex of mouse.",
        description: [`
The [Machine Intelligence from Cortical Networks (MICrONS)](https://www.iarpa.gov/index.php/research-programs/microns) program seeks to revolutionize machine learning by reverse-engineering the algorithms of the brain.It is an ambitious program to map the function and connectivity of cortical circuits, using high throughput imaging technologies, with the goal of providing insights into the computational principles that underlie cortical function in order to advance the next generation of machine learning algorithms.

# Dataset

The imagery was reconstructed in two portions, referred to internally by their nicknames minnie65 and minnie35 reflecting their relative portions of the total data.  The two portions have now been aligned across an interruption in sectioning.

This dataset consists of Electron Microscopy (EM) image data, segmentation data and their respective meshes of the mouse's visual cortex circuitry. The dataset is 1.4mm x 0.87mm x 0.84mm volume of cortex in a P60 mouse.

As with images, cloud-volume and intern can be used to download voxels of segmentation from the following locations.  Although the images are now aligned, minnie65 was segmented first and has undergone significant proofreading.  The minnie65 segmentation is a flattened snapshot of the state of proofreading as of June 11, 2021, referred to as version 117. The minnie35 segmentation has not undergone any proofreading and is being released as is.


# [MICrONS Team](https://microns-explorer.org/team)

These data were collected and generated by a consortium of laboratories led by groups at the Allen Institute for Brain Science, Princeton University, and Baylor College of Medicine, with support from a broad array of teams.

## Minnie65 Manifest
<div class="table-container">
    <table class="table is-striped is-hoverable">
    <thead>
    <tr>
        <th>Name</th>
        <th>AWS Cloudpath</th>
        <th>Type</th>
        <th>Size</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Fine-aligned Image</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie65/em</td>
        <td>Image (Sharded Precompute)</td>
        <td>117 TB</td>
    </tr>
    <tr>
        <td>Automated Segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie65/autoseg</td>
        <td>Compressed Segmentation (Precompute)</td>
        <td>12 TB</td>
    </tr>
    <tr>
        <td>Proofread Segmentation (v117)</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie65/seg</td>
        <td>Compressed Segmentation (Sharded Precompute)</td>
        <td>12 TB</td>
    </tr>
    <tr>
        <td>Watershed Segmentation </td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie65/ws</td>
        <td>Compressed Segmentation (Precompute)</td>
        <td>42 TB</td>
    </tr>
    <tr>
        <td>PSD Segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie65/clefts</td>
        <td>Compressed Segmentation (Precompute)</td>
        <td>127 GB</td>
    </tr>
    <tr>
        <td>Nucleus Segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie65/nuclei</td>
        <td>Compressed Segmentation (Precompute)</td>
        <td>27 GB</td>
    </tr>
    <tr>
        <td>Nucleus Detection / Cell Typing</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie65/nucleus_detection/nucleus_detection_v0.csv</td>
        <td>CSV</td>
        <td>11 MB</td>
    </tr>
    <tr>
        <td>Nucleus Neuron Classification</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie65/nucleus_neuron_classification/nucleus_neuron_svm.csv</td>
        <td>CSV</td>
        <td>13 MB</td>
    </tr>
    <tr>
        <td>Synapse Graph</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie65/synapse_graph/synapses_pni_2.csv</td>
        <td>CSV</td>
        <td>48 GB</td>
    </tr>
    <tr>
        <td>MicroCT</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/microCT</td>
        <td>ZIP</td>
        <td>13 GB</td>
    </tr>
    </tbody>
    </table>
</div>

## Minnie35 Manifest
<div class="table-container">
    <table class="table is-striped is-hoverable">
    <thead>
    <tr>
        <th>Name</th>
        <th>AWS Cloudpath</th>
        <th>Type</th>
        <th>Size</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Fine aligned image</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie35/em</td>
        <td>Image (Precompute)</td>
        <td>55 TB</td>
    </tr>
    <tr>
        <td>Automated segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie35/autoseg</td>
        <td>Compressed Segmentation (Precompute)</td>
        <td>10 TB</td>
    </tr>
    <tr>
        <td>Proofread Segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie35/seg</td>
        <td>Compressed Segmentation (Sharded Precompute)</td>
        <td>10 TB</td>
    </tr>
    <tr>
        <td>Watershed Segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie35/ws</td>
        <td>Compressed Segmentation (Sharded Precompute)</td>
        <td>22 TB</td>
    </tr>
    <tr>
        <td>PSD segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/minnie35/clefts</td>
        <td>Compressed Segmentation (Precompute)</td>
        <td>94 GB</td>
    </tr>
    </tbody>
    </table>
</div>

## Functional Data
<div class="table-container">
    <table class="table is-striped is-hoverable">
    <thead>
    <tr>
        <th>Name</th>
        <th>AWS Cloudpath</th>
        <th>Type</th>
        <th>Size</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Stimulus Presentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/functional_data/stimulus_movies</td>
        <td>AVI (Multiple)</td>
        <td>186.2 GB</td>
    </tr>
    <tr>
        <td>Functional Imaging Scans</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/functional_data/two_photon_functional_scans</td>
        <td>TIFF (Multiple)</td>
        <td>1.3 TB</td>
    </tr>
    <tr>
        <td>Structural Imaging Stack</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/functional_data/two_photon_structural_stacks</td>
        <td>TIFF</td>
        <td>10 GB</td>
    </tr>
    <tr>
        <td>DataJoint Database</td>
        <td>s3://bossdb-open-data/iarpa_microns/minnie/functional_data/two_photon_processed_data_and_metadata/</td>
        <td>SQL, Containers</td>
        <td>205 GB</td>
    </tr>
    </tbody>
    </table>
</div>

### Allen Institute

* **Scientific Management:** Clay Reid, Nuno Maçarico Da Costa
* **Co-registration:** Nuno Maçarico da Costa, Adam Bleckert, Marc Takeno
* **Tissue Preparation:** Joann Buchanan, Marc Takeno, Nuno Maçarico da Costa
* **Sectioning:** Agnes Bodor, Adam Bleckert
* **EM Stitching and Rough Alignment:** Gayathri Mahalingam, Russel Torres, Yang Li
* **TEM Design and Maintenance:** Derrick Brittain, Clay Reid
* **TEM Operation:** Derrick Brittain, Wenjing Yin, Adam Bleckert, Marc Takeno, Daniel Bumbarger, Nuno Maçarico Da Costa
* **Connectome Versioning System:** Forrest Collman, Casey Schneider-Mizell
* **Analysis Infrastructure:** Forrest Collman, Casey Schneider-Mizell, Derrick Brittain
* **Proofreading:** Agnes Bodor, Nuno Maçarico da Costa, Casey Schneider-Mizell, Forrest Collman
* **Project Management:** Lynne Becker, Shelby Suckow

### Princeton University

* **Scientific Management:** Sebastian Seung
* **EM Stitching and Rough Alignment:** Thomas Macrina, Dodam Ih
* **EM Fine Alignment:** Thomas Macrina, Will Wong
* **Neuron segmentation:** Kisuk Lee, Jingpeng Wu
* **Agglomeration:**  Ran Lu
* **Synapse Detection:** Nicholas Turner, Jingpeng Wu
* **Neuroglancer Frontend:**  Nico Kemnitz, Manuel Castro
* **Proofreading Backend:** Sven Dorkenwald, Nico Kemnitz, Chris S. Jordan
* **Cloud Data Interface:** William Silversmith, Ignacio Tartavull
* **Connectome Versioning System:** Sven Dorkenwald
* **Analysis Infrastructure:** Sven Dorkenwald
* **Proofreading:** Szi-Chieh Yu, Alyssa Wilson, Sven Dorkenwald

### Baylor College of Medicine

* **Functional Imaging Experimental Design:** Andreas Tolias, Xaq Pitkow, Jacob Reimer, Paul Fahey
* **Mouse Husbandry / Transgenics:** Paul Fahey, Jacob Reimer, Zheng H. Tan
* **Animal Surgery:** Jacob Reimer
* **Microscope and Optics:** Emmanouil Froudarakis, Jacob Reimer, Chris Xu, Tianyu Wang, Dimitre Ouzounov, Aaron Mok
* **Calcium Imaging and Behavioral Data Collection:** Paul Fahey, Jacob Reimer, Emmanouil Froudarakis, Saumil Patel
* **Calcium Imaging Processing:** Eric Cobos, Paul Fahey, Jacob Reimer, Dimitri Yatsenko
* **Behavioral Processing:** Eric Cobos, Paul Fahey, Jacob Reimer, Taliah Muhammad, Fabian Sinz, Donnie Kim
* **Functional Data Management:** Anthony Ramos, Stelios Papadopoulos, Christos Papadopoulos, Chris Turner, Paul Fahey, Dimitri Yatsenko
* **Parametric Stimulus:** Dimitri Yatsenko, Xaq Pitkow, Rajkumar Raju
* **Natural Stimulus:** Emmanouil Froudarakis, Jacob Reimer, Fabian Sinz
* **Rendered Stimulus:** Xaq Pitkow, Edgar Walker, Mitja Prelovsek (contractor)
* **Manual Matching:** Stelios Papadopoulos, Paul Fahey, Anthony Ramos, Erick Cobos, Fei Ye, Sarah McReynolds, Elanine Miranda, Mahaly Baptiste, Zane Hanson, Justin Singh

### Johns Hopkins University Applied Physics Laboratory

* **MICrONS Test and Evaluation — Program Manager:** Joan Hoffmann
* **MICrONS Test and Evaluation — Project Manager:** Brock Wester
* **MICrONS Test and Evaluation — Technical Lead:** William Gray-Roncal
* **MICrONS Test and Evaluation — Evaluation Task Lead:** Caitlyn Bishop
* **MICrONS Test and Evaluation — Petascale Storage Task Lead:** Sandy Hider

### Intelligence Advanced Research Projects Activity (IARPA)

* **MICrONS Program Management:** David A. Markowitz, Jacob Vogelstein

## [Acknowledgements](https://microns-explorer.org/acknowledgments)

#### Allen Institute
> We would like to thank Hongkui Zeng, Ed Lein, Christof Koch, and Allan Jones for their support and leadership. We thank John Philips, Sill Coulter, and the Program Management team at the Allen Institute for Brain Science for their guidance for project strategy and operations.  We thank the Manufacturing and Process Engineering team at the Allen Institute for Brain Science for their help in implementing the EM imaging and sectioning pipeline. We thank Brian Youngstrom, Stuart Kendrick, Nathaniel Middleton, Scott Harrison, and the Allen Institute IT team for support with infrastructure, data management and data transfer. We thank the Facilities, Finance, and Legal teams at the Allen Institute for Brain Science for their support on the MICrONS contract.

#### Princeton University
> We would like to thank Garrett McGrath for computer system administration, and Larry and Janet Jackel for project administration.

#### Connectomics at Google

> We would like to thank the Connectomics team at Google, especially Jeremy Maitin-Shepard, for the development of neuroglancer, a critical tool for visualizing and sharing the data.
>
> We would also like to thank Viren Jain, Peter Li, and Google AI for supporting the development of the computational infrastructure behind this effort through helpful discussions and computing support.

## [Funding](https://microns-explorer.org/funding)

* This data collection was coordinated and funded by the Intelligence Advanced Research Projects Activity (IARPA) via Department of Interior / Interior Business Center (DoI / IBC) under contracts D16PC00003 (Baylor), D16PC00004 (Allen), and D16PC0005 (Princeton). The U.S.Government is authorized to reproduce and distribute reprints for Governmental purposes notwithstanding any copyright annotation thereon.Disclaimer: The views and conclusions contained herein are those of the authors and should not be interpreted as necessarily representing the official policies or endorsements, either expressed or implied, of IARPA, DoI / IBC, or the U.S. Government.
* The Allen Institute has provided internal support to fund staff and facilities to make this project and data release possible. We thank the Allen Institute founder, Paul G Allen, for his vision, encouragement, and support.
* The Princeton team is grateful for support from the Mathers and Samsung Foundations, ARO W911NF-12-1-0594, and assistance from Google, Amazon, and Intel.
* Research was also supported by the National Institute of Mental Health and National Institute of Neurological Disorders And Stroke under Award Numbers NIH/NINDS U19 NS104648, NIH/NEI R01 EY027036, NIH/NIMH U01 MH114824, NIH/NINDS R01NS104926, NIH/NIMH RF1MH117815 and U19MH114830. The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health.
* Research has also been funded by the NSF NeuroNex program through grant DBI-1707400.

        `,],
        tags: ["BRAIN Initiative", "IARPA", "connectomics", "mouse", "segmentation", "TEM", "EM", "meshes", "visual cortex", "V1", "layer 2/3", "neuroscience", "neuroanatomy", "microns"],
        publications: [{
            name: "IARPA MICrONS Program Publications",
            url: "https://www.microns-explorer.org/publications",
            authors: [
                "(numerous publications & authors)"
            ]
        }, {
            name: "Binary and analog variation of synapses between cortical pyramidal neurons",
            url: " https://doi.org/10.1101/2019.12.29.890319",
            authors: ["S. Dorkenwald", "N.L. Turner", "T. Macrina", "K. Lee", "R. Lu", "J. Wu", "A.L. Bodor", "A.A. Bleckert", "D. Brittain", "N. Kemnitz"]
        }, {
            name: "Chandelier cell anatomy and function suggest a variably distributed but common signal",
            url: " https://doi.org/10.1101/2020.03.31.018952",
            authors: ["C. Schneider-Mizell", "A.L. Bodor", "F. Collman", "D. Brittain", "A.A. Bleckert", "S. Dorkenwald", "N.L. Turner", "T. Macrina", "K. Lee", "R. Lu", "J. Wu"]
        }],

        links: [{
            name: "MICrONS Explorer Website",
            url: "https://microns-explorer.org/"
        }, {
            name: "Visualize in Minnie65 in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B8e-9%2C%22m%22%5D%2C%22y%22:%5B8e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B120172.5625%2C103932.2578125%2C21365.646484375%5D%2C%22crossSectionScale%22:1%2C%22crossSectionDepth%22:-7.67205949975856%2C%22projectionScale%22:262144%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/minnie/minnie65/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/minnie/minnie65/seg%22%2C%22tab%22:%22source%22%2C%22name%22:%22seg%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/minnie/minnie65/clefts%22%2C%22tab%22:%22source%22%2C%22name%22:%22clefts%22%2C%22visible%22:false%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/minnie/minnie65/nuclei%22%2C%22tab%22:%22source%22%2C%22name%22:%22nuclei%22%2C%22visible%22:false%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22nuclei%22%7D%2C%22layout%22:%224panel%22%7D"
        }, {
            name: "Visualize in Minnie35 in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B8e-9%2C%22m%22%5D%2C%22y%22:%5B8e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B131072.5%2C131073.5%2C11383.5%5D%2C%22crossSectionScale%22:1%2C%22projectionScale%22:262144%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/minnie/minnie35/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/minnie/minnie35/seg%22%2C%22tab%22:%22source%22%2C%22name%22:%22seg%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/minnie/minnie35/clefts%22%2C%22tab%22:%22source%22%2C%22name%22:%22clefts%22%2C%22visible%22:false%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22clefts%22%7D%2C%22layout%22:%224panel%22%7D"
        }, {
            name: "Stimulus Movies Technical Documentation",
            url: "https://bossdb-open-data.s3.amazonaws.com/iarpa_microns/minnie/functional_data/stimulus_movies/stimulus_movies_technical_documentation_v4.pdf"
        }, {
            name: "Two Photon Functional Scans Technical Documentation",
            url: "https://bossdb-open-data.s3.amazonaws.com/iarpa_microns/minnie/functional_data/two_photon_functional_scans/two_photon_functional_scans_technical_documentation_v2.pdf"
        }, {
            name: "Two Photon Structural Stacks Technical Documentation",
            url: "https://bossdb-open-data.s3.amazonaws.com/iarpa_microns/minnie/functional_data/two_photon_structural_stacks/two_photon_structural_stacks_technical_documentation_v1.pdf"
        }, {
            name: "Two Photon Processed Data and Metadata Technical Documentation",
            url: "https://bossdb-open-data.s3.amazonaws.com/iarpa_microns/minnie/functional_data/two_photon_processed_data_and_metadata/database_v8/two_photon_processed_data_and_metadata_technical_documentation_v8.pdf"
        }],
        locations: [{
            name: "Minnie65 EM",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "microns/minnie65_8x8x40/em",
            xs: [79190, 79190 + 1024],
            ys: [56298, 56298 + 1024],
            zs: [19000, 19000 + 16],
            res: 0
        },
        {
            name: "Minnie35 EM",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "microns/minnie35_8x8x40/em",
            xs: [79190, 79190 + 1024],
            ys: [56298, 56298 + 1024],
            zs: [19000, 19000 + 16],
            res: 0
        },
        ],
        segmentation: [{
            sourceLocation: 0,
            name: "Minnie65 Segmentation",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "microns/minnie65_8x8x40/seg",
            res: 0
        },
        {
            sourceLocation: 0,
            name: "Minnie35 Segmentation",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "microns/minnie35_8x8x40/seg",
            res: 0
        }],
        connectomes: [{
            name: "Minnie65 (48 GB)",
            type: "CSV",
            url: "https://bossdb-open-data.s3.amazonaws.com/iarpa_microns/minnie/minnie65/synapse_graph/synapses_pni_2.csv"
        },
        {
            name: "Minnie35 (13 GB)",
            type: "CSV",
            url: "https://bossdb-open-data.s3.amazonaws.com/iarpa_microns/minnie/minnie35/synapse_graph/assigned.csv.gz"
        }
        ],
        mesh: [{}]
    },

    "microns-pinky": {
        name: "IARPA MICrONS Pinky100",
        id: "microns-pinky",
        public: true,
        date: Date.parse("Feb 16, 2021"),
        media: require("@/assets/projects/microns-pinky-2021-hero.jpeg"),
        heroPosition: "center center",
        hero: require("@/assets/projects/microns-pinky-2021.jpg"),
        species: "mouse",
        brainloc: "Mouse-Pinky100",
        blurb: "High-resolution electron microscopy, segmentation, and morphological reconstruction of cortical circuits within the visual cortex of mouse.",
        description: [
            `
The [Machine Intelligence from Cortical Networks (MICrONS)](https://www.iarpa.gov/index.php/research-programs/microns) program seeks to revolutionize machine learning by reverse-engineering the algorithms of the brain.It is an ambitious program to map the function and connectivity of cortical circuits, using high throughput imaging technologies, with the goal of providing insights into the computational principles that underlie cortical function in order to advance the next generation of machine learning algorithms.

# Dataset

This dataset consists of Electron Microscopy (EM) image data, segmentation data, and corresponding meshes of the cortical circuitry from the mouse visual cortex.  This dataset was acquired and analyzed in the initial phase of the MICrONS project.  It is a 250 x 140 x 90 µm volume from layer 2/3 of a P36 male mouse visual cortex imaged at 3.58 x 3.58 x 40 nm resolution with a dense segmentation, proofreading of all dendrites and axons of the 364 excitatory neurons in the volume, and dense synapse detection.

[Release notes](https://microns-explorer.org/v185-release-notes) for the current version (v185) of the dataset.

# [MICrONS Team](https://microns-explorer.org/team)

## Pinky Manifest
<div class="table-container">
    <table class="table is-striped is-hoverable">
    <thead>
    <tr>
        <th>Name</th>
        <th>AWS Cloudpath</th>
        <th>Type</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Fine-aligned Image</td>
        <td>s3://bossdb-open-data/iarpa_microns/pinky/em</td>
        <td>Image (Sharded Precompute)</td>
    </tr>
    <tr>
        <td>Automated Segmentation</td>
        <td>s3://bossdb-open-data/iarpa_microns/pinky/seg</td>
        <td>Compressed Segmentation (Precompute)</td>
    </tr>
    </tbody>
    </table>
</div>

These data were collected and generated by a consortium of laboratories led by groups at the Allen Institute for Brain Science, Princeton University, and Baylor College of Medicine, with support from a broad array of teams.

### Allen Institute

* **Scientific Management:** Clay Reid, Nuno Maçarico Da Costa
* **Co-registration:** Nuno Maçarico da Costa, Adam Bleckert, Marc Takeno
* **Tissue Preparation:** Joann Buchanan, Marc Takeno, Nuno Maçarico da Costa
* **Sectioning:** Agnes Bodor, Adam Bleckert
* **EM Stitching and Rough Alignment:** Gayathri Mahalingam, Russel Torres, Yang Li
* **TEM Design and Maintenance:** Derrick Brittain, Clay Reid
* **TEM Operation:** Derrick Brittain, Wenjing Yin, Adam Bleckert, Marc Takeno, Daniel Bumbarger, Nuno Maçarico Da Costa
* **Connectome Versioning System:** Forrest Collman, Casey Schneider-Mizell
* **Analysis Infrastructure:** Forrest Collman, Casey Schneider-Mizell, Derrick Brittain
* **Proofreading:** Agnes Bodor, Nuno Maçarico da Costa, Casey Schneider-Mizell, Forrest Collman
* **Project Management:** Lynne Becker, Shelby Suckow

### Princeton University

* **Scientific Management:** Sebastian Seung
* **EM Stitching and Rough Alignment:** Thomas Macrina, Dodam Ih
* **EM Fine Alignment:** Thomas Macrina, Will Wong
* **Neuron segmentation:** Kisuk Lee, Jingpeng Wu
* **Agglomeration:**  Ran Lu
* **Synapse Detection:** Nicholas Turner, Jingpeng Wu
* **Neuroglancer Frontend:**  Nico Kemnitz, Manuel Castro
* **Proofreading Backend:** Sven Dorkenwald, Nico Kemnitz, Chris S. Jordan
* **Cloud Data Interface:** William Silversmith, Ignacio Tartavull
* **Connectome Versioning System:** Sven Dorkenwald
* **Analysis Infrastructure:** Sven Dorkenwald
* **Proofreading:** Szi-Chieh Yu, Alyssa Wilson, Sven Dorkenwald

### Baylor College of Medicine

* **Scientific Management:** Andreas S. Tolias, Jacob Reimer
* **Functional Imaging:** Emmanouil Froudarakis, Jacob Reimer, Andreas Tolias

### Johns Hopkins University Applied Physics Laboratory

* **MICrONS Test and Evaluation — Program Manager:** Joan Hoffmann
* **MICrONS Test and Evaluation — Project Manager:** Brock Wester
* **MICrONS Test and Evaluation — Technical Lead:** William Gray-Roncal
* **MICrONS Test and Evaluation — Evaluation Task Lead:** Caitlyn Bishop
* **MICrONS Test and Evaluation — Petascale Storage Task Lead:** Sandy Hider

### Intelligence Advanced Research Projects Activity (IARPA)

* **MICrONS Program Management:** David A. Markowitz, Jacob Vogelstein

## [Acknowledgements](https://microns-explorer.org/acknowledgments)

#### Allen Institute
> We would like to thank Hongkui Zeng, Ed Lein, Christof Koch, and Allan Jones for their support and leadership. We thank John Philips, Sill Coulter, and the Program Management team at the Allen Institute for Brain Science for their guidance for project strategy and operations.  We thank the Manufacturing and Process Engineering team at the Allen Institute for Brain Science for their help in implementing the EM imaging and sectioning pipeline. We thank Brian Youngstrom, Stuart Kendrick, Nathaniel Middleton, Scott Harrison, and the Allen Institute IT team for support with infrastructure, data management and data transfer. We thank the Facilities, Finance, and Legal teams at the Allen Institute for Brain Science for their support on the MICrONS contract.

#### Princeton University
> We would like to thank Garrett McGrath for computer system administration, and Larry and Janet Jackel for project administration.

#### Connectomics at Google

> We would like to thank the Connectomics team at Google, especially Jeremy Maitin-Shepard, for the development of neuroglancer, a critical tool for visualizing and sharing the data.
>
> We would also like to thank Viren Jain, Peter Li, and Google AI for supporting the development of the computational infrastructure behind this effort through helpful discussions and computing support.

## [Funding](https://microns-explorer.org/funding)

* This data collection was coordinated and funded by the Intelligence Advanced Research Projects Activity (IARPA) via Department of Interior / Interior Business Center (DoI / IBC) under contracts D16PC00003 (Baylor), D16PC00004 (Allen), and D16PC0005 (Princeton). The U.S.Government is authorized to reproduce and distribute reprints for Governmental purposes notwithstanding any copyright annotation thereon.Disclaimer: The views and conclusions contained herein are those of the authors and should not be interpreted as necessarily representing the official policies or endorsements, either expressed or implied, of IARPA, DoI / IBC, or the U.S. Government.
* The Allen Institute has provided internal support to fund staff and facilities to make this project and data release possible. We thank the Allen Institute founder, Paul G Allen, for his vision, encouragement, and support.
* The Princeton team is grateful for support from the Mathers and Samsung Foundations, ARO W911NF-12-1-0594, and assistance from Google, Amazon, and Intel.
* Research was also supported by the National Institute of Mental Health and National Institute of Neurological Disorders And Stroke under Award Numbers NIH/NINDS U19 NS104648, NIH/NEI R01 EY027036, NIH/NIMH U01 MH114824, NIH/NINDS R01NS104926, NIH/NIMH RF1MH117815 and U19MH114830. The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health.
* Research has also been funded by the NSF NeuroNex program through grant DBI-1707400.

`,

        ],
        tags: ["BRAIN Initiative", "IARPA", "connectomics", "mouse", "segmentation", "TEM", "EM", "meshes", "visual cortex", "V1", "layer 2/3", "neuroscience", "neuroanatomy", "microns"],
        publications: [{
            name: "IARPA MICrONS Program Publications",
            url: "https://www.microns-explorer.org/publications",
            authors: [
                "(numerous publications & authors)"
            ]
        }, {
            name: "Binary and analog variation of synapses between cortical pyramidal neurons",
            url: " https://doi.org/10.1101/2019.12.29.890319",
            authors: ["S. Dorkenwald", "N.L. Turner", "T. Macrina", "K. Lee", "R. Lu", "J. Wu", "A.L. Bodor", "A.A. Bleckert", "D. Brittain", "N. Kemnitz"]
        }, {
            name: "Chandelier cell anatomy and function suggest a variably distributed but common signal",
            url: " https://doi.org/10.1101/2020.03.31.018952",
            authors: ["C. Schneider-Mizell", "A.L. Bodor", "F. Collman", "D. Brittain", "A.A. Bleckert", "S. Dorkenwald", "N.L. Turner", "T. Macrina", "K. Lee", "R. Lu", "J. Wu"]
        }],

        neuroglancer: {
            name: "Visualize in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B62464.5%2C41984.5%2C1096.5%5D%2C%22crossSectionScale%22:1%2C%22projectionScale%22:131072%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/pinky/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/iarpa_microns/pinky/seg%22%2C%22tab%22:%22source%22%2C%22name%22:%22seg%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22seg%22%7D%2C%22layout%22:%224panel%22%7D"
        },

        links: [{
            name: "MICrONS Explorer Website",
            url: "https://microns-explorer.org/"
        }, {
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/microns/pinky100"
        }],
        locations: [{
            name: "Pinky100 EM",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "microns/pinky100/em",
            xs: [79190, 79190 + 1024],
            ys: [56298, 56298 + 1024],
            zs: [824, 824 + 6],
            res: 0
        }],
        segmentation: [{
            sourceLocation: 0,
            name: "Pinky100 Segmentation",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "microns/pinky100/segmentation",
            res: 0
        }],
        connectomes: [{
            name: "Pinky100 v185",
            type: "MotifStudio",
            url: "https://motifstudio.bossdb.org/?mS=%2523%2520Reciprocal%2520connections%250A%250AA%2520-%253E%2520B%250AB%2520-%253E%2520A%250A&selectedDataset=MICrONS%2520Pinky100%2520v185"
        }],
        mesh: [{}]
    },

    "kutten2016": {
        name: "Kutten et al 2016",
        id: "kutten2016",
        public: true,
        date: Date.parse("April 29, 2016"),
        hero: require("@/assets/projects/kutten2016.jpg"),
        media: require("@/assets/projects/kutten2016.jpg"),
        species: "mouse",
        brainloc: "Mouse-WholeBrain1",
        blurb: "Deformably registering and annotating whole CLARITY brains to an atlas via masked LDDMM.",
        description: ["The CLARITY method renders brains optically transparent to enable high-resolution imaging in the structurally intact brain. Anatomically annotating CLARITY brains is necessary for discovering which regions contain signals of interest. Manually annotating whole-brain, terabyte CLARITY images is difficult, time-consuming, subjective, and error-prone. Automatically registering CLARITY images to a pre-annotated brain atlas offers a solution, but is difficult for several reasons. Removal of the brain from the skull and subsequent storage and processing cause variable non-rigid deformations, thus compounding inter-subject anatomical variability. Additionally, the signal in CLARITY images arises from various biochemical contrast agents which only sparsely label brain structures. This sparse labeling challenges the most commonly used registration algorithms that need to match image histogram statistics to the more densely labeled histological brain atlases. The standard method is a multiscale Mutual Information B-spline algorithm that dynamically generates an average template as an intermediate registration target. We determined that this method performs poorly when registering CLARITY brains to the Allen Institute's Mouse Reference Atlas (ARA), because the image histogram statistics are poorly matched. Therefore, we developed a method (Mask-LDDMM) for registering CLARITY images, that automatically finds the brain boundary and learns the optimal deformation between the brain and atlas masks. Using Mask-LDDMM without an average template provided better results than the standard approach when registering CLARITY brains to the ARA. The LDDMM pipelines developed here provide a fast automated way to anatomically annotate CLARITY images; our code is available as open source software at http://NeuroData.io."],
        tags: ["DARPA", "mouse", "Atlas", "CLARITY", "Mask-LDDMM", "light microscopy", "neurodata"],
        publications: [{
            name: "Deformably registering and annotating whole CLARITY brains to an atlas via masked LDDMM",
            url: "https://doi.org/10.1117/12.2227444",
            authors: [
                "Kwame S. Kutten", "Joshua T. Vogelstein", "Nicolas Charon", "Li Ye", "Karl Deisseroth M.D.", "Michael I. Miller"
            ]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/kutten/"
        }, {
            name: 'Visualize experiment Cocaine174 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B585.0,585.0,5000.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kutten/Cocaine174/Grayscale%22,%22name%22:%22Grayscale%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Cocaine175 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B585.0,585.0,5000.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kutten/Cocaine175/Grayscale%22,%22name%22:%22Grayscale%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Cocaine178 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B585.0,585.0,5000.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kutten/Cocaine178/Grayscale%22,%22name%22:%22Grayscale%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Control181 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B585.0,585.0,5000.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kutten/Control181/Grayscale%22,%22name%22:%22Grayscale%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Control182 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B585.0,585.0,5000.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kutten/Control182/Grayscale%22,%22name%22:%22Grayscale%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Control189 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B585.0,585.0,5000.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kutten/Control189/Grayscale%22,%22name%22:%22Grayscale%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Control239 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B585.0,585.0,5000.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kutten/Control239/Grayscale%22,%22name%22:%22Grayscale%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Control258 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B585.0,585.0,5000.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kutten/Control258/Grayscale%22,%22name%22:%22Grayscale%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Fear187 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B585.0,585.0,5000.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kutten/Fear187/Grayscale%22,%22name%22:%22Grayscale%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment Fear197 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B585.0,585.0,5000.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kutten/Fear197/Grayscale%22,%22name%22:%22Grayscale%22%7D%5D%7D'
        }],
        locations: [{
            name: "Cocaine174",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "kutten/Cocaine174/Grayscale",
            xs: [10752 - 1024, 10752 + 1024],
            ys: [13312 - 1024, 13312 + 1024],
            zs: [704 - 5, 704 + 5],
            res: 0
        }],
    },

    "witvliet2020": {
        name: "Witvliet et al 2020",
        id: "witvliet2020",
        public: true,
        date: Date.parse("Aug 4, 2021"),
        hero: require("@/assets/projects/witvliet2020-hero.jpg"),
        heroPosition: "bottom left",
        media: require("@/assets/projects/witvliet2020.jpg"),
        species: "celegans",
        brainloc: "Celegans-Witvliet",
        blurb: "Eight high-resolution electron microscopy volumes of C. elegans brains at different stages of development, spanning from birth to adulthood.",
        description: [
            `Eight electron microscopy volumes of wild-type (N2) hermaphroditic <i>C. elegans</i> brains at different stages of development. The animals are isogenic and were reared in the same environment. Samples were prepared by high-pressure freezing. The reconstructed region covers the brain of the nematode, defined as the nerve ring and ventral ganglion neuropil anterior of the ventral sublateral commissures. The brain consists of 162 of the total 218 neurons at birth, and 180 of the total 300 neurons in adulthood, as well as 32 muscles at all stages. Each cell has been reconstructed, identified based on its unique neurite morphology and position, and had its synapses annotated.`,
            `The connectivity data can be browsed at <a href="https://nemanode.org/" target="_blank">NemaNode.org</a>. Synapse metadata and segmentation labels are available <a href="https://bossdb-open-data.s3.amazonaws.com/metadata/witvliet2020/vast_export_ID.zip" target="_blank">here</a>.`,
            `
| <b>Dataset 1 | <a href="https://api.bossdb.io/v1/mgmt/resources/witvliet2020/Dataset_1">Dataset on BossDB.io</a> | <a href="https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B1e-9%2C%22m%22%5D%2C%22y%22:%5B1e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B11151.7666015625%2C11500.5634765625%2C145.5%5D%2C%22crossSectionScale%22:8.499437628886128%2C%22projectionOrientation%22:%5B-0.8491791486740112%2C0.18200302124023438%2C0.23386767506599426%2C0.4371218979358673%5D%2C%22projectionScale%22:10466.208857064985%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_1/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22Dataset_1%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_1_Segmentation/segmentation%22%2C%22tab%22:%22source%22%2C%22segments%22:%5B%22132%22%2C%22136%22%2C%22150%22%2C%22152%22%2C%2238%22%2C%2296%22%5D%2C%22name%22:%22segmentation%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_1_Segmentation/synapses%22%2C%22tab%22:%22source%22%2C%22name%22:%22synapses%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://https://s3.amazonaws.com/bossdb-open-data/mesh/witvliet2020/Dataset_1_Mesh%22%2C%22tab%22:%22source%22%2C%22linkedSegmentationGroup%22:%22segmentation%22%2C%22name%22:%22Dataset_1_Mesh%22%7D%2C%7B%22type%22:%22new%22%2C%22source%22:%22%22%2C%22tab%22:%22source%22%2C%22name%22:%22new%20layer%22%2C%22archived%22:true%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22new%20layer%22%7D%2C%22layout%22:%224panel%22%7D">Dataset on Neuroglancer</a></b>|
|-----------|----|
| Developmental age | First larval stage, immediately after birth |
| Imaging method | SEM |
| Resolution | 1x1x30nm |
| x | right → left |
| y | dorsal → ventral |
| z | anterior → posterior |

| <b>Dataset 2 | <a href="https://api.bossdb.io/v1/mgmt/resources/witvliet2020/Dataset_2">Dataset on BossDB.io</a> | <a href="https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B6.39999986e-10%2C%22m%22%5D%2C%22y%22:%5B6.39999986e-10%2C%22m%22%5D%2C%22z%22:%5B5e-8%2C%22m%22%5D%7D%2C%22position%22:%5B17672.5%2C17516.5%2C113.5%5D%2C%22crossSectionScale%22:18.76147226503385%2C%22projectionOrientation%22:%5B-0.7071067690849304%2C0%2C0%2C0.7071067690849304%5D%2C%22projectionScale%22:12557.325079997812%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_2/em%22%2C%22transform%22:%7B%22matrix%22:%5B%5B-0.707%2C0.707%2C0%2C18824%5D%2C%5B-0.707%2C-0.707%2C0%2C34389%5D%2C%5B0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B6.39999986e-10%2C%22m%22%5D%2C%22y%22:%5B6.39999986e-10%2C%22m%22%5D%2C%22z%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22name%22:%22Dataset_2%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_2_Segmentation/segmentation%22%2C%22transform%22:%7B%22matrix%22:%5B%5B-0.707%2C0.707%2C0%2C18824%5D%2C%5B-0.707%2C-0.707%2C0%2C34389%5D%2C%5B0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B6.39999986e-10%2C%22m%22%5D%2C%22y%22:%5B6.39999986e-10%2C%22m%22%5D%2C%22z%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22segments%22:%5B%22139%22%2C%22164%22%2C%22165%22%2C%2230%22%2C%2245%22%2C%2261%22%2C%228%22%5D%2C%22name%22:%22segmentation%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_2_Segmentation/synapses%22%2C%22transform%22:%7B%22matrix%22:%5B%5B-0.707%2C0.707%2C0%2C18824%5D%2C%5B-0.707%2C-0.707%2C0%2C34389%5D%2C%5B0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B6.39999986e-10%2C%22m%22%5D%2C%22y%22:%5B6.39999986e-10%2C%22m%22%5D%2C%22z%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22name%22:%22synapses%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%7B%22url%22:%22precomputed://https://s3.amazonaws.com/bossdb-open-data/mesh/witvliet2020/Dataset_2_Mesh%22%2C%22transform%22:%7B%22matrix%22:%5B%5B-0.707%2C0.707%2C0%2C18824%5D%2C%5B-0.707%2C-0.707%2C0%2C34389%5D%2C%5B0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B6.39999986e-10%2C%22m%22%5D%2C%22y%22:%5B6.39999986e-10%2C%22m%22%5D%2C%22z%22:%5B5e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22linkedSegmentationGroup%22:%22segmentation%22%2C%22name%22:%22Dataset_2_Mesh%22%7D%5D%2C%22selectedLayer%22:%7B%22size%22:568%2C%22visible%22:true%2C%22layer%22:%22Dataset_2_Mesh%22%7D%2C%22layout%22:%224panel%22%7D">Dataset on Neuroglancer</a></b>|
|-----------|----|
| Developmental age | First larval stage, a few hours after birth |
| Imaging method | TEM |
| Resolution | 0.64x0.64x50nm |
| x | ventral → dorsal |
| y | right → left |
| z | anterior → posterior |

| <b>Dataset 3 | <a href="https://api.bossdb.io/v1/mgmt/resources/witvliet2020/Dataset_3">Dataset on BossDB.io</a> | <a href="https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B1e-9%2C%22m%22%5D%2C%22y%22:%5B1e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B9800.5947265625%2C12001.3916015625%2C133.5%5D%2C%22crossSectionScale%22:11.023176380641612%2C%22projectionOrientation%22:%5B0%2C0.7071067690849304%2C0%2C0.7071067690849304%5D%2C%22projectionScale%22:13575.548039744319%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_3/em%22%2C%22transform%22:%7B%22matrix%22:%5B%5B-1%2C0%2C0%2C18432%5D%2C%5B0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B1e-9%2C%22m%22%5D%2C%22y%22:%5B1e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_3_Segmentation/segmentation%22%2C%22transform%22:%7B%22matrix%22:%5B%5B-1%2C0%2C0%2C18432%5D%2C%5B0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B1e-9%2C%22m%22%5D%2C%22y%22:%5B1e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22segments%22:%5B%22125%22%2C%2235%22%2C%2244%22%2C%2257%22%5D%2C%22name%22:%22segmentation%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_3_segmentation%22%2C%22tab%22:%22source%22%2C%22name%22:%22synapses%22%2C%22archived%22:true%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_3_Segmentation/synapses%22%2C%22transform%22:%7B%22matrix%22:%5B%5B-1%2C0%2C0%2C18432%5D%2C%5B0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B1e-9%2C%22m%22%5D%2C%22y%22:%5B1e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22name%22:%22synapses1%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%7B%22url%22:%22precomputed://https://s3.amazonaws.com/bossdb-open-data/mesh/witvliet2020/Dataset_3_Mesh%22%2C%22transform%22:%7B%22matrix%22:%5B%5B-1%2C0%2C0%2C18432%5D%2C%5B0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B1e-9%2C%22m%22%5D%2C%22y%22:%5B1e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22linkedSegmentationGroup%22:%22segmentation%22%2C%22name%22:%22Dataset_3_Mesh%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%224panel%22%7D">Dataset on Neuroglancer</a></b>|
|-----------|----|
| Developmental age | First larval stage, midway through to the second larval stage |
| Imaging method | SEM |
| Resolution | 1x1x30nm |
| x | right → left |
| y | dorsal → ventral |
| z | anterior → posterior |

| <b>Dataset 4 | <a href="https://api.bossdb.io/v1/mgmt/resources/witvliet2020/Dataset_4">Dataset on BossDB.io</a> | <a href='https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B1e-9%2C%22m%22%5D%2C%22y%22:%5B1e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B15098.4189453125%2C6653.31982421875%2C99.5%5D%2C%22crossSectionScale%22:13.873769902129915%2C%22projectionOrientation%22:%5B0.1270391196012497%2C0.8355849981307983%2C-0.31651771068573%2C0.430668443441391%5D%2C%22projectionScale%22:13056.630029333537%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_4/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_4_Segmentation/segmentation%22%2C%22tab%22:%22source%22%2C%22segments%22:%5B%22113%22%2C%22125%22%2C%22174%22%2C%2278%22%5D%2C%22name%22:%22segmentation%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_4_Segmentation/synapses%22%2C%22tab%22:%22source%22%2C%22name%22:%22synapses%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://https://s3.amazonaws.com/bossdb-open-data/mesh/witvliet2020/Dataset_4_Mesh%22%2C%22tab%22:%22source%22%2C%22linkedSegmentationGroup%22:%22segmentation%22%2C%22name%22:%22Dataset_4_Mesh%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22Dataset_4_Mesh%22%7D%2C%22layout%22:%224panel%22%7D' >Dataset on Neuroglancer</a></b>|
|-----------|----|
| Developmental age | First larval stage, shortly before the second larval stage |
| Imaging method | SEM |
| Resolution | 1x1x30nm |
| x | anterior → posterior |
| y | dorsal → ventral |
| z | left → right |

| <b>Dataset 5 | <a href="https://api.bossdb.io/v1/mgmt/resources/witvliet2020/Dataset_5">Dataset on BossDB.io</a> | <a href='https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B6633.94091796875%2C4380.51025390625%2C345.5%5D%2C%22crossSectionScale%22:6.889510241581297%2C%22projectionOrientation%22:%5B-0.19058717787265778%2C0.3318977952003479%2C0.05980800837278366%2C0.9219237565994263%5D%2C%22projectionScale%22:7028.804970079241%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_5/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_5_Segmentation/segmentation%22%2C%22tab%22:%22source%22%2C%22segments%22:%5B%22100%22%2C%2211%22%2C%2212%22%2C%22173%22%2C%22191%22%2C%2223%22%5D%2C%22name%22:%22segmentation%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_5_Segmentation/synapses%22%2C%22tab%22:%22source%22%2C%22name%22:%22synapses%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://https://s3.amazonaws.com/bossdb-open-data/mesh/witvliet2020/Dataset_5_Mesh%22%2C%22tab%22:%22source%22%2C%22linkedSegmentationGroup%22:%22segmentation%22%2C%22name%22:%22Dataset_5_Mesh%22%7D%5D%2C%22selectedLayer%22:%7B%22layer%22:%22Dataset_5_Mesh%22%7D%2C%22layout%22:%224panel%22%7D' >Dataset on Neuroglancer</a> </b>|
|-----------|----|
| Developmental age | Second larval stage |
| Imaging method | SEM |
| Resolution | 2x2x30nm |
| x | right → left |
| y | dorsal → ventral |
| z | anterior → posterior |

| <b>Dataset 6 | <a href="https://api.bossdb.io/v1/mgmt/resources/witvliet2020/Dataset_6">Dataset on BossDB.io</a> | <a href='https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B7.680000066757202e-10%2C%22m%22%5D%2C%22y%22:%5B7.680000066757202e-10%2C%22m%22%5D%2C%22z%22:%5B5e-8%2C%22m%22%5D%7D%2C%22position%22:%5B17427.40234375%2C16952.5625%2C132.5%5D%2C%22crossSectionScale%22:17.46152693658%2C%22projectionOrientation%22:%5B-0.28965798020362854%2C0.1017908975481987%2C0.09928115457296371%2C0.9465094208717346%5D%2C%22projectionScale%22:18670.7495832433%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_6/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_6_Segmentation/segmentation%22%2C%22tab%22:%22source%22%2C%22segments%22:%5B%22139%22%2C%22144%22%2C%22158%22%2C%2245%22%2C%2298%22%5D%2C%22name%22:%22segmentation%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_6_Segmentation/synapses%22%2C%22tab%22:%22source%22%2C%22name%22:%22synapses%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://https://s3.amazonaws.com/bossdb-open-data/mesh/witvliet2020/Dataset_6_Mesh%22%2C%22tab%22:%22source%22%2C%22linkedSegmentationGroup%22:%22segmentation%22%2C%22name%22:%22Dataset_6_Mesh%22%7D%5D%2C%22selectedLayer%22:%7B%22layer%22:%22Dataset_6_Mesh%22%7D%2C%22layout%22:%224panel%22%7D' >Dataset on Neuroglancer</a> </b>|
|-----------|----|
| Developmental age | Third larval stage |
| Imaging method | TEM |
| Resolution | 0.768x0.768x50nm |
| x | right → left |
| y | dorsal → ventral |
| z | anterior → posterior |

| <b>Dataset 7 | <a href="https://api.bossdb.io/v1/mgmt/resources/witvliet2020/Dataset_7">Dataset on BossDB.io</a> | <a href='https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B1.325000047683716e-9%2C%22m%22%5D%2C%22y%22:%5B1.325000047683716e-9%2C%22m%22%5D%2C%22z%22:%5B5e-8%2C%22m%22%5D%7D%2C%22position%22:%5B19768.59765625%2C14960.5%2C286.5%5D%2C%22crossSectionScale%22:11.107814335026884%2C%22projectionOrientation%22:%5B-0.21469444036483765%2C0.35017088055610657%2C0.06914399564266205%2C0.9091235995292664%5D%2C%22projectionScale%22:6275.179437814117%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_7/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22Dataset_7%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_7/segmentation%22%2C%22tab%22:%22source%22%2C%22name%22:%22segmentation%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22segmentation%22%7D%2C%22layout%22:%224panel%22%7D' >Dataset on Neuroglancer</a></b>|
|-----------|----|
| Developmental age | Young adult |
| Imaging method | TEM |
| Resolution | 1.325x1.325x50nm |
| x | right → left |
| y | dorsal → ventral |
| z | anterior → posterior |

| <b>Dataset 8 | <a href="https://api.bossdb.io/v1/mgmt/resources/witvliet2020/Dataset_8">Dataset on BossDB.io</a> | <a href="https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B20526.5078125%2C13231.53125%2C319.5%5D%2C%22crossSectionScale%22:20.69723258938938%2C%22projectionOrientation%22:%5B-0.19954583048820496%2C0.46094006299972534%2C0.0028067787643522024%2C0.8647010326385498%5D%2C%22projectionScale%22:13753.42613126922%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_8/em%22%2C%22transform%22:%7B%22matrix%22:%5B%5B1%2C0%2C0%2C0%5D%2C%5B0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C-1%2C704%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_8_Segmentation/segmentation%22%2C%22transform%22:%7B%22matrix%22:%5B%5B1%2C0%2C0%2C0%5D%2C%5B0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C-1%2C704%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22segments%22:%5B%22101%22%2C%22133%22%2C%22135%22%2C%22216%22%2C%2255%22%2C%2258%22%2C%2279%22%5D%2C%22name%22:%22segmentation%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_8_Segmentation/synapses%22%2C%22transform%22:%7B%22matrix%22:%5B%5B1%2C0%2C0%2C0%5D%2C%5B0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C-1%2C704%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22name%22:%22synapses%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%7B%22url%22:%22precomputed://https://s3.amazonaws.com/bossdb-open-data/mesh/witvliet2020/Dataset_8_Mesh%22%2C%22transform%22:%7B%22matrix%22:%5B%5B1%2C0%2C0%2C0%5D%2C%5B0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C-1%2C704%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22linkedSegmentationGroup%22:%22segmentation%22%2C%22name%22:%22Dataset_8_Mesh%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%224panel%22%7D" >Dataset on Neuroglancer</a></b>|
|-----------|----|
| Developmental age | Young adult |
| Imaging method | SEM |
| Resolution | 2x2x30nm |
| x | anterior → posterior |
| y | dorsal → ventral |
| z | left → right |`
        ],
        tags: ["BRAIN Initiative", "NIH", "whole-brain", "connectomics", "development", "C. elegans", "celegans", "nematode", "high-pressure freezing", "ATUM-SEM", "ssTEM", "TEM", "SEM", "EM"],
        publications: [{
            name: "Connectomes across development reveal principles of brain maturation",
            url: "https://www.nature.com/articles/s41586-021-03778-8",
            authors: ["Daniel Witvliet", "Ben Mulcahy", "James K. Mitchell", "Yaron Meirovitch", "Daniel R. Berger", "Yuelong Wu", "Yufang Liu", "Wan Xian Koh", "Rajeev Parvathala", "Douglas Holmyard", "Richard L. Schalek", "Nir Shavit", "Andrew D. Chisholm", "Jeff W. Lichtman", "Aravinthan D. T. Samuel", "Mei Zhen"],
        }],
        neuroglancer: {
            name: "Visualize sample (Dataset 4) in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B1e-9%2C%22m%22%5D%2C%22y%22:%5B1e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B15098.4189453125%2C6653.31982421875%2C99.5%5D%2C%22crossSectionScale%22:13.873769902129915%2C%22projectionOrientation%22:%5B0.1270391196012497%2C0.8355849981307983%2C-0.31651771068573%2C0.430668443441391%5D%2C%22projectionScale%22:13056.630029333537%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_4/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_4_Segmentation/segmentation%22%2C%22tab%22:%22source%22%2C%22segments%22:%5B%22113%22%2C%22125%22%2C%22174%22%2C%2278%22%5D%2C%22name%22:%22segmentation%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/witvliet2020/Dataset_4_Segmentation/synapses%22%2C%22tab%22:%22source%22%2C%22name%22:%22synapses%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://https://s3.amazonaws.com/bossdb-open-data/mesh/witvliet2020/Dataset_4_Mesh%22%2C%22tab%22:%22source%22%2C%22linkedSegmentationGroup%22:%22segmentation%22%2C%22name%22:%22Dataset_4_Mesh%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22Dataset_4_Mesh%22%7D%2C%22layout%22:%224panel%22%7D"
        },
        links: [{
            name: "Synapse and Segmentation Tables (ZIP)",
            url: "https://bossdb-open-data.s3.amazonaws.com/metadata/witvliet2020/vast_export_ID.zip"
        }, {
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/witvliet2020/"
        }, {
            name: "NemaNode, an interactive web-app for browsing connectivity reconstructed from the eight datasets",
            url: "https://nemanode.org/"
        }, {
            name: "Twitter thread by @dwitvliet",
            url: "https://twitter.com/dwitvliet/status/1255956435151794181"
        }],

        locations: [

            {
                name: "Sample EM (Dataset 1)",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "witvliet2020/Dataset_1/em",
                xs: [12044 - 1024, 12044 + 1024],
                ys: [8481 - 1024, 8481 + 1024],
                zs: [215 - 5, 215 + 5],
                res: 0
            },
            {
                name: "Sample EM (Dataset 2)",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "witvliet2020/Dataset_2/em",
                xs: [12044 - 1024, 12044 + 1024],
                ys: [8481 - 1024, 8481 + 1024],
                zs: [215 - 5, 215 + 5],
                res: 0
            },
            {
                name: "Sample EM (Dataset 3)",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "witvliet2020/Dataset_3/em",
                xs: [12044 - 1024, 12044 + 1024],
                ys: [8481 - 1024, 8481 + 1024],
                zs: [215 - 5, 215 + 5],
                res: 0
            },
            {
                name: "Sample EM (Dataset 4)",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "witvliet2020/Dataset_4/em",
                xs: [12044 - 1024, 12044 + 1024],
                ys: [8481 - 1024, 8481 + 1024],
                zs: [215 - 5, 215 + 5],
                res: 0
            },
            {
                name: "Sample EM (Dataset 5)",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "witvliet2020/Dataset_5/em",
                xs: [12044 - 1024, 12044 + 1024],
                ys: [8481 - 1024, 8481 + 1024],
                zs: [215 - 5, 215 + 5],
                res: 0
            },
            {
                name: "Sample EM (Dataset 6)",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "witvliet2020/Dataset_6/em",
                xs: [12044 - 1024, 12044 + 1024],
                ys: [8481 - 1024, 8481 + 1024],
                zs: [215 - 5, 215 + 5],
                res: 0
            },
            {
                name: "Sample EM (Dataset 7)",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "witvliet2020/Dataset_7/em",
                xs: [12044 - 1024, 12044 + 1024],
                ys: [8481 - 1024, 8481 + 1024],
                zs: [215 - 5, 215 + 5],
                res: 0
            },
            {
                name: "Sample EM (Dataset 8)",
                protocol: "https",
                server: "api.bossdb.io",
                uri: "witvliet2020/Dataset_8/em",
                xs: [12044 - 1024, 12044 + 1024],
                ys: [8481 - 1024, 8481 + 1024],
                zs: [215 - 5, 215 + 5],
                res: 0
            }

        ],
        segmentation: [{
            name: "Sample Segmentation (Dataset 4)",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "witvliet2020/Dataset_4_Segmentation/segmentation",
            xs: [12044 - 1024, 12044 + 1024],
            ys: [8481 - 1024, 8481 + 1024],
            zs: [215 - 5, 215 + 5],
            res: 0
        }],

        mesh: [{}],
    },

    "mulcahy2022": {
        name: "Mulcahy et al 2022",
        id: "mulcahy2022",
        public: true,
        date: Date.parse("September 15, 2022"),
        hero: require("@/assets/projects/mulcahy2022.png"),
        heroPosition: "bottom left",
        media: require("@/assets/projects/mulcahy2022.png"),
        species: "celegans",
        brainloc: "Celegans-Whole",
        blurb: "Three full and two partial electron microscopy volumes of the C. elegans body across the first and second larval stages.",
        description: [
            `Three electron microscopy volumes of whole C. elegans bodies in the first larval stage, followed by two partial volumes covering the anterior motor circuit in the second larval stage. The animals were isogenic and reared in the same environment. Samples were prepared by high pressure freezing and freeze substitution followed by ATUM-SEM or classical serial section TEM. Inhibitory motor neurons were reconstructed across this timeseries.`,
            `

| <b>1h L1 | <a href="https://api.bossdb.io/v1/mgmt/resources/mulcahy2022/1h_L1">Dataset on BossDB.io</a> | <a href="https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B1e-9%2C%22m%22%5D%2C%22y%22:%5B1e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B22016.5%2C16640.5%2C2364.5%5D%2C%22crossSectionScale%22:2%2C%22projectionScale%22:262144%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/mulcahy2022/1h_L1/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%224panel%22%7D">Dataset on Neuroglancer</a></b>|
|-----------|----|
| Developmental age | First larval stage, immediately after birth |
| Imaging method | ATUM-SEM |
| Resolution | 1x1x30nm |
| x | right → left |
| y | dorsal → ventral |
| z | anterior → posterior |

| <b>15h L1 | <a href="https://api.bossdb.io/v1/mgmt/resources/mulcahy2022/15h_L1">Dataset on BossDB.io</a> | <a href="https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B1.4e-9%2C%22m%22%5D%2C%22y%22:%5B1.4e-9%2C%22m%22%5D%2C%22z%22:%5B7e-8%2C%22m%22%5D%7D%2C%22position%22:%5B12212.5654296875%2C8199.5615234375%2C1256.5%5D%2C%22crossSectionScale%22:17.63701819983734%2C%22projectionScale%22:131072%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/mulcahy2022/15h_L1/em%22%2C%22transform%22:%7B%22matrix%22:%5B%5B-1%2C0%2C0%2C24064%5D%2C%5B0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B1.4e-9%2C%22m%22%5D%2C%22y%22:%5B1.4e-9%2C%22m%22%5D%2C%22z%22:%5B7e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22shaderControls%22:%7B%22normalized%22:%7B%22range%22:%5B22%2C195%5D%7D%7D%2C%22name%22:%22em%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%22xy%22%7D">Dataset on Neuroglancer</a></b>|
|-----------|----|
| Developmental age | 15 hours after hatching, late in the first larval stage |
| Imaging method | Serial section TEM |
| Resolution | 1.4x1.4x70nm |
| x | right → left |
| y | dorsal → ventral |
| z | anterior → posterior |

| <b>16h L1/L2 transition | <a href="https://api.bossdb.io/v1/mgmt/resources/mulcahy2022/16h_L1">Dataset on BossDB.io</a> | <a href="https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B60928.5%2C18432.5%2C525.5%5D%2C%22crossSectionScale%22:4%2C%22projectionScale%22:131072%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/mulcahy2022/16h_L1/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%224panel%22%7D">Dataset on Neuroglancer</a></b>|
|-----------|----|
| Developmental age | 16 hours after hatching, at the transition between the first and second larval stages |
| Imaging method | ATUM-SEM |
| Resolution | 2x2x30nm |
| x | anterior → posterior |
| y | dorsal → ventral |
| z | left → right |

| <b>18h L2 | <a href="https://api.bossdb.io/v1/mgmt/resources/mulcahy2022/18h_L2">Dataset on BossDB.io</a> | <a href="https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B5092.38623046875%2C7558.27587890625%2C600.5%5D%2C%22crossSectionScale%22:8.829930825557122%2C%22projectionScale%22:32768%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/mulcahy2022/18h_L2/em%22%2C%22transform%22:%7B%22matrix%22:%5B%5B-1%2C0%2C0%2C10272%5D%2C%5B0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%22xy%22%7D" >Dataset on Neuroglancer</a></b>|
|-----------|----|
| Developmental age | 18 hours after hatching, early in the second larval stage |
| Imaging method | ATUM-SEM |
| Resolution | 2x2x30nm |
| x | right → left |
| y | dorsal → ventral |
| z | anterior → posterior |

| <b>23h L2 | <a href="https://api.bossdb.io/v1/mgmt/resources/mulcahy2022/23h_L2">Dataset on BossDB.io</a> | <a href="https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B7336.5%2C4992.5%2C742.5%5D%2C%22crossSectionScale%22:4%2C%22projectionScale%22:32768%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/mulcahy2022/23h_L2/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%224panel%22%7D" >Dataset on Neuroglancer</a> </b>|
|-----------|----|
| Developmental age | 23 hours after hatching, late in the second larval stage |
| Imaging method | ATUM-SEM |
| Resolution | 2x2x30nm |
| x | right → left |
| y | dorsal → ventral |
| z | anterior → posterior |`
        ],
        tags: ["ATUM-SEM", "ssTEM", "whole-brain", "connectomics", "development", "C. elegans", "celegans", "nematode"],
        publications: [{
            name: "Post-embryonic remodeling of the C. elegans motor circuit",
            url: "https://doi.org/10.1016/j.cub.2022.09.065",
            authors: [
                "Ben Mulcahy", "Daniel K. Witvliet", "James Mitchell", "Richard Schalek", "Daniel R. Berger", "Yuelong Wu", "Doug Holmyard", "Yangning Lu", "Tosif Ahamed", "Aravinthan D.T. Samuel", "Andrew D. Chisholm", "Jeff W. Lichtman", "Mei Zhen"
            ]
        }],
        neuroglancer: {
            name: "15h_L1",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B1.4e-9%2C%22m%22%5D%2C%22y%22:%5B1.4e-9%2C%22m%22%5D%2C%22z%22:%5B7e-8%2C%22m%22%5D%7D%2C%22position%22:%5B12032.5%2C7168.5%2C1256.5%5D%2C%22crossSectionScale%22:1%2C%22projectionScale%22:131072%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/mulcahy2022/15h_L1/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%224panel%22%7D"
        },
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/mulcahy2022"
        },
        {
            name: "View 1h_L1 in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B1e-9%2C%22m%22%5D%2C%22y%22:%5B1e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B22016.5%2C16640.5%2C2364.5%5D%2C%22crossSectionScale%22:2%2C%22projectionScale%22:262144%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/mulcahy2022/1h_L1/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%224panel%22%7D"
        },
        {
            name: "View 15h_L1 in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B1.4e-9%2C%22m%22%5D%2C%22y%22:%5B1.4e-9%2C%22m%22%5D%2C%22z%22:%5B7e-8%2C%22m%22%5D%7D%2C%22position%22:%5B12212.5654296875%2C8199.5615234375%2C1256.5%5D%2C%22crossSectionScale%22:17.63701819983734%2C%22projectionScale%22:131072%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/mulcahy2022/15h_L1/em%22%2C%22transform%22:%7B%22matrix%22:%5B%5B-1%2C0%2C0%2C24064%5D%2C%5B0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B1.4e-9%2C%22m%22%5D%2C%22y%22:%5B1.4e-9%2C%22m%22%5D%2C%22z%22:%5B7e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22shaderControls%22:%7B%22normalized%22:%7B%22range%22:%5B22%2C195%5D%7D%7D%2C%22name%22:%22em%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%22xy%22%7D"
        },
        {
            name: "View 16h_L1 in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B60928.5%2C18432.5%2C525.5%5D%2C%22crossSectionScale%22:4%2C%22projectionScale%22:131072%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/mulcahy2022/16h_L1/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%224panel%22%7D"
        },
        {
            name: "View 18h_L2 in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B5092.38623046875%2C7558.27587890625%2C600.5%5D%2C%22crossSectionScale%22:8.829930825557122%2C%22projectionScale%22:32768%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%7B%22url%22:%22precomputed://s3://bossdb-open-data/mulcahy2022/18h_L2/em%22%2C%22transform%22:%7B%22matrix%22:%5B%5B-1%2C0%2C0%2C10272%5D%2C%5B0%2C1%2C0%2C0%5D%2C%5B0%2C0%2C1%2C0%5D%5D%2C%22outputDimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%7D%7D%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%22xy%22%7D"
        },
        {
            name: "View 23h_L2 in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B2e-9%2C%22m%22%5D%2C%22y%22:%5B2e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B7336.5%2C4992.5%2C742.5%5D%2C%22crossSectionScale%22:4%2C%22projectionScale%22:32768%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/mulcahy2022/23h_L2/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22em%22%7D%2C%22layout%22:%224panel%22%7D"
        }],
        locations: [{
            name: "1h_L1",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "mulcahy2022/1h_L1/em",
            xs: [12000, 12000 + 1024],
            ys: [15000, 15000 + 1024],
            zs: [2300, 2300 + 1],
            res: 0
        }, {
            name: "15h_L1",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "mulcahy2022/15h_L1/em",
            res: 0
        }, {
            name: "16h_L1",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "mulcahy2022/16h_L1/em",
            res: 0
        }, {
            name: "18h_L2",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "mulcahy2022/18h_L2/em",
            res: 0
        }, {
            name: "23h_L2",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "mulcahy2022/23h_L2/em",
            res: 0
        }],
        segmentation: [],
    },


    "kuan_phelps2020": {
        name: "Kuan & Phelps, et al. 2020",
        id: "kuan_phelps2020",
        public: true,
        date: Date.parse("July 15, 2020"),
        hero: require("@/assets/projects/wei20_drosophila.jpg"),
        media: require("@/assets/projects/wei20_drosophila.jpg"),
        locations: [{
            name: "data",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "kuan_phelps2020/drosophila_brain_120nm/drBrain_120nm_rec",
            xs: [0, 3200],
            ys: [0, 3200],
            zs: [0, 100],
            res: 0
        }],
        species: "mouse_fly",
        brainloc: "MouseFly-KuanPhelps2020",
        blurb: "X-ray holographic nano-tomography volumes of mouse somatosenory cortex, drosophila central brain, drosophila VNC, and drosophila leg.",
        description: [
            "Imaging neuronal networks provides a foundation for understanding the nervous system, but resolving dense nanometer-scale structures over large volumes remains challenging for light (LM) and electron microscopy (EM). Here, we show that X-ray holographic nano-tomography (XNH) can image millimeter-scale volumes with sub-100 nm resolution, enabling reconstruction of dense wiring in Drosophila melanogaster and mouse nervous tissue. We performed correlative XNH and EM to reconstruct hundreds of cortical pyramidal cells, and show that more superficial cells receive stronger synaptic inhibition on their apical dendrites. By combining multiple XNH scans, we imaged an adult Drosophila leg with sufficient resolution to comprehensively catalog mechanosensory neurons and trace individual motor axons from muscles to the central nervous system. To accelerate neuronal reconstructions, we trained a convolutional neural network to automatically segment neurons from XNH volumes. Thus, XNH bridges a key gap between LM and EM, providing a new avenue for neural circuit discovery."
        ],
        tags: ["BRAIN Initiative", "NIH", "mouse", "drosophila", "X-ray", "XNH", "fly", "connectomics", "fruitfly"],
        publications: [{
            name: "Dense neuronal reconstruction through X-ray holographic nano-tomography",
            url: "https://www.nature.com/articles/s41593-020-0704-9",
            authors: [
                "Aaron T. Kuan", "Jasper S. Phelps", "Logan A. Thomas", "Tri M. Nguyen", "Julie Han", "Chiao-Lin Chen", "Anthony W. Azevedo", "John C. Tuthill", "Jan Funke", "Peter Cloetens", "Alexandra Pacureanu", "Wei-Chung Allen Lee"
            ],
            citationName: "Kuan & Phelps, et al. 2020"
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/kuan_phelps2020"
        },
        {
            name: "View Drosophila Brain 120nm in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!{'layers':{'drosophila_brain_120nm':{'source':'precomputed://s3://bossdb-open-data/kuan_phelps2020/drosophila_brain_120nm/drBrain_120nm_rec'}}}"
        },
        {
            name: "View Drosophila VNC 50nm in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!{'layers':{'drosophila_VNC_50nm':{'source':'precomputed://s3://bossdb-open-data/kuan_phelps2020/drosophila_VNC_50nm/jaspersLegCryo_r1_50nm_rec'}}}"
        },
        {
            name: "View Drosophila Leg 75nm in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!{'layers':{'drosophila_leg_75nm':{'source':'precomputed://s3://bossdb-open-data/kuan_phelps2020/drosophila_leg_75nm/190515_merged_fullres'}}}"
        },
        {
            name: "View Mouse Cortex 40nm in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!{'layers':{'mouse_cortex_40nm':{'source':'precomputed://s3://bossdb-open-data/kuan_phelps2020/mouse_cortex_40nm/mCTXsmall_higher_40nm'}}}"
        },
        {
            name: "View Mouse Cortex 30nm in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!{'layers':{'mouse_cortex_30nm':{'source':'precomputed://s3://bossdb-open-data/kuan_phelps2020/mouse_cortex_30nm/mCTXsmall_17keV_850umBS_30nm'}}}"
        },
        {
            name: "32-bit Raw Data",
            url: "https://data.esrf.fr/public/10.15151/ESRF-DC-217728238"
        }]
    },
    "morgan2020": {
        name: "Morgan et al. 2020",
        id: "morgan2020",
        public: true,
        date: Date.parse("March 5, 2020"),
        hero: require("@/assets/projects/morgan2020.jpg"),
        media: require("@/assets/projects/morgan2020.jpg"),
        locations: [{
            name: "Data",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "morgan2020/lgn/em",
            xs: [99977, 99977 + 512],
            ys: [100016, 100016 + 512],
            zs: [5025, 5025 + 1],
            res: 0
        }],
        neuroglancer: {
            name: "LGN",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B3e-8%2C%22m%22%5D%7D%2C%22position%22:%5B89412.96875%2C65829.3046875%2C5049.5%5D%2C%22crossSectionScale%22:79.56236167098211%2C%22projectionScale%22:262144%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/morgan2020/lgn/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%5D%2C%22layout%22:%22xy%22%7D"
        },
        blurb: "Serial section electron microscopy volume of the mouse dorsal lateral geniculate nucleus (dLGN).",
        description: [
            "Tissue source: Serial section electron microscopy volume of the dorsal lateral geniculate nucleus (dLGN) of a postnatal day 32 C57BL/6 mouse.",
            "Tissue dimensions: Sections were acquired in the coronal plane. The volume encompasses the full depth (500 μm) of the dLGN. The volume covers the lateral half (400 μm, contralateral eye recipient) of the dLGN. The volume is centered along the rostral-caudal axis and includes about a third (300 μm) of the rostral-caudal extent.  Ten thousand ultrathin sections were collected at 30 nm thickness using automated tape collecting ultramicrotome (ATUM).  Sections were imaged at 4 nm pixel width using a Zeiss Merlin single beam SEM (Depth of field mode, 1.7 kev). Due to section compression, the pixel dimensions represent 6 nm (Y dim) x 4 nm (X dim) of biological space.",
            "Tissue prep: Tissue was fixed with 2% glutaraldehyde and 2% formaldahyde in cacodylate buffer. Tissue was stained with osmium-thiocarbohydrazide-osmium and (both un-reduced). Sections were stained with lead citrate. Before imaging, sections were plasma etched in the SEM chamber using an Evactron to clean the surface and increase contrast."
        ],
        tags: ["BRAIN Initiative", "NIH", "mouse", "dLGN", "thalamus", "SEM", "EM", "vision", "retinal ganglion cell", "thalamocortical cell", "synapse"],
        species: "mouse",
        brainloc: "Mouse-dLGN",
        publications: [{
            name: "An individual interneuron participates in many kinds of inhibition and innervates much of the mouse visual thalamus",
            url: "https://www.cell.com/neuron/fulltext/S0896-6273(20)30100-8",
            authors: ["Josh L. Morgan", "Jeff W. Lichtman"]
        }, {
            name: "The Fuzzy Logic of Network Connectivity in Mouse Visual Thalamus",
            url: "https://www.sciencedirect.com/science/article/pii/S0092867416301350?via%3Dihub",
            authors: ["Josh L. Morgan", "Daniel R Berger", "Art W Wetzel", "Jeff W Lichtman"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/morgan2020/lgn/em"
        }, {
            name: "https://software.rc.fas.harvard.edu/lichtman/LGN/",
            url: "https://software.rc.fas.harvard.edu/lichtman/LGN/"
        }, {
            name: "https://sites.wustl.edu/morganlab/data-share/",
            url: "https://sites.wustl.edu/morganlab/data-share/"
        }]
    },
    "phelps_hildebrand_graham2021": {
        name: "Phelps, Hildebrand, & Graham, et al 2021",
        id: "phelps_hildebrand_graham2021",
        public: true,
        date: Date.parse("Jan 4, 2021"),
        hero: require("@/assets/projects/phelps_hildebrand_graham2020.jpg"),
        media: require("@/assets/projects/phelps_hildebrand_graham2020.jpg"),
        locations: [{
            name: "Data",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "phelps_hildebrand_graham2021/FANC/em",
            xs: [23636 - 512, 23636 + 512],
            ys: [116477 - 512, 116477 + 512],
            zs: [1228, 1228 + 1],
            res: 0
        }],
        neuroglancer: {
            name: "View in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22layers%22:%5B%7B%22source%22:%22precomputed://s3://bossdb-open-data/phelps_hildebrand_graham2021/FANC/em%22%2C%22type%22:%22image%22%2C%22name%22:%22FANC%22%7D%5D%2C%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B4.300000190734863%2C4.300000190734863%2C45%5D%2C%22voxelCoordinates%22:%5B23697.609375%2C116496.1171875%2C1228%5D%7D%7D%2C%22zoomFactor%22:8.154868142736303%7D%2C%22showAxisLines%22:false%2C%22layout%22:%22xy%22%7D"
        },
        blurb: "A transmission electron microscopy dataset of the ventral nerve cord of an adult female Drosophila melanogaster",
        description: [
            "A brief summary of the paper is available [on Twitter](https://twitter.com/darbly/status/1346177280511528964).",
            "Neuron reconstructions made available through Virtual Fly Brain's [CATMAID server](http://catmaid.virtualflybrain.org/). See \"Adult Ventral Nerve Cord (VNC1)\".",
            "Additional information available at https://www.lee.hms.harvard.edu/phelps-hildebrand-graham-et-al-2021"
        ],
        tags: ["BRAIN Initiative", "NIH", "fruitfly", "fly", "ssTEM", "TEM", "EM", "GridTape", "connectomics", "limb control", "motor neurons", "sensory neurons"],
        species: "fruitfly",
        brainloc: "",
        publications: [{
            name: "Reconstruction of motor control circuits in adult Drosophila using automated transmission electron microscopy",
            url: "https://doi.org/10.1016/j.cell.2020.12.013",
            authors: ["Jasper S. Phelps", "David Grant Colburn Hildebrand", "Brett J. Graham", "Aaron T. Kuan", "Logan A. Thomas", "Tri Nguyen", "Julia Buhmann", "Anthony W. Azevedo", "Anne Sustar", "Sweta Agrawal", "Mingguan Liu", "Brendan L. Shanny", "Jan Funke", "John C. Tuthill", "Wei-Chung Allen Lee"],
            citationName: "Phelps, Hildebrand, & Graham, et al 2021"
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/phelps_hildebrand_graham2021/FANC/em"
        }, {
            name: "Brief summary of the paper (Twitter)",
            url: "https://twitter.com/darbly/status/1346177280511528964"
        }]
    },

    prasad2020: {
        name: "Prasad et al. 2020",
        id: "prasad2020",
        public: true,
        date: Date.parse("May 25, 2020"),
        hero: require("@/assets/projects/prasad2020_3.jpg"),
        media: require("@/assets/projects/prasad2020_3.jpg"),
        neuroglancer: {
            name: "View in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B0.000001%2C%22m%22%5D%2C%22y%22:%5B0.000001%2C%22m%22%5D%2C%22z%22:%5B0.000001%2C%22m%22%5D%7D%2C%22position%22:%5B3063.5%2C834.5%2C359.5%5D%2C%22crossSectionScale%22:3.783618576806845%2C%22projectionScale%22:8192%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22image%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22boss://https://api.bossdb.io/prasad/prasad_analysis/roi_labels%22%2C%22tab%22:%22source%22%2C%22name%22:%22roi_labels%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22boss://https://api.bossdb.io/prasad/prasad_analysis/pixel_labels%22%2C%22tab%22:%22source%22%2C%22name%22:%22pixel_labels%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/pixel_annotation%22%2C%22tab%22:%22source%22%2C%22name%22:%22pixel_annotation%22%2C%22visible%22:false%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/region_of_interest%22%2C%22tab%22:%22source%22%2C%22name%22:%22region_of_interest%22%2C%22visible%22:false%7D%5D%2C%22selectedLayer%22:%7B%22layer%22:%22pixel_labels%22%7D%2C%22layout%22:%224panel%22%7D"
        },
        blurb: "A three-dimensional thalamocortical dataset for characterizing brain heterogeneity",
        description: [
            "<b>Getting Started:</b>",
            "<ul> <li>Check out an <a href=\"https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B0.000001%2C%22m%22%5D%2C%22y%22:%5B0.000001%2C%22m%22%5D%2C%22z%22:%5B0.000001%2C%22m%22%5D%7D%2C%22position%22:%5B3063.5%2C834.5%2C359.5%5D%2C%22crossSectionScale%22:3.783618576806845%2C%22projectionScale%22:8192%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22image%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22boss://https://api.bossdb.io/prasad/prasad_analysis/roi_labels%22%2C%22tab%22:%22source%22%2C%22name%22:%22roi_labels%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22boss://https://api.bossdb.io/prasad/prasad_analysis/pixel_labels%22%2C%22tab%22:%22source%22%2C%22name%22:%22pixel_labels%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/pixel_annotation%22%2C%22tab%22:%22source%22%2C%22name%22:%22pixel_annotation%22%2C%22visible%22:false%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/region_of_interest%22%2C%22tab%22:%22source%22%2C%22name%22:%22region_of_interest%22%2C%22visible%22:false%7D%5D%2C%22selectedLayer%22:%7B%22layer%22:%22pixel_labels%22%7D%2C%22layout%22:%224panel%22%7D\"> interactive visualization of the region level annotations overlaid on the full image volume </a> \[<b>User Name: public-access</b>, <b>Password: public</b>\]</li> <li>For the <a href=\"https://mtneuro.github.io\">MTNeuro Challenge</a>, updated annotations were created and access code can be found <a href=\"https://github.com/MTNeuro/MTNeuro\">here</a> and visualized with the link above. </li> <li>From the original dataset, download pixel-level annotations of cells, axons, and blood vessels in different regions of interest for analysis in Python (.npz)<ul><li><a href=\"https://downloads.bossdb.org/s3/cutouts/cortex_cutout_z110_471_y900_1157_x4600_4857.npz\"> Cortex </a></li><li><a href=\"https://downloads.bossdb.org/s3/cutouts/striatum_cutout_z110_471_y500_757_x3700_3957.npz\"> Striatum </a></li><li><a href=\"https://downloads.bossdb.org/s3/cutouts/trn_cutout_z110_471_y850_1107_x3063_3320.npz\"> Thalamic Reticular Nucleus (TRN) </a></li><li><a href=\"https://downloads.bossdb.org/s3/cutouts/zi_cutout_z110_471_y650_907_x1543_1800.npz\"> Zona Incerta (ZI) </a></li></ul></li><li>Visit <a href=\"https://nerdslab.github.io/xray-thc\"> https://nerdslab.github.io/xray-thc </a> for example code to pull the data from BossDB directly and start exploring the rest of the data!</li> </ul>",
            "<b>Description:</b>",
            "This X-ray microtomography dataset allows access to a continuous three-dimensional volume that spans multiple brain areas, including somatosensory cortex, striatum, and the ventral posterior nucleus of thalamus. The goal of this dataset is to provide high-resolution information for identifying different brain regions and also enable a deeper probing of the microstructures therein, providing the field with access to neuroanatomical parameters previously inaccessible using two-dimensional, homogeneous datasets.",
            "<b>Details about the dataset:</b>",
            "<ul> <li>The raw data is 720 pixels (Z) by 1420 pixels (Y) by 5805 pixels (X) with 1.17um isotropic resolution. </li> <li>For the <a href=\"https://mtneuro.github.io\">MTNeuro Challenge</a>, four dense cubes of size 256 by 256 by 360 were annotated for cell bodies, axons, and white matter tracts. Regions of interest were also annotated for 360 slices, containing labels for Cortex, Striatum, VP, and ZI. These annotations can be seen <a href=\"https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B0.000001%2C%22m%22%5D%2C%22y%22:%5B0.000001%2C%22m%22%5D%2C%22z%22:%5B0.000001%2C%22m%22%5D%7D%2C%22position%22:%5B3063.5%2C834.5%2C359.5%5D%2C%22crossSectionScale%22:3.783618576806845%2C%22projectionScale%22:8192%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22image%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22boss://https://api.bossdb.io/prasad/prasad_analysis/roi_labels%22%2C%22tab%22:%22source%22%2C%22name%22:%22roi_labels%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22boss://https://api.bossdb.io/prasad/prasad_analysis/pixel_labels%22%2C%22tab%22:%22source%22%2C%22name%22:%22pixel_labels%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/pixel_annotation%22%2C%22tab%22:%22source%22%2C%22name%22:%22pixel_annotation%22%2C%22visible%22:false%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/region_of_interest%22%2C%22tab%22:%22source%22%2C%22name%22:%22region_of_interest%22%2C%22visible%22:false%7D%5D%2C%22selectedLayer%22:%7B%22layer%22:%22pixel_labels%22%7D%2C%22layout%22:%224panel%22%7D\"> here </a> </li> <li>In the original dataset, nine images (slices in Z) distributed throughout the volume (z = 109, 159, 209, 259, 309, 359, 409, 459) were annotated at the pixel level in terms of their corresponding region of interest. The regions annotated included: cortex (CTX), striatum (STR), the thalamic reticular nucleus (TRN), the ventral posterior (VP) nucleus of thalamus, zona incerta (ZI), the hypothalamus (HYP), and white matter (WM), which includes the internal capsule and corpus callosum.</li> <li>In the original dataset, four of these regions of interest (TRN, CTX, ZI, STR) were further annotated in terms of their underlying neural microarchitecture, labeling each pixel as either an: axon, cell, blood vessel, or background. For each area, we generated a  361x257x257 pixel subvolume and densely annotated 11 images (257x257) in each area (starting at index z = 0) slice z =  30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330. This resulted in 11 densely annotated images per region and 44 images in total across the four areas.</li></ul>",
            "<b>Paper:</b>",
            "<ul> <li>Prasad, et al., A three-dimensional thalamocortical dataset for characterizing brain heterogeneity, 2020 [<a href=\"https://www.biorxiv.org/content/10.1101/2020.05.22.111617v1\">biorxiv</a>]</li></ul>",
            "<b>Code:</b>",
            "<ul> <li>Visit <a href=\"https://nerdslab.github.io/xray-thc\"> https://nerdslab.github.io/xray-thc </a> for example code to pull and process the data for further analysis using Python.</li> <li>See the SABER repository https://github.com/aplbrain/saber for example workflows that can be applied within BossDB on a variety of different neuroimaging datasets.</li></ul>"],

        tags: ["BRAIN Initiative", "NIH", "mouse", "neuroanatomy", "thalamocortical pathway", "X-ray", "X-ray microtomography", "XRM", "Parcellation", "Brain Microstructure", "white matter", "axonal projection", "Cytoarchitecture", "Vasculature", "Brain Area Prediction", "Image Classification", "thalamus", "cortex"],
        species: "mouse",
        brainloc: "Mouse-Prasad2020",
        publications: [{
            name: "A three-dimensional thalamocortical dataset for characterizing brain heterogeneity",
            url: "https://www.nature.com/articles/s41597-020-00692-y",
            authors: ["Judy A. Prasad", "Aishwarya H. Balwani", "Erik C. Johnson", "Joseph D. Miano", "Vandana Sampathkumar", "Vincent de Andrade", "Ming Du", "Rafael Vescovi", "Chris Jacobsen", "Doga Gursoy", "William Gray Roncal", "Narayanan Kasthuri", "Eva L. Dyer"]
        }],
        locations: [{
            name: "Data",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "prasad/prasad2020/image",
            xs: [0, 5805],
            ys: [0, 1420],
            zs: [0, 720],
            res: 0
        }],
        segmentation: [{
            name: "Data",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "prasad/prasad2020/segmentation",
            xs: [0, 5805],
            ys: [0, 1420],
            zs: [0, 720],
            res: 0
        }],
        links: [
            {
                name: "Get Started: Visualization of Raw Data and Regions of Interest",
                url: "https://neuroglancer.bossdb.io/#!%7B%22layers%22:%5B%7B%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/image%22%2C%22type%22:%22image%22%2C%22name%22:%22image%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/region_of_interest%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22region_of_interest%22%7D%5D%2C%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B1000%2C1000%2C1000%5D%2C%22voxelCoordinates%22:%5B3887.87646484375%2C770.3522338867188%2C309%5D%7D%7D%2C%22zoomFactor%22:1064.358880054122%7D%2C%22layout%22:%22xy%22%7D"
            },
            {
                name: "Visulation of Cortex Annotations",
                url: "https://neuroglancer.bossdb.io/#!%7B%22layers%22:%5B%7B%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/image%22%2C%22type%22:%22image%22%2C%22name%22:%22image%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/pixel_annotation%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22pixel_annotation%22%7D%5D%2C%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B1000%2C1000%2C1000%5D%2C%22voxelCoordinates%22:%5B4758%2C1008%2C140%5D%7D%7D%2C%22zoomFactor%22:1064.358880054122%7D%2C%22layout%22:%22xy%22%7D"
            },
            {
                name: "Visulation of Striatum Annotations",
                url: "https://neuroglancer.bossdb.io/#!%7B%22layers%22:%5B%7B%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/image%22%2C%22type%22:%22image%22%2C%22name%22:%22image%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/pixel_annotation%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22pixel_annotation%22%7D%5D%2C%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B1000%2C1000%2C1000%5D%2C%22voxelCoordinates%22:%5B3834.357666015625%2C645.74365234375%2C140%5D%7D%7D%2C%22zoomFactor%22:597.8017748526142%7D%2C%22layout%22:%22xy%22%7D"
            },
            {
                name: "Visulation of TRN Annotations",
                url: "https://neuroglancer.bossdb.io/#!%7B%22layers%22:%5B%7B%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/image%22%2C%22type%22:%22image%22%2C%22name%22:%22image%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/pixel_annotation%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22pixel_annotation%22%7D%5D%2C%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B1000%2C1000%2C1000%5D%2C%22voxelCoordinates%22:%5B3197.023681640625%2C976.5057373046875%2C140%5D%7D%7D%2C%22zoomFactor%22:1064.358880054122%7D%2C%22layout%22:%22xy%22%7D"
            },
            {
                name: "Visulation of ZI Annotations",
                url: "https://neuroglancer.bossdb.io/#!%7B%22layers%22:%5B%7B%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/image%22%2C%22type%22:%22image%22%2C%22name%22:%22image%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/prasad/prasad2020/pixel_annotation%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22pixel_annotation%22%7D%5D%2C%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B1000%2C1000%2C1000%5D%2C%22voxelCoordinates%22:%5B1669.1123046875%2C782.7593994140625%2C140%5D%7D%7D%2C%22zoomFactor%22:1064.358880054122%7D%2C%22layout%22:%22xy%22%7D"
            },
            {
                name: "Download Microstructure Raw Data and Annotations (npz file)",
                url: "https://downloads.bossdb.org/s3/cutouts/all_microstructures.npz"
            },
            {
                name: "Download Region of Interest Raw Data and Annotations (npz file)",
                url: "https://downloads.bossdb.org/s3/cutouts/roi_y0_1420_x0_5805.npz"
            },
            {
                name: "Code Repository for Download and Processing",
                url: "https://nerdslab.github.io/xray-thc/"
            },
            {
                name: "View dataset at BossDB.io",
                url: "https://api.bossdb.io/v1/mgmt/resources/prasad/prasad2020"
            }]
    },

    wilson2019: {
        name: "Wilson et al. 2019",
        id: "wilson2019",
        public: true,
        date: Date.parse("April 26, 2019"),
        hero: require("@/assets/projects/wilson2019.jpg"),
        media: require("@/assets/projects/wilson2019.jpg"),
        locations: [{
            name: "P3",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "wilson2019/P3/em",
            xs: [11900, 12000],
            ys: [19100, 19200],
            zs: [864, 865],
            res: 0
        }, {
            name: "P7",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "wilson2019/P7/em",
            xs: [11900, 12000],
            ys: [19100, 19200],
            zs: [864, 865],
            res: 0
        }],
        segmentation: [true],
        blurb: "High-resolution electron microscope image volumes from mouse cerebellum at different ages in early postnatal development",
        description: [
            "These high-resolution electron microscope image volumes are samples from the same region of mouse cerebellum, each at a different day in the first postnatal week (one at postnatal day 3, or P3, and one at P7). We have partially reconstructed the neurites in these volumes to describe how patterns of synaptic connectivity change during normal postnatal development.", "Both images span the full cerebellar cortex (pia to superficial white matter) in the sagittal plane, and are rich in information about e.g. intracellular structure, morphology and synaptic connectivity of all cell types found in the young cerebellar cortex, and the morphology of glial cells in this region.", "More information about the data:", "Image volume resolution: 4 nm x 4 nm (in-plane) x 30 nm (section thickness) per voxel", "P3 size: 190 μm x 120 μm x 50 μm (1658 sections)", "P7 size: 190 μm x 120 μm x 75 μm (2514 sections)", "P3 and P7 location: root of vermal lobule VIII", "If you use this data in your work, please cite the following paper:",
            "[Developmental Rewiring between Cerebellar Climbing Fibers and Purkinje Cells Begins with Positive Feedback Synapse Addition](https://doi.org/10.1016/j.celrep.2019.10.081)",
            "For more information about the analysis done on this data, see the Baby Andross repository: https://github.com/amwilson149/baby-andross"],
        species: "mouse",
        tags: ["BRAIN Initiative", "NIH", "cerebellum", "synapse elimination", "climbing fibers", "Purkinje cells", "axonal convergence", "axonal divergence", "pruning", "synapse formation", "circuit development", "connectomics", "ATUM", "SEM", "EM", "mouse"],
        species: "mouse",
        brainloc: "Mouse-Cerebellum",
        publications: [{
            name: "Developmental Rewiring between Cerebellar Climbing Fibers and Purkinje Cells Begins with Positive Feedback Synapse Addition",
            url: "https://doi.org/10.1016/j.celrep.2019.10.081",
            authors: ["Alyssa Michelle Wilson", "Richard Schalek", "Adi Suissa-Peleg", "Thouis Ray Jones", "Seymour Knowles-Barley", "Hanspeter Pfister", "Jeff William Lichtman"]
            // }, {
            //     name: "The rich get richer: synaptic remodeling between climbing fibers and Purkinje cells in the developing cerebellum begins with positive feedback addition of synapses",
            //     url: "https://www.biorxiv.org/content/10.1101/627299v1",
            //     authors: ["Alyssa Michelle Wilson", "Richard Schalek", "Adi Suissa-Peleg", "Thouis Ray Jones", "Seymour Knowles-Barley", "Hanspeter Pfister", "Jeff William Lichtman"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/wilson2019"
        },
        {
            name: "P3 Coordinate Frame",
            url: "https://api.bossdb.io/v1/mgmt/coord/wilson2019-p3"
        },
        {
            name: "P7 Coordinate Frame",
            url: "https://api.bossdb.io/v1/mgmt/coord/wilson2019-p7"
        },
        {
            name: "View P3 in Neuroglancer",
            url: "https://neuroglancer.neuvue.io/#!%7B%22layers%22:%5B%7B%22source%22:%22precomputed://s3://bossdb-open-data/wilson2019/P3/em%22%2C%22type%22:%22image%22%2C%22blend%22:%22default%22%2C%22shaderControls%22:%7B%7D%2C%22name%22:%22em%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/wilson2019/P3/cf-segs-1-mip3%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22cf-segs-1-mip3%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/wilson2019/P3/cf-syns-mip3-1%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22cf-syns-mip3-1%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/wilson2019/P3/p3-soma-segs%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22p3-soma-segs%22%7D%5D%2C%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B4%2C4%2C30%5D%2C%22voxelCoordinates%22:%5B16882.845703125%2C26264.478515625%2C834%5D%7D%7D%2C%22zoomFactor%22:199.5958078936294%7D%2C%22selectedLayer%22:%7B%22layer%22:%22cf-syns-mip3-1%22%2C%22visible%22:true%7D%2C%22layout%22:%22xy%22%7D"
        },
        {
            name: "View P7 in Neuroglancer",
            url: "https://neuroglancer.neuvue.io/#!%7B%22layers%22:%5B%7B%22source%22:%22precomputed://s3://bossdb-open-data/wilson2019/P7/em%22%2C%22type%22:%22image%22%2C%22blend%22:%22default%22%2C%22shaderControls%22:%7B%7D%2C%22name%22:%22em%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/wilson2019/P7/p7-cf-segs-1-mip3/cfs-mip3-1%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22cfs-mip3-1%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/wilson2019/P7/p7-cf-segs-mip3/cfs-mip3-1%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22cfs-mip3-11%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/wilson2019/P7/p7-pc-soma-segs-1-mip3/pcs-so-mip3-1%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22pcs-so-mip3-1%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/wilson2019/P7/p7-pc1-segs-1-mip3/p7-pc1-full-mip3-1%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22p7-pc1-full-mip3-1%22%7D%5D%2C%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B4%2C4%2C30%5D%2C%22voxelCoordinates%22:%5B11394.7001953125%2C30430.01953125%2C1375%5D%7D%7D%2C%22zoomFactor%22:710.7312439734577%7D%2C%22layout%22:%22xy%22%7D"
        }, {
            name: "Raw Metadata [Mendeley Data]",
            url: "http://dx.doi.org/10.17632/jsjny43yzz.2"
        }]
    },

    gerhard2017: {
        name: "Gerhard et. al. 2017",
        id: "gerhard2017",
        public: true,
        date: Date.parse("October 23, 2017"),
        hero: require("@/assets/projects/gerhard2017.jpg"),
        media: require("@/assets/projects/gerhard2017.jpg"),
        locations: [{
            name: "Data",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "gerhard2017/drosophila_melanogaster_third_instar_larva/em",
            res: 0,
            xs: [27889, 28889],
            ys: [19843, 20843],
            zs: [206, 210]
        }],
        blurb: "High-resolution transmission electron microscopy volumes of 1st and 3rd instar Drosophila melanogaster larvae",
        description: [
            "In this work, we reconstructed the nociceptive sensory axons (class IV md) and their downstream network within the ventral nerve cord of Drosophila larvae at an early (1st instar) and late (3rd instar) developmental time point using https://catmaid.org. We then characterized how morphological properties and synaptic connectivity changes across time and between individuals. One interesting finding is that the relative number of of synaptic connections between sensory axons and postsynaptic interneurons remains stable across development despite the large increase in the number of synapses.",
            "More information about the 3rd instar dataset:",
            "Resolution: 2.3 x 2.3 x 50nm",
            "Dimension: 61952 x 46592 x 2156 pixel",
            "If you use this data in your work, please cite the [Conserved neural circuit structure across Drosophila larval development revealed by comparative connectomics](https://elifesciences.org/articles/29089) paper.", " You can find some analysis files on [GitHub](https://github.com/ceesem/Larva_development_structure_2017)."
        ],
        tags: ["HHMI", "ssTEM", "TEM", "EM", "fruitfly", "drosophila", "1st instar", "3rd instar", "larva", "development"],
        species: "fruitfly",
        brainloc: "Drosophila-LarvaVentralNerveCord",
        publications: [{
            name: "Conserved neural circuit structure across Drosophila larval development revealed by comparative connectomics",
            url: "https://elifesciences.org/articles/29089",
            authors: ["Stephan Gerhard", "Ingrid Andrade", "Richard D Fetter", "Albert Cardona", "Casey M Schneider-Mizell"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/gerhard2017/drosophila_melanogaster_third_instar_larva"
        }, {
            name: "Coordinate Frame",
            url: "https://api.bossdb.io/v1/mgmt/coord/gerhard2017-drosophila_melanogaster_third_instar_larva_cf"
        }],
        neuroglancer: {
            name: "View in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B2.2999999523162843e-9%2C%22m%22%5D%2C%22y%22:%5B2.2999999523162843e-9%2C%22m%22%5D%2C%22z%22:%5B5e-8%2C%22m%22%5D%7D%2C%22position%22:%5B30973.5%2C23324.279296875%2C1123.625244140625%5D%2C%22crossSectionScale%22:1%2C%22projectionOrientation%22:%5B0.5495784282684326%2C0.1824212372303009%2C0.27897709608078003%2C0.7660664916038513%5D%2C%22projectionScale%22:728.0391971302475%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/gerhard2017/drosophila_melanogaster_third_instar_larva/em%22%2C%22tab%22:%22source%22%2C%22name%22:%22em%22%7D%5D%2C%22selectedLayer%22:%7B%22layer%22:%22em%22%7D%2C%22layout%22:%224panel%22%7D"
        }
    },

    dyer2017: {
        name: "Dyer et. al. 2017",
        id: "dyer2017",
        public: true,
        date: Date.parse("September 25 2017"),
        hero: require("@/assets/projects/dyer2018.jpg"),
        media: require("@/assets/projects/dyer2018.jpg"),
        locations: [{
            name: "Data",
            protocol: "https",
            server: "api.bossdb.io",
            uri: "XBrainGTech5/Proj4/full_vol",
            res: 0,
            xs: [1200, 1600],
            ys: [1700, 2200],
            zs: [13, 16]
        }],
        neuroglancer: {
            name: "View in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!{'layers':{'full_vol':{'type':'image'_'source':'precomputed://s3://bossdb-open-data/XBrainGTech5/Proj4/full_vol'}}_'navigation':{'pose':{'position':{'voxelSize':[3_3_30]_'voxelCoordinates':[1595.6187744140625_1524.4337158203125_1.7518880367279053]}}_'zoomFactor':3.8137474509641875}_'perspectiveOrientation':[-0.2464573234319687_-0.3385295569896698_-0.03143056482076645_0.9075618982315063]_'perspectiveZoom':430.5226776721991_'layout':'xy'}"
        },
        blurb: "The images provided are micro-computed tomography data collected from 2-BM at Argonne National Laboratory.",
        description: ["These samples are taken from roughly a cubic mm volume of mouse somatosensory cortex that spans multiple cortical layers and a small portion of corpus callosum. The spatial resolution is 0.65 um isotropic, each voxel = 0.65x0.65x0.65 um^3.", "You can find more about this dataset here: https://github.com/nerdslab/xbrain/tree/master/data"],
        tags: ["BRAIN Initiative", "NIH", "neuroscience", "X-ray", "mouse", "X-ray microtomography", "XRM"],
        species: "mouse",
        brainloc: "Mouse-Dyer3",
        publications: [{
            name: "Quantifying Mesoscale Neuroanatomy Using X-Ray Microtomography",
            url: "http://www.eneuro.org/content/4/5/ENEURO.0195-17.2017",
            authors: ["Eva L. Dyer", "William Gray Roncal", "Judy A. Prasad", "Hugo L. Fernandes", "Doga Gürsoy", "Vincent De Andrade", "Kamel Fezzaa", "Xianghui Xiao", "Joshua T. Vogelstein", "Chris Jacobsen", "Konrad P. Körding", "Narayanan Kasthuri"]
        },
        {
            name: "Toward A Reproducible, Scalable Framework for Processing Large Neuroimaging Datasets",
            url: "https://www.biorxiv.org/content/10.1101/615161v1",
            authors: ["Erik C. Johnson", "Miller Wilt", "Luis M. Rodriguez", "Raphael Norman-Tenazas", "Corban Rivera", "Nathan Drenkow", "Dean Kleissas", "Theodore J. LaGrow", "Hannah Cowley", "Joseph Downs", " Jordan Matelsky", "Marisa Hughes", "Elizabeth Reilly", "Brock Wester", "Eva Dyer", "Konrad Kording", "William Gray-Roncal"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/XBrainGTech5"
        }]
    },

    kasthuri2015: {
        name: "Kasthuri et. al. 2015",
        id: "kasthuri2015",
        public: true,
        date: Date.parse("July 30 2015"),
        hero: require("@/assets/projects/kasthuri2015.jpg"),
        media: require("@/assets/projects/kasthuri2015.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "kasthuri2015/em/cc",
            xs: [5000, 6000],
            ys: [7000, 8000],
            zs: [900, 910]
        }],
        blurb: "Bobby Kasthuri, Ph.D. under the tutelage of Jeff Lichtman, M.D., Ph.D., acquired a data set from mouse cortex with a 3x3x30 cubic nanometer spatial resolution, yielding 660GB of images.",
        description: ["We describe automated technologies to probe the structure of neural tissue at nanometer resolution and use them to generate a saturated reconstruction of a sub-volume of mouse neocortex in which all cellular objects (axons, dendrites, and glia) and many sub-cellular components (synapses, synaptic vesicles, spines, spine apparati, postsynaptic densities, and mitochondria) are rendered and itemized in a database. We explore these data to study physical properties of brain tissue. For example, by tracing the trajectories of all excitatory axons and noting their juxtapositions, both synaptic and non-synaptic, with every dendritic spine we refute the idea that physical proximity is sufficient to predict synaptic connectivity (the so-called Peters’ rule). This online minable database provides general access to the intrinsic complexity of the neocortex and enables further data-driven inquiries."],
        tags: ["NIH", "NSF", "neuroscience", "EM", "SEM", "mouse", "cortex", "somatosensory cortex", "segmentation", "neurodata"],
        species: "mouse",
        brainloc: "Mouse-Somatosensory",
        connectomes: [{
            name: "V4",
            type: "MotifStudio",
            url: "https://motifstudio.bossdb.org/?mS=%2523%2520Reciprocal%2520connections%250A%250AA%2520-%253E%2520B%250AB%2520-%253E%2520A&selectedDataset=Kasthuri%25202015%2520v4"
        }],
        publications: [{
            name: "Saturated Reconstruction of a Volume of Neocortex.",
            url: "https://www.ncbi.nlm.nih.gov/pubmed/26232230",
            authors: ["Kasthuri N", "Hayworth KJ", "Berger DR", "Schalek RL", "Conchello JA", "Knowles-Barley S", "Lee D", "Vázquez-Reina A", "Kaynig V", "Jones TR", "Roberts M", "Morgan JL", "Tapia JC", "Seung HS", "Roncal WG", "Vogelstein JT", "Burns R", "Sussman DL", "Priebe CE", "Pfister H", "Lichtman JW"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/Kasthuri"
        },
        {
            name: "View 3Cylinder in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22layers%22:%5B%7B%22source%22:%22precomputed://s3://bossdb-open-data/kasthuri2015/em/cc%22%2C%22type%22:%22image%22%2C%22name%22:%22Kasthuri2015%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/kasthuri2015/em/3cylneuron_v1%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%223cylneuron_v1%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/kasthuri2015/em/3cylsynapse_v1%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%223cylsynapse_v1%22%7D%5D%2C%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B4%2C4%2C40%5D%2C%22voxelCoordinates%22:%5B7753.12646484375%2C12465.4228515625%2C919%5D%7D%7D%2C%22zoomFactor%22:26.25960151191981%7D%2C%22perspectiveZoom%22:100%2C%22showSlices%22:false%2C%22layout%22:%22xy%22%7D"
        },
        {
            name: "View AC4 in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22layers%22:%5B%7B%22source%22:%22precomputed://s3://bossdb-open-data/Kasthuri/ac4/em%22%2C%22type%22:%22image%22%2C%22name%22:%22ac4%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/Kasthuri/ac4/neuron%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22neuron%22%7D%5D%2C%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B6%2C6%2C30%5D%2C%22voxelCoordinates%22:%5B512%2C512%2C50%5D%7D%7D%2C%22zoomFactor%22:6%7D%2C%22layout%22:%224panel%22%7D"
        },
        {
            name: "View Kasthuri11 in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B10752.5%2C13312.5%2C925.5%5D%2C%22crossSectionScale%22:1%2C%22projectionScale%22:32768%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kasthuri/kasthuri11/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22image%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22image%22%7D%2C%22layout%22:%224panel%22%7D"
        },
        {
            name: "View Kasthuri14Maine in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B740.4161376953125%2C794.9313354492188%2C198.5%5D%2C%22crossSectionScale%22:5.584528464276054%2C%22projectionScale%22:32768%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kasthuri/kasthuri14Maine/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22image%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22image%22%7D%2C%22layout%22:%224panel%22%7D"
        },
        {
            name: "View Kasthuri14s1colEM in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B4e-9%2C%22m%22%5D%2C%22y%22:%5B4e-9%2C%22m%22%5D%2C%22z%22:%5B4e-8%2C%22m%22%5D%7D%2C%22position%22:%5B5659.5%2C3636.5%2C28.5%5D%2C%22crossSectionScale%22:18.541287459746854%2C%22crossSectionDepth%22:-16.323162199553785%2C%22projectionScale%22:32768%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kasthuri/kasthuri14s1colEM/image%22%2C%22tab%22:%22source%22%2C%22name%22:%22image%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kasthuri/kasthuri14s1colEM/anno%22%2C%22tab%22:%22source%22%2C%22name%22:%22anno%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22anno%22%7D%2C%22layout%22:%224panel%22%7D"
        }
        ],
        segmentation: [true],
    },
    allenMouseReferenceAtlas2017: {
        name: "Allen Mouse Reference Atlas",
        id: "allenMouseReferenceAtlas2017",
        public: true,
        date: Date.parse("July 30 2017"),
        hero: require("@/assets/projects/ara17.jpg"),
        media: require("@/assets/projects/ara17.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "ara_2016/sagittal_10um/annotation_10um_2017",
            xs: [250, 750],
            ys: [200, 600],
            zs: [500, 510]
        }],
        blurb: "Adult Mouse Reference Atlas from the Allen Institute",
        description: ["These anatomical reference atlases illustrate the adult mouse brain in coronal and sagittal planes of section. They are the spatial framework for datasets such as in situ hybridization, cell projection maps, and in vitro cell characterization."],
        tags: ["AIBS", "Atlas", "neuroscience", "mouse", "MRI", "neurodata"],
        species: "mouse",
        brainloc: "Mouse-WholeBrain2",
        publications: [{
            name: "Genome-wide atlas of gene expression in the adult mouse brain",
            url: "https://www.nature.com/articles/nature05453",
            authors: ["Ed S. Lein"]
        },
        {
            name: "The Allen Brain Atlas: 5 years and beyond",
            url: "https://www.nature.com/articles/nrn2722",
            authors: ["Allan R. Jones"]
        }],
        neuroglancer: {
            name: "Visualize experiment sagittal_100um in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B0.0001%2C%22m%22%5D%2C%22y%22:%5B0.0001%2C%22m%22%5D%2C%22z%22:%5B0.0001%2C%22m%22%5D%7D%2C%22position%22:%5B66.5%2C41.5%2C57.5%5D%2C%22crossSectionScale%22:0.25%2C%22projectionScale%22:256%2C%22layers%22:%5B%7B%22type%22:%22segmentation%22%2C%22source%22:%22boss://https://api.bossdb.io/ara_2016/sagittal_100um/annotation_100um_2016%22%2C%22tab%22:%22source%22%2C%22name%22:%22sagittal_100um%22%7D%5D%2C%22layout%22:%22xz%22%7D"
        },
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/ara_2016"
        }, {
            name: 'Visualize experiment sagittal_100um in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B0.0001%2C%22m%22%5D%2C%22y%22:%5B0.0001%2C%22m%22%5D%2C%22z%22:%5B0.0001%2C%22m%22%5D%7D%2C%22position%22:%5B66.5%2C40.5%2C58.5%5D%2C%22crossSectionScale%22:0.32768%2C%22projectionScale%22:1.6568542494923804%2C%22layers%22:%5B%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_100um/annotation_100um_2016/%22%2C%22tab%22:%22source%22%2C%22selectedAlpha%22:0.3%2C%22name%22:%22annotation_100um_2016%22%2C%22visible%22:false%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_100um/annotation_100um_2017%22%2C%22tab%22:%22source%22%2C%22selectedAlpha%22:0.3%2C%22name%22:%22annotation_100um_2017%22%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_100um/average_100um%22%2C%22tab%22:%22rendering%22%2C%22shaderControls%22:%7B%22normalized%22:%7B%22range%22:%5B0%2C256%5D%7D%7D%2C%22name%22:%22average_100um%22%7D%5D%2C%22showSlices%22:false%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22average_100um%22%7D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment sagittal_10um in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B0.00001%2C%22m%22%5D%2C%22y%22:%5B0.00001%2C%22m%22%5D%2C%22z%22:%5B0.00001%2C%22m%22%5D%7D%2C%22position%22:%5B668.9736938476562%2C446.0467529296875%2C570.5%5D%2C%22crossSectionScale%22:2.062090256268458%2C%22projectionScale%22:16.568542494923804%2C%22layers%22:%5B%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_10um/annotation_10um_2017%22%2C%22tab%22:%22rendering%22%2C%22selectedAlpha%22:0.38%2C%22name%22:%22annotation_10um_2017%22%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_10um/average_10um%22%2C%22tab%22:%22rendering%22%2C%22shaderControls%22:%7B%22normalized%22:%7B%22range%22:%5B0%2C255%5D%7D%7D%2C%22name%22:%22average_10um%22%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_10um/nissl_10um%22%2C%22tab%22:%22rendering%22%2C%22shaderControls%22:%7B%22normalized%22:%7B%22range%22:%5B0%2C31902%5D%7D%7D%2C%22name%22:%22nissl_10um%22%7D%5D%2C%22showSlices%22:false%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22annotation_10um_2017%22%7D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment sagittal_25um in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B0.000025%2C%22m%22%5D%2C%22y%22:%5B0.000025%2C%22m%22%5D%2C%22z%22:%5B0.000025%2C%22m%22%5D%7D%2C%22position%22:%5B264.5%2C160.5%2C228.5%5D%2C%22crossSectionScale%22:1.31072%2C%22projectionScale%22:6.627416997969521%2C%22layers%22:%5B%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_25um/annotation_25um_2016%22%2C%22tab%22:%22source%22%2C%22selectedAlpha%22:0.3%2C%22name%22:%22annotation_25um_2016%22%7D%2C%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_25um/annotation_25um_2017%22%2C%22tab%22:%22source%22%2C%22selectedAlpha%22:0.3%2C%22name%22:%22annotation_25um_2017%22%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_25um/average_25um%22%2C%22tab%22:%22rendering%22%2C%22shaderControls%22:%7B%22normalized%22:%7B%22range%22:%5B0%2C255%5D%7D%7D%2C%22name%22:%22average_25um%22%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_25um/nissl_25um%22%2C%22tab%22:%22source%22%2C%22name%22:%22nissl_25um%22%7D%5D%2C%22showSlices%22:false%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22nissl_25um%22%7D%2C%22layout%22:%224panel%22%7D'
        }, {
            name: 'Visualize experiment sagittal_50um in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B0.00005%2C%22m%22%5D%2C%22y%22:%5B0.00005%2C%22m%22%5D%2C%22z%22:%5B0.00005%2C%22m%22%5D%7D%2C%22position%22:%5B132.5%2C80.5%2C114.5%5D%2C%22crossSectionScale%22:0.65536%2C%22projectionScale%22:3.3137084989847607%2C%22layers%22:%5B%7B%22type%22:%22segmentation%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_50um/annotation_50um%22%2C%22tab%22:%22source%22%2C%22selectedAlpha%22:0.3%2C%22name%22:%22annotation_50um%22%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_50um/average_50um%22%2C%22tab%22:%22rendering%22%2C%22shaderControls%22:%7B%22normalized%22:%7B%22range%22:%5B0%2C255%5D%7D%7D%2C%22name%22:%22average_50um%22%7D%2C%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ara_2016/sagittal_50um/nissl_50um%22%2C%22tab%22:%22source%22%2C%22name%22:%22nissl_50um%22%7D%5D%2C%22showSlices%22:false%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22average_50um%22%7D%2C%22layout%22:%224panel%22%7D'
        }
        ],
        segmentation: [true],
    },

    amunts2015: {
        name: "Amunts et. al. 2015",
        id: "amunts2015",
        public: true,
        date: Date.parse("June 21 2015"),
        hero: require("@/assets/projects/big_brain.jpg"),
        media: require("@/assets/projects/big_brain.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "bigbrain/release2015/image",
            xs: [2000, 3000],
            ys: [3000, 4000],
            zs: [2800, 2808]
        }],
        blurb: "BigBrain is free, publicly available, and provides the opportunity for considerable neuroanatomical insights as it allows for extraction of features at high resolution for modeling and simulation.",
        description: ["Enabling an unprecedented look into the human brain, BigBrain spans micro- and macro-scopic scales. While previously available reference brains have been restricted to a single scale, such as whole-brain magnetic resonance imaging in humans or electron microscopy of small sections from small animals, BigBrain is an ultrahigh-resolution three-dimensional model of a full human brain at 20 micrometer resolution, coming closer to touching both camps than any previous dataset."],
        tags: ["HBP", "neuroscience", "BigBrain", "Modeling", "Simulation", "MRI", "human", "light microscopy", "neurodata"],
        species: "human",
        brainloc: "Human-WholeBrain",
        publications: [{
            name: "REPORT BigBrain: An Ultrahigh-Resolution 3D Human Brain Model",
            url: "https://www.science.org/doi/10.1126/science.1235381",
            authors: ["Katrin Amunts", "Claude Lepage", "Louis Borgeat", "Hartmut Mohlberg", "Timo Dickscheid", "Marc-Étienne Rousseau", "Sebastian Bludau", "Pierre-Louis Bazin", "Lindsay B. Lewis", "Ana-Maria Oros-Peusquens", "Nadim J. Shah", "Thomas Lippert", "Karl Zilles", "Alan C. Evans"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/bigbrain/release2015"
        }, {
            name: 'Visualize experiment release2015 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B20000.0,20000.0,20000.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/bigbrain/release2015/image/%22,%22name%22:%22image%22%7D%5D%7D'
        }]
    },

    bhatla2015: {
        name: "Bhatla et. al. 2015",
        id: "bhatla2015",
        public: true,
        date: Date.parse("August 17 2015"),
        hero: require("@/assets/projects/bhatla15_thumb.jpg"),
        media: require("@/assets/projects/bhatla15_thumb.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "bhatla/ritaN2/image",
            xs: [6550, 6550 + 512],
            ys: [7189, 7189 + 512],
            zs: [584, 594]
        }],
        blurb: "1199 serial sections of the anterior pharynx of worm #1",
        description: ["Using high-pressure freezing, serial section transmission electron microscopy (ssTEM) imaging, digital alignment and manual tracing, Nikhil Bhatla and Rita Droste in Bob Horvitz's Lab reconstructed the anterior half of the C. elegans feeding organ, the pharynx. Volumes are available for three adult hermaphrodite worms and include volumetric tracing of all neurons and selected cell types, as well as synapses identified from the I2 neurons. Sections were approximately 50 nm thick with an image resolution of 2 nm per pixel. The largest volume comprises 1199 slices. These data were published in a paper entitled Distinct neural circuits control rhythm inhibition and spitting by the myogenic pharynx of C. elegans (Current Biology, 2015)."],
        tags: ["NIH", "HHMI", "pharynx", "worm", "C. elegans", "nematode", "neuroscience", "EM", "ssTEM", "TEM", "celegans", "neurodata"],
        species: "celegans",
        brainloc: "Celegans-Whole",
        publications: [{
            name: "Distinct Neural Circuits Control Rhythm Inhibition and Spitting by the Myogenic Pharynx of C. elegans",
            url: "https://www.sciencedirect.com/science/article/pii/S0960982215007460?via%3Dihub",
            authors: ["Nikhil Bhatla", "Rita Droste", "Steven R. Sando", "Anne Huang", "H. Robert Horvitz"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/bhatla/ritaN2"
        }, {
            name: 'Visualize experiment ritaN2 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B2.0,2.0,50.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22segmentation%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/bhatla/ritaN2/annotation%22,%22name%22:%22annotation%22,%22selectedAlpha%22:0.3,%22objectAlpha%22:1.0,%22notSelectedAlpha%22:0.0%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/bhatla/ritaN2/image%22,%22name%22:%22image%22%7D%5D%7D'
        }]
    },

    bloss2016: {
        name: "Bloss et al. 2016",
        id: "bloss2016",
        public: true,
        date: Date.parse("January 29, 2016"),
        hero: require("@/assets/projects/bloss2016.jpg"),
        media: require("@/assets/projects/bloss2016.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "bloss16/channels/channel0",
            xs: [3371, 4371],
            ys: [2611, 3611],
            zs: [957, 960],
            res: 0,
        }],
        blurb: "Structured Dendritic Inhibition Supports Branch-Selective Integration in CA1 Pyramidal Cells",
        description: ["From Structured Dendritic Inhibition Supports Branch-Selective Integration in CA1 Pyramidal Cells Abstract: ",
            "Neuronal circuit function is governed by precise patterns of connectivity between specialized groups of neurons. The diversity of GABAergic interneurons is a hallmark of cortical circuits, yet little is known about their targeting to individual postsynaptic dendrites. We examined synaptic connectivity between molecularly defined inhibitory interneurons and CA1 pyramidal cell dendrites using correlative light-electron microscopy and large-volume array tomography. We show that interneurons can be highly selective in their connectivity to specific dendritic branch types and, furthermore, exhibit precisely targeted connectivity to the origin or end of individual branches. Computational simulations indicate that the observed subcellular targeting enables control over the nonlinear integration of synaptic input or the initiation and backpropagation of action potentials in a branch-selective manner. Our results demonstrate that connectivity between interneurons and pyramidal cell dendrites is more precise and spatially segregated than previously appreciated, which may be a critical determinant of how inhibition shapes dendritic computation."],
        tags: ["HHMI", "Pyramidal", "CA1", "neuroscience", "mouse", "EM", "AT", "AT-TEM", "TEM", "neurodata"],
        species: "mouse",
        brainloc: "Mouse-CA1",
        publications: [{
            name: "Structured Dendritic Inhibition Supports Branch-Selective Integration in CA1 Pyramidal Cells",
            url: "https://www.sciencedirect.com/science/article/pii/S0896627316000544?via%3Dihub",
            authors: ["Erik B. Bloss et al."]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/bloss16"
        }, {
            name: 'Visualize experiment bloss16 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B100.0,100.0,100.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/bloss/bloss16/channel0%22,%22name%22:%22channel0%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/bloss/bloss16/channel1%22,%22name%22:%22channel1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/bloss/bloss16/channel2%22,%22name%22:%22channel2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/bloss/bloss16/channel3%22,%22name%22:%22channel3%22%7D%5D%7D'
        },]
    },

    bloss2018: {
        name: "Bloss et al. 2018",
        id: "bloss2018",
        public: true,
        date: Date.parse("February 19, 2018"),
        hero: require("@/assets/projects/bloss2018.jpg"),
        media: require("@/assets/projects/bloss2018.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "bloss18/image/em",
            xs: [33000, 34000],
            ys: [33000, 34000],
            zs: [150, 155],
            res: 0
        }],
        blurb: "Single excitatory axons form clustered synapses onto CA1 pyramidal cell dendrites",
        description: ["From Single excitatory axons form clustered synapses onto CA1 pyramidal cell dendrites Abstract: ",
            "CA1 pyramidal neurons are a major output of the hippocampus and encode features of experience that constitute episodic memories. Feature-selective firing of these neurons results from the dendritic integration of inputs from multiple brain regions. While it is known that synchronous activation of spatially clustered inputs can contribute to firing through the generation of dendritic spikes, there is no established mechanism for spatiotemporal synaptic clustering. Here we show that single presynaptic axons form multiple, spatially clustered inputs onto the distal, but not proximal, dendrites of CA1 pyramidal neurons. These compound connections exhibit ultrastructural features indicative of strong synapses and occur much more commonly in entorhinal than in thalamic afferents. Computational simulations revealed that compound connections depolarize dendrites in a biophysically efficient manner, owing to their inherent spatiotemporal clustering. Our results suggest that distinct afferent projections use different connectivity motifs that differentially contribute to dendritic integration."],
        tags: ["HHMI", "Pyramidal", "CA1", "neuroscience", "mouse", "EM", "ssTEM", "neurodata"],
        species: "mouse",
        brainloc: "Mouse-CA1",
        publications: [{
            name: "Single excitatory axons form clustered synapses onto CA1 pyramidal cell dendrites",
            url: "https://www.nature.com/articles/s41593-018-0084-6",
            authors: ["Erik B. Bloss", "Mark S. Cembrowski", "Bill Karsh", "Jennifer Colonell", "Richard D. Fetter", "Nelson Spruston"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/bloss18"
        }, {
            name: 'Visualize experiment bloss18 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B3.890000104904175,3.890000104904175,50.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/bloss/bloss18/image%22,%22name%22:%22image%22%7D%5D%7D'
        }]
    },

    branch2018: {
        name: "Branch et al. 2018",
        id: "branch2018",
        public: true,
        date: Date.parse("October 30 2018"),
        hero: require("@/assets/projects/branch2018.jpg"),
        media: require("@/assets/projects/branch2018.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "ABagemouse/dentateECcagGFP3/Ch0",
            xs: [500, 900],
            ys: [500, 900],
            zs: [250, 255],
            res: 0
        }],
        blurb: "Adult generated neurons in aging M. musculus",
        description: ["From *A community-developed open-source computational ecosystem for big neuro data.*",
            "All code is available from https://neurodata.io/tools/ under an Apache 2.0 license unless otherwise specified."],
        tags: ["mouse", "aging", "neuroscience", "EM", "neurodata"],
        species: "mouse",
        brainloc: "",
        publications: [{
            name: "A community-developed open-source computational ecosystem for big neuro data",
            url: "https://www.nature.com/articles/s41592-018-0181-1",
            authors: ["Joshua T. Vogelstein", " Eric Perlman", " Benjamin Falk", " Alex Baden", " William Gray Roncal", " Vikram Chandrashekhar", " Forrest Collman", " Sharmishtaa Seshamani", " Jesse L. Patsolic", " Kunal Lillaney", " Michael Kazhdan", " Robert Hider Jr.", " Derek Pryor", " Jordan Matelsky", " Timothy Gion", " Priya Manavalan", " Brock Wester", " Mark Chevillet", " Eric T. Trautman", " Khaled Khairy", " Eric Bridgeford", " Dean M. Kleissas", " Daniel J. Tward", " Ailey K. Crow", " Brian Hsueh", " Matthew A. Wright", " Michael I. Miller", " Stephen J. Smith", " R. Jacob Vogelstein", " Karl Deisseroth", "Randal Burns"]
        }],
        neuroglancer: {
            name: "View experiement dentateECcagGFP3 in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B0.000002%2C%22m%22%5D%2C%22y%22:%5B0.000002%2C%22m%22%5D%2C%22z%22:%5B0.0000025%2C%22m%22%5D%7D%2C%22position%22:%5B1050.47412109375%2C1309.19677734375%2C471.5%5D%2C%22crossSectionScale%22:4.806648193775174%2C%22crossSectionDepth%22:-2973.7679358610826%2C%22projectionScale%22:4096%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ABagemouse/dentateECcagGFP3/Ch0%22%2C%22tab%22:%22source%22%2C%22name%22:%22Ch0%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22Ch0%22%7D%2C%22layout%22:%22xy%22%7D"
        },
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/ABagemouse/dentateECcagGFP3/Ch0"
        },
        {
            name: "View experiement dentateECcagGFP3 in Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22dimensions%22:%7B%22x%22:%5B0.000002%2C%22m%22%5D%2C%22y%22:%5B0.000002%2C%22m%22%5D%2C%22z%22:%5B0.0000025%2C%22m%22%5D%7D%2C%22position%22:%5B1050.47412109375%2C1309.19677734375%2C471.5%5D%2C%22crossSectionScale%22:4.806648193775174%2C%22crossSectionDepth%22:-2973.7679358610826%2C%22projectionScale%22:4096%2C%22layers%22:%5B%7B%22type%22:%22image%22%2C%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/ABagemouse/dentateECcagGFP3/Ch0%22%2C%22tab%22:%22source%22%2C%22name%22:%22Ch0%22%7D%5D%2C%22selectedLayer%22:%7B%22visible%22:true%2C%22layer%22:%22Ch0%22%7D%2C%22layout%22:%22xy%22%7D"
        }]
    },

    bumbarger2013: {
        name: "Bumbarger et al. 2013",
        id: "bumbarger2013",
        public: true,
        date: Date.parse("January 17 2013"),
        hero: require("@/assets/projects/bumbarger2013.jpg"),
        media: require("@/assets/projects/bumbarger2013.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "bumbarger/bumbarger13/image",
            xs: [10764, 11788],
            ys: [12440, 13464],
            zs: [1414, 1420]
        }],
        blurb: "Electron microscopy of serial section through the anterior region of P. pacificus, of more than 3,000 sections and containing the entire pharynx",
        description: ["These serial thin section data were generated by Dan Bumbarger in Ralf Sommer's lab in order to compare the pharyngeal connectomes of the pharyngeal nervous system between Caenorhabditis elegans and Pristionchus pacificus. (Cell 2013, 152:109–119). In P. pacificus they found clearly homologous neurons for all of the 20 pharyngeal neurons in C. elegans, but were surprised to uncover a massive rewiring of synaptic connectivity between the two species. These changes seem to correlate with known behavioral difference, most interestingly with the novel predatory feeding behaviors found in Diplogastrid nematodes such as P. pacificus."],
        tags: ["Max-Planck", "pharyngeal", "C. elegans", "nematode", "P. pacificus", "EM", "sTEM", "TEM", "celegans", "neurodata"],
        species: "celegans",
        brainloc: "Celegans-Whole",
        publications: [{
            name: "System-wide Rewiring Underlies Behavioral Differences in Predatory and Bacterial-Feeding Nematodes",
            url: "https://www.sciencedirect.com/science/article/pii/S0092867412015000?via%3Dihub",
            authors: ["Daniel J.Bumbarger", "Metta Riebesell", "Christian Rödelsperger", "Ralf J.Sommer"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/bumbarger/bumbarger13"
        }, {
            name: 'Visualize experiment bumbarger13 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B3.9000000953674316,3.9000000953674316,50.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/bumbarger/bumbarger13/image/%22,%22name%22:%22image%22%7D%5D%7D'
        }]
    },

    collman2015: {
        name: "Collman et al. 2015",
        id: "collman2015",
        public: true,
        date: Date.parse("April 8 2015"),
        hero: require("@/assets/projects/collman2015.jpg"),
        media: require("@/assets/projects/collman2015.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "collman/collman15v2/EM25K",
            xs: [4000, 5000],
            ys: [3000, 4000],
            zs: [14, 16]
        }],
        blurb: "Conjugate electron microscopy and array tomography",
        description: ["Synapses of the mammalian CNS are diverse in size, structure, molecular composition, and function. Synapses in their myriad variations are fundamental to neural circuit development, homeostasis, plasticity, and memory storage. Unfortunately, quantitative analysis and mapping of the brain's heterogeneous synapse populations has been limited by the lack of adequate single-synapse measurement methods. Electron microscopy (EM) is the definitive means to recognize and measure individual synaptic contacts, but EM has only limited abilities to measure the molecular composition of synapses. This report describes conjugate array tomography (AT), a volumetric imaging method that integrates immunofluorescence and EM imaging modalities in voxel-conjugate fashion. We illustrate the use of conjugate AT to advance the proteometric measurement of EM-validated single-synapse analysis in a study of mouse cortex."],
        tags: ["Max-Planck", "Conjugate Light-Electron", "Tomography", "neuroscience", "mouse", "EM", "AT", "cortex", "somatosensory cortex", "neurodata"],
        species: "mouse",
        brainloc: "Mouse-Somatosensory",
        publications: [{
            name: "Mapping Synapses by Conjugate Light-Electron Array Tomography",
            url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4388933/",
            authors: ["Forrest Collman", " JoAnn Buchanan", " Kristen D. Phend", " Kristina D. Micheva", " Richard J. Weinberg", "Stephen J Smith"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/collman"
        }, {
            name: 'Visualize experiment collman14v2 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B3.7200000286102295,3.7200000286102295,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22segmentation%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/annotation%22,%22name%22:%22annotation%22,%22selectedAlpha%22:0.3,%22objectAlpha%22:1.0,%22notSelectedAlpha%22:0.0%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/bIIItubulin%22,%22name%22:%22bIIItubulin%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/DAPI_2nd%22,%22name%22:%22DAPI_2nd%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/DAPI_3rd%22,%22name%22:%22DAPI_3rd%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/EM10K%22,%22name%22:%22EM10K%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/GABA%22,%22name%22:%22GABA%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/GAD2%22,%22name%22:%22GAD2%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/gephyrin%22,%22name%22:%22gephyrin%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/NR1%22,%22name%22:%22NR1%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/PSDr%22,%22name%22:%22PSDr%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/synapsin%22,%22name%22:%22synapsin%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/VGAT%22,%22name%22:%22VGAT%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman14v2/VGluT1%22,%22name%22:%22VGluT1%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment collman15v2 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B2.240000009536743,2.240000009536743,70.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22segmentation%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/annotation%22,%22name%22:%22annotation%22,%22selectedAlpha%22:0.3,%22objectAlpha%22:1.0,%22notSelectedAlpha%22:0.0%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/DAPI1st%22,%22name%22:%22DAPI1st%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/DAPI2nd%22,%22name%22:%22DAPI2nd%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/DAPI3rd%22,%22name%22:%22DAPI3rd%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/EM25K%22,%22name%22:%22EM25K%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/EM2k%22,%22name%22:%22EM2k%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/GABA488%22,%22name%22:%22GABA488%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/GAD647%22,%22name%22:%22GAD647%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/gephyrin594%22,%22name%22:%22gephyrin594%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/GS594%22,%22name%22:%22GS594%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/MBP488%22,%22name%22:%22MBP488%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/NR1594%22,%22name%22:%22NR1594%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/PSD95_488%22,%22name%22:%22PSD95_488%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/Synapsin647%22,%22name%22:%22Synapsin647%22%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/collman/collman15v2/VGluT1_647%22,%22name%22:%22VGluT1_647%22%7D%5D%7D'
        }]
    },

    dyer2016: {
        name: "Dyer et al. 2016",
        id: "dyer2016",
        public: true,
        date: Date.parse("April 29 2016"),
        hero: require("@/assets/projects/dyer2016.jpg"),
        media: require("@/assets/projects/dyer2016.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "dyer/dyer16/image",
            xs: [1280, 1580],
            ys: [1288, 1588],
            zs: [1000, 1010]
        }],
        blurb: "Mouse-Dyer3",
        description: ["From Quantifying Mesoscale Neuroanatomy Using X-Ray Microtomography Abstract: ",
            "Methods for resolving the three-dimensional (3D) microstructure of the brain typically start by thinly slicing and staining the brain, followed by imaging numerous individual sections with visible light photons or electrons. In contrast, X-rays can be used to image thick samples, providing a rapid approach for producing large 3D brain maps without sectioning. Here we demonstrate the use of synchrotron X-ray microtomography (µCT) for producing mesoscale (∼1 µm 3 resolution) brain maps from millimeter-scale volumes of mouse brain. We introduce a pipeline for µCT-based brain mapping that develops and integrates methods for sample preparation, imaging, and automated segmentation of cells, blood vessels, and myelinated axons, in addition to statistical analyses of these brain structures. Our results demonstrate that X-ray tomography achieves rapid quantification of large brain volumes, complementing other brain mapping and connectomics efforts."],
        tags: ["NIH", "X-ray", "X-ray microtomography", "XRM", "Mesoscale", "neuroscience", "mouse", "neurodata"],
        species: "mouse",
        brainloc: "Mouse-Dyer3",
        publications: [{
            name: "Quantifying Mesoscale Neuroanatomy Using X-Ray Microtomography",
            url: "https://www.eneuro.org/content/4/5/ENEURO.0195-17.2017",
            authors: ["Eva L. Dyer", " William Gray Roncal", " Judy A. Prasad", " Hugo L. Fernandes", " Doga Gürsoy", " Vincent De Andrade", " Kamel Fezzaa", " Xianghui Xiao", " Joshua T. Vogelstein", " Chris Jacobsen", " Konrad P. Körding", "Narayanan Kasthuri"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/dyer/dyer16"
        }, {
            name: 'Visualize experiment dyer16 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B650.0,650.0,650.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/dyer/dyer16/image/%22,%22name%22:%22image%22%7D%5D%7D'
        }],
        segmentation: [true],

    },

    hildebrand2017: {
        name: "Hildebrand et al. 2017",
        id: "hildebrand2017",
        public: true,
        date: Date.parse("May 10 2017"),
        hero: require("@/assets/projects/hildebrand2017.jpg"),
        media: require("@/assets/projects/hildebrand2017.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "hildebrand/120809zf104/151009",
            res: 0,
            xs: [600, 1000],
            ys: [400, 800],
            zs: [7500, 8000]
        }],
        blurb: "Multi-resolution serial-section electron microscopy data set containing the anterior quarter of a 5.5 days post fertilization larval zebrafish.",
        description: ["Hildebrand and colleagues acquired a multi-resolution serial-section electron microscopy data set containing the anterior quarter of a 5.5 days post fertilization larval zebrafish, including its complete brain. A draft projectome consisting of central and peripheral myelinated neurons was then reconstructed. Electron micrographs and reconstructions are available for view in CATMAID. A manuscript describing the data and methods used to generate it has been published in Nature. The Hildebrand16 database is made available under the Open Database License. Any rights in individual contents of the database are licensed under the Database Contents License. Any use should attribute the original data source (davidh@fas.harvard.edu) and this site."],
        tags: ["BRAIN Initiative", "NIH", "zebrafish", "EM", "SEM", "anterior quarter", "neuroscience", "neurodata"],
        species: "zebrafish",
        brainloc: "Zebrafish",
        publications: [{
            name: "Whole-brain serial-section electron microscopy in larval zebrafish",
            url: "https://www.nature.com/articles/nature22356",
            authors: ["David Grant Colburn Hildebrand", " Marcelo Cicconet", " Russel Miguel Torres", " Woohyuk Choi", " Tran Minh Quan", " Jungmin Moon", " Arthur Willis Wetzel", " Andrew Scott Champion", " Brett Jesse Graham", " Owen Randlett", " George Scott Plummer", " Ruben Portugues", " Isaac Henry Bianco", " Stephan Saalfeld", " Alexander David Baden", " Kunal Lillaney", " Randal Burns", " Joshua Tzvi Vogelstein", " Alexander Franz Schier", " Wei-Chung Allen Lee", " Won-Ki Jeong", " Jeff William Lichtman", "Florian Engert"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/hildebrand"
        }, {
            name: 'Visualize experiment 120809zf104 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B741.5,741.5,50.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/hildebrand/120809zf104/151009%22,%22name%22:%22151009%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment 130201zf142 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B56.400001525878906,56.400001525878906,60.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/hildebrand/130201zf142/160515_SWiFT_60nmpx%22,%22name%22:%22160515_SWiFT_60nmpx%22%7D%5D%7D'
        }],
        segmentation: [true],

    },

    bock2011: {
        name: "Bock et al. 2011",
        id: "bock2011",
        public: true,
        date: Date.parse("March 9, 2011"),
        hero: require("@/assets/projects/bock2011.jpg"),
        media: require("@/assets/projects/bock2011.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "Bock/bock11/image",
            xs: [67634, 69690],
            ys: [60000, 62048],
            zs: [3000, 3003]
        }],
        connectomes: [{
            type: "MotifStudio",
            name: "Mouse Visual Cortex",
            url: "https://motifstudio.bossdb.org/?mS=%2523%2520Reciprocal%2520connections%250A%250AA%2520-%253E%2520B%250AB%2520-%253E%2520A&selectedDataset=Bock%25202011%2520Mouse%2520visual%2520cortex"
        }],
        blurb: "Beautiful volume of mouse primary visual cortical data",
        description: [
            "Layer 2/3 - Davi Bock, Ph.D. and Wei-Chung Allen Lee, Ph.D., in the laboratory of Clay Reid, M.D., Ph.D. acquired a beautiful volume of mouse primary visual cortical data, spanning layers 1, 2/3, and upper layer 4.",
            "In addition to the electron microscope (EM) data, they used two-photon microscopy to determine the functional properties of about 14 of the cells in the same volume.",
            "Images were collected at approximately 4x4x45 cubic nanometers with a total volume of approximately 450x350x50 cubic microns.", "This dataset has a Z offset of 2917. Data exists betwen z slices 2917 through 4155."
        ],
        tags: ["NIH", "mouse", "EM", "primary visual cortex", "neuroscience", "V1", "musculus", "TEM", "layer 2/3", "layer 1", "neurodata"],
        species: "mouse",
        brainloc: "Mouse-VisualCortex",
        publications: [{
            name: "Network anatomy and in vivo physiology of visual cortical neurons",
            url: "https://www.nature.com/articles/nature09802",
            authors: ["Davi D. Bock ", "Wei-Chung Allen Lee", "Aaron M. Kerlin", "Mark L. Andermann", "Greg Hood", "Arthur W. Wetzel", "Sergey Yurgenson", "Edward R. Soucy", "Hyon Suk Kim & R. Clay Reid"]
        },
        {
            name: "Untangling the brain - by Nature Video",
            url: "https://www.youtube.com/watch?v=dS_ONoUrptg",
            authors: ["Nature Video"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/bock/bock11"
        }, {
            name: 'Visualize experiment bock11 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B4.0,4.0,40.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/bock11/image/%22,%22name%22:%22image%22%7D%5D%7D'
        }]
    },

    Lee2016: {
        name: "Lee et al. 2016",
        id: "Lee2016",
        public: true,
        date: Date.parse("March 26 2016"),
        hero: require("@/assets/projects/lee16.jpg"),
        media: require("@/assets/projects/lee16.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "lee/lee16/image",
            xs: [81920, 81920 + 512],
            ys: [81920, 81920 + 512],
            zs: [411, 421]
        }],
        blurb: "Electron Microscopy data used in a study of an excitatory network in Mouse V1.",
        description: ["From Anatomy and function of an excitatory network in the visual cortext abstract", "Circuits in the cerebral cortex consist of thousands of neurons connected by millions of synapses. A precise understanding of these local networks requires relating circuit activity with the underlying network structure. For pyramidal cells in superficial mouse visual cortex (V1), a consensus is emerging that neurons with similar visual response properties excite each other1,2,3,4,5, but the anatomical basis of this recurrent synaptic network is unknown. Here we combined physiological imaging and large-scale electron microscopy to study an excitatory network in V1. We found that layer 2/3 neurons organized into subnetworks defined by anatomical connectivity, with more connections within than between groups. More specifically, we found that pyramidal neurons with similar orientation selectivity preferentially formed synapses with each other, despite the fact that axons and dendrites of all orientation selectivities pass near (<5 μm) each other with roughly equal probability. Therefore, we predict that mechanisms of functionally specific connectivity take place at the length scale of spines. Neurons with similar orientation tuning formed larger synapses, potentially enhancing the net effect of synaptic specificity. With the ability to study thousands of connections in a single circuit, functional connectomics is proving a powerful method to uncover the organizational logic of cortical networks."],
        tags: ["NIH", "AIBS", "mouse", "EM", "TEM", "V1", "neuroscience", "neurodata"],
        species: "mouse",
        brainloc: "Mouse-VisualCortex",
        publications: [{
            name: "Anatomy and function of an excitatory network in the visual cortex",
            url: "https://www.nature.com/articles/nature17192",
            authors: ["Wei-Chung Allen Lee", "Vincent Bonin", "Michael Reed", "Brett J. Graham", "Greg Hood", "Katie Glattfelder", "R. Clay Reid"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/lee/lee16"
        }, {
            name: 'Visualize experiment lee16 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B4.0,4.0,40.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/lee/lee16/image/%22,%22name%22:%22image%22%7D%5D%7D'
        }]
    },

    Takemura2013: {
        name: "Takemura et al. 2013",
        id: "Takemura2013",
        public: true,
        date: Date.parse("August 07 2013"),
        hero: require("@/assets/projects/takemura14.jpg"),
        media: require("@/assets/projects/takemura14.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "takemura/takemura13/image",
            xs: [6000, 7000],
            ys: [6000, 7000],
            zs: [700, 705]
        }],
        connectomes: [{
            type: "MotifStudio",
            name: "Drosophila Medulla",
            url: "https://motifstudio.bossdb.org/?mS=%2523%2520Reciprocal%2520connections%250A%250AA%2520-%253E%2520B%250AB%2520-%253E%2520A%250A&selectedDataset=Takemura2013_Drosophila-medulla.graphml"
        }],
        blurb: "The right part of the brain of a wild-type Oregon R female fly was serially sectioned into 40-nm slices. A total of 1,769 sections, traversing the medulla and downstream neuropils, were imaged at a magnification of 35,000.",
        description: ["A visual motion detection circuit suggested by Drosophila connectomics abstract",
            "Animal behaviour arises from computations in neuronal circuits, but our understanding of these computations has been frustrated by the lack of detailed synaptic connection maps, or connectomes. For example, despite intensive investigations over half a century, the neuronal implementation of local motion detection in the insect visual system remains elusive. Here we develop a semi-automated pipeline using electron microscopy to reconstruct a connectome, containing 379 neurons and 8,637 chemical synaptic contacts, within the Drosophila optic medulla. By matching reconstructed neurons to examples from light microscopy, we assigned neurons to cell types and assembled a connectome of the repeating module of the medulla. Within this module, we identified cell types constituting a motion detection circuit, and showed that the connections onto individual motion-sensitive neurons in this circuit were consistent with their direction selectivity. Our results identify cellular targets for future functional investigations, and demonstrate that connectomes can provide key insights into neuronal computations."],
        tags: ["HHMI", "drosophila", "fruitfly", "circuit", "vision", "neuroscience", "medulla", "TEM", "EM", "neurodata"],
        species: "fruitfly",
        brainloc: "Drosophila-Medulla",
        publications: [{
            name: "A visual motion detection circuit suggested by Drosophila connectomics",
            url: "https://www.nature.com/articles/nature12450",
            authors: ["Shin-ya Takemura", " Arjun Bharioke", " Zhiyuan Lu", " Aljoscha Nern", " Shiv Vitaladevuni", " Patricia K. Rivlin", " William T. Katz", " Donald J. Olbris", " Stephen M. Plaza", " Philip Winston", " Ting Zhao", " Jane Anne Horne", " Richard D. Fetter", " Satoko Takemura", " Katerina Blazek", " Lei-Ann Chang", " Omotara Ogundeyi", " Mathew A. Saunders", " Victor Shapiro", " Christopher Sigmund", " Gerald M. Rubin", " Louis K. Scheffer", " Ian A. Meinertzhagen", "Dmitri B. Chklovskii"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/takemura/takemura13"
        }, {
            name: 'Visualize experiment takemura13 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B4.400000095367432,4.400000095367432,44.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/takemura/takemura13/image/%22,%22name%22:%22image%22%7D%5D%7D'
        }]
    },

    Kharris15: {
        name: "Harris et al. 2015",
        id: "Kharris15",
        public: true,
        date: Date.parse("September 01 2015"),
        hero: require("@/assets/projects/kharris15.jpg"),
        media: require("@/assets/projects/kharris15.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "kharris15/apical/em",
            xs: [4096, 4096 + 512],
            ys: [4096, 4096 + 512],
            zs: [100, 110]

        },
        {
            protocol: "https",
            server: "api.bossdb.io",
            uri: "kharris15/oblique/em"
        },
        {
            protocol: "https",
            server: "api.bossdb.io",
            uri: "kharris15/spine/em"
        }],
        blurb: "A resource from 3D electron microscopy of hippocampal neuropil for user training and tool development.",
        description: ["From the laboratory of Kristen M Harris, PhD, three volumes of hippocampal CA1 neuropil in adult rat were imaged at an XY resolution of ~2 nm on serial sections of ~50-60 nm thickness. All axons, dendrites, glia, and synapses were reconstructed in a cube surrounding a large dendritic spine, a cylinder surrounding an oblique dendritic segment, and a parallelepiped surrounding an apical dendritic segment."],
        tags: ["NIH", "NSF", "EM", "SEM", "mouse", "CA1", "hippocampus", "neuropil", "segmentation", "neurodata"],
        species: "mouse",
        brainloc: "Mouse-CA1",
        publications: [{
            name: "A resource from 3D electron microscopy of hippocampal neuropil for user training and tool development",
            url: "https://www.nature.com/articles/sdata201546",
            authors: ["Kristen M. Harris", " Josef Spacek", " Maria Elizabeth Bell", " Patrick H. Parker", " Laurence F. Lindsey", " Alexander D. Baden", " Joshua T. Vogelstein & Randal Burns"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/kharris15"
        }, {
            name: 'Visualize experiment apical in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B2.0,2.0,50.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22segmentation%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kharris15/apical/anno%22,%22name%22:%22anno%22,%22selectedAlpha%22:0.3,%22objectAlpha%22:1.0,%22notSelectedAlpha%22:0.0%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kharris15/apical/em%22,%22name%22:%22em%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment oblique in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B2.0,2.0,50.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22segmentation%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kharris15/oblique/anno%22,%22name%22:%22anno%22,%22selectedAlpha%22:0.3,%22objectAlpha%22:1.0,%22notSelectedAlpha%22:0.0%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kharris15/oblique/em%22,%22name%22:%22em%22%7D%5D%7D'
        }, {
            name: 'Visualize experiment spine in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B2.0,2.0,50.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22segmentation%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kharris15/spine/anno%22,%22name%22:%22anno%22,%22selectedAlpha%22:0.3,%22objectAlpha%22:1.0,%22notSelectedAlpha%22:0.0%7D,%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/kharris15/spine/em%22,%22name%22:%22em%22%7D%5D%7D'
        }]
    },

    helmstaedter13: {
        name: "Helmstaedter et al. 2013",
        id: "helmstaedter13",
        public: true,
        date: Date.parse("August 07 2013"),
        hero: require("@/assets/projects/MH_3.jpg"),
        media: require("@/assets/projects/MH_3.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "helmstaedter13/mouse_retina/080823_e2006_mouseHRP_mag1",
            xs: [5100, 6100],
            ys: [2500, 3500],
            zs: [1770, 1776]
        },
        {
            protocol: "https",
            server: "api.bossdb.io",
            uri: "helmstaedter13/mouse_retina/e2006_segmentation_recol"
        }],
        blurb: "Here we present for the mouse inner plexiform layer—the main computational neuropil region in the mammalian retina—the dense reconstruction of 950 neurons and their mutual contacts.",
        description: ["From Connectomic reconstruction of the inner plexiform layer in the mouse retina Abstract", "Comprehensive high-resolution structural maps are central to functional exploration and understanding in biology. For the nervous system, in which high resolution and large spatial extent are both needed, such maps are scarce as they challenge data acquisition and analysis capabilities. Here we present for the mouse inner plexiform layer—the main computational neuropil region in the mammalian retina—the dense reconstruction of 950 neurons and their mutual contacts. This was achieved by applying a combination of crowd-sourced manual annotation and machine-learning-based volume segmentation to serial block-face electron microscopy data. We characterize a new type of retinal bipolar interneuron and show that we can subdivide a known type based on connectivity. Circuit motifs that emerge from our data indicate a functional mechanism for a known cellular response in a ganglion cell that detects localized motion, and predict that another ganglion cell is motion sensitive."],
        tags: ["EM", "SBEM", "SEM", "mouse", "mammalian", "retina", "plexiform", "neuroscience", "segmentation", "neurodata"],
        species: "mouse",
        brainloc: "Mouse-Retina",
        publications: [{
            name: "Connectomic reconstruction of the inner plexiform layer in the mouse retina",
            url: "https://www.nature.com/articles/nature12346",
            authors: ["Moritz Helmstaedter", "Kevin L. Briggman", "Srinivas C. Turaga", "Viren Jain", "H. Sebastian Seung", "Winfried Denk"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/helmstaedter13/mouse_retina"
        }],
        neuroglancer: {
            name: "Neuroglancer",
            url: "https://neuroglancer.bossdb.io/#!%7B%22layers%22:%5B%7B%22source%22:%22precomputed://s3://bossdb-open-data/helmstaedter13/mouse_retina/080823_e2006_mouseHRP_mag1%22%2C%22type%22:%22image%22%2C%22name%22:%22mouse_retina%22%7D%2C%7B%22source%22:%22precomputed://https://s3.amazonaws.com/bossdb-open-data/mesh/helmstaedter13/mouse_retina/e2006_segmentation_recol%22%2C%22type%22:%22segmentation%22%2C%22segments%22:%5B%2219%22%2C%2222%22%2C%2228%22%2C%2229%22%2C%2240%22%2C%2245%22%2C%2247%22%2C%2250%22%2C%2252%22%2C%2253%22%2C%2264%22%2C%2280%22%2C%2287%22%2C%229%22%2C%2291%22%5D%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22mesh%22%7D%2C%7B%22source%22:%22precomputed://s3://bossdb-open-data/helmstaedter13/mouse_retina/e2006_segmentation_recol%22%2C%22type%22:%22segmentation%22%2C%22skeletonRendering%22:%7B%22mode2d%22:%22lines_and_points%22%2C%22mode3d%22:%22lines%22%7D%2C%22name%22:%22e2006_segmentation_recol1%22%2C%22visible%22:false%7D%5D%2C%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B16%2C16%2C25%5D%2C%22voxelCoordinates%22:%5B5902.25927734375%2C3467.043212890625%2C1615.7628173828125%5D%7D%7D%2C%22zoomFactor%22:102.42485185566157%7D%2C%22perspectiveOrientation%22:%5B-0.762554943561554%2C0.5726549029350281%2C0.25216543674468994%2C0.16428299248218536%5D%2C%22perspectiveZoom%22:1536.2525635191344%2C%22selectedLayer%22:%7B%22layer%22:%22mesh%22%2C%22visible%22:true%7D%2C%22layout%22:%22yz-3d%22%7D"
        }
    },

    wanner16: {
        name: "Wanner et al. 2016",
        id: "wanner16",
        public: true,
        date: Date.parse("November 08 2016"),
        hero: require("@/assets/projects/wanner16.jpg"),
        media: require("@/assets/projects/wanner16.jpg"),
        locations: [{
            protocol: "https",
            server: "api.bossdb.io",
            uri: "wanner16/AA201605/SBEM1",
            res: 0,
            xs: [6600, 7600],
            ys: [7000, 8000],
            zs: [2748, 2750],
        }],
        blurb: "Large-scale reconstructions of neuronal populations are critical for structural analyses of neuronal cell types and circuits.",
        description: [
            "Dense reconstructions of neurons from image data require ultrastructural resolution throughout large volumes, which can be achieved by automated volumetric electron microscopy (EM) techniques. We used serial block face scanning EM (SBEM) and conductive sample embedding to acquire an image stack from an olfactory bulb (OB) of a zebrafish larva at a voxel resolution of 9.25 × 9.25 × 25 nm3 (Wanner et al., 2016). Skeletons of 1,022 neurons, ~98% of all neurons in the OB, were reconstructed by manual tracing and efficient error correction procedures.",
            "An ergonomic software package, PyKNOSSOS, was created in Python for data browsing, neuron tracing, synapse annotation, and visualization. PyKNOSSOS is available for free download ( https://github.com/adwanner/PyKNOSSOS ). The reconstructions allow for detailed analyses of morphology, projections and subcellular features of different neuron types ( http://dx.doi.org/10.5281/zenodo.58985 ). The high density of reconstructions enables geometrical and topological analyses of the OB circuitry."
        ],
        tags: ["HFSP", "SNF", "EM", "SBEM", "SEM", "olfactory", "bulb", "zebrafish", "neuroscience", "neurodata"],
        species: "zebrafish",
        brainloc: "Zebrafish-OB",
        publications: [{
            name: "3-dimensional electron microscopic imaging of the zebrafish olfactory bulb and dense reconstruction of neurons",
            url: "https://www.nature.com/articles/sdata2016100",
            authors: ["Adrian A. Wanner", "Christel Genoud", "Rainer W. Friedrich"]
        },
        {
            name: "Dense EM-based reconstruction of the interglomerular projectome in the zebrafish olfactory bulb",
            url: "https://www.nature.com/articles/nn.4290",
            authors: ["Adrian A Wanner", "Christel Genoud", "Tafheem Masudi", "Léa Siksou & Rainer W Friedrich"]
        }],
        links: [{
            name: "View at BossDB.io",
            url: "https://api.bossdb.io/v1/mgmt/resources/wanner16/AA201605"
        }, {
            name: 'Visualize experiment AA201605 in Neuroglancer',
            url: 'https://neuroglancer.bossdb.io#!%7B%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B9.25,9.25,25.0%5D%7D%7D,%22zoomFactor%22:2.0%7D,%22showSlices%22:false,%22layout%22:%224panel%22,%22perspectiveZoom%22:2000.0,%22layers%22:%5B%7B%22type%22:%22image%22,%22source%22:%22precomputed://s3://bossdb-open-data/neurodata/wanner16/AA201605/SBEM1/%22,%22name%22:%22SBEM1%22%7D%5D%7D'
        }]
    }
}, (project) => ({ ...project, dataTypes: ["volumetric"].concat(project.segmentation ? ["segmentation"] : []).concat(project.connectomes ? ["connectomics"] : []).concat(project.mesh ? ["mesh"] : []) }));

const schema = {
    "type": "object",
    "required": [
        "name",
        "id",
        "public",
        "date",
        "hero",
        "media",
        "species",
        "brainloc",
        "blurb",
        // "locations",
        "publications",
        "links",
        "description",
        "tags",
        "dataTypes"
    ],
    "properties": {
        "name": { type: "string" },
        "id": { type: "string" },
        "public": { type: "boolean" },
        "date": { type: "Date" },
        "hero": { type: "string" },
        "heroPosition": { type: "string" },
        "media": { type: "string" },
        "species": { type: "string" },
        "brainloc": { type: "string" },
        "blurb": { type: "string" },
        "locations": {
            type: "array", "items": {
                type: "object",
                required: ['protocol', 'server', 'uri'],
                properties: {
                    "protocol": { type: "string" },
                    "server": { type: "string" },
                    "uri": { type: "string" },
                    "xs": { type: "array", "items": { type: "number" } },
                    "ys": { type: "array", "items": { type: "number" } },
                    "zs": { type: "array", "items": { type: "number" } },
                }
            }
        },
        "publications": {
            type: "array", "items": {
                type: "object",
                required: ["name", "url"],
                properties: {
                    "name": { type: "string" },
                    "url": { type: "string" },
                    "authors": { type: "array", items: { type: "string" } },

                }
            }
        },
        "links": {
            type: "array",
            items: {
                type: "object",
                required: ["name", "url"],
                properties: {
                    "name": { type: "string" },
                    "url": { type: "string" },
                }
            }
        },
        "description": { type: "array", "items": { type: "string" } },
        "tags": { type: "array", "items": { type: "string" } },
        "dataTypes": { type: "array", "items": { type: "string" } }
    }
};

if (process.env.NODE_ENV !== 'production') {
    Object.values(projects).forEach(project => {
        let validator = new Validator().validate(project, schema);
        if (!validator.valid) {
            console.error(`Validation failed on ${project.name}, ${validator.toString()}`);
            validator.errors.forEach(error => console.log(
                project.name, error.stack
            ))
        }
    });
}
export default projects;
