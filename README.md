# Welcome to your Lovable project

## Contact Form Email Setup

The contact form submits to the Supabase Edge Function at `submit-contact`.
The function saves the submission in `contact_submissions` and sends an email
notification with Resend.

Required Supabase function secrets:

```sh
supabase secrets set RECAPTCHA_SECRET_KEY="your-google-recaptcha-secret-key" --project-ref ejdgiyutsnruczxaggut
supabase secrets set RESEND_API_KEY="re_..." --project-ref ejdgiyutsnruczxaggut
supabase secrets set CONTACT_TO_EMAIL="pixlyt.e1@gmail.com" --project-ref ejdgiyutsnruczxaggut
supabase secrets set CONTACT_FROM_EMAIL="Pixlyt Contact <contact@your-verified-domain.com>" --project-ref ejdgiyutsnruczxaggut
```

`RECAPTCHA_SECRET_KEY` is the private Google reCAPTCHA key. Keep it only in
Supabase function secrets, not in `VITE_*` browser environment variables.
`CONTACT_FROM_EMAIL` must be a sender/domain verified in Resend. After setting
the secrets, deploy the function:

```sh
supabase functions deploy submit-contact --project-ref ejdgiyutsnruczxaggut
```

The contact function is configured in `supabase/config.toml` with
`verify_jwt = false` so anonymous website visitors can submit the public form.
