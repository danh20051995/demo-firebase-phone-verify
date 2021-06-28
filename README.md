# FIREBASE PHONE VERIFY EXAMPLE

## Prerequisites

### Copy `.env.example` to `.env`

```bash
cp .env.example .env
```

### Create firebase app

- [Create your ownr firebase application](https://firebase.google.com/)

### Firebase SDK config

- Get [firebase SDK config](https://firebase.google.com/docs/web/setup#config-object) for javascript, convert to JSON format and save as `firebase-config.json` in folder [credentials](https://github.com/danh20051995/demo-firebase-phone-verify/tree/master/credentials)
- Open firebase console [Firebase Authentication](https://firebase.google.com/docs/auth), at tab `Sign-in providers` and enable [Phone](https://firebase.google.com/docs/auth/web/phone-auth) provider

### Config reCAPTCHA and GOOGLE_API_KEY in `.env`

[Create your reCAPTCHA](https://www.google.com/recaptcha/admin/create) and insert key + secret into `.env`

```bash
RE_CAPTCHA_KEY=[your-reCAPTCHA-key]
RE_CAPTCHA_SECRET=[your-reCAPTCHA-secret]
```

Open [google cloud](https://console.cloud.google.com/apis/credentials), select app has the same name with your firebase app and create new [API Keys](https://cloud.google.com/docs/authentication/api-keys), if set API restrictions you must enable [Identity Toolkit API](https://developers.google.com/identity/toolkit)

Update GOOGLE_API_KEY in `.env` with your new API key

```bash
GOOGLE_API_KEY=[your-google-API-key]
```

## Execute below command

### Install node_modules

```bash
npm install
```

### Start node http server

```bash
npm run server
```

Open showed URL in CLI and check.
