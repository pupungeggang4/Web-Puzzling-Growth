class SceneTitle {
    constructor(game) {

    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        Render.init(game.ctx)
        Render.clearCanvas(game.canvas, game.ctx)
        Render.fillCanvas(game.canvas, game.ctx)

        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.strokeRectUI(game.ctx, UI.title.buttonLang)
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
