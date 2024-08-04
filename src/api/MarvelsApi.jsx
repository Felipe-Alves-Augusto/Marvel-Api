import axios from "axios";
import md5 from "md5";


const publicKey = '271d658195bd9869ad0c23f0f38a1066';
const privateKey = '4cf5a6a575528a271078da1d908c9b74c8238818';
const baseUrl = 'https://gateway.marvel.com/v1/public';

const timestamp = new Date().getTime();
const hash = md5(`${timestamp}${privateKey}${publicKey}`);

const getCharacters = async () => {

  const response = await axios.get(`${baseUrl}/characters`, {
    params: {
      orderBy: name,
      ts: timestamp,
      apikey: publicKey,
      hash: hash,

    },
  });
  return response.data.data.results;
};

const getOneCharacter = async (idCharacter) => {

  const cachedCharacter = localStorage.getItem(`character_${idCharacter}`);
  
  if (cachedCharacter) {
    return JSON.parse(cachedCharacter);
  }

  const response = await axios.get(`${baseUrl}/characters/${idCharacter}`, {
    params: {
      ts: timestamp,
      apikey: publicKey,
      hash: hash,

    },
    timeout: 10000
  });

  const characterData = response.data.data.results;

  localStorage.setItem(`character_${idCharacter}`, JSON.stringify(characterData));

  return characterData;

}

const getComicsCharacter = async (idCharacter) => {

  const response = await axios.get(`${baseUrl}/characters/${idCharacter}/comics`, {
    params: {
      ts: timestamp,
      apikey: publicKey,
      hash: hash,
      orderBy: '-onsaleDate',
      limit: 10, 

    },
  })

  return response.data.data.results;

}

export { getCharacters, getOneCharacter, getComicsCharacter };
