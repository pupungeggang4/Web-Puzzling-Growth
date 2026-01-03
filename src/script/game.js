class Game {
    constructor() {
        this.state = ''
        this.menu = false

        this.keyMapping = {
            'left': 'a', 'right': 'd', 'up': 'w', 'down': 's'
        }
        this.keyPressed = {
            'left': false, 'right': false, 'up': false, 'down': false
        }

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('pointerdown', (event) => this.pointerDown(event), false)
        this.canvas.addEventListener('pointerup', (event) => this.pointerUp(event), false)
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)
    }

    run() {
        this.scene = new SceneTitle(this)
        this.framePrevious = performance.now()
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious
        this.framePrevious = this.frameCurrent

        this.scene.loop(this)

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    keyDown(event) {
        let key = event.key
        this.scene.keyDown(this, key)
    }

    keyUp(event) {
        let key = event.key
        this.scene.keyUp(this, key)
    }

    pointerDown(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        this.scene.pointerDown(this, pos, button)
    }

    pointerUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        this.scene.pointerUp(this, pos, button)
    }
}
