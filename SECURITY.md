# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within VA Praktikum TI Generator, please follow these steps:

1. **Do Not** disclose the vulnerability publicly
2. Send a detailed report to: rulshrm@proton.me
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Response Timeline

- Initial response: Within 48 hours
- Assessment completion: Within 7 days
- Fix implementation: Based on severity
  - Critical: Within 48 hours
  - High: Within 7 days
  - Medium: Within 14 days
  - Low: Next release cycle

## Security Measures

### Application Security
- Input validation for all form fields
- XSS protection through React's built-in escaping
- CSRF protection
- Secure headers configuration
- Content Security Policy (CSP) implementation

### Data Protection
- No sensitive data storage
- LocalStorage used only for non-sensitive user preferences
- No collection of personal information beyond NIM

### Infrastructure Security
- Deployed on Vercel with SSL/TLS encryption
- Regular dependency updates
- Automated security scanning in CI/CD pipeline

## Best Practices

### For Contributors
1. Keep dependencies updated
2. Follow secure coding guidelines
3. Use strong type checking (TypeScript)
4. Implement proper error handling
5. Test security-critical features

### For Users
1. Use up-to-date browsers
2. Report suspicious behavior
3. Don't share VA codes publicly
4. Verify the application URL

## Security Features

- HTTPS enforcement
- Content Security Policy
- XSS Protection
- Secure Headers
- Rate Limiting
- Input Sanitization

## Acknowledgments

We appreciate security researchers who help keep VA Praktikum TI Generator and its users safe. Responsible disclosure of vulnerabilities helps us ensure the security and privacy of our users.

## Updates

This security policy may be updated from time to time. Please refer to the Git history for a record of changes.

## Contact

For security-related inquiries, contact:
- Email: rulshrm@proton.me
- GitHub: [@rulshrm](https://github.com/rulshrm)