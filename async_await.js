async function loadFile() {
  let fileLoaded = false;
  if (fileLoaded) {
    return 'file loaded';
  } else {
    throw 'error loading file!';
  }
}


async function processfile() {
  try {
    const result = await loadFile();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

processfile();