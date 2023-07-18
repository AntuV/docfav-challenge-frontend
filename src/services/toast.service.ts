import { Injectable } from '@angular/core';
import { Toast } from 'src/types/toast.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: Toast[] = [];

  show(text: string, options: Partial<Toast> = {}) {
    this.toasts.push({ text, ...options });
  }

  showSuccess(text: string, options: Partial<Toast> = {}) {
    this.show(text, { classname: 'bg-success text-light', ...options });
  }

  showDanger(text: string, options: Partial<Toast> = {}) {
    this.show(text, { classname: 'bg-danger text-light', ...options });
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
