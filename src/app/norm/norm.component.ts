import { Component } from '@angular/core';
import { manhattanNorm, euclideanNorm, NormVersion } from './norm';
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
    const version = NormVersion.V1; // Change to V2 if needed

    lines.forEach((line, index) => {
      const [x, y] = line.split(',').map(Number);
      if (!isNaN(x) && !isNaN(y)) {
        const manhattan = manhattanNorm(x, y, version);
        const euclidean = euclideanNorm(x, y, version);
        results.push(`Line ${index + 1}: Manhattan=${manhattan}, Euclidean=${euclidean} (Version: ${version})`);
      } else {
        results.push(`Line ${index + 1}: Invalid input`);
      }
    });

    this.result = results.join('\n');
  }
}
