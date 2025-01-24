# OTP Generator with User Management

This project provides a flexible One-Time Password (OTP) generator and an advanced user management system. Users can create accounts, manage friends, and generate secure OTPs with customizable settings to meet various security requirements.

## Features

- **OTP Generation**: Secure and customizable OTP generation with configurable length and character sets (digits, lowercase letters, uppercase letters, and special characters).
- **User Authentication**: Generate OTPs specifically for individual users for authentication or other purposes.
- **Customizable OTP Settings**: Easily adjust the type and length of characters used for OTPs, giving you full control over the security of your system.


## Installation
   ```bash
   npm install gen-otp-secure
``````
## Usage
## Default
```bash
const otp = generateOTP();
console.log('Generated OTP:', otp); // output : Generated OTP: abX3j9k
``````
## Custom OTP Generator (Length Base)

```bash
const otp = generateOTP(8);
console.log('Generated OTP:', otp); // output : Generated OTP: A4z#J2L9K5
``````

## Custom OTP Generator (Length Base, Digits Base, Case Alphabets Wise, specialChars Wise)
```bash
const otp = generateOTP(10, {
    digits: true,
    lowerCaseAlphabets: true,
    upperCaseAlphabets: true,
    specialChars: true
});
console.log('Generated OTP:', otp); // output : Generated OTP: A4z#J2L9K5
``````
## Manage ERROR

```bash
try {
    const otp = generateOTP(6, { digits: false, lowerCaseAlphabets: false });
    console.log('Generated OTP:', otp);
} catch (error) {
    console.error('Error:', error.message);
}
// Error: At least one character type (digits, letters, or special chars) must be enabled.
``````


## 🔗 Connect with Pratikkumar Ghelani
Expert in Node.js, React, Next.js, Express.js, MongoDB, MySQL, AWS, AI & ML, Android & iOS | SaaS | Delivering Scalable, High-Performance Applications | Custom Software Solutions Specialist

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pratikghelani86/) 


