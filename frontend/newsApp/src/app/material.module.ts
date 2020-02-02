import { NgModule } from '@angular/core';
import {MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatGridListModule
        } from '@angular/material'; 

//to centralize imports from Angular Material in a single file
@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatGridListModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatGridListModule
    ]
})
export class MaterialModule{

}