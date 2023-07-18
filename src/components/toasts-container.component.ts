import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { NgbToastModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastService } from "src/services/toast.service";

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [NgbToastModule, NgFor],
  template: `
		<ngb-toast
			*ngFor="let toast of service.toasts"
			[class]="toast.classname"
			[autohide]="true"
			[delay]="toast.delay || 5000"
			(hidden)="service.remove(toast)"
		>
			{{ toast.text }}
		</ngb-toast>
	`,
  host: { class: 'toast-container position-fixed bottom-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToastsContainer {
  constructor(
    public service: ToastService
  ) { }
}