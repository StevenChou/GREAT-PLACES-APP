// const vars = {
//   googleApiKey: 'AIzaSyAc4mNGdPzTNZuR3qCnz62W5OQ4PXYlQFU'
// };

// export default vars;

const variables = {
  development: {
    googleApiKey: 'AIzaSyAc4mNGdPzTNZuR3qCnz62W5OQ4PXYlQFU'
  },
  production: {
    googleApiKey: 'xyz'
  }
};

const getEnvVariables = () => {
  if (__DEV__) {
    return variables.development; // return this if in development mode
  }
  return variables.production; // otherwise, return this
};

export default getEnvVariables; // export a reference to the function
