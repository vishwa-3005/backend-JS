const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.log("Error : ", error.message);
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};

export default asyncHandler;
