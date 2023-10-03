const publications = [
    // Leave this one at the top please :)
    {
        title: "The Brain Observatory Storage Service and Database (BossDB): A Cloud-Native Approach for Petascale Neuroscience Discovery",
        authors: "Robert Hider Jr., Dean Kleissas, Timothy Gion, Daniel Xenes, Jordan Matelsky, Derek Pryor, Luis Rodriguez, Erik C. Johnson, William Gray-Roncal, Brock Wester",
        link: "https://www.frontiersin.org/articles/10.3389/fninf.2022.828787/full",
        contents: ["[Frontiers in Neuroinformatics (Feb. 2022)](https://www.frontiersin.org/articles/10.3389/fninf.2022.828787/full)", "Technological advances in imaging and data acquisition are leading to the development of petabyte-scale neuroscience image datasets. These large-scale volumetric datasets pose unique challenges since analyses often span the entire volume, requiring a unified platform to access it. In this paper, we describe the Brain Observatory Storage Service and Database (BossDB), a cloud-based solution for storing and accessing petascale image datasets. BossDB provides support for data ingest, storage, visualization, and sharing through a RESTful Application Programming Interface (API). A key feature is the scalable indexing of spatial data and automatic and manual annotations to facilitate data discovery. Our project is open source and can be easily and cost effectively used for a variety of modalities and applications, and has effectively worked with datasets over a petabyte in size."]
    },
    {
        title: "Scalable graph analysis tools for the connectomics community",
        authors: "Jordan K. Matelsky, Erik C. Johnson, Brock Wester, William Gray-Roncal",
        link: "https://doi.org/10.1101/2022.06.01.494307",
        contents: ["[BioRXiv Preprint (Jun. 2022)](https://doi.org/10.1101/2022.06.01.494307)", "Neuroscientists now have the opportunity to analyze synaptic resolution connectomes that are larger than the memory on single consumer workstations. As dataset size and tissue diversity have grown, there is increasing interest in conducting comparative connectomics research, including rapidly querying and searching for recurring patterns of connectivity across brain regions and species. There is also a demand for algorithm reuse — applying methods developed for one dataset to another volume. A key technological hurdle is enabling researchers to efficiently and effectively query these diverse datasets, especially as the raw image volumes grow beyond terabyte sizes. Existing community tools can perform such queries and analysis on smaller scale datasets, which can fit locally in memory, but the path to scaling remains unclear. Existing solutions such as neuPrint or FlyBrainLab enable these queries for specific datasets, but there remains a need to generalize algorithms and standards across datasets. To overcome this challenge, we present a software framework for comparative connectomics and graph discovery to make connectomes easy to analyze, even when larger-than-RAM, and even when stored in disparate datastores. This software suite includes visualization tools, a web portal, a connectivity and annotation query engine, and the ability to interface with a variety of data sources and community tools from the neuroscience community. These tools include MossDB (an immutable datastore for metadata and rich annotations); Grand (for prototyping larger-than-RAM graphs); GrandIso-Cloud (for querying existing graphs that exceed the capabilities of a single work-station); and Motif Studio (for enabling the public to query across connectomes). These tools interface with existing frameworks such as neuPrint, graph databases such as Neo4j, and standard data analysis tools such as Pandas or NetworkX. Together, these tools enable tool and algorithm reuse, standardization, and neuroscience discovery."]
    },
    {
        title: "Connectomics Annotation Metadata Standardization for Increased Accessibility and Queryability",
        authors: "Morgan Sanchez, Dymon Moore, Erik C. Johnson, Brock Wester, Jeff W. Lichtman, William Gray-Roncal",
        link: "https://www.frontiersin.org/articles/10.3389/fninf.2022.828458/full",
        contents: [
            "[Frontiers in Neuroinformatics (May 2022)](https://www.frontiersin.org/articles/10.3389/fninf.2022.828458/full)",
            "Neuroscientists can leverage technological advances to image neural tissue across a range of different scales, potentially forming the basis for the next generation of brain atlases and circuit reconstructions at submicron resolution, using Electron Microscopy and X-ray Microtomography modalities. However, there is variability in data collection, annotation, and storage approaches, which limits effective comparative and secondary analysis. There has been great progress in standardizing interfaces for large-scale spatial image data, but more work is needed to standardize annotations, especially metadata associated with neuroanatomical entities. Standardization will enable validation, sharing, and replication, greatly amplifying investment throughout the connectomics community. We share key design considerations and a usecase developed for metadata for a recent large-scale dataset."
        ]
    },
    {
        title: "An Integrated Toolkit for Extensible and Reproducible Neuroscience",
        link: "https://ieeexplore.ieee.org/document/9630199",
        authors: "Jordan K Matelsky, Luis M Rodriguez, Daniel Xenes, Timothy Gion, Robert Hider, Brock A Wester, William Gray-Roncal",
        contents: [
            `[IEEE EMBC (Dec. 2021)](https://ieeexplore.ieee.org/document/9630199)`,
            `As neuroimagery datasets continue to grow in size, the complexity of data analyses can require a detailed understanding and implementation of systems computer science for storage, access, processing, and sharing. Currently, several general data standards (e.g., Zarr, HDF5, precomputed) and purpose-built ecosystems (e.g., BossDB, CloudVolume, DVID, and Knossos) exist. Each of these systems has advantages and limitations and is most appropriate for different use cases. Using datasets that don’t fit into RAM in this heterogeneous environment is challenging, and significant barriers exist to leverage underlying research investments. In this manuscript, we outline our perspective for how to approach this challenge through the use of community provided, standardized interfaces that unify various computational backends and abstract computer science challenges from the scientist. We introduce desirable design patterns and share our reference implementation called intern.`
        ]
    }, {
        title: "CONFIRMS: A Toolkit for Scalable, Black Box Connectome Assessment and Investigation",
        link: "https://ieeexplore.ieee.org/document/9630109",
        authors: "Caitlyn Bishop, Jordan Matelsky, Miller Wilt, Joseph Downs, Patricia Rivlin, Stephen Plaza, Brock Wester, William Gray-Roncal",
        contents: [
            `[IEEE EMBC (Dec. 2021)](https://ieeexplore.ieee.org/document/9630109)`,
            `The nanoscale connectomics community has recently generated automated and semi-automated "wiring diagrams" of brain subregions from terabytes and petabytes of dense 3D neuroimagery. This process involves many challenging and imperfect technical steps, including dense 3D image segmentation, anisotropic nonrigid image alignment and coregistration, and pixel classification of each neuron and their individual synaptic connections. As data volumes continue to grow in size, and connectome generation becomes increasingly commonplace, it is important that the scientific community is able to rapidly assess the quality and accuracy of a connectome product to promote dataset analysis and reuse. In this work, we share our scalable toolkit for assessing the quality of a connectome reconstruction via targeted inquiry and large-scale graph analysis, and to provide insights into how such connectome proofreading processes may be improved and optimized in the future. We illustrate the applications and ecosystem on a recent reference dataset.Clinical relevance— Large-scale electron microscopy (EM) data offers a novel opportunity to characterize etiologies and neurological diseases and conditions at an unprecedented scale. EM is useful for low-level analyses such as biopsies; this increased scale offers new possibilities for research into areas such as neural networks if certain bottlenecks and problems are overcome.`
        ]
    }, {
        title: "DotMotif: An open-source tool for connectome subgraph isomorphism search and graph queries",
        link: "https://www.nature.com/articles/s41598-021-91025-5.epdf",
        authors: "Jordan K. Matelsky, Elizabeth P. Reilly, Erik C. Johnson, Jennifer Stiso, Danielle S. Bassett, Brock A. Wester, and William Gray-Roncal",
        contents: [
            `Nature Scientific Reports (Jun. 2021) - https://doi.org/10.1038/s41598-021-91025-5`
        ]
    }, {
        title: "Toward a scalable framework for reproducible processing of volumetric, nanoscale neuroimaging datasets",
        link: "https://academic.oup.com/gigascience/article/9/12/giaa147/6042730",
        authors: "Erik C Johnson, Miller Wilt, Luis M Rodriguez, Raphael Norman-Tenazas, Corban Rivera, Nathan Drenkow, Dean Kleissas, Theodore J LaGrow, Hannah P Cowley, Joseph Downs, Jordan K. Matelsky, Marisa J. Hughes, Elizabeth P. Reilly, Brock A. Wester, Eva L. Dyer, Konrad P. Kording, William R. Gray-Roncal",
        contents: [
            `Gigascience (Dec. 2020) - https://doi.org/10.1093/gigascience/giaa147`
        ]
        // },
        // {
        //     title: "intern: Integrated Toolkit for Extensible and Reproducible Neuroscience",
        //     link: "https://www.biorxiv.org/content/10.1101/2020.05.15.098707v1",
        //     authors: "Jordan K Matelsky, Luis Rodriguez, Daniel Xenes, Timothy Gion, Robert Hider Jr., Brock Wester, William Gray-Roncal",
        //     contents: [
        //         `bioRxiv Preprint (Nov. 2020) - https://doi.org/10.1101/2020.05.15.098707`
        //     ]
    }, {
        title: "Leveraging Tools from Autonomous Navigation for Rapid, Robust Neuron Connectivity",
        link: "https://doi.org/10.1007/978-3-030-59722-1_11",
        authors: "N Drenkow, Justin Joyce, Jordan Matelsky, Jennifer Heiko, Reem Larabi, Brock Wester, Dean Kleissas, William Gray-Roncal",
        contents: [
            `MICCAI 2020 (Sep. 2020) - https://doi.org/10.1007/978-3-030-59722-1_11`
        ]
    },
    {
        title: "Transfer Learning Analysis of Image Processing Workflows for Electron Microscopy Datasets",
        link: "https://ieeexplore.ieee.org/abstract/document/9048673",
        authors: "Erik C. Johnson, Luis M. Rodriguez, Raphael Norman-Tenazas, Daniel Xenes, William R. Gray-Roncal",
        contents: [
            `IEEE Asilomar 2019 (Nov. 2019) - https://doi.org/10.1109/IEEECONF44664.2019.9048673`
        ]
    }, {
        //     title: "The Block Object Storage Service (BossDB): A Cloud-Native Approach for Petascale Neuroscience Discovery",
        //     link: "https://www.biorxiv.org/content/early/2017/11/10/217745",
        //     authors: "Robert Hider Jr., Dean M. Kleissas, Derek Pryor, Timothy Gion, Luis Rodriguez, Jordan Matelsky, William Gray-Roncal, Brock Wester",
        //     contents: [
        //         `bioRxiv Preprint (Oct. 2019) - https://doi.org/10.1101/217745`
        //     ]
        // },
        // {
        title: "A community-developed open-source computational ecosystem for big neuro data",
        link: "https://www.nature.com/articles/s41592-018-0181-1",
        authors: "Joshua T. Vogelstein, Eric Perlman, Benjamin Falk, Alex Baden, William Gray Roncal, Vikram Chandrashekhar, Forrest Collman, Sharmishtaa Seshamani, Jesse L. Patsolic, Kunal Lillaney, Michael Kazhdan, Robert Hider Jr., Derek Pryor, Jordan Matelsky, Timothy Gion, Priya Manavalan, Brock Wester, Mark Chevillet, Eric T. Trautman, Khaled Khairy, Eric Bridgeford, Dean M. Kleissas, Daniel J. Tward, Ailey K. Crow, Brian Hsueh, Matthew A. Wright, Michael I. Miller, Stephen J. Smith, R. Jacob Vogelstein, Karl Deisseroth & Randal Burns",
        contents: [
            `Nature Methods (Oct. 2018) - https://doi.org/10.1038/s41592-018-0181-1`
        ]
    },
    {
        title: "Cell Lineage Predicts Neural Connectivity Beyond Cell Type",
        link: "https://www.biorxiv.org/content/10.1101/2022.11.01.514680v1",
        authors: "Jordan Matelsky, Brock Wester, Konrad P. Kording",
        contents: [
            `[BioRXiv Preprint (Nov. 2022)](https://www.biorxiv.org/content/10.1101/2022.11.01.514680v1)`,
            `As an organism develops, a zygote becomes the body through repeated cell division. This process produces the mitotic family tree, and cells specialize into their ultimate phenotype through interaction with other cells but also through the history of divisions. Biologists often cluster cells in the body into “cell types,” using e.g. their morphologies and molecular makeup. While morphomolecular cell type carries information about phenotype and function, there may be unknown, missing information available in this family tree. Emerging methods are making these lineage trees progressively observable. Here, using the complete mitotic family tree and connectome of the nematode C. elegans we ask about the role of cell-types and their family tree. We can thus evaluate how well we can predict synaptic connection with only cell-type information versus with the family tree lineage. We show that neglecting lineage can produce misleading insights into the mechanisms underlying neural wiring: underlying lineage can confound the effect of cell type. These results suggest that the concept of cell-type needs to be re-thought in the context of this emerging knowledge about cell lineage.`
        ]
    },
    {
        title: "NeuVue: A Framework and Workflows for High-Throughput Electron Microscopy Connectomics Proofreading",
        link: "https://www.biorxiv.org/content/10.1101/2022.07.18.500521v1",
        authors: "Daniel Xenes, Lindsey M. Kitchell, Patricia K. Rivlin, Rachel Brodsky, Hannah Gooden, Justin Joyce, Diego Luna, Raphael Norman-Tenazas, Devin Ramsden, Kevin Romero, Victoria Rose, Marisel Villafane-Delgado, William Gray-Roncal, Brock Wester",
        contents: [
            `[BioRXiv Preprint (July. 2022)](https://www.biorxiv.org/content/10.1101/2022.07.18.500521v1)`,
            `NeuVue is a software platform created for large-scale proofreading of machine segmentation and neural circuit reconstruction in high-resolution electron microscopy connectomics datasets. The NeuVue platform provides a robust web-based interface for proofreaders to collaboratively view, annotate, and edit segmentation and connectivity data. A backend queuing service organizes proofreader tasks into purpose-driven task types and increases proofreader throughput by limiting proofreader actions to simple, atomic operations. A collection of analytical dashboards, data visualization tools, and Application Program Interface (API) capabilities provide stakeholders real-time access to proofreading progress at an individual proofreader level as well as insights on task generation priorities. NeuVue is agnostic to the underlying data being proofread and improves upon the traditional proofreader experience through quality-of-life features that streamline complex editing operations such as splitting and merging objects in dense nanoscale segmentation.
            NeuVue heavily leverages cloud resources to enable proofreaders to simultaneously access and edit data on the platform. Production-quality features such as load-balancing, auto-scaling, and pre-deployment testing are all integrated into the platform’s cloud architecture. Additionally, NeuVue is powered by well-supported open-source connectomics tools from the community such as Neuroglancer, PyChunkedGraph, and Connectomics Annotation Versioning Engine (CAVE). The modular design of NeuVue facilitates easy integration and adoption of useful community tools to allow proofreaders to take advantage of the latest improvements in data visualization, processing, and analysis.
            We demonstrate our framework through proofreading of the mouse visual cortex data generated on the IARPA MICrONS Project. This effort has yielded over 40,000 proofreader edits across the 2 petavoxels of “Minnie” neuroimaging data. 44 unique proofreaders of various skill levels have logged a cumulative 3,740 proofreading hours, and we have been able to validate the improved connectivity of thousands of neurons in the volume. With sustained development on the platform, new integrated error detection and error correction capabilities, and continuous improvements to the proofreader model, we believe that the NeuVue framework can enable high-throughput proofreading for large-scale connectomics datasets of the future.`
        ]
    },
    {
        title: "ViMo Visual Analysis of Neuronal Connectivity Motifs",
        link: "https://www.biorxiv.org/content/10.1101/2022.12.09.519772v1",
        authors: "Jakob Troidl, Simon Warchol, Jinhan Choi, Jordan Matelsky, Nagaraju Dhanyasi, Xueying Wang, Brock Wester, Donglai Wei, Jeff W. Lichtman, Hanspeter Pfister, Johanna Beyer",
        contents: [
            `[BioRXiv Preprint (December. 2022)](https://www.biorxiv.org/content/10.1101/2022.12.09.519772v1)`,
            `[Supplementary Website](https://github.com/aplbrain/bossdb.org/issues/347)`,
            `Recent advances in high-resolution connectomics provide researchers access to accurate reconstructions of vast neuronal circuits and brain networks for the first time. Neuroscientists anticipate analyzing these networks to gain a better understanding of information processing in the brain. 
            In particular, scientists are interested in identifying specific network motifs, i.e., repeating subgraphs of the larger brain network that are believed to be neuronal building blocks. To analyze these motifs, it is crucial to review instances of a motif in the brain network and then map the graph structure to the detailed 3D reconstructions of the involved neurons and synapses. We present Vimo, an interactive visual approach to analyze neuronal motifs and motif chains in large brain networks. Experts can sketch network motifs intuitively in a visual interface and specify structural properties of the involved neurons and synapses to query large connectomics datasets. Motif instances (MIs) can be explored in high-resolution 3D renderings of the involved neurons and synapses. 
            To reduce visual clutter and simplify the analysis of MIs, we designed a continuous focus&context metaphor inspired by continuous visual abstractions [MAAB∗18] that allows the user to transition from the highly-detailed rendering of the anatomical structure to views that emphasize the underlying motif structure and synaptic connectivity. Furthermore, Vimo supports the identification of motif chains where a motif is used repeatedly to form a longer synaptic chain. We evaluate Vimo in a user study with seven domain experts and an in-depth case study on motifs in the central complex (CX) of the fruit fly brain.`

        ]
    },
];

export default publications;
