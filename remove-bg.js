const { Jimp } = require("jimp");

async function removeBackground() {
  try {
    const image = await Jimp.read("image copy.png");
    
    // Convert pure white (and near white) to transparent
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is white or very close to white
      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0; // Alpha channel to 0 (transparent)
      }
    });

    await image.write("public/images/footer-logo.png");
    console.log("Background removed and saved to public/images/footer-logo.png");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

removeBackground();
