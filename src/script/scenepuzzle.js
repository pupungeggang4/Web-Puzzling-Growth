class ScenePuzzle {
    constructor() {

    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        let canvas = game.canvas
        let ctx = game.ctx
        Render.init(ctx)
        Render.clearCanvas(canvas, ctx)
        Render.fillCanvas(canvas, ctx)
    }

    keyDown(game, key) {

    }

    keyUp(game, key) {

    }

    pointerDown(game, pos, button) {

    }

    pointerUp(game, pos, button) {

    }
}
