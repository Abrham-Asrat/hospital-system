import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './log-in.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule], // Import ReactiveFormsModule for form testing
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login form with email and password fields', () => {
    expect(component.loginForm.contains('email')).toBeTrue();
    expect(component.loginForm.contains('password')).toBeTrue();
  });

  it('should make the email field required', () => {
    let emailControl = component.loginForm.controls['email'];
    emailControl.setValue('');
    expect(emailControl.valid).toBeFalse();
    expect(emailControl.errors?.['required']).toBeTrue();
  });

  it('should make the password field required and at least 6 characters', () => {
    let passwordControl = component.loginForm.controls['password'];

    passwordControl.setValue('');
    expect(passwordControl.valid).toBeFalse();
    expect(passwordControl.errors?.['required']).toBeTrue();

    passwordControl.setValue('123');
    expect(passwordControl.valid).toBeFalse();
    expect(passwordControl.errors?.['minlength']).toBeTruthy();
  });

  it('should mark form as valid when valid email and password are provided', () => {
    component.loginForm.setValue({
      email: 'test@example.com',
      password: '123456',
    });
    expect(component.loginForm.valid).toBeTrue();
  });

  it('should call onLogin() method when form is submitted', () => {
    spyOn(component, 'onLogin');
    let button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.onLogin).toHaveBeenCalled();
  });
});
