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
       this.viewer.setData(this.pdfSrc, {"1":{"1599553630906":{"extras":{"recipient":{"val":"Patients","extra":["Patients"]}},"style":{"fontFamily":"Arial","fontSize":12,"fontStyle":"normal","fontWeight":"normal","width":100,"left":241,"top":214},"dataset":{"name":"1599553630906","type":"text","page":1,"fieldtype":"none","maxlength":1000,"require":true},"type":"text","id":"1599553630906","text":"TextBox","val":"Value"},"1599553632941":{"extras":{"ddlprop":{"val":"asdlksja;sdklsja;sds","extra":["asdlksja","sdklsja","sds"],"defval":"sdklsja"},"recipient":{"val":"Patients","extra":["Patients"]}},"style":{"left":624,"top":228,"fontFamily":"Arial","fontSize":12,"fontStyle":"normal","fontWeight":"normal","width":100},"dataset":{"name":"1599553632941","type":"ddl","page":1,"require":true},"type":"ddl","id":"1599553632941","text":"Dropdown","val":"sdklsja"},"1599553654021":{"extras":{"recipient":{"val":"Doctor","extra":["Doctor"]}},"style":{"left":377,"top":326,"width":50,"height":50},"dataset":{"name":"1599553654021","type":"sign","page":1,"require":true},"type":"sign","id":"1599553654021"}}})
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
