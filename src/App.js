import React, { useEffect, useRef, useState } from 'react';
import * as deepar from 'deepar';
import './App.css';

// const DEEP_AR_API_KEY = '5a86ec98a5e159a81ae629abf5fb9450bb07b2f2d3eca83ca332834a564eed0ff21f5fcb59e5050e';
// const effectUrl = 'https://wearifyai.github.io/ARTryOn/?effect=bows'; // Example effect URL

// const App = () => {
//   const [initialized, setInitialized] = useState(false);

//   useEffect(() => {
//     async function initializeDeepAR() {
//       // try {
//         await deepar.initialize({
//           licenseKey: DEEP_AR_API_KEY,
//           previewElement: document.querySelector('#deepar-div'),
//           // effect: 'bows'
//           effect: 'https://cdn.jsdelivr.net/npm/deepar/effects/aviators'

//         });
//         setInitialized(true);
//       // } catch (error) {
//       //   console.error('DeepAR initialization error:', error);
//       // }
//     }

//     if (!initialized) {
//       initializeDeepAR();
//     }
//   }, [initialized]);

//   return (
//     <div>
//       <div className='ar-screen' id='deepar-div'></div>
//     </div>
//   );
// };

// export default App;

export default function App() {
  return (
    <iframe
      src="https://wearifyai.github.io/ARTryOn/?effect=bows"
      title="DeepAR Try On"
      allow="camera *; microphone *"
      className='ar-screen'
    ></iframe>
  );
}
