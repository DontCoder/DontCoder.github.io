function copyds()
{
    navigator.clipboard.writeText('Rocket Legend#1337')
  .then(() => {
    alert("Copied to clipboard!")
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
}
