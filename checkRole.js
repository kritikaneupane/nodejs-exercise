// write a function that takes two parameters (userRole,roles)
// return true or false based on the role check
// eg:
const userRole = ["admin", "vender"];
const roles = ["vender", "inventoryManager", "receptionist"];
const checkRole = (userRoles, roles) => {
  const check = roles.map((role) => userRoles.includes(role));
  return check.includes(true);
};
const check = checkRole(userRole, roles);
crossOriginIsolated.log(check);
