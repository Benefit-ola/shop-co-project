const Background = ({ text }) => {
  return (
    <div className="bg-black  min-h-[10vh] ">
      <h1 className="text-white text-3xl font-bold font-lato text-center w-[18rem]  ">
        {text}
      </h1>
      <div></div>
    </div>
  );
};

export default Background;