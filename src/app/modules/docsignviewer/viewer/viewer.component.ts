import { Component, OnInit ,ViewChild} from '@angular/core';
import { iDocsigneditorComponent } from 'esigndoccontrol';
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  @ViewChild('viewer', { static: false }) viewer: any
  options = {
      fonts: []
  }

  activedoc = '1';
  doclist = [{
      name: 'Document Subject D Subject Herer ajjl',
      id:1,
      status_icon:'fa-warning',
      status_color: 'rgb(224, 120, 0)',
      extra : {}
  },{
      name: 'DCS Subject D Subject Herer ajjl',
      status_icon:'fa-check',
      status_color: 'rgb(0, 184, 92)',
      id:2,
      extra : {}
  }]

  pdfSrc = "assets/sdlc.pdf";
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
   setTimeout(() => {
       this.viewer.setData(this.pdfSrc, {})
   }, 100);
}
onFinished(e) {
   console.log(e)
}

onCancel(e) {

}
onDocListSelect(item){
    debugger
    this.activedoc = item.id;
}

}
