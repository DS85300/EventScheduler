const authCheck = () => {
  const data = localStorage.getItem("api-token");

  if (!data) {
    return null; // No token found, not authenticated
  }

  return data; // Token exists, authenticated
};

export default authCheck;
