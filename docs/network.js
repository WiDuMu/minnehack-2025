// const urlDefault = `http://localhost:8080`;

export async function getLocations(url) {
   // url = (url) ? url : urlDefault;
   const request = fetch(`./database.json`);
   const reponse = await request;
   const json = await reponse.json();
   return json;
}
