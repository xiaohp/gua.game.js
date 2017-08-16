class GuaAnimation {
    constructor(game) {
        this.game = game
        // 为了省事，在这里 hard core 一套动画
        this.frame = []
        for (var i = 0; i < 10; i++) {
            var name = `w${i}`
            var t = game.textureByName(name)
            this.frames.push(t)
        }
        this.textureByName = this.frame[0]
        this.frameIndex = 0
        this.frameCount = 3
    }
    static new(game) {
        return new this(game)
    }
    update() {
        log('animation updata', this.frameCount)
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
        }
    }
    draw() {
        this.game.drawImage(this)
    }
}
