export const createSuccessResponse = (data: any) => {
  return { json: () => new Promise((resolve) => resolve(data)), ok: true };
};

export const createErrorResponse = (status: number, message: string) => {
  return { message, status, ok: false };
};
