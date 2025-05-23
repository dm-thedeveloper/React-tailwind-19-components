import { useState, useEffect } from "react";

export default function EventKeyCodes() {
  const [keyInfo, setKeyInfo] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeyInfo({
        key: event.key === " " ? "Space" : event.key,
        keyCode: event.keyCode,
        code: event.code,
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 overflow-hidden">
      <div id="insert" className="text-center">
        {!keyInfo ? (
          <div className="bg-white shadow-md p-6 rounded-xl text-lg font-bold text-gray-700">
            Press any key to get the keyCode
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-gray-100 shadow-md p-6 rounded-xl min-w-[150px] flex flex-col items-center relative">
              <span className="text-2xl font-bold">{keyInfo.key}</span>
              <small className="absolute -top-5 text-sm text-gray-600 w-full text-center">
                event.key
              </small>
            </div>
            <div className="bg-gray-100 shadow-md p-6 rounded-xl min-w-[150px] flex flex-col items-center relative text-red-500">
              <span className="text-2xl font-bold"> {keyInfo.keyCode}</span>
              <small className="absolute -top-5 text-sm text-gray-600 w-full text-center">
                event.keyCode (old)
              </small>
            </div>
            <div className="bg-gray-100 shadow-md p-6 rounded-xl min-w-[150px] flex flex-col items-center relative text-green-600">
              <span className="text-2xl font-bold">{keyInfo.code}</span>
              <small className="absolute -top-5 text-sm text-gray-600 w-full text-center">
                event.code (new)
              </small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
