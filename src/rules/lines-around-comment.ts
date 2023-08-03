/** @see https://eslint.org/docs/latest/rules/lines-around-comment */
export const linesAroundComment = {
  afterBlockComment: false,

  // afterHashbangComment: false,
  afterLineComment: false,

  allowArrayEnd: true,
  allowArrayStart: true,
  allowBlockEnd: true,
  allowBlockStart: true,
  allowClassEnd: true,
  allowClassStart: true,
  allowObjectEnd: true,
  allowObjectStart: true,

  beforeBlockComment: true,
  beforeLineComment: true,
} as const;
