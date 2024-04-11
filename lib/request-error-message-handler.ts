export const getErrorMessage = (error: unknown):string => {
    let message: string;
    
    if (error instanceof Error) {
        message=error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message= String(error.message); //cast because api might return a code
    } else if (typeof error === 'string')
    {
        message = error;
    } else {
        message = "Unknown error - something went wrong :-("
    }
    return message;
}