class AppError extends Error {
    public status: number;
  
    constructor(message: string, statusCode: number) {
      super(message);
  
      this.status = statusCode;
  
      // Captures the stack trace for debugging
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export default AppError;
  