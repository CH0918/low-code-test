function App() {
  return (
    <>
      <div className='w-100vw h-100vh flex flex-col'>
        <div className='h-50px w-full leading-50px border-b-gray-2 border-b-1px'>
          header
        </div>
        <div className='flex flex-1'>
          <div className='w-200px border-r-gray-2 border-r-1px'>left</div>
          <div className='flex-1'>content</div>
          <div className='w-300px border-l-1px border-l-gray-2'>right</div>
        </div>
      </div>
    </>
  );
}

export default App;
