// requirements.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequirementsComponent } from './requirements.component'; // Import the RequirementsComponent

@NgModule({
  declarations: [RequirementsComponent], // Add RequirementsComponent to the declarations array
  imports: [CommonModule, FormsModule],
})
export class RequirementsModule {}
