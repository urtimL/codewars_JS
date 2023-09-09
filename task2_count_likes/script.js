function likes(names) {
    const length = names.length;
    const str = 'likes this', str1 = 'like this';
    let res = '';

    if (length == 0) {
        res = `no one ${str}`;
    } else if (length == 1) {
        res = `${names[0]} ${str}`;
    } else if (length == 2) {
        res = `${names[0]} and ${names[1]} ${str1}`;
    } else if (length == 3) {
        res = `${names[0]}, ${names[1]} and ${names[2]} ${str1}`;
    } else {
        res = `${names[0]}, ${names[1]} and ${length - 2} others ${str1}`;
    }

    return res;
  }

  console.log(likes([]));
  console.log(likes(['Peter']));
  console.log(likes(['Jacob', 'Alex']));
  console.log(likes(['Max', 'John', 'Mark']));
  console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));