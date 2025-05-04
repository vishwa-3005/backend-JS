import asyncHandler from "../utils/asyncHandlers.js";

const reqisterUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

export { reqisterUser };
