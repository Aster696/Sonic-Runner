import k from "./kaplayCtx.js";

k.loadSprite('chemicle-bg', "graphics/chemical-bg.png");
k.loadSprite('platforms-bg', "graphics/platforms-bg.png");
k.loadSprite('sonic', "graphics/sonic.png", {
    sliceX: 8,
    sliceY: 2,
    anims: {
        run: {from: 0, to: 7, loop: true, speed: 30}
    }
});
k.loadSprite('motobug', "graphics/motobug.png", {
    sliceX: 5,
    sliceY: 1,
    anims: {
        run: {from: 0, to: 4, loop: true, speed: 8}
    }
});
k.loadSprite('ring', "graphics/ring.png", {
    sliceX: 16,
    sliceY: 1,
    anims: {
        run: {from: 0, to: 15, loop: true, speed: 30}
    }
});

k.loadFont('mania', "fonts/mania.ttf");

k.loadSound('city', "sounds/city.mp3");
k.loadSound('Destroy', "sounds/Destroy.mp3");
k.loadSound('Hurt', "sounds/Hurt.mp3");
k.loadSound('HyperRing', "sounds/HyperRing.mp3");
k.loadSound('Jump', "sounds/Jump.mp3");
k.loadSound('Ring', "sounds/Ring.mp3");
