/**
 * Represents a single image item in the labeling dataset.
 *
 * @interface LabelingDataItem
 *
 * @property {string} filename - The name of the file.
 * @property {number} size - The size of the file in bytes.
 * @property {number} uploaded - The timestamp (in milliseconds) when the file was uploaded.
 * @property {Prediction | undefined} prediction - The prediction associated with the file, if any. If no prediction exists, this will be `undefined`.
 * @property {string} url - A URL representing the image file.
 * @property {string} uid - A unique identifier for the image.
 */
export interface LabelingDataItem {
    filename: string;
    size: number;
    uploaded: number;
    prediction: undefined | Prediction;
    url: string;
    uid: string;
}

/**
 * An array of `LabelingDataItem` objects.
 *
 * @type {LabelingDataItem[]}
 */
export type LabelingData = LabelingDataItem[];

/**
 * Represents a bounding box in a 2D coordinate space.
 *
 * @interface BBox
 *
 * @property {number} x1 - The x-coordinate of the top-left corner of the bounding box.
 * @property {number} x2 - The x-coordinate of the bottom-right corner of the bounding box.
 * @property {number} y1 - The y-coordinate of the top-left corner of the bounding box.
 * @property {number} y2 - The y-coordinate of the bottom-right corner of the bounding box.
 */
export interface BBox {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}

/**
 * Represents the data for a single prediction.
 *
 * @interface PredictionData
 *
 * @property {BBox} bbox - The bounding box of the predicted object.
 * @property {string} label - The label of the predicted object.
 * @property {string} score - The confidence score for the prediction.
 */
export interface PredictionData {
    bbox: BBox;
    label: string;
    score: string;
}

/**
 * Represents the response received from the prediction API.
 *
 * @type {PredictionResponse}
 *
 * @property {string} description - A textual description of the prediction.
 * @property {PredictionData[]} predictions - An array of prediction objects with bounding box, label, and score details.
 */
export type PredictionResponse = {
    description: string;
    predictions: PredictionData[];
};

/**
 * Represents the full prediction details for an image.
 *
 * @interface Prediction
 *
 * @property {string} title - The title of the prediction.
 * @property {string} description - A description of the prediction.
 * @property {number} timestamp - The timestamp when the prediction was made.
 * @property {PredictionData[]} predictions - An array of prediction data objects associated with this prediction.
 */
export interface Prediction {
    title: string;
    description: string;
    timestamp: number;
    predictions: PredictionData[];
}
