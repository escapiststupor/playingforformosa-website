# Playing for Formosa Music Association Website

This is the official website for Playing for Formosa Music Association (奏出福爾摩沙音樂協會).

## Deployment Instructions

### 1. Create GitHub Repository
1. Go to GitHub and create a new repository
2. Name it `playingforformosa-website` (or any name you prefer)
3. Make it public
4. Don't initialize with README since we have files

### 2. Push to GitHub
```bash
cd playingforformosa-website
git init
git add .
git commit -m "Initial website commit"
git branch -M main
git remote add origin https://github.com/yourusername/playingforformosa-website.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### 4. Configure Custom Domain (Namecheap)
1. In your repository **Settings > Pages**, enter `www.playingforformosa.org` in the custom domain field
2. In Namecheap DNS settings, add these records:
   - **CNAME Record**: `www` pointing to `yourusername.github.io`
   - **A Record**: `@` pointing to these GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

### 5. Wait for DNS Propagation
- It can take 24-48 hours for DNS changes to fully propagate
- GitHub will automatically provision an SSL certificate

## Site Features
- Responsive design that works on desktop and mobile
- Smooth scrolling navigation
- Professional layout suitable for a music association
- Ready for customization with your content

## Customization
- Edit `index.html` to update content
- Modify `css/style.css` to change styling
- Update `js/script.js` for additional functionality
- Add images to an `images/` folder as needed

## Multiple Sites
Since this is a project repository, your main user site (`yourusername.github.io`) will remain separate. You can have unlimited project sites like this one.

## Support
The CNAME file is already configured for `www.playingforformosa.org`. Make sure your domain is properly configured in Namecheap to point to GitHub Pages.