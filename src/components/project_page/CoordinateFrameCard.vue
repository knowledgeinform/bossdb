<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">Dataset Size</p>
        </header>
        <div class="card-content">
            <div class="table-container">
                <table class="table is-fullwidth">
                    <thead>
                        <th>Dataset</th>
                        <th>x</th>
                        <th>y</th>
                        <th>z</th>
                    </thead>
                    <tbody>
                        <tr v-for="cf in coordinateFrames" v-bind:key="cf.name">
                            <td
                                style="
                                    max-width: 20em;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                ">
                                <a :href="cf.link"
                                    ><small>{{ cf.experimentName }}</small></a
                                >
                            </td>
                            <td>
                                <small>
                                    <b>{{
                                        readableLength(
                                            (cf.x_stop - cf.x_start) *
                                                cf.x_voxel_size,
                                            cf.voxel_unit
                                        )
                                    }}</b>
                                    ({{ cf.x_stop - cf.x_start }}
                                    at
                                    {{ cf.x_voxel_size }}
                                    {{ abbrUnit(cf.voxel_unit) }})
                                </small>
                            </td>
                            <td>
                                <small>
                                    <b>{{
                                        readableLength(
                                            (cf.y_stop - cf.y_start) *
                                                cf.y_voxel_size,
                                            cf.voxel_unit
                                        )
                                    }}</b>
                                    ({{ cf.y_stop - cf.y_start }}
                                    at
                                    {{ cf.y_voxel_size }}
                                    {{ abbrUnit(cf.voxel_unit) }})
                                </small>
                            </td>
                            <td>
                                <small>
                                    <b>{{
                                        readableLength(
                                            (cf.z_stop - cf.z_start) *
                                                cf.z_voxel_size,
                                            cf.voxel_unit
                                        )
                                    }}</b>
                                    ({{ cf.z_stop - cf.z_start }}
                                    at
                                    {{ cf.z_voxel_size }}
                                    {{ abbrUnit(cf.voxel_unit) }})
                                </small>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "CoordinateFrameCard",

    props: {
        coordinateFrames: {
            type: Array,
            required: true,
        },
    },

    methods: {
        abbrUnit(unit) {
            return {
                nanometers: "nm",
                microns: "μm",
                micrometers: "μm",
                millimeters: "mm",
                centimeters: "cm",
                meters: "m",
                kilometers: "km",
            }[unit];
        },

        readableLength(distance, baseUnits) {
            if (distance >= 800000 && baseUnits === "nanometers") {
                return `${Number((distance / (1000 * 1000)).toFixed(2))} mm`;
            }
            if (distance >= 8000 && baseUnits === "nanometers") {
                return `${Number((distance / 1000).toFixed(2))} μm`;
            }
            if (distance >= 1000 && baseUnits === "micrometers") {
                return `${Number((distance / 1000).toFixed(2))} mm`;
            }
            return `${distance} ${baseUnits}`;
        },
    },
};
</script>