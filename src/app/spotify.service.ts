import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQCtV7LZgwIp_9WxqLpUiFT28nPy5vQMzEg-pv7uUzN0FWXz6zhN7wtDEdpcNSaAQJM2Kj2Tao8ONhPI_J9biLGm-h9EbCSXLNoWZ_DhyqV2QbdCCDahpOOSetaDCgXUc5HRYtsC-nHz5k4JQBf7qIlXwa4jmDDP2ICrX0JR5zH1wNIG0KnPahdzl1uOcP0JEyr7hnCgc9NnpD_GYDoQqunoKISgV1CHvsDAbLrDKUb384XcIU9z7gaX3psniBJI5JJHOsf6L6fpCEcf7cjwcp8703HU1pwdrMg"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  searchArtist(id: string) {
    const query = `artists/${id}`;
    return this.getHeader(query);
  }
}
