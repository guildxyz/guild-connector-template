import { AxiosResponse } from "axios";
import { ErrorResult } from "../types";
import logger from "./logger";

const logBackendError = (error) => {
  const errorData = error.response?.data;
  const errors = errorData?.errors;

  if (errors?.length > 0 && errors[0]?.msg) {
    logger.verbose(errors[0].msg);
  } else if (error.response?.data) {
    logger.verbose(JSON.stringify(errorData));
  } else {
    logger.verbose(JSON.stringify(error));
  }
};

const logAxiosResponse = (res: AxiosResponse<any>) => {
  logger.verbose(
    `${res.status} ${res.statusText} data:${JSON.stringify(res.data)}`
  );
  return res;
};

const createErrorResponse = (errorMsg: string): ErrorResult => ({
  errors: [
    {
      msg: errorMsg,
    },
  ],
});

export { logBackendError, logAxiosResponse, createErrorResponse };
