module.exports = solution = ([obj1, obj2, dis], [u1, u2, u3]) => {
  const unitFormat = {
    kg: 1, g: 1e-3, mg: 1e-6, μg: 1e-9, lb: .453592,
     m: 1, cm: 1e-2, mm: 1e-3, μm: 1e-6, ft: .3048,
  };
  return 6.67e-11 * (obj1 * unitFormat[u1] * obj2 * unitFormat[u2])/ ((dis * unitFormat[u3]) ** 2);
};