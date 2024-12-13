import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
    LabelingData,
    LabelingDataItem,
    Prediction,
} from "../types/predictions";

const initialState: LabelingData = [
    {
        filename: "orange.jpg",
        size: 253393,
        uploaded: Date.now() - 1000 * 60 * 20,
        url: "/orange.jpg",
        uid: "0",
        prediction: {
            title: "orange picture",
            description: "a picture of an orange on a plate",
            timestamp: Date.now(),
            predictions: [
                {
                    bbox: {
                        x1: 589,
                        x2: 1443,
                        y1: 92,
                        y2: 927,
                    },
                    label: "orange",
                    score: "0.97",
                },
                {
                    bbox: {
                        x1: -1,
                        x2: 1617,
                        y1: 25,
                        y2: 1193,
                    },
                    label: "bowl",
                    score: "0.29",
                },
                {
                    bbox: {
                        x1: -3,
                        x2: 801,
                        y1: 1,
                        y2: 204,
                    },
                    label: "person",
                    score: "0.28",
                },
            ],
        },
    },
    {
        filename: "orange2.jpg",
        size: 253393,
        uploaded: Date.now() - 1000 * 60 * 20,
        url: "/orange2.jpg",
        uid: "1",
        prediction: undefined,
    },
    {
        filename: "orange3.jpg",
        size: 253393,
        uploaded: Date.now() - 1000 * 60 * 20,
        url: "/orange3.jpg",
        uid: "2",
        prediction: undefined,
    },
];

export const labelingSlice = createSlice({
    name: "labeling",
    initialState: initialState,
    reducers: {
        addImage: (state, { payload }: PayloadAction<LabelingDataItem>) => {
            return [...state, payload];
        },
        addImages: (state, { payload }: PayloadAction<LabelingData>) => {
            return [...state, ...payload];
        },
        addImagePrediction: (
            state,
            { payload }: PayloadAction<{ uid: string; prediction: Prediction }>
        ) => {
            const { uid, prediction } = payload;
            const index = state.findIndex((d) => d.uid === uid);
            state[index].prediction = prediction;
            return state;
        },
        clearConnections: () => initialState,
    },
});

export default labelingSlice.reducer;
export const labelingActions = labelingSlice.actions;
