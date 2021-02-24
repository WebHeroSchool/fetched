let url = window.location.href;

let generator = (url) => {
  let divider = url.split('=');
  let name = divider[1];
  if (name == undefined) {
      name = 'Nadir-bnm';
  }
  return name;
}

fetch(`https://api.github.com/users/${generator(url)}`)
.then(res => res.json())
.then(json => {
  let caller = document.createElement('h1');
  if (json.name != null) {
    caller.innerHTML = json.name;
  } else {
    caller.innerHTML = 'Данные отсутствуют';
  }
  document.body.append(caller);
  
  let callerLink = document.createElement('p');
  if (json.html_url != null) {
    callerLink.innerHTML = json.html_url;
  } else {
    callerLink.innerHTML = 'Данные отсутствуют';
  }
  document.body.append(callerLink);

  let callerBio = document.createElement('p');
  if (json.bio != null) {
    callerBio.innerHTML = json.bio;
  } else {
    callerBio.innerHTML = 'Данные отсутствуют';
  }
  document.body.append(callerBio);

  let avatar = new Image();
  avatar.src = json.avatar_url;
  document.body.append(avatar);
  })
  
  .catch(err => console.log(err));