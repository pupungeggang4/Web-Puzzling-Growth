class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'black'
    }

    static clearCanvas(canvas, ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    static fillCanvas(canvas, ctx) {
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'black'
    }

    static renderMenu(game) {
        let ctx = game.ctx
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menu.rect)
        Render.strokeRectUI(ctx, UI.menu.rect)
        ctx.fillStyle = 'black'

        Render.strokeRectUI(ctx, UI.menu.buttonResume)
        Render.strokeRectUI(ctx, UI.menu.buttonRestart)
        Render.strokeRectUI(ctx, UI.menu.buttonBack)
        Render.strokeRectUI(ctx, UI.menu.buttonExit)
    }

    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillRectUI(ctx, rect) {
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
    }
}
