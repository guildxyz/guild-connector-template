import { body, param } from "express-validator";

const paramIdValidator = (fieldName: string) =>
  param(fieldName).trim().isNumeric().isLength({ min: 1, max: 64 });

const bodyIdValidator = (fieldName: string) =>
  body(fieldName).trim().isNumeric().isLength({ min: 1, max: 64 });

const bodyStringValidator = (fieldName: string) =>
  body(fieldName).trim().isString().isLength({ min: 1 });

const bodyArrayValidator = (fieldName: string) =>
  body(fieldName).isArray({ min: 1 });

const bodyNumberIdValidator = (fieldName: string) =>
  body(fieldName).trim().isNumeric().isLength({ min: 1, max: 64 });

export default {
  paramIdValidator,
  bodyIdValidator,
  bodyStringValidator,
  bodyArrayValidator,
  bodyNumberIdValidator,
};
