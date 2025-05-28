import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../download.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private downloads: DownloadService) { }

  ngOnInit(): void {
  }
  download(): void {
    this.downloads
      .download('../../assets/JayantBhardwaj.docx')
      .subscribe(blob => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = 'jayantbhardwaj.docx';
        a.click();
        URL.revokeObjectURL(objectUrl);
      })
  }
}
