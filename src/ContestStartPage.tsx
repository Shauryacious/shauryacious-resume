import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

type TestCase = {
  input: any[];
  output: any[];
};

const ContestStartPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(3600); // 60 minutes in seconds
  const [opponentStatus, setOpponentStatus] = useState<string>("❌ Not Solved");
  const [userCode, setUserCode] =
    useState<string>(`function solveProblem(input) {
  // Your code here
}`);
  const [problemDetails] = useState({
    title: "TCP Open Contest 1 - Problem 1",
    description: `Given an array of integers, return indices of the two numbers such that they add up to a specific target.\n\nExample:\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]`,
    testCases: [
      { input: [[2, 7, 11, 15], 9], output: [0, 1] },
      { input: [[3, 2, 4], 6], output: [1, 2] },
    ] as TestCase[],
  });

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // WebSocket simulation for opponent status
  useEffect(() => {
    const ws = new WebSocket("wss://your-websocket-server");
    ws.onmessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data.toString());
        if (data.type === "opponentAC") {
          setOpponentStatus("✅ Problem Solved");
        }
      } catch (error) {
        console.error("WebSocket message error:", error);
      }
    };
    return () => ws.close();
  }, []);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = (): void => {
    console.log("Submitting code:", userCode);
    // Add actual submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Contest Header */}
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-amber-400 font-bold text-xl">
            TCP Open Contest
          </span>
          <div className="bg-gray-700 px-3 py-1 rounded-full">
            ⏳ {formatTime(timeLeft)}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-green-400">You: 0</span>
            <span className="text-red-400">Opponent: {opponentStatus}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Problem Description */}
        <div className="w-1/2 p-6 overflow-y-auto border-r border-gray-700">
          <h1 className="text-2xl font-bold mb-4 text-amber-400">
            {problemDetails.title}
          </h1>
          <pre className="whitespace-pre-wrap font-mono text-sm">
            {problemDetails.description}
          </pre>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Test Cases</h2>
            {problemDetails.testCases.map((tc, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg mb-3">
                <div className="text-sm text-gray-400">
                  Input: {JSON.stringify(tc.input)}
                </div>
                <div className="text-sm text-green-400">
                  Output: {JSON.stringify(tc.output)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Editor */}
        <div className="w-1/2 flex flex-col">
          <div className="flex-1">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              value={userCode}
              onChange={(value) => setUserCode(value || "")}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                roundedSelection: false,
                scrollBeyondLastLine: false,
              }}
            />
          </div>

          {/* Control Bar */}
          <div className="bg-gray-800 p-4 flex justify-between items-center">
            <button
              className="bg-amber-400 text-gray-900 px-6 py-2 rounded hover:bg-amber-300 transition-colors duration-200"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button className="bg-gray-700 px-6 py-2 rounded hover:bg-gray-600 transition-colors duration-200">
              Give Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestStartPage;
