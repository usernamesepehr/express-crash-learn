import 'colors'; 

const logger = (req, res, next) => {
  const methodColors = {
    GET: 'green',
    POST: 'yellow',
    PUT: 'blue',
    DELETE: 'red',
  };

  const colorName = methodColors[req.method] || 'white'; // fallback
  const logString = `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`;

  // This is the magic line:
  console.log(logString[colorName]);

  next();
};

export default logger;