export const validateStringNotNull = (value: unknown, maxLength: number) => {
    if ((value === null || typeof value !== "string" || value.length > maxLength)) {
        return false;
    }
    return true;
}