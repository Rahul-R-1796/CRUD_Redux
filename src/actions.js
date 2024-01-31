export const addEmployee = (employee) => ({
    type: 'ADD_EMPLOYEE',
    payload: employee,
  });
  
  export const updateEmployee = (employee) => ({
    type: 'UPDATE_EMPLOYEE',
    payload: employee,
  });
  
  export const deleteEmployee = (id) => ({
    type: 'DELETE_EMPLOYEE',
    payload: id,
  });
  