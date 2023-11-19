import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmploiService } from 'src/app/service/emploi/emploi.service';

@Component({
  selector: 'app-personne-par-emploi',
  templateUrl: './personne-par-emploi.component.html',
  styleUrls: ['./personne-par-emploi.component.css']
})
export class PersonneParEmploiComponent {
  personnesParEntreprise: any[] = [];
  nomEntreprise: any

  constructor(private emploiService: EmploiService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
    this.nomEntreprise = params['nomEntreprise'];
    });
   }

  ngOnInit(): void {
    this.getPersonnesParEntreprise();
  }

  getPersonnesParEntreprise(): void {
    console.log(this.nomEntreprise)
    this.emploiService.getPersonnesParEntreprise(this.nomEntreprise)

    .subscribe({
      next: (data) => {

        console.log(data)
        this.personnesParEntreprise = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données:', error);
      },
    });
  }
}
