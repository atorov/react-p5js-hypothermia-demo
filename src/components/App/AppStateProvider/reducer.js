export default function (state, { type, payload }) {
    switch (type) {
        case ':SET_BODY_TEMPERATURE:':
            return {
                ...state,
                bodyTemperature: payload,
            }

        case ':SET_HYPOTHERMIA_DIAGNOSIS:':
            return {
                ...state,
                hypothermiaDiagnosis: payload,
            }

        case ':SET_HYPOTHERMIA_VALUE:':
            return {
                ...state,
                hypothermiaValue: payload,
            }

        case ':SET_SAMPLE_WORKER_RESULT_DATA:':
            return {
                ...state,
                sampleWorker: {
                    ...state.sampleWorker,
                    resultData: payload,
                },
            }

        case ':SET_SAMPLE_WORKER_SOURCE_DATA:':
            return {
                ...state,
                sampleWorker: {
                    ...state.sampleWorker,
                    sourceData: payload,
                },
            }

        case ':UPDATE_ANALYTICS:':
            return {
                ...state,
                analytics: {
                    ...state.analytics,
                    ...payload,
                },
            }

        case ':UPDATE_HYPOTHERMIA_SYMPTOMS:':
            return {
                ...state,
                hypothermiaSymptoms: {
                    ...state.hypothermiaSymptoms,
                    ...payload,
                },
            }

        default:
            return state
    }
}
