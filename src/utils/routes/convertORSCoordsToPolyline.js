export const convert = routes => {
  return routes.map(route => {
    const object = {latitude: route[1], longitude: route[0]};
    return object;
  });
};
