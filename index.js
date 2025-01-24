/**
 * Generate OTP based on user options.
 */

const digits = '0123456789';
const lowerCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseAlphabets = lowerCaseAlphabets.toUpperCase();
const specialChars = '#!&@';

/**
 * Generate an OTP of the specified length with given options.
 * @param  {number} length - The length of the OTP (default: 6).
 * @param  {object} options - Options to customize the OTP:
 *   - {boolean} digits - Include digits (default: true).
 *   - {boolean} lowerCaseAlphabets - Include lowercase letters (default: true).
 *   - {boolean} upperCaseAlphabets - Include uppercase letters (default: true).
 *   - {boolean} specialChars - Include special characters (default: false).
 * @returns {string} The generated OTP.
 */
function generateOTP(length = 6, options = {}) {
    // Validation for the length (should be a number and greater than 0)
    if (typeof length !== 'number' || length <= 0) {
        throw new Error('OTP length must be a positive number.');
    }

    // Default options if not provided
    const generateOptions = {
        digits: options.digits !== undefined ? options.digits : true,
        lowerCaseAlphabets: options.lowerCaseAlphabets !== undefined ? options.lowerCaseAlphabets : true,
        upperCaseAlphabets: options.upperCaseAlphabets !== undefined ? options.upperCaseAlphabets : true,
        specialChars: options.specialChars !== undefined ? options.specialChars : false,
    };

    // Determine the characters allowed based on the options
    let allowedChars = '';
    if (generateOptions.digits) allowedChars += digits;
    if (generateOptions.lowerCaseAlphabets) allowedChars += lowerCaseAlphabets;
    if (generateOptions.upperCaseAlphabets) allowedChars += upperCaseAlphabets;
    if (generateOptions.specialChars) allowedChars += specialChars;

    // If no characters are allowed, throw an error
    if (allowedChars === '') {
        throw new Error('At least one character type (digits, letters, or special chars) must be enabled.');
    }

    let otp = '';
    while (otp.length < length) {
        const charIndex = Math.floor(Math.random() * allowedChars.length);
        otp += allowedChars[charIndex];
    }

    return otp;
}

// Exporting the function as an NPM package
module.exports = {
    generateOTP,
};
