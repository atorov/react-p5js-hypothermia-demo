export default function (s) {
    s.state = {}
    s.dispatch = () => { }

    let currentHt = 0
    let imgScaleGradientHt = null

    s.preload = () => {
        imgScaleGradientHt = s.loadImage('/img/scale-gradient-ht.png')
    }

    s.setup = () => {
        s.createCanvas(450, 60)
        s.pixelDensity(1)
        s.frameRate(15)
        s.background(255)

        // console.log('::: sketch displayDensity:', s.displayDensity())
        // console.log('::: sketch pixelDensity:', s.pixelDensity())
        // console.log('::: sketch-diagnosis has been initialized')
    }

    s.draw = () => {
        const {
            analytics: {
                diagnosisFPS = 0,
            } = {},
            hypothermiaValue = 0,
        } = s.state

        let ht = s.map(hypothermiaValue, 0, 1, 200, -200)
        ht = s.constrain(ht, -200, 200)
        currentHt += (ht - currentHt) * 0.05

        if (currentHt !== ht || s.frameCount === 1) {
            s.translate(s.width / 2, s.height / 2)
            s.imageMode(s.CENTER)
            s.image(imgScaleGradientHt, currentHt, 10)

            s.strokeWeight(5)
            s.stroke(255)
            s.fill(242 - currentHt, 16, 90)
            s.triangle(-25, -30, 25, -30, 0, 10);
        }

        if (!(s.frameCount % 60) && s.frameRate !== diagnosisFPS) {
            s.dispatch({
                type: ':UPDATE_ANALYTICS:',
                payload: { diagnosisFPS: s.frameRate() },
            })
        }
    }
}
