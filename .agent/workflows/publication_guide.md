---
description: How to deploy this portfolio to GitHub Pages
---

# Deploying Your Portfolio to GitHub Pages

I have already configured the project for deployment. Follow these exact steps to publish your website online.

## Prerequisites
- You must have a GitHub account.
- `git` must be installed on your computer.

## Step 1: Initialize Git and Create a Repository
1. Open your terminal in the project folder: `e:\yuvi_workspace\WORKSPACE\antigravity_workspace\basker_portfolio`
2. Initialize git:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit of Basker Portfolio"
   ```
3. Go to [GitHub.com](https://github.com) and create a **New Repository**.
   - Name it `basker_portfolio_1`.
   - Make it **Public**.
   - **Do not** initialize with README/legacy files.

## Step 2: Link and Push
4. Link your local folder to GitHub:
   ```powershell
   git branch -M main
   git remote add origin https://github.com/yuvanesh366-cmyk/basker_portfolio_1.git
   git push -u origin main
   ```

## Step 3: Publish
5. Run the deployment script I created for you:
   ```powershell
   npm run deploy
   ```
   - This command will automatically:
     - Build the optimized website.
     - Upload it to a special `gh-pages` branch on your repository.

## Step 4: Verify
6. Go to your GitHub Repository Settings -> **Pages**.
7. Your site should be live at: `https://yuvanesh366-cmyk.github.io/basker_portfolio_1/`
   *(It may take 1-2 minutes for the first deploy to appear)*.

> **Note**: I have already updated `vite.config.js` to use `base: '/basker_portfolio_1/'` matching your repository.
