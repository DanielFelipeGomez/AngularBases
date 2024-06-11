import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent {

  @ViewChild('name', { static: true })
  nameInput!: ElementRef<HTMLInputElement>;

  public users = [
    { name: 'John Doe', email: 'jogn@gmail.com' }
  ];

  public addUser(event: Event) {
    event.preventDefault(); // Detener el comportamiento predeterminado del formulario
    console.log(this.nameInput.nativeElement.value);
    this.users.push({ name: this.nameInput.nativeElement.value, email: `${this.nameInput.nativeElement.value}@gmail.com`});
    // Limpiar el campo de entrada después de agregar un usuario
    this.nameInput.nativeElement.value = '';
  }


}
