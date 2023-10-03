<template>
    <div class="box">
        <h1 class="title">Events</h1>
        <div v-for="event in events" v-bind:key="event.title">
            <h2 class="title is-4">{{ event.title }}</h2>
            <h3 class="subtitle is-7">{{ event.venue }}</h3>
            <div v-html="event.contents" />
            <br />
        </div>
    </div>
</template>


<script>
import showdown from "showdown";

import events from "@/events.js";

export default {
    name: "EventsCard",

    data() {
        let converter = new showdown.Converter({
            simplifiedAutoLink: true,
        });
        return {
            events: events.map((event) => {
                return {
                    ...event,
                    contents: converter.makeHtml(event.contents.join("\n\n")),
                };
            }),
        };
    },
};
</script>
