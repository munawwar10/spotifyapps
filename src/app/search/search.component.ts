import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SpotifyService } from "../spotify.service";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchKeyupStream$ = new Subject();
  @Output() emitSearchKey = new EventEmitter();
  constructor() {}
  ngOnInit() {
    this.listenForKeyupStream();
  }

  searchMusic() {
    this.emitSearchKey.emit(this.searchStr);
  }

  listenForKeyupStream() {
    this.searchKeyupStream$.pipe(debounceTime(1000)).subscribe(() => {
      this.emitSearchKey.emit(this.searchStr);
    });
  }
}
