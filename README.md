<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy on GitHub Pages (unrealstudio.ai)

1. **Enable Pages:** In the repo on GitHub → **Settings** → **Pages**. Under "Build and deployment", set **Source** to **GitHub Actions**.
2. **Push and deploy:** Pushing to `main` or `master` runs the workflow: it builds the Vite app and deploys to GitHub Pages. The workflow also adds `404.html` so SPA routes (e.g. `/rolla`, `/rolla/terms`) work.
3. **Custom domain:** In **Settings** → **Pages**, under "Custom domain", enter `unrealstudio.ai` and save. Optionally enable **Enforce HTTPS**.
4. **DNS at your registrar:** At your domain provider (GoDaddy, Namecheap, Cloudflare, etc.) add:
   - **Apex (unrealstudio.ai):** Four **A** records, each with value:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **www (optional):** **CNAME** record for `www` → `unrealstudioai.github.io`
   DNS can take a few minutes up to 48 hours. When it’s correct, GitHub will show a green check next to the custom domain.
