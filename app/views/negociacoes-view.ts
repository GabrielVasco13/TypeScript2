import { Negociacao } from "../dist/js/models/negociacao.js";
import { Negociacoes } from "../dist/js/models/negociacoes.js";

export class NegociacoesView {


    private elemento: HTMLElement;
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }
    template(model: Negociacoes): string {
        return`
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(Negociacao => {
                    return `
                        <tr>
                            <td>?</td>
                            <td>${Negociacao.quantidade}</td>
                            <td>${Negociacao.valor}</td>
                        </tr>
                    `;
                
                }).join('')}
            </tbody>
        </table>
    `;
    }

    update(model: Negociacoes): void{
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}