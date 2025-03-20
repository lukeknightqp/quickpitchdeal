const https = require('https');
const fs = require('fs');

const url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G717X1SCrW2oQAXdwvFXXkghXCYBoP.png';
const outputPath = './public/original-logo.png';

https.get(url, (response) => {
  const fileStream = fs.createWriteStream(outputPath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Download completed');
  });
}).on('error', (err) => {
  console.error('Error downloading the file:', err.message);
}); 