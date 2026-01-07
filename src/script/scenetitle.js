class SceneTitle {
    constructor(game) {
        game.menu = false
    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        let ctx = game.ctx
        let canvas = game.canvas
        Render.init(ctx)
        Render.clearCanvas(canvas, ctx)
        Render.fillCanvas(canvas, ctx)

        Render.strokeRectUI(ctx, UI.title.buttonStart)
        Render.strokeRectUI(ctx, UI.title.buttonErase)
        Render.strokeRectUI(ctx, UI.title.buttonLang)
    }

    keyDown(game, key) {

    }

    keyUp(game, key) {

    }

    pointerUp(game, pos, button) {
        if (button === 0) {
            if (Util.pointInsideRectUI(pos, UI.title.buttonStart)) {
                game.scene = new ScenePuzzle(game)
            }
        }
    }

    pointerDown(game, pos, button) {

    }
}
