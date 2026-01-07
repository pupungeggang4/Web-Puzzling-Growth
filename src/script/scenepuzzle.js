class ScenePuzzle {
    constructor(game) {
        game.menu = false
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

        Render.strokeRectUI(ctx, UI.puzzle.buttonMenu)
        Render.strokeRectUI(ctx, UI.puzzle.buttonUndo)
        Render.strokeRectUI(ctx, UI.puzzle.area)

        if (game.menu === true) {
            Render.renderMenu(game)
        }
    }

    keyDown(game, key) {

    }

    keyUp(game, key) {

    }

    pointerDown(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (Util.pointInsideRectUI(pos, UI.puzzle.buttonMenu)) {
                    game.menu = true
                }
            } else {
                if (Util.pointInsideRectUI(pos, UI.puzzle.buttonMenu)) {
                    game.menu = false
                } else if (Util.pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (Util.pointInsideRectUI(pos, UI.menu.buttonExit)) {
                    game.scene = new SceneTitle(game)
                }
            }
        }
    }

    pointerUp(game, pos, button) {

    }
}
