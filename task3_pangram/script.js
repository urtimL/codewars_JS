function isPangram(string){
    const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const stringLC = string.toLowerCase();
    let res = true;

    characters.forEach(e => {       
        if (stringLC.indexOf(e) == -1){         
            res = false;
        }
    });

    return res;
  }

  console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
  console.log(isPangram('This is not a pangram.'));