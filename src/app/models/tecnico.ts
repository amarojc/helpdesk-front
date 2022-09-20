export interface Tecnico{
    //any -> pode ser de qualquer tipo, devido trabalhar com interger e string.
    //? -> Nem sempre terá o id do tecnico, para isso utiliza-se a interrogação. Exemplo: quando criar
    //um novo Tecnico
    id?:         any;
    nome:     string;
    cpf:      string;
    email:    string;
    senha:    string;
    perfis: string[];
    dataCriacao: any;
}