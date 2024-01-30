//登录
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  export interface ResLogin {
    access_token: string;
  }
}

//菜单
export namespace Menu {
  export interface MenuOptions {
    path: string;
    title: string;
    icon?: string;
    children?: MenuOptions[];
    isLink?: string;
    close?: boolean;
  }
}
