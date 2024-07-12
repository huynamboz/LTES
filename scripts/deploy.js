import ghpages from 'gh-pages'

ghpages.publish('.output', {
  branch: 'build-server',
}, (err) => {
  if (err) {
    console.error(err)
  }
  else {
    console.log('Deployed')
  }
})
