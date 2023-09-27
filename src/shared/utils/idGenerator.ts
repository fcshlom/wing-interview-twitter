export const generateId = () => {
    const timestamp = new Date().getTime().toString(16); // Convert timestamp to hexadecimal
    const randomPart = Math.random().toString(16).substr(2, 6); // Random hex string (6 characters)
    const uniqueId = `${timestamp}-${randomPart}`;
    return uniqueId;
}
  
