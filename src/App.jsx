function App() {
  const boxes = [
    { id: 1, title: "One" },
    { id: 2, title: "Two" },
    { id: 3, title: "Three" },
    { id: 4, title: "Four" },
    { id: 5, title: "Five" },
    { id: 6, title: "Six" },
    { id: 7, title: "Seven" },
    { id: 8, title: "Eight" },
    { id: 9, title: "Nine" },
  ];
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 w-full gap-4 mx-4 sm:mx-10 my-4  ">
        {boxes.map((data, idx) => (
          <div
            key={idx}
            className="w-full h-24 bg-blue-500 rounded-lg shadow-md p-4"
          >
            {data?.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
