const videoElement=document.getElementById('video');
const button=document.getElementById('button');
async function selectMediaStream() {
  try {
    const mediaStream=await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject=mediaStream;
    videoElement.onloadedmetadata= () => {
      videoElement.play();
    };

  } catch(error) {
    console.log("error here",error);
  }
}
button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});
selectMediaStream();