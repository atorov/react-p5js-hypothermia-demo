export default function (symptoms = {}) {
    if (Object.values(symptoms).every(flag => !flag)) {
        return 0
    }

    let result = 0
    Object.keys(symptoms).forEach((key) => {
        switch (key) {
            case 'shivering': result += symptoms[key] ? 0.25 : 0; break;
            case 'noHandGestures': result += symptoms[key] ? 0.20 : 0; break;
            case 'impairedMovement': result += symptoms[key] ? 0.15 : 0; break;
            case 'poorCoordination': result += symptoms[key] ? 0.15 : 0; break;
            case 'weakPulse': result += symptoms[key] ? 0.15 : 0; break;
            case 'confusion': result += symptoms[key] ? 0.05 : 0; break;
            case 'slurredSpeech': result += symptoms[key] ? 0.05 : 0; break;
        }
    })

    if (symptoms.unconscious) {
        return 1
    }

    return result
}
