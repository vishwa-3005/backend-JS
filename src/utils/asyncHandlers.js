const asyncHandler = (fn) => async () => {
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
