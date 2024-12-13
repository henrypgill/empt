export type APIResponse<T extends APIResponseData> = APIResponseSuccess<T> | APIResponseError;

export interface APIResponseBase {
    success: boolean;
}

export type APIResponseData = {
    [key: string]: string | object | (string | object)[];
};

export interface APIResponseSuccess<T extends APIResponseData> extends APIResponseBase {
    sucess: true;
    data: T;
}

export interface APIResponseError extends APIResponseBase {
    success: false;
    erroZr: unknown;
}
