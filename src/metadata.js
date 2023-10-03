class MetadataRemote {
    /*
    Convienience functions to interact with the BossDB Metadata API
    */

    constructor(opts) {
        /*
        Create a new MetadataRemote.

        Options:
            protocol (String: 'https')
            host (String: 'api.bossdb.io')
            token (String: 'public')

        */
        opts = opts || {};
        this.protocol = opts.protocol || "https";
        this.host = opts.host || "api.metadata.bossdb.org";
    }

    _url(urlSuffix) {
        return `${this.protocol}://${this.host}/api/v1/${urlSuffix}`
    }

    async _fetchJSONWithHeaders(urlSuffix, additionalHeaders, method, data) {
        additionalHeaders = additionalHeaders || {};
        method = method || "GET";

        if (method === "GET") {
            return fetch(this._url(urlSuffix), {
                headers: { "Accept": "application/json", ...additionalHeaders}
            }).then(res => res.json()).catch(err => console.error(err));
        } else if (method == "POST") {
            return fetch(this._url(urlSuffix), {
                headers: { "Accept": "application/json", ...additionalHeaders},
                method: method,
                body: JSON.stringify(data)
            }).then(res => res.json()).catch(err => console.error(err));
        }
    }

    async getProjects() {
        /*
        Get All projects in JSON format with the project ID 
        */
        const data = await this._fetchJSONWithHeaders("projects").then(res => res.data);
        const output = input.reduce((accumulator, item) => {
            accumulator[item.attributes.ID] = {"metadataId": item.id, ...item.attributes}
            return accumulator;
        }, {});
    }

    async getProject(projectId) {
        const query = {'ID': projectId}
        return this._fetchJSONWithHeaders(
            "projects/query", {'content-type': 'application/json'}, "POST", query
        ).then(res => res.data[0])
    }

}

window.MetadataRemote = MetadataRemote;

export default MetadataRemote;
