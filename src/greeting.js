const handleGreeting = ({params}, res) => {
  if (!params.user)
  {
    res.send("Hello World!");
  }
  else
  {
    res.send(`Hello ${params.user}!`);
  }
}

export default handleGreeting;