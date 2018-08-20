import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers} from "@angular/http";

@Injectable()
export class ConfigService {
  public ip = "http://hopenotout.pk/burger/index.php";
  public port = '';
  public api = '';
  public apiAccount = '';
  public apiAdmin = '';
  public apiE2E = '';
  public masterApi = '';
  public dateFormat;
  public token='BuRgRcARt-client-Ang';
  public token2='ItIsfoRSaFEtY;!@)(@';
  constructor(private _http:Http) { }

  headerCTJsontoken(token,token2) {
    let header = new Headers({ 'content-type': 'application/json' });
    header.append('Access-Control-Allow-Origin', '*')
    header.append("Client_Service", token);
    header.append("Auth_Key", token2);
    return header;
  }

  getAllProducts() {
    let httpOption = this.headerCTJsontoken(this.token,this.token2);
    const option = new RequestOptions({headers: httpOption});
    // var action = "getAllStudentMarks?classId=" + classId;
    let url = 'http://hopenotout.pk/burger/index.php/Book/getProducts'

    // console.log(url);
    return this._http.get(url, option).map(
        response => response.json()
    );

  }

  // public ip = 'https://www.cricdreamteam.com';//'http://api.coraborate.com:82'
  // public port = '';
  // public api = 'api/CoraborateWebAPI';
  // public apiAccount = 'api/AccountAPI';
  // public apiAdmin = 'api/AdminAPI';
  // public apiE2E = 'api/E2EAPI';
  // public masterApi = 'api/MasterAPI'
  // public dateFormat;

}
