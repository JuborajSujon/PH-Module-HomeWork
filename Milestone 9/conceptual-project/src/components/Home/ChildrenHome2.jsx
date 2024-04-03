const ChildrenHome2 = () => {
  const randomValue = Math.floor(Math.random() * 10) + 1;
  console.log("random value", randomValue);
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">
        ChildrenHome2 - random number generator
      </h2>
      <h3 className="font-semibold">Random Number is : {randomValue}</h3>
    </div>
  );
};

export default ChildrenHome2;
