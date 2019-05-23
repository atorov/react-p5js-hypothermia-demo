export default function (value = 0) {
    if (value < 0.10) {
        return 'Not Hypothermic'
    }
    if (value < 0.25) {
        return 'Cold Stressed'
    }
    if (value < 0.40) {
        return 'Mild Hypothermia'
    }
    if (value < 0.60) {
        return 'Moderate Hypothermia'
    }

    return 'Severe Hypothermia'
}
