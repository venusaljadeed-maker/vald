const { Jimp } = require("jimp");

async function removeBackground() {
  try {
    const image = await Jimp.read("image copy.png");
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is white or very close to white, make transparent
      if (red > 200 && green > 200 && blue > 200) {
        this.bitmap.data[idx + 3] = 0; // Alpha channel to 0 (transparent)
      } 
      // If the pixel is dark (the dark blue text), make it pure white
      else if (red < 150 && green < 150 && blue < 150) {
        this.bitmap.data[idx + 0] = 255;
        this.bitmap.data[idx + 1] = 255;
        this.bitmap.data[idx + 2] = 255;
      }
      // Otherwise (the yellow dot, which is high red/green, low blue), leave it alone!
    });

    await image.write("public/images/footer-logo-exact.png");
    console.log("Image processed and saved to public/images/footer-logo-exact.png");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

removeBackground();
