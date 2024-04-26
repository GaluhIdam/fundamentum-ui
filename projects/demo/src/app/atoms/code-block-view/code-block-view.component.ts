import { Component } from '@angular/core';
import { CodeBlockComponent } from 'fui';

@Component({
  selector: 'app-code-block-view',
  standalone: true,
  templateUrl: './code-block-view.component.html',
  styleUrl: './code-block-view.component.scss',
  imports: [CodeBlockComponent],
})
export class CodeBlockViewComponent {
  codeHTML = `<h1>Code Block</h1>
<p>fui-code-block is intended to render static lines or blocks of code in read-only contexts.</p>
<fui-code-block
  [code]="codeHTML"
  [language]="'xml'"
  [lineNumbers]="true"
></fui-code-block>
`;
  codeTypescript = `const message: string = 'FUI Code Block';
console.log(message);`;
}
