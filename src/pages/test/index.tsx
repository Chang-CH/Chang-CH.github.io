const Test = () => {
  console.log(import.meta.env);

  return (
    <div>
      <h1>Development playground</h1>
      <p>{import.meta.env.MODE}</p>
    </div>
  );
};

export default Test;
