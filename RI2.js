function TelefoneCelular(ddd, numero) {
    this._ddd = ddd;
    this._numero = numero;

    Object.defineProperty(this, 'ddd', {
        get: function () {
            return this._ddd;
        },
        set: function (novoDdd) {
            this._ddd = novoDdd;
        }
    });

    Object.defineProperty(this, 'numero', {
        get: function () {
            return this._numero;
        },
        set: function (novoNumero) {
            this._numero = novoNumero;
        }
    });

    Object.defineProperty(this, 'info', {
        get: function () {
            return `Telefone:\nDDD: (${this._ddd})\nNúmero: ${this._numero}`;
        }
    });
}

function Endereco(estado, cidade, rua, numero) {
    this._estado = estado;
    this._cidade = cidade;
    this._rua = rua;
    this._numero = numero;

    this.upperCaseEstado = function () {
        return this._estado.toUpperCase();
    }
    this.lowerCaseEstado = function () {
        return this._estado.toLowerCase();
    }
    this.upperCaseCidade = function () {
        return this._cidade.toUpperCase();
    }
    this.lowerCaseCidade = function () {
        return this._cidade.toLowerCase();
    }
    this.upperCaseRua = function () {
        return this._rua.toUpperCase();
    }
    this.lowerCaseRua = function () {
        return this._rua.toLowerCase();
    }
    Object.defineProperty(this, 'estado', {
        get: function () {
            return this._estado;
        },
        set: function (novoEstado) {
            this._estado = novoEstado;
        }
    });
    Object.defineProperty(this, 'cidade', {
        get: function () {
            return this._cidade;
        },
        set: function (novaCidade) {
            this._cidade = novaCidade;
        }
    });
    Object.defineProperty(this, 'rua', {
        get: function () {
            return this._rua;
        },
        set: function (novaRua) {
            this._rua = novaRua;
        }
    });
    Object.defineProperty(this, 'numero', {
        get: function () {
            return this._numero;
        },
        set: function (novoNumero) {
            this._numero = novoNumero;
        }
    });
    Object.defineProperty(this, 'info', {
        get: function () {
            return `Endereço:\nRua: ${this._rua}\nNúmero: ${this._numero}\nCidade: ${this._cidade}\nEstado: ${this._estado}`;
        }
    });
}

function Cliente(nome, telefone, email, endereco) {
    this._nome = nome;
    this._telefone = telefone;
    this._email = email;
    this._endereco = endereco;
    this.uppercaseNome = function () {
        return this._nome.toUpperCase();
    }
    Object.defineProperty(this, 'nome', {
        get: function () {
            return 'DDD: ' + this._nome;
        },
        set: function (novoNome) {
            this._nome = novoNome;
        }
    });
    Object.defineProperty(this, 'telefone', {
        get: function () {
            return this._telefone;
        },
        set: function (novoTelefone) {
            this._telefone = novoTelefone;
        }
    });
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email;
        },
        set: function (novoEmail) {
            this._email = novoEmail;
        }
    });
    Object.defineProperty(this, 'endereco', {
        get: function () {
            return this._endereco;
        },
        set: function (novoEndereco) {
            this._endereco = novoEndereco;
        }
    });
    Object.defineProperty(this, 'info', {
        get: function () {
            return `---------------\n` +
                `Informações do Cliente:\n${this._nome}\nEmail: ${this._email}\n` +
                `---------------\n` +
                `---------------`;
        }
    });
    Object.defineProperty(this, 'descricao', {
        get: function () {
            return `---------------\n` +
                `Informações do Cliente:\n${this._nome}\nEmail: ${this._email}\n` +
                `---------------\n` +
                `${this._telefone.info}\n` +
                `---------------\n` +
                `${this._endereco.info}\n` +
                `---------------`;
        }
    });
}

let telefone = new TelefoneCelular('11', '99999-9999');
let endereco = new Endereco('SP', 'São Paulo', 'Rua A', 123);
let cliente = new Cliente('João', telefone, 'teste@teste.com', endereco);
// console.log(cliente.info);
// console.log(telefone.info);
// console.log(endereco.info);
console.log(cliente.descricao);

function ordenaClientes(ArrayClientes) {
    return ArrayClientes.sort((a, b) => {
        if (a.nome < b.nome) {
            return -1;
        }
        if (a.nome > b.nome) {
            return 1;
        }
        return 0;
    });
}

let cliente2 = new Cliente('Ximbinha', telefone, 'teste@teste', endereco);
let cliente3 = new Cliente('Carlos', telefone, 'teste@teste', endereco);
let clientes = [cliente, cliente2, cliente3];
for (let c of ordenaClientes(clientes)) {
    console.log(c.descricao);
}