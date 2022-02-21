const videoElement = document.getElementById('videoElement');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream () {
    try {
      mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
          videoElement.play();
      }
    } catch (error) {
      console.log('Error at selecting the Media Stream:', error);
    }
  }


  button.addEventListener('click', async () => {
      button.disabled = true;
      await videoElement.requestPictureInPicture();
      button.disabled = false;
  });

  
//   button.addEventListener('click', selectMediaStream);
//   videoElement.addEventListener('loadedmetadata', async () => {
//       videoElement.play();
//       let pipWindow = await videoElement.requestPictureInPicture();
//       pipWindow.height = 500;
//     }
//   );  
// On load
selectMediaStream();