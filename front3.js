function calculateAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  
  function calculateExperience(joiningDateString) {
    const today = new Date();
    const joiningDate = new Date(joiningDateString);
    let experience = today.getFullYear() - joiningDate.getFullYear();
    const monthDiff = today.getMonth() - joiningDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < joiningDate.getDate())) {
      experience--;
    }
  
    return experience;
  }
  
  function addEmployee() {
    // The existing addEmployee function remains unchanged.
    // It's kept within the script.js file.
  }
  
  function sortTable() {
    // The existing sortTable function remains unchanged.
    // It's kept within the script.js file.
  }
  