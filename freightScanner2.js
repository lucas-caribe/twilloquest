function scan(strings) {
  let output = [] 
  
  strings.map((s, index) => {
    if(s === 'contraband')
      output.push(index);
  })

  return output;
}