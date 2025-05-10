# Deployment Guide

This guide will help you deploy your Chat Widget using either Vercel or Netlify as a CDN.

## Option 1: Deploy to Vercel

### Step 1: Push Your Code to GitHub
1. Create a new repository on GitHub
2. Push your local repository to GitHub using these commands:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [Vercel](https://vercel.com/) and sign in with your account
2. Click "Add New" → "Project"
3. Select the GitHub repository you just created
4. Vercel will automatically detect your project type
5. Click "Deploy"
6. Wait for the deployment to complete
7. You'll receive a URL like `https://your-project.vercel.app`

### Step 3: Configure Custom Domain (Optional)
1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain and follow the instructions to set up DNS records

## Option 2: Deploy to Netlify

### Step 1: Push Your Code to GitHub
1. Create a new repository on GitHub
2. Push your local repository to GitHub using these commands:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Netlify
1. Go to [Netlify](https://www.netlify.com/) and sign in with your account
2. Click "Add new site" → "Import an existing project"
3. Select "GitHub" as your Git provider
4. Select the repository you just created
5. Configure the build settings (leave defaults for this project - not required):
   - Build command: (leave empty)
   - Publish directory: (leave empty) 
6. Click "Deploy site"
7. Wait for the deployment to complete
8. You'll receive a URL like `https://random-name.netlify.app`

### Step 3: Configure Custom Domain (Optional)
1. In your Netlify project dashboard, go to "Site settings" → "Domain management" → "Custom domains"
2. Add your custom domain and follow the instructions to set up DNS records

## Using Your Deployed Widget

After deployment, your chat widget will be available at the URL provided by Vercel or Netlify. To embed it in another website:

1. Add this script tag to your website's HTML:
   ```html
   <script type="module" src="YOUR_DEPLOYMENT_URL/main.js"></script>
   ```

2. Add these containers to your HTML:
   ```html
   <div class="chat-overlay" id="chat-overlay"></div>
   <div id="n8n-chat-widget-2"></div>
   ```

3. Include the styles:
   ```html
   <link rel="stylesheet" href="YOUR_DEPLOYMENT_URL/style.css" />
   ```

## Troubleshooting

### Common Issues with Vercel
- If your deployment fails, check the build logs for errors
- Make sure your `vercel.json` file is properly configured
- Check that all file paths are correct in your code

### Common Issues with Netlify
- If your deployment fails, check the deploy logs for errors
- Make sure all file paths are correct in your code
- For redirects or routing issues, create a `_redirects` file in your project root 