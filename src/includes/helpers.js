/**
 * Generates a unique Japan Rail like confirmation code for bookings.
 * @returns {string} A unique confirmation code.
 */
const generateConfirmationCode = () => {
    return 'JR' + Math.random().toString(36).substring(2, 10).toUpperCase();
};

/**
 * Converts kilometers to miles.
 * @param {number} km - The distance in kilometers.
 * @returns {number} The equivalent distance in miles.
 */
const kmToMiles = (km) => {
    const conversionFactor = 0.621371;
    return km * conversionFactor;
};

/**
 * Converts Japanese Yen to US Dollars.
 * @param {number} yen - The amount in Japanese Yen.
 * @returns {number} The equivalent amount in US Dollars.
 */
const yenToUsd = (yen) => {
    const exchangeRate = 0.0066; // Example rate: 1 Yen = 0.0066 USD
    return yen * exchangeRate;
};

/**
 * Converts month number to three letter abbreviation
 * @param {number} monthNum - Month number
 * @returns {string} Three letter abbreviation
 */
const monthNumberToAbbr = (monthNum) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (monthNum < 1 || monthNum > 12) return '';
    return months[monthNum - 1];
};

export { generateConfirmationCode, kmToMiles, yenToUsd, monthNumberToAbbr };