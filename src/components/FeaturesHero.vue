<template>
    <section class="hero is-primary is-bold parent">
        <span
            class="is-italic"
            style="opacity: 50%; position: absolute; bottom: 0px">
            Click me!</span
        >
        <div class="child" id="canvas"></div>
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h1 class="title">Scalable.</h1>
                        <p>
                            BossDB leverages AWS technologies to scale in
                            response to your data-access needs. Pay only for the
                            resources you need, and scale quickly to accomodate
                            surges in request counts.
                        </p>
                        <p>
                            BossDB acts as a layer on top of technologies like
                            <a
                                class="has-text-dark"
                                href="https://aws.amazon.com/dynamodb/"
                                >DynamoDB</a
                            >
                            for indexing,
                            <a
                                class="has-text-dark"
                                href="https://aws.amazon.com/elasticache/what-is-redis/"
                                >Redis</a
                            >
                            as a high-level cache, and
                            <a
                                class="has-text-dark"
                                href="https://aws.amazon.com/s3/"
                                >S3</a
                            >
                            for scalable, speedy storage.
                        </p>
                    </div>
                    <div class="column">
                        <h1 class="title">Buzzwords!</h1>
                        <p>
                            Big data. Cloud-native. Infinitely scalable.
                            Load-balanced. Future-proof. Distributed.
                            <br />If you think your dataset is too big for
                            BossDB, let us amaze and surprise you!
                        </p>
                    </div>
                    <div class="column">
                        <h1 class="title">Cloud-Native.</h1>
                        <p>
                            There is no application to install or server to
                            configure: Like a beautiful rainbow, BossDB lives
                            completely in the cloud.
                        </p>
                        <p>
                            You can access BossDB resources with
                            <a
                                class="has-text-dark"
                                href="https://github.com/jhuapl-boss/intern"
                                >intern</a
                            >, a Python 2 and 3 library. Full API documentation
                            is available
                            <a
                                class="has-text-dark"
                                href="https://jhuapl-boss.github.io/intern/"
                                >here</a
                            >.
                            <br />BossDB cloud storage is supported by Amazon Web Services (AWS) through the Open Data Program.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import P5 from "p5";

export default {
    name: "FeaturesHero",

    mounted() {
        const script = (p5) => {
            const Config = {
                style: {
                    color: [255],
                    alpha: 100,
                },

                neuron: {
                    // The size of the cell body
                    somaSize: 25,

                    // The number of neurites to start with (branches from cell body)
                    startingNeurites: 4,

                    // The maximum number of neurites PER NEURON to simulate
                    maxNeurites: 512,
                },

                neurite: {
                    // Larger values are straighter. Smaller values are curlier.
                    curliness: 0.5,

                    // Smaller values are less branchy. Values closer to 1 may explode
                    branchiness: 0.5,

                    // Simulation scale
                    scale: 2,

                    // Default neurite radius for non-axons:
                    defaultRadius: 10,
                    // Default axon radius:
                    defaultAxonRadius: 15,

                    // Values over 1 bias toward vertical movement. Under 1 biases more horizontal
                    verticalBias: 0.997,

                    // Minimum size of a neurite before it's terminated:
                    terminalRadius: 3,
                },
            };

            class Neurite {
                constructor(
                    x,
                    y,
                    r = Config.neurite.defaultRadius,
                    initialVelocity = undefined,
                    branchiness = Config.neurite.branchiness
                ) {
                    this.loc = p5.createVector(x, y);
                    this.radius = r;
                    this.vel = initialVelocity || p5.createVector(0, 0);
                    this.isGrowing = true;
                    this.branchiness = branchiness;
                }

                frame() {
                    if (this.radius < Config.neurite.terminalRadius) {
                        this.isGrowing = false;
                        return;
                    }

                    p5.fill(...Config.style.color, Config.style.alpha);
                    p5.ellipse(
                        this.loc.x,
                        this.loc.y,
                        this.radius,
                        this.radius
                    );
                    this.loc = this.loc.add(this.vel);

                    this.vel.x += p5.random(
                        (-10 / this.radius) * Config.neurite.curliness,
                        (10 / this.radius) * Config.neurite.curliness
                    );
                    this.vel.y += p5.random(
                        (-10 / this.radius) * Config.neurite.curliness,
                        (10 / this.radius) * Config.neurite.curliness
                    );
                    this.radius *= p5.random(0.98, 1.01);

                    this.vel.limit(this.radius / 2);
                    this.vel.y *= Config.neurite.verticalBias;

                    return this.branch();
                }

                branch() {
                    if (p5.random() * 50 <= this.branchiness) {
                        this.radius *= 0.9;
                        return new Neurite(this.loc.x, this.loc.y, this.radius);
                    }
                }
            }

            class Neuron {
                constructor(x, y) {
                    // Create the neuron at the given start position.
                    this.loc = p5.createVector(x, y);
                    this.neurites = [];
                    this.age = 0;

                    // Create some small number of starting neurites:
                    let procs = p5.round(
                        1 + p5.random() * Config.neuron.startingNeurites
                    );

                    for (let i = 0; i < procs; i++) {
                        let degree = p5.random(0, 2 * p5.PI);
                        // Spawn a new neurite at some rotation from the soma:
                        this.neurites.push(
                            new Neurite(
                                x +
                                    (Config.neuron.somaSize / 2) *
                                        p5.cos(degree),
                                y +
                                    (Config.neuron.somaSize / 2) *
                                        p5.sin(degree),
                                Config.neurite.defaultRadius,
                                p5.createVector(0, 1.1)
                            )
                        );
                    }

                    // And add the axon:
                    let degree = p5.random(0, 2 * p5.PI);
                    this.neurites.push(
                        new Neurite(
                            x + (Config.neuron.somaSize / 2) * p5.cos(degree),
                            y + (Config.neuron.somaSize / 2) * p5.sin(degree),
                            Config.neurite.defaultAxonRadius,
                            p5.createVector(0, -3),
                            0.2
                        )
                    );

                    this.neurites = this.neurites.slice(
                        0,
                        Config.neuron.maxNeurites
                    );
                }

                frame() {
                    if (this.age == 0) {
                        p5.fill(
                            ...Config.style.color,
                            Config.style.alpha + 200
                        );
                        p5.ellipse(
                            this.loc.x,
                            this.loc.y,
                            Config.neuron.somaSize,
                            Config.neuron.somaSize
                        );
                    }

                    let keepAlive = false;
                    for (let neurite of this.neurites) {
                        if (neurite.isGrowing) {
                            keepAlive = true;
                        }

                        let n = neurite.frame();
                        if (!!n) {
                            this.neurites.push(n);
                        }
                    }
                    this.age++;
                }
            }

            let neurons = [];

            p5.setup = () => {
                var canvasDiv = document.getElementById("canvas");
                p5.createCanvas(canvasDiv.clientWidth, canvasDiv.clientHeight);
                p5.noStroke();
            };

            p5.draw = () => {
                for (let neuron of neurons) {
                    neuron.frame();
                }
            };

            p5.mouseClicked = () => {
                neurons.push(new Neuron(p5.mouseX, p5.mouseY));
            };
        };
        const p5canvas = new P5(script, "canvas");
    },
};
</script>

<style lang="scss" scoped>
.styled-causeway {
    min-height: 80vh;
    background-size: cover;
    background-repeat: no-repeat;
    // backgroundPosition: `0 ${-20 + this.state.scrollOffset / 20}px`,
    border-bottom: 1em solid maroon;
}
.child {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.parent {
    position: relative;
    min-height: 50vh;
    width: 100vw;
}
</style>
