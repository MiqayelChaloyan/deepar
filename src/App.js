import './App.css'

export default function App() {
  return (
    <iframe
      src="https://wearifyai.github.io/ARTryOn/?effect=bows"
      title="DeepAR Try On"
      allow="camera *; microphone *"
      className='ar-screen'
      frameborder="0" 
      scrolling="no"
    ></iframe>
  );
}
