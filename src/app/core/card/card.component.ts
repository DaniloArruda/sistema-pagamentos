import { Component, Input } from "@angular/core";
import { DropdownMenuItem } from "../dropdown-menu.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  @Input() descricao: string;
  @Input() numero: string;

  actions: DropdownMenuItem[] = [
    new DropdownMenuItem("Pagar", "account_balance_wallet", () =>
      console.log("pagou")
    ),
    new DropdownMenuItem("Salvar", "save", () => console.log("salvou")),
    new DropdownMenuItem("Deletar", "delete", () => console.log("deletou"))
  ];

  save() {}

  delete() {}

  pay() {}

  constructor() {}
}
