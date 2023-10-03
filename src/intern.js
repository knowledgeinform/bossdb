class BossRemote {
    /*
    A BossRemote -- a JS analogy of `intern.remote.BossRemote`.
    */

    constructor(opts) {
        /*
        Create a new BossRemote.

        Options:
            protocol (String: 'https')
            host (String: 'api.bossdb.io')
            token (String: 'public')

        */
        opts = opts || {};
        this.protocol = opts.protocol || "https";
        this.host = opts.host || "api.bossdb.io";
        this.token = opts.token || "e5c2272f51b3b60e36f4aaf7319f6801217da835";
    }

    _url(urlSuffix) {
        return `${this.protocol}://${this.host}/v1/${urlSuffix}`
    }

    async _fetchJSONWithHeaders(urlSuffix, additionalHeaders) {
        additionalHeaders = additionalHeaders || {};
        return fetch(this._url(urlSuffix), {
            headers: { "Authorization": `Token ${this.token}`, ...additionalHeaders }
        }).then(res => res.json()).catch(err => console.error(err));
    }

    async getCutoutPNG(uri, res, xs, ys, zs) {
        /*
        Get a cutout in PNG filmstrip format

        /:resolution/:x_range/:y_range/:z_range/:time_range/?iso=:iso
        */
        return fetch(`${this.protocol}://${this.host}/v1/cutout/${uri}/${res}/${xs.join(":")}/${ys.join(":")}/${zs.join(":")}/`, {
            headers: { "Authorization": `Token ${this.token}`, 'Accept': 'image/jpeg' }
        }).then(res => res.blob()).catch(err => console.error(err));

    }

    async getCoordFrame(coordFrameName) {
        /*
        Get a coordinate frame by its name.

        Arguments:
            coordFrameName (String): The name of the coordframe to check

        Returns:
            Promise<CoordinateFrameObject>

        */
        return this._fetchJSONWithHeaders(`coord/${coordFrameName}`)
    }

    async getCoordFrameForExperiment(collectionName, experimentName) {
        /*
        Get a coordinate frame given a collection and experiment name.

        Arguments:
            collectionName (String)
            experimentName (String)

        Returns:
            Promise<String>: CoordinateFrame name

        */
        // Return the name of the coordinate frame for this resource
        return this._fetchJSONWithHeaders(`collection/${collectionName}/experiment/${experimentName}/`)
            .then(experiment => experiment.coord_frame);
    }

    async listCollections() {
        /*
        Get a list of all collections for this Remote

        Arguments:
            None

        Returns:
            Promise<Array<String>>
        */
        // https://api.theboss.io/v1/collection/
        return this._fetchJSONWithHeaders(`collection/`)
            .then(res => res.collections);
    }

    async getCollectionMetadata(collectionName) {
        const key = "__public_metadata__";
        const link = await this._fetchJSONWithHeaders(`meta/${collectionName}/?key=${key}`);
        const response = await fetch(link.value);
        return response.json();
    }

}

window.BossRemote = BossRemote;

export default BossRemote;
