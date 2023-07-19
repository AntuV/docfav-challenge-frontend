import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show toast', () => {
    service.show('test');
    expect(service.toasts.length).toBe(1);
    expect(service.toasts[0].text).toBe('test');
  });

  it('should show success toast', () => {
    service.showSuccess('test');
    expect(service.toasts.length).toBe(1);
    expect(service.toasts[0].text).toBe('test');
    expect(service.toasts[0].classname).toBe('bg-success text-light');
  });

  it('should show danger toast', () => {
    service.showDanger('test');
    expect(service.toasts.length).toBe(1);
    expect(service.toasts[0].text).toBe('test');
    expect(service.toasts[0].classname).toBe('bg-danger text-light');
  });

  it('should remove toast', () => {
    service.show('test');
    service.remove(service.toasts[0]);
    expect(service.toasts.length).toBe(0);
  });
});
