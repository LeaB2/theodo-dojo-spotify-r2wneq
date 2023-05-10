const apiToken: string = 'BQBbfqtpA-nONX_CR_GgzjdDkrXO6hLXXBzTK_EVyBZN8TuXgPYaXHXv32_eNKDMursODcgZ6895W1gPXYO3r5BGoRQIRdTi8IS8bh5gJ7Xnc_bRE0x2CpR4vGmdgrdkbyXRIBHi0ChvYWGGgtLMXgCtdqYbiwR6CuJAGytqqiyL94d8SLnSejI7PmGBBAK__RNclBdR-Na-JUJQk8SaG5I';

export const fetchTracks = async () => {
    const response = await fetch('https://api.spotify.com/v1/me/tracks', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer' + apiToken,
      },
    });
    if (!response.ok) {
       throw new Error(`Fetching tracks failed with status ${response.status}`)
     }
    const data = await response.json() as { items: unknown[] };
  
    return data.items;
  }; 

