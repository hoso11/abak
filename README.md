# Sardar

A static HTML/CSS/JS site deployed to **Azure Static Web Apps** from GitHub.

## Local preview

Just open `index.html` in a browser, or serve it:

```powershell
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

## Deploy

1. Push this repo to GitHub.
2. In the [Azure Portal](https://portal.azure.com) create a **Static Web App**, link this repo, set:
   - **App location**: `/`
   - **Api location**: *(empty)*
   - **Output location**: *(empty)*
3. Azure commits a GitHub Actions workflow into `.github/workflows/` and deploys on every push to `main`.
4. Free SSL is provisioned automatically on the `*.azurestaticapps.net` URL.
