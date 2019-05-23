export default function (s) {
    s.state = {}
    s.dispatch = () => { }

    const PADDING = 8

    s.setup = () => {
        const width = 280 / 2 + PADDING * 2 // 172
        const height = 790 / 2 + PADDING * 2 // 427
        s.createCanvas(width, height)
        s.pixelDensity(1)
        s.frameRate(1)

        // console.log('::: sketch displayDensity:', s.displayDensity())
        // console.log('::: sketch pixelDensity:', s.pixelDensity())
        // console.log('::: sketch-frostbite-risk has been initialized')
    }

    s.draw = () => {
        const {
            analytics: {
                frostbiteRiskFPS = 0,
            } = {},
            sampleWorker: {
                resultData = [],
            } = {},
        } = s.state

        s.loadPixels()
        if (resultData.length === s.pixels.length) {
            s.pixels.forEach((_, i) => {
                s.pixels[i] = resultData[i]
            })
        }
        s.updatePixels()

        if (!(s.frameCount % 60) && s.frameRate !== frostbiteRiskFPS) {
            s.dispatch({
                type: ':UPDATE_ANALYTICS:',
                payload: { frostbiteRiskFPS: s.frameRate() },
            })
        }
    }
}
