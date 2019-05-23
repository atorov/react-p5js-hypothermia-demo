export default {
    analytics: {
        diagnosisFPS: 0,
        frostbiteRiskFPS: 0,
        heatmapFPS: 0,
        thermometerFPS: 0,
    },

    bodyTemperature: 0,

    hypothermiaSymptoms: {
        confusion: false,
        impairedMovement: false,
        noHandGestures: false,
        poorCoordination: false,
        shivering: false,
        slurredSpeech: false,
        unconscious: false,
        weakPulse: false,
    },

    hypothermiaValue: 0,
    hypothermiaDiagnosis: '',

    sampleWorker: {
        sourceData: [],
        resultData: [],
    },
}
