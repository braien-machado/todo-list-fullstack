const statusOptions = {
  'em andamento': 'em andamento',
  pronto: 'pronto',
  pendente: 'pendente',
};

const validateStatus = async (req, _res, next) => {
  const { status } = req.body;

  if (!statusOptions[status]) {
    next({
      code: 400,
      message: "Status can be only 'pendente', 'em andamento' or 'pronto'",
    });
  }
  next();
};

module.exports = validateStatus;
