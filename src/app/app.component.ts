import { Component } from "@angular/core";
import { SpotifyService } from "./spotify.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "spotify";
  listOfArtist = null;
  artistDetails = null;
  constructor(private spotifyService: SpotifyService) {}

  searchMusic(term: string) {
    this.spotifyService.searchMusic(term).subscribe(
      (res: any) => {
        this.listOfArtist = res.artists.items;
        console.log(this.listOfArtist, "Result of search");
      },
      err => {
        console.log(err);
      }
    );
  }

  getArtistDetails(id: string) {
    console.log("Result of profile:", id);

    this.spotifyService.searchArtist(id).subscribe(res => {
      console.log(res);
      this.artistDetails = res;
    });
  }
}
