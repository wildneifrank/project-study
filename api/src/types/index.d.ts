declare namespace API {
  namespace Models {
    export interface IDataItem {
      id: number;
      title: string;
      votes_amount: number;
    }
  }
  namespace Express {
    // HTTP status codes
    export enum HttpStatusCodes {
      OK = 200,
      CREATED = 201,
      NO_CONTENT = 204,
      BAD_REQUEST = 400,
      UNAUTHORIZED = 401,
      FORBIDDEN = 403,
      NOT_FOUND = 404,
      INTERNAL_SERVER_ERROR = 500,
    }

    // Interface for standardized API responses
    export interface IApiResponse<T = any> {
      message?: string;
      data?: T | null;
      statusCode: HttpStatusCodes;
    }
  }
}
