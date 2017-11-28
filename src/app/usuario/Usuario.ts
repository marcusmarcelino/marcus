export class Usuario {
    public id: number;
    public login: string;
    public senha: string;
	public nome: string;
	public sobrenome: string;
	public contato: string;
	
    constructor(id: number,nome:string,sobrenome:string,contato:string, login: string, senha: string) {
        this.id = id;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.contato = contato;
		this.login = login;
		this.senha = senha;
    }
}