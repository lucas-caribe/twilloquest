function scan(strings) {
  let contrabands = 0;
  
  strings.map(s => { if(s === 'contraband') contrabands++ });

  return contrabands;
}