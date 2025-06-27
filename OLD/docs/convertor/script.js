const skinUpload = document.getElementById('skin-upload');
const capeUpload = document.getElementById('cape-upload');
const previewImage = document.getElementById('preview-image');
const downloadButton = document.getElementById('download-button');

function updatePreview() {
  const skinImg = new Image();
  const capeImg = new Image();

  skinImg.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = skinImg.width;
    canvas.height = skinImg.height;

    ctx.drawImage(skinImg, 0, 0);
    capeImg.onload = () => {
      ctx.drawImage(capeImg, 0, 0);
      previewImage.src = canvas.toDataURL('image/png');
      downloadButton.disabled = false;
    };
    capeImg.src = URL.createObjectURL(capeUpload.files[0]);
  };
  skinImg.src = URL.createObjectURL(skinUpload.files[0]);
}

skinUpload.addEventListener('change', updatePreview);
capeUpload.addEventListener('change', updatePreview);

downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = previewImage.src;
  link.download = 'combined_image.png';
  link.click();
});
