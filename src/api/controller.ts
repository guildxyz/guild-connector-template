import { Response, Request } from "express";
import { validationResult } from "express-validator";
import logger from "../utils/logger";
import { createErrorResponse } from "../utils/utils";

const example = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const { id } = req.body;
    res.status(200).json([]);
  } catch (error: any) {
    logger.error(error);
    res.status(400).json(createErrorResponse(error.message));
  }
};

export { example };
