import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // event
@Output() toggle= new EventEmitter()

// menuIconClicked
MenuIconClicked(){
  this.toggle.emit()
  // when dispatchment is occur resize screen
setTimeout(() => {
  window.dispatchEvent(
    new Event('resize')
  )
}, 100);

}
}
