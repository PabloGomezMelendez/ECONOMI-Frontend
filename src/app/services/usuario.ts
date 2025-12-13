import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interface/usuario';

const URL_API = "https://api-economi-cyfrc7bmgkegh3gf.canadacentral-01.azurewebsites.net/api/usuario/";

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  constructor(private HttpClient: HttpClient) { }

  getUsuarioAll() {
    return this.HttpClient.get(`${URL_API}`);
  }

  getUsuarioById(id: number) {
    return this.HttpClient.get(`${URL_API}${id}`);
  }

  createUsuario(usuario: Usuario) {
    return this.HttpClient.post(`${URL_API}`, usuario);
  }
}
