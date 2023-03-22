
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        ReactiveFormsModule],
    declarations: [LoginPageComponent]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // Prueba, debe asegurar que el formulario sea invalido cuando ingrese datos erroneos.

  it('Debería de retornar inválido', () => {
    const mockCredentials = {
      email: '0x0x0x0',
      password: '111111111111111111111111'
    }

    const emailForm:any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    expect(component.formLogin.invalid).toEqual(true);
  });

  it('Debería de retornar válido', () => {
    const mockCredentials = {
      email: 'juanfe@test.com',
      password: '12345678'
    }

    const emailForm:any = component.formLogin.get('email');
    const passwordForm: any = component.formLogin.get('password');

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    expect(component.formLogin.invalid).toEqual(false);
  });

  it('👍 El botón debería tener la palabra iniciar sesión', () => {
    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión')
  })
});
