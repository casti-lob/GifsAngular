import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private bsService: GifsService) { }

  ngOnInit(): void {
  }

  get history(): string[]{
    return this.bsService.history;
  }
}
