export default function (s) {
    s.state = {}
    s.dispatch = () => { }

    const PADDING = 8

    const imgs = []

    let currentHt = 0

    s.preload = () => {
        imgs[0] = s.loadImage('/img/body-chm-0.png')
        imgs[1] = s.loadImage('/img/body-chm-1.png')
        imgs[2] = s.loadImage('/img/body-chm-2.png')
        imgs[3] = s.loadImage('/img/body-chm-3.png')
        imgs[4] = s.loadImage('/img/body-chm-4.png')
    }

    s.setup = () => {
        const width = 280 / 2 + PADDING * 2 // 156
        const height = 790 / 2 + PADDING * 2 // 411
        s.createCanvas(width, height)
        s.pixelDensity(1)
        s.frameRate(15)
        s.noCursor()
        // console.log('::: sketch displayDensity:', s.displayDensity())
        // console.log('::: sketch pixelDensity:', s.pixelDensity())
        // console.log('::: sketch-heatmap has been initialized')
    }

    s.draw = () => {
        s.background(0)

        const {
            analytics: {
                heatmapFPS = 0,
            } = {},
            bodyTemperature = 0,
            hypothermiaValue = 0,
        } = s.state

        const ht = s.constrain(hypothermiaValue, 0, 1)
        currentHt += (ht - currentHt) * 0.05

        let hmIndex = null
        let hmFineTune = null
        if (currentHt < 0.2) {
            hmIndex = 0
            hmFineTune = s.map(currentHt, 0, 0.2, 0, 255)
        }
        else if (currentHt < 0.4) {
            hmIndex = 1
            hmFineTune = s.map(currentHt, 0.2, 0.4, 0, 255)
        }
        else if (currentHt < 0.6) {
            hmIndex = 2
            hmFineTune = s.map(currentHt, 0.4, 0.6, 0, 255)
        }
        else if (currentHt < 0.8) {
            hmIndex = 3
            hmFineTune = s.map(currentHt, 0.6, 0.8, 0, 255)
        }
        else {
            hmIndex = 4
            hmFineTune = s.map(currentHt, 0.6, 0.8, 0, 255)
        }

        const imgWidth = s.width - PADDING * 2
        const imgHeight = s.height - PADDING * 2
        s.image(imgs[hmIndex], PADDING, PADDING, imgWidth, imgHeight)
        if (hmIndex < 4) {
            s.tint(255, hmFineTune)
            s.image(imgs[hmIndex + 1], PADDING, PADDING, imgWidth, imgHeight)
            s.noTint()
        }

        if (!(s.frameCount % 45)) {
            s.loadPixels()
            const payload = []
            for (let i = 0; i < s.pixels.length; i += 4) {
                const red = s.pixels[i]
                const green = s.pixels[i + 1]
                const blue = s.pixels[i + 2]
                const color = s.color(red, green, blue)
                const brightness = s.brightness(color)
                payload.push(brightness)
            }
            s.dispatch({
                type: ':SET_SAMPLE_WORKER_SOURCE_DATA:',
                payload,
            })
        }

        const probeColor = s.get(s.mouseX, s.mouseY)

        s.strokeWeight(1)

        s.stroke(255)
        s.line(s.mouseX - 25, s.mouseY, s.mouseX + 25, s.mouseY)
        s.line(s.mouseX, s.mouseY - 25, s.mouseX, s.mouseY + 25)
        s.stroke(0)
        s.line(s.mouseX - 25, s.mouseY + 1, s.mouseX + 25, s.mouseY + 1)
        s.line(s.mouseX + 1, s.mouseY - 25, s.mouseX + 1, s.mouseY + 25)

        s.rectMode(s.CENTER)

        s.stroke(255)
        s.noFill()
        s.square(s.mouseX, s.mouseY, 22, 4, 4, 4, 4)

        s.stroke(0)
        s.noFill()
        s.square(s.mouseX, s.mouseY, 24, 4, 4, 4, 4)

        s.fill(probeColor)
        s.noStroke()
        s.square(s.mouseX, s.mouseY, 20, 4, 4, 4, 4)

        let bt = s.brightness(probeColor)
        if (bt > 20) {
            bt = s.map(bt, 20, 100, 20, 37)
            bt = Math.round(bt * 10) / 10
        }
        else {
            bt = 0
        }

        if (!(s.frameCount % 30) && bt !== bodyTemperature) {
            s.dispatch({
                type: ':SET_BODY_TEMPERATURE:',
                payload: bt,
            })
        }

        if (!(s.frameCount % 60) && s.frameRate !== heatmapFPS) {
            s.dispatch({
                type: ':UPDATE_ANALYTICS:',
                payload: { heatmapFPS: s.frameRate() },
            })
        }
    }
}
