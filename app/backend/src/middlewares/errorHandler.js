// eslint-disable-next-line no-unused-vars
const handleError = (err, _req, res, _next) => {
  if (err.code) return res.status(err.code).json({ message: err.message });
  if (err.message) return res.status(500).json({ message: err.message });

  return res.status(500).json({ message: 'Something went wrong' });
};

module.exports = handleError;
