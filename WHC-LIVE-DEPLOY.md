# WHC Live Deploy Setup

This project is ready for a GitHub-to-Web-Hosting-Canada deploy pipeline.

## What This Does

When a change is pushed to the `main` branch:

1. GitHub builds the Astro site.
2. The finished static files are created in `dist/`.
3. GitHub uploads only the built website files to Web Hosting Canada using SSH/SCP.
4. The live website updates on the WHC-hosted domain.

## One-Time Setup

### 1. Create a GitHub repository

Upload the full project source, not just the `dist` folder and not just the Netlify drop folder.

The repo should include:

- `src/`
- `public/`
- `package.json`
- `pnpm-lock.yaml`
- `astro.config.mjs`
- `netlify.toml`
- `.github/workflows/deploy-whc.yml`

### 2. Confirm WHC SFTP / SSH access

In Web Hosting Canada, open the hosting product details and find **SFTP & SSH Access**.

Use the document root for the domain you want to publish to. Common examples:

- `/home/wiartonwillys/public_html/`
- `/home/wiartonwillys/public_html/yourdomain.com/`

Use a clean folder for this Astro site. Do not deploy into a folder that already contains a WordPress install or another active site unless it has been backed up and intentionally replaced.

### 3. Add GitHub Actions secrets

In GitHub:

`Repository → Settings → Secrets and variables → Actions → New repository secret`

Add these secrets:

| Secret name | Example value |
| --- | --- |
| `WHC_SSH_HOST` | `158.69.124.97` or the WHC host shown in your account |
| `WHC_SSH_PORT` | `27` |
| `WHC_SSH_USERNAME` | The WHC SFTP/SSH username |
| `WHC_SSH_PASSWORD` | The WHC SFTP/SSH password |
| `WHC_REMOTE_DIR` | `/home/wiartonwillys/public_html/` or the correct domain document root |

Include the trailing slash on `WHC_REMOTE_DIR`.

### 4. Push to `main`

Every push to `main` deploys the live site.

You can also deploy manually from GitHub:

`Actions → Deploy to Web Hosting Canada → Run workflow`

## Future Editing Workflow

When you want a change:

1. Edit the site source files.
2. Build and preview locally.
3. Push the change to GitHub.
4. GitHub deploys the updated site to WHC.

## Safety Notes

- Keep WHC FTP credentials out of chat, code, and screenshots.
- Store credentials only as GitHub Actions secrets.
- Back up the existing WHC `public_html` folder before the first deploy.
- If email is hosted through WHC, do not change DNS nameservers unless you know the email records are preserved.

## Current Build

Build command:

```bash
pnpm build
```

Built output folder:

```bash
dist/
```
