import { Component } from '@angular/core';
import { manhattanNorm, euclideanNorm } from './norm';
@Component({
  selector: 'app-norm',
  templateUrl: './norm.component.html',
  styleUrls: ['./norm.component.css']
})
export class NormComponent {
  result: string = '';

  onFileUpload(event: any): void {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      this.processFileContent(text);
    };
    reader.readAsText(file);
  }

  processFileContent(text: string): void {
    const lines = text.split('\n');
    let results: string[] = [];

    lines.forEach((line, index) => {
      const [x, y] = line.split(',').map(Number);
      if (!isNaN(x) && !isNaN(y)) {
        const manhattan = manhattanNorm(x, y);
        const euclidean = euclideanNorm(x, y);
        results.push(`Line ${index + 1}: Manhattan=${manhattan}, Euclidean=${euclidean}`);
      } else {
        results.push(`Line ${index + 1}: Invalid input`);
      }
    });

    this.result = results.join('\n');
  }
}
