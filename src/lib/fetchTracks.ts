import { SavedTrack } from "spotify-types";

const apiToken: string = 'BQD9WnwppcEPml9DgmRNWnHoD-sLIie1o6q9md1mApYqFl682D0t8vwoQkTg_P_beYV86ZDHpvafjb314zOQClR9NpXuM7vxMzVyunIZPaTidt4ZcMfdoF8SVJIPmskmXQ6iFxq4vhVkC40oAmRui38Vt-hE2nzpzK2UY-nH7VSXE-7jcS3UzaamnA-KTcUsRUBW3HPudgj1tPNQoGZHWu8';

export const fetchTracks = async () => {
    const response = await fetch('https://api.spotify.com/v1/me/tracks', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    });
    if (!response.ok) {
       throw new Error(`Fetching tracks failed with status ${response.status}`)
     }
    const data = await response.json() as { items:SavedTrack[] };
  
    return data.items;
  }; 

