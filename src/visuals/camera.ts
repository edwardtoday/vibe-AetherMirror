// Camera helper: request and manage local webcam stream
export async function initCameraStream(): Promise<HTMLVideoElement> {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: { ideal: 1280 },
      height: { ideal: 720 },
      facingMode: 'user',
    },
    audio: false,
  })

  const video = document.createElement('video')
  video.autoplay = true
  video.playsInline = true
  video.muted = true
  video.srcObject = stream

  // 某些浏览器需要显式 play 调用
  try {
    void video.play()
  } catch {
    // 忽略，依赖 autoplay
  }

  await new Promise<void>((resolve) => {
    if (video.readyState >= 2) {
      resolve()
      return
    }
    const onLoaded = () => {
      video.removeEventListener('loadeddata', onLoaded)
      resolve()
    }
    video.addEventListener('loadeddata', onLoaded)
  })

  return video
}
