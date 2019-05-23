export default function (s) {
    s.state = {}
    s.dispatch = () => { }

    let currentBT = 0

    s.setup = () => {
        s.createCanvas(450, 44)
        s.pixelDensity(1)
        s.frameRate(15)

        // console.log('::: sketch displayDensity:', s.displayDensity())
        // console.log('::: sketch pixelDensity:', s.pixelDensity())
        // console.log('::: sketch-thermometer has been initialized')
    }

    s.draw = () => {
        const {
            analytics: {
                thermometerFPS = 0,
            } = {},
            bodyTemperature = 0,
        } = s.state

        let bt = s.map(bodyTemperature, 20, 40, 0, 410)
        bt = s.constrain(bt, 0, 400)
        currentBT += (bt - currentBT) * 0.05

        if (currentBT !== bt || s.frameCount === 1) {
            s.background(255)

            s.noStroke()
            if (!bodyTemperature) {
                s.fill(191)
            }
            else {
                s.fill(44, 56, 126)
            }
            s.circle(25, 22, 20)
            s.rect(25, 17, 410, 10, 0, 4, 4, 0)

            s.rect(25, 17, 410, 10, 0, 4, 4, 0)
            s.fill(247, 51, 120)
            s.circle(25, 22, 16)
            s.rect(25, 19, currentBT, 6, 0, 4, 4, 0)
        }

        if (!(s.frameCount % 60) && s.frameRate !== thermometerFPS) {
            s.dispatch({
                type: ':UPDATE_ANALYTICS:',
                payload: { thermometerFPS: s.frameRate() },
            })
        }
    }
}
