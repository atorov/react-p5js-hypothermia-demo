/* eslint no-restricted-globals: 1 */
/* eslint no-undef: 0 */

const ctx = self

ctx.onmessage = ({ data }) => {
    const result = []
    if (data && data.length) {
        data.forEach((item) => {
            const value = 1 - ((item / 255) ** 2)
            if (value === 1) {
                result.push(255)
                result.push(255)
                result.push(255)
            }
            else if (value > 0.96 && value < 0.999) {
                result.push(255)
                result.push(0)
                result.push(55)
            }
            else if (value > 0.90 && value <= 0.96) {
                result.push(87)
                result.push(21)
                result.push(68)
            }
            else {
                result.push(item)
                result.push(item)
                result.push(item)
            }

            result.push(255)
        })
    }

    ctx.postMessage(result)
}
