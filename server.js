// Custom server.js to log asset requests and handle missing images
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

// Check if we have a public folder
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  console.log('Creating public directory...');
  fs.mkdirSync(publicDir, { recursive: true });
}

// Check if we have a public/images folder
const imagesDir = path.join(publicDir, 'images');
if (!fs.existsSync(imagesDir)) {
  console.log('Creating public/images directory...');
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Ensure we have at least one image for testing
const testImagePath = path.join(imagesDir, 'test-image.jpg');
if (!fs.existsSync(testImagePath)) {
  console.log('Creating a test image...');
  // Create a simple 1x1 pixel image (very minimal)
  const onePixelImage = Buffer.from('R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'base64');
  fs.writeFileSync(testImagePath, onePixelImage);
}

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    
    // Log all requests to help diagnose issues
    console.log([] Request: );
    
    // Special handling for image requests
    if (pathname.startsWith('/images/')) {
      const imagePath = path.join(publicDir, pathname);
      console.log(Checking for image at: );
      
      if (fs.existsSync(imagePath)) {
        console.log(Found image: );
        const imageData = fs.readFileSync(imagePath);
        const ext = path.extname(imagePath).toLowerCase();
        
        // Set content type based on file extension
        let contentType = 'application/octet-stream';
        if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
        else if (ext === '.png') contentType = 'image/png';
        else if (ext === '.gif') contentType = 'image/gif';
        else if (ext === '.svg') contentType = 'image/svg+xml';
        
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
        res.end(imageData);
        return;
      } else {
        console.log(Image not found: , serving placeholder);
        // Serve the test image as a fallback
        const fallbackImage = fs.readFileSync(testImagePath);
        res.setHeader('Content-Type', 'image/jpeg');
        res.setHeader('Cache-Control', 'no-cache');
        res.end(fallbackImage);
        return;
      }
    }
    
    // Let Next.js handle everything else
    handle(req, res, parsedUrl);
  }).listen(PORT, (err) => {
    if (err) throw err;
    console.log(> Ready on http://localhost:);
    console.log('> Debugging mode active - logging all asset requests');
  });
});
