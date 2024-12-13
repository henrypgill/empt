const timeUnits = {
    SECONDS: 1000,
    MINUTES: 1000 * 60,
    HOURS: 1000 * 60 * 60,
    DAYS: 1000 * 60 * 60 * 24,
};

const now = new Date();

/**
 *
 * @returns the timestamp of 00:00 for the current day
 */
export const getStartOfDay = () => {
    return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
};

/**
 *
 * @returns the timestamp for exactly 7 days (128 hours) ago
 */
export const get7DaysAgo = () => {
    return Date.now() - timeUnits.DAYS * 7;
};

/**
 *
 * @returns the timestamp for exactly 30 days ago
 */
export const getMonthAgo = () => {
    return Date.now() - timeUnits.DAYS * 30;
};

/**
 *
 * @returns the timestamp for 00:00 on January 1st of the current year
 */
export const getStartOfYear = () => {
    return new Date(now.getFullYear()).getTime();
};

/**
 * 3 letter abbreviations of the months
 */
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
] as const;

/**
 *
 * @param timestamp the timestamp of the date to format
 * @returns the date and time in the format `month date hh:mm`
 */
export function formatUploadedDate(timestamp: number): string {
    const date = new Date(timestamp);
    const formatTimeString = (number: number) =>
        number < 10 ? 0 + String(number) : number;
    return `${months[date.getMonth()]} ${date.getDate()} ${formatTimeString(date.getHours())}:${formatTimeString(date.getMinutes())}`;
}

/**
 * numeric values of different units of storage
 */
const fileSizes = {
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
} as const;

/**
 *
 * @param size the quantity of storage to format
 * @returns the formatted string for the size of storage e.g. 2064 bytes will be represented as 2.02 MB
 */
export function formatFileSize(size: number): string {
    if (size > fileSizes.GB) {
        return `${(size / fileSizes.GB).toFixed(1)} GB`;
    } else if (size > fileSizes.MB) {
        return `${(size / fileSizes.MB).toFixed(1)} MB`;
    } else if (size > fileSizes.KB) {
        return `${(size / fileSizes.KB).toFixed(1)} KB`;
    } else {
        return `${size} B`;
    }
}
