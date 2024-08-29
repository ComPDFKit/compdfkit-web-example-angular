import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @ts-ignore
import WebViewer from '@compdfkit_pdf_sdk/webviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  @ViewChild('viewer') viewer!: ElementRef;

  ngAfterViewInit(): void {
    let docViewer: any;
    WebViewer.init({
      path: '/',
      pdfUrl: '/webviewer/example/developer_guide_web.pdf',
      license: '<Input your license here>'
    }, this.viewer.nativeElement).then((instance: any) => {
      docViewer = instance.docViewer;

      docViewer.addEvent('documentloaded', async () => {
        console.log('document loaded');
      })
    })
  }
}
