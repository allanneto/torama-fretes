const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "./src/routes/index.ts",
  "./src/routes/intention.routes.ts",
  "./src/routes/user.routes.ts",
];

swaggerAutogen(outputFile, endpointsFiles);
