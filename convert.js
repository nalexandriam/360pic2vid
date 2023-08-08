const { execSync } = require('child_process');
const fs = require('fs');

const inputFolder = 'input_videos';
const outputFolder = 'output_videos';

fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error('Error reading input folder:', err);
    return;
  }

  files.forEach((file, index) => {
    if (!file.includes('.ps1')) {
      const inputFile = `${inputFolder}/${file}`;
      const outputFile = `${outputFolder}/${index}.mp4`;
      const ffmpegCommand = `ffmpeg -loop 1 -i ${inputFile} -c:v libx264 -t 30 -pix_fmt yuv420p -vf "scale=3840:2160,format=yuv420p" ${outputFile}`;

      try {
        execSync(ffmpegCommand);
        console.log(`Conversion of ${inputFile} complete!`);
      } catch (error) {
        console.error(`Error during conversion of ${inputFile}:`, error);
      }
    }
  });

  console.log('All conversions completed!');
});
