//import { manuscript as dotmotifManuscript } from "@/papers/dotmotif/manuscript.js"

const Cites = {
    SUBSTRATE: `
    @article{Matelsky_2020_substrate,
        title={A substrate for modular, extensible data-visualization},
        volume={5}, ISSN={2058-6345},
        url={http://dx.doi.org/10.1186/s41044-019-0043-6},
        DOI={10.1186/s41044-019-0043-6},
        number={1}, journal={Big Data Analytics},
        publisher={Springer Science and Business Media LLC},
        author={Matelsky, Jordan K. and Downs, Joseph and Cowley, Hannah P. and Wester, Brock and Gray-Roncal, William},
        year={2020}, month={Feb}
    }`,
    DOTMOTIF: `
    # https://doi.org/10.1038/s41598-021-91025-5
    @article{Matelsky_Motifs_2021,
        title={{DotMotif: an open-source tool for connectome subgraph isomorphism search and graph queries}},
        volume={11},
        ISSN={2045-2322},
        url={http://dx.doi.org/10.1038/s41598-021-91025-5},
        DOI={10.1038/s41598-021-91025-5},
        number={1},
        journal={Scientific Reports},
        publisher={Springer Science and Business Media LLC},
        author={Matelsky, Jordan K. and Reilly, Elizabeth P. and Johnson, Erik C. and Stiso, Jennifer and Bassett, Danielle S. and Wester, Brock A. and Gray-Roncal, William},
        year={2021},
        month={Jun}
    }

    `
}

const intern = {
    "name": "intern",
    "link": "/tools/intern",
    "blurb": "A Python library for data access from BossDB, DVID, CloudVolume, and more.",
    "description": [
        "This library is open-source [on GitHub](https://github.com/jhuapl-boss/intern).",
        "**Installation**",
        "You can install intern from PyPI with `pip3 install intern`.",
        "",
        "**Getting Started**",
        "See the [wiki](https://github.com/jhuapl-boss/intern/wiki) for more details."
    ],
    cite: `
# https://www.biorxiv.org/content/10.1101/2020.05.15.098707v1
@article{matelsky_2020_intern,
    doi = {10.1101/2020.05.15.098707},
    url = {https://www.biorxiv.org/content/10.1101/2020.05.15.098707v1},
    year = 2020,
    month = {may},
    publisher = {BiorXiv},
    author = {Matelsky, Jordan K and Rodriguez, Luis and Xenes, Daniel and Gion, Timothy and Hider Jr., Robert and Wester, Brock and Gray-Roncal, William},
    title = {{intern: Integrated Toolkit for Extensible and Reproducible Neuroscience}},
    journal = {BiorXiv}
}
    `,
    pub_link: 'https://www.biorxiv.org/content/10.1101/2020.05.15.098707v1'
};

const dotmotif = {
    "name": "DotMotif",
    "link": "https://github.com/aplbrain/dotmotif",
    "blurb": "Subgraph isomorphisms on connectomes.",
    "description": ["This library is open-source [on GitHub](https://github.com/aplbrain/dotmotif).",
        "**Installation**",
        "You can install DotMotif with `pip install dotmotif` or from [GitHub](https://github.com/aplbrain/dotmotif/wiki/Installing).",
        "",
        "**Getting Started**",
        `
The easiest way to start using DotMotif is to import an existing NetworkX graph:

~~~python
from dotmotif import Motif, GrandIsoExecutor

# my_graph is a nx.DiGraph
E = GrandIsoExecutor(graph=my_graph)

motif = Motif("""
A -> B
B -> C
C -> A
")

# Get the number of triangles in this graph
results = E.count(motif)
~~~

A full tutorial is available [here](https://github.com/aplbrain/dotmotif/wiki/Getting-Started).

        `
    ],
    //"manuscript": [
    //    ...dotmotifManuscript
    //],
    "cite": Cites.DOTMOTIF,
    pub_link: 'https://doi.org/10.1038/s41598-021-91025-5'
};

const grandiso = {
    "name": "GrandIso",
    "link": "https://github.com/aplbrain/grandiso-networkx",
    "blurb": "Pure-python, very efficient subgraph isomorphism/monomorphism (motif-search)",
    "cite": Cites.DOTMOTIF,
    pub_link: 'https://doi.org/10.1038/s41598-021-91025-5'
}

const motifstudio = {
    "name": "Motif Studio",
    "link": "https://motifstudio.bossdb.org",
    "blurb": "Query large-scale connectomes using the DotMotif query syntax.",
    "cite": Cites.DOTMOTIF,
    pub_link: 'https://doi.org/10.1038/s41598-021-91025-5'
}

const grand = {
    "name": "Grand",
    "link": "https://github.com/aplbrain/grand",
    "blurb": "Drop-in scalable graph toolkit (Dask for NetworkX)",
    "description": ["This library is open-source [on GitHub](https://github.com/aplbrain/grand).",
        "**Installation**",
        "You can install Grand with `pip install grand-graph`.",
        "**Getting Started**",

        `

_Grand_ is a Rosetta Stone of graph technologies.

**Example use-cases**

-   True-serverless graph databases using DynamoDB
-   Query a host graph in SQL for subgraph isomorphisms with DotMotif

**Why it's a big deal**

_Grand_ is a Rosetta Stone of graph technologies. In short, a _Grand_ graph has a "Backend," which handles the nitty-gritty of talking to data on disk (or in the cloud), and an "Dialect", which is your preferred way of talking to a graph.

For example, here's how you make a graph that is persisted in DynamoDB (the "Backend") but that you can talk to as though it's a networkx.DiGraph (the "Dialect"):

~~~python
import grand

G = grand.Graph(backend=grand.DynamoDBBackend())

G.nx.add_node("Jordan", type="Person")
G.nx.add_node("DotMotif", type="Project")

G.nx.add_edge("Jordan", "DotMotif", type="Created")

assert len(G.nx.edges()) == 1
assert len(G.nx.nodes()) == 2
~~~

It doesn't stop there. If you like the way IGraph handles anonymous node insertion (ugh) but you want to handle the graph using regular NetworkX syntax, use a IGraphDialect and then switch to a NetworkXDialect halfway through:

~~~python
import grand

G = grand.Graph()

# Start in igraph:
G.igraph.add_vertices(5)

# A little bit of networkit:
G.networkit.addNode()

# And switch to networkx:
assert len(G.nx.nodes()) == 6

# And back to igraph!
assert len(G.igraph.vs) == 6
~~~

You should be able to use the "dialect" objects the same way you'd use a real graph from the constituent libraries. For example, here is a NetworkX algorithm running on NetworkX graphs alongside Grand graphs:

~~~python
import networkx as nx

nx.algorithms.isomorphism.GraphMatcher(networkxGraph, grandGraph.nx)
~~~

You can read more about usage and learn about backends and dialects in [the wiki](https://github.com/aplbrain/grand/wiki).

    `],
    "cite": Cites.DOTMOTIF,
    pub_link: 'https://doi.org/10.1038/s41598-021-91025-5'
}

const bossphorus = {
    "name": "bossphorus",
    "link": "https://github.com/aplbrain/bossphorus",
    "blurb": "A simple volumetric datastore modeled after the BossDB API.",
};

const npyjs = {
    "name": "npyjs",
    "link": "https://github.com/aplbrain/npyjs",
    "blurb": "Read numpy .npy files in JavaScript/Node.js.",
};

const substrate = {
    "name": "substrate",
    "link": "https://github.com/aplbrain/substrate",
    "blurb": "A high-speed three.js substrate for visualizing biofidelic data.",
    "description": [
        "Substrate is a JavaScript library for 3D visualization in the browser.",
        "This library is open-source [on GitHub](https://github.com/aplbrain/substrate).",
        "**Installation**",
        "You can install substrate via npm or yarn `npm install apl-substrate`.",
        "",
        "**Getting Started**",
        "See the [GitHub page](https://github.com/aplbrain/substrate) for more details."
    ],
    "cite": Cites.SUBSTRATE,
    pub_link: 'http://dx.doi.org/10.1186/s41044-019-0043-6'
}

const pytri = {
    "name": "pytri",
    "link": "https://github.com/aplbrain/pytri",
    "blurb": "A Python library for visualizing 3D data in a Jupyter Notebook.",
    "description": [
        "Pytri is a Jupyter Notebook tool that leverages [substrate](/tools/substrate) for 3D data visualization and overlays.",
        "This library is open-source [on GitHub](https://github.com/aplbrain/pytri).",
        "**Installation**",
        "You can install pytri with `pip install pytri`.",
        "",
        "**Getting Started**",
        "To get started using pytri, see [the pytri documentation](https://aplbrain.github.io/pytri/).",
    ],
    "cite": Cites.SUBSTRATE,
    pub_link: 'http://dx.doi.org/10.1186/s41044-019-0043-6'
}

const colocar = {
    "name": "colocar",
    "link": "https://github.com/aplbrain/colocar",
    "blurb": "Tools for sparse human annotation of three-dimensional [neuroscience] datasets."
}
const mesh_deco = {
    "name": "mesh-deco",
    "link": "https://github.com/aplbrain/mesh-deco",
    "blurb": "A Python-based utility for distributed meshing."
}

const saber = {
    "name": "SABER",
    "link": "https://github.com/aplbrain/saber",
    "blurb": "Library of containerized tools and a workflow deployment system."
}

const reconstruct2stack = {
    "name": "reconstruct2stack",
    "link": "https://github.com/aplbrain/reconstruct2stack",
    "blurb": "Python-based utility to convert RECONSTRUCT stacks to numpy array or image files."
}

const neuvue = {
    "name": "NeuVue",
    "link": "https://app.neuvue.io/",
    "blurb": "Software platform for large-scale proofreading of machine segmentation and neural circuit reconstruction in high-resolution electron microscopy connectomics datasets."
}

const neuprint = {
    "name": "NeuPrint",
    "link": "https://neuprint.bossdb.io/",
    "blurb": "Analyze and explore connectome data stored in Neo4j using the neuPrint ecosystem",
    "description": [
        "neuPrint is a set of tools for loading and analyzing connectome data into a Neo4j database. ",
        "This library is open-source [on GitHub](https://github.com/aplbrain/neuPrint).",
        "**Getting Started**",
        "To get started using neuPrint, visit [https://neuprint.bossdb.io/](https://neuprint.bossdb.io/).",
        "**Learn More**",
        "You can read more about neuPrint in the [paper](https://doi.org/10.3389/fninf.2022.896292)"
    ],
    "cite": `
@article{10.3389/fninf.2022.896292,
    title={neuPrint: An open access tool for EM connectomics},
    volume={16},
    ISSN={1662-5196}}
    url={https://www.frontiersin.org/articles/10.3389/fninf.2022.896292},
    DOI={10.3389/fninf.2022.896292},
    journal={Frontiers in Neuroinformatics},
    author={Plaza, Stephen M. and Clements, Jody and Dolafi, Tom and Umayam, Lowell and Neubarth, Nicole N. and Scheffer, Louis K. and Berg, Stuart},
    year={2022}
}`,
    pub_link: "https://doi.org/10.3389/fninf.2022.896292"
}

const queries = {
    "name": "Query Engine",
    "link": "https://queries.bossdb.org/", // Not up yet
    "blurb": "Personalized query platform for analyzing and contributing to connectomic dataset growth",
    "description": [
        "**Getting Started**",
        "To get started using the Query Engine, visit [https://queries.bossdb.org/](https://queries.bossdb.org/).",
        "**Learn More**",
        "You can read more about the queries tool in the [paper](https://doi.org/10.3389/fninf.2022.828458)"
    ],
    "cite": `
@article{10.3389/fninf.2022.828458,
	title={Connectomics {Annotation} {Metadata} {Standardization} for {Increased} {Accessibility} and {Queryability}},
	volume={16},
	ISSN={1662-5196},
	url={https://www.frontiersin.org/articles/10.3389/fninf.2022.828458},
	DOI={10.3389/fninf.2022.828458}
	journal={Frontiers in Neuroinformatics},
	author={Sanchez, Morgan and Moore, Dymon and Johnson, Erik C. and Wester, Brock and Lichtman, Jeff W. and Gray-Roncal, William},
	year={2022},
}`,
    pub_link: "https://doi.org/10.3389/fninf.2022.828458"

}

const categories = {
    "Data Access": [
        intern,
        bossphorus,
        npyjs,
    ],

    "Data Processing": [
        // dotmotif,
        mesh_deco,
        saber,
        reconstruct2stack,
        neuvue,
        queries
    ],

    "Network Science": [
        dotmotif,
        grand,
        grandiso,
        // motifstudio,
        neuprint
    ],

    "Visualization": [
        substrate,
        pytri,
        colocar,
    ],
}

const featured = [
    // motifstudio,
    intern,
    neuvue,
    neuprint,
    queries
];


let tools = Object.values(categories).reduce((a, b) => ([...Object.values(a), ...Object.values(b)]), []);

let all_tools = {};
tools.forEach((t) => {
    all_tools[t.name.toLowerCase()] = t
});

let featured_tools = featured.map(t => {
    return {
        name: t.name,
        link: t.link
    }
});

export default { all_tools, categories, featured_tools };
