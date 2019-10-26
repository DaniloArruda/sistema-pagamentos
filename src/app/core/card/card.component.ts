import { Component, OnInit, Input } from "@angular/core";
import { DropdownMenuService } from "src/app/core/dropdown-menu.service";
import { DropdownMenuItem } from "../dropdown-menu/dropdown-menu.component";

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

  constructor() {}
}
