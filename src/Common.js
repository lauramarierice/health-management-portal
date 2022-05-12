// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return userStr;
    else return null;
  }

  export const getSelectedProduct = () => {
    const medicine = sessionStorage.getItem('medicineId');
    if (medicine) return medicine;
    else return null;
  }

  export const getUserId = () => {
    const userStr = sessionStorage.getItem('userId');
    if (userStr) return userStr;
    else return null;
  }
  
  // return the token from the session storage
  // export const getToken = () => {
  //   return sessionStorage.getItem('token') || null;
  // }
  
  // remove the token and user from the session storage
  export const removeUserSession = () => {
  ///  sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }

  export const logoutUser = () => {
    ///  sessionStorage.removeItem('token');
      sessionStorage.removeItem('userId');
    }
  
  // set the token and user from the session storage
  export const setUserSession = (user) => {
    ///sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user.userId));
  }

    // set the token and user from the session storage
  export const setUserId = (userId) => {
    ///sessionStorage.setItem('token', token);
      window.sessionStorage.setItem('userId', userId);
      localStorage.setItem('userId', userId);
  }

  export const setSelectedProduct = (medicineId) => {
      window.sessionStorage.setItem('medicineId', medicineId);
      localStorage.setItem('medicineId', medicineId);
  }