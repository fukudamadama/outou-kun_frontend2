'use client';
// デプロイ用に追加
export const dynamic = 'force-dynamic' 
import { useState } from 'react';
import useSound from 'use-sound';

export default function Home() {

  //動いた〜〜〜！！のコード（保存版） デプロイ用
  const [playThanks] = useSound('https://tech0-gen-9-step3-1-py-10.azurewebsites.net/thanks', { format: ['m4a'] });
  const [playHi] = useSound('https://tech0-gen-9-step3-1-py-10.azurewebsites.net/hi', { format: ['m4a'] });
  const [playdoorDelivery] = useSound('https://tech0-gen-9-step3-1-py-10.azurewebsites.net/doorDelivery', { format: ['m4a'] });
  const [playpolice] = useSound('https://tech0-gen-9-step3-1-py-10.azurewebsites.net/police', { format: ['m4a'] });
  const [playnuisance] = useSound('https://tech0-gen-9-step3-1-py-10.azurewebsites.net/nuisance', { format: ['m4a'] });
  const [playnoThanks] = useSound('https://tech0-gen-9-step3-1-py-10.azurewebsites.net/noThanks', { format: ['m4a'] });


  
  // //動いた〜〜〜！！のコード（保存版） ローカル用
  // const [playThanks] = useSound('http://localhost:8000/thanks', { format: ['m4a'] });
  // const [playHi] = useSound('http://localhost:8000/hi', { format: ['m4a'] });
  // const [playdoorDelivery] = useSound('http://localhost:8000/doorDelivery', { format: ['m4a'] });
  // const [playpolice] = useSound('http://localhost:8000/police', { format: ['m4a'] });
  // const [playnuisance] = useSound('http://localhost:8000/nuisance', { format: ['m4a'] });
  // const [playnoThanks] = useSound('http://localhost:8000/noThanks', { format: ['m4a'] });

  return (
  <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">応答くん＠うぇぶ</h1>
      <div className="space-y-8">
        <section>
          <button 
          onClick={playThanks}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            ありがとうございます
          </button>
        </section>

        <section>
          <button
          onClick={playHi}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            はーい
          </button>
        </section>

        <section>
          <button
          onClick={playdoorDelivery}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            置き配でお願いします
          </button>
        </section>      

        <section>
          <button
          onClick={playpolice}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            警察呼びますよ
          </button>
        </section>     

        <section>
          <button
          onClick={playnuisance}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            迷惑なんで
          </button>
        </section>   

        <section>
          <button onClick={playnoThanks}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            結構です
          </button>
        </section>    

      </div>

      
    </div>
  );
}






// 死んだコード達

// 'use client';
// import { useState } from 'react';
// import useSound from 'use-sound';

// export default function Home() {
//   // useStateを使った値（状態）管理
//   const [getMessage, setGetMessage] = useState('');
//   const [multiplyNumber, setMultiplyNumber] = useState('');
//   const [multiplyResult, setMultiplyResult] = useState('');
//   const [postMessage, setPostMessage] = useState('');
//   const [postResult, setPostResult] = useState('');

//   const [play] = useSound('http://localhost:8000/thanks');

//   return (
//     <div>
//       <h1>ホームページ</h1>
//       <button onMouseEnter={play}>ありがとうございます</button>
//     </div>
//   );
// }


//   // FastAPIのエンドポイント設定
//   const handleGetRequest = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/hello');
//       const data = await response.json();
//       setGetMessage(data.message);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleMultiplyRequest = async () => {
//     try {
//       const response = await fetch(`http://localhost:8000/api/multiply/${multiplyNumber}`);
//       const data = await response.json();
//       setMultiplyResult(data.doubled_value.toString());
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handlePostRequest = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/echo', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: postMessage }),
//       });
//       const data = await response.json();
//       setPostResult(data.message);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // ユーザーインターフェースの構築
//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-6">Next.jsとFastAPIの連携アプリ</h1>
//       <div className="space-y-8">
//         {/* GETリクエスト */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">ありがとうございます</h2>
//           <button
//             onMouseEnter={() => play(thanksVoice)}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             ありがとうございます
//           </button>
//         </section>



//         {/* ID指定のGET */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">IDを指定してGETリクエストを送信</h2>
//           <div className="flex gap-2">
//             <input
//               type="number"
//               value={multiplyNumber}
//               onChange={(e) => setMultiplyNumber(e.target.value)}
//               className="border rounded px-2 py-1"
//             />
//             <button
//               onClick={handleMultiplyRequest}
//               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               送信
//             </button>
//           </div>
//           {multiplyResult && (
//             <p className="mt-2">FastAPIからの応答: {multiplyResult}</p>
//           )}
//         </section>

//         {/* POSTリクエスト */}
//         <section>
//           <h2 className="text-xl font-bold mb-4">POSTリクエストを送信</h2>
//           <div className="flex gap-2">
//             <input
//               type="text"
//               value={postMessage}
//               onChange={(e) => setPostMessage(e.target.value)}
//               className="border rounded px-2 py-1"
//             />
//             <button
//               onClick={handlePostRequest}
//               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               送信
//             </button>
//           </div>
//           {postResult && (
//             <p className="mt-2">FastAPIからのPOST応答: {postResult}</p>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// }