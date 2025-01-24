# OTP Generator (gen-otp-secure)

## Features

- OTP Generation
- User Authentication
- Customizable OTP Settings
- Configurable Length
- Configurable Character Sets (Digits, Lowercase Letters, Uppercase Letters, Special Characters)


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


