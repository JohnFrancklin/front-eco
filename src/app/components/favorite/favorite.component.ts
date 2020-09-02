import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {



  tab:any = [1]












  //   00h à 08h, 12h à 13h30, 17h30 à 00h sy ny weekend et jour férie

  // 8h a 12h
  // 13h a 17h30
  // 17h30 a 08h (demain)

  // date_debut;
  // date_sortie;
  // sla;


  fiche = {
    dateIncident: null,
    trigrammeTSM: "ABC",
    infoClient: {
      num_client: 12121212,
      email_client: "orange@test.com",
      num_concerne: 32321245,
      anciennete: true,
      localisation: " text", // string
      coordonneeGPS: "text",
      emplacementDeplace: null,
      indoor: null // boolean
    },
    equipementOuOffre: {
      internet: "medium", // ou medium ou plus  *String
      flybox: "ie", // ou homenet ou orangenet  *String
      modem: "domino", // ou cle_usb ou wifi_dock  *String
      equipementClient: "pc", // ou smartphone ou tablelle  *string
      autreEquipement: "tpe", // ou geolocalisation ou autres  *string
    },
    reclamationClient: {
      typeReseau: "2g", // ou 3g ou 4g ou 4gttd  *string
      problemReclame: "lenteur", // ou coupure ou microcoupure  *string
      descriptionReclame: "text"  // text  pas string
    },
    investigation: {
      profil: "sim_active", // ou string
      niveauSignal: "1", // 
      testCroise: false, // boolean
      resultatTest: "text" // text pas string
    },
    intervention: {
      trigrammeTic: "ABC",
      outdoor: {
        verificationReseau: "text",
        vitesse: "text",
        unisonMobile: "text",
        resultatPing: "text",
        autres: "text"
      },
      indoor: {
        verificationReseau: "text",
        vitesse: "text",
        unisonMobile: "text",
        resultatPing: "text",
        autres: "text"
      },
      conclusionTic: "concl",
      observationTic: "obs"
    }
  }


  constructor() { }


  suppr(i){
    console.log("index", i);
    console.log("tab", this.tab);
    
    
    this.tab.splice(i,1);
    console.log("tab 2", this.tab);
  }
  add(){
    this.tab.push(Math.random());
  }

  send(){
    let objet = {};
    let tabKey = [];
    let tabValue = [];
    let isValid:boolean = true;

    var divElem = document.getElementById("rechercheDiv");
    var inputElements = divElem.querySelectorAll("input, select")

    for (let i = 0; i<inputElements.length; i++){      
      if(i%2 == 0){
        tabKey.push(inputElements[i]['value']);
      }else{
        tabValue.push(inputElements[i]['value']);
        if(inputElements[i]['value'] == ''){
          isValid = false;
        }
      }
    }

    for(let i=0; i<tabKey.length; i++){
        objet[tabKey[i]] = tabValue[i];
    }
    
    if(isValid){
      console.log("Myobjet", objet);
    }
    else{
      console.log("il y a une clé vide");
    }

    
  
  }


  ngOnInit(): void {

    // this.calculDateSortie();

    this.calcluleDate();

  }
  getValue() {

    let dateIncident = (document.querySelector('input[name="dateIncident"]') as HTMLInputElement).value;
    let trigrammeTSM = (document.querySelector('input[name="trigrammeTSM"]') as HTMLInputElement).value;
    let num_client = (document.querySelector('input[name="num_client"]') as HTMLInputElement).value;
    let num_concerne = (document.querySelector('input[name="num_concerne"]') as HTMLInputElement).value;
    let email_client = (document.querySelector('input[name="email_client"]') as HTMLInputElement).value;
    let anciennete = (document.querySelector('input[name="anciennete"]:checked') as HTMLInputElement).value;
    let localisation = (document.querySelector('textarea[name="localisation"]') as HTMLInputElement).value;
    let coordonneeGPS = (document.querySelector('textarea[name="coordonneeGPS"]') as HTMLInputElement).value;
    let emplacementDeplace = (document.querySelector('input[name="emplacementDeplace"]:checked') as HTMLInputElement).value;
    let indoor = (document.querySelector('input[name="indoor"]:checked') as HTMLInputElement).value;
    let internet = (document.querySelector('input[name="internet"]:checked') as HTMLInputElement).value;
    let flybox = (document.querySelector('input[name="flybox"]:checked') as HTMLInputElement).value;
    let modem = (document.querySelector('input[name="modem"]:checked') as HTMLInputElement).value;
    let equipementClient = (document.querySelector('input[name="equipementClient"]:checked') as HTMLInputElement).value;
    let autreEquipement = (document.querySelector('input[name="autreEquipement"]:checked') as HTMLInputElement).value;
    let typeReseau = (document.querySelector('input[name="typeReseau"]:checked') as HTMLInputElement).value;
    let problemReclame = (document.querySelector('input[name="problemReclame"]:checked') as HTMLInputElement).value;
    let descriptionReclame = (document.querySelector('textarea[name="descriptionReclame"]') as HTMLInputElement).value;
    let profil = (document.querySelector('input[name="profil"]:checked') as HTMLInputElement).value;
    let niveauSignal = (document.querySelector('input[name="niveauSignal"]:checked') as HTMLInputElement).value;
    let testCroise = (document.querySelector('input[name="testCroise"]:checked') as HTMLInputElement).value;
    let resultatTest = (document.querySelector('textarea[name="resultatTest"]') as HTMLInputElement).value;
    let trigrammeTic = (document.querySelector('input[name="trigrammeTic"]') as HTMLInputElement).value;
    let o_verificationReseau = (document.querySelector('textarea[name="o_verificationReseau"]') as HTMLInputElement).value;
    let o_vitesse = (document.querySelector('textarea[name="o_vitesse"]') as HTMLInputElement).value;
    let o_unisonMobile = (document.querySelector('textarea[name="o_unisonMobile"]') as HTMLInputElement).value;
    let o_resultatPing = (document.querySelector('textarea[name="o_resultatPing"]') as HTMLInputElement).value;
    let o_autres = (document.querySelector('textarea[name="o_autres"]') as HTMLInputElement).value;

    let i_verificationReseau = (document.querySelector('textarea[name="i_verificationReseau"]') as HTMLInputElement).value;
    let i_vitesse = (document.querySelector('textarea[name="i_vitesse"]') as HTMLInputElement).value;
    let i_unisonMobile = (document.querySelector('textarea[name="i_unisonMobile"]') as HTMLInputElement).value;
    let i_resultatPing = (document.querySelector('textarea[name="i_resultatPing"]') as HTMLInputElement).value;
    let i_autres = (document.querySelector('textarea[name="i_autres"]') as HTMLInputElement).value;
    let conclusionTic = (document.querySelector('textarea[name="conclusionTic"]') as HTMLInputElement).value;
    let observationTic = (document.querySelector('textarea[name="observationTic"]') as HTMLInputElement).value;


    console.log("Valeur", indoor);



    let data = {
      dateIncident: dateIncident,
      trigrammeTSM: trigrammeTSM,
      infoClient: {
        num_client: num_client,
        email_client: email_client,
        num_concerne: num_concerne,
        anciennete: anciennete,
        localisation: localisation,
        coordonneeGPS: coordonneeGPS,
        emplacementDeplace: emplacementDeplace,
        indoor: indoor
      },
      equipementOuOffre: {
        internet: internet,
        flybox: flybox,
        modem: modem,
        equipementClient: equipementClient,
        autreEquipement: autreEquipement,
      },
      reclamationClient: {
        typeReseau: typeReseau,
        problemReclame: problemReclame,
        descriptionReclame: descriptionReclame
      },
      investigation: {
        profil: profil,
        niveauSignal: niveauSignal,
        testCroise: testCroise,
        resultatTest: resultatTest
      },
      intervention: {
        trigrammeTic: trigrammeTic,
        outdoor: {
          verificationReseau: o_verificationReseau,
          vitesse: o_vitesse,
          unisonMobile: o_unisonMobile,
          resultatPing: o_resultatPing,
          autres: o_autres
        },
        indoor: {
          verificationReseau: i_verificationReseau,
          vitesse: i_vitesse,
          unisonMobile: i_unisonMobile,
          resultatPing: i_resultatPing,
          autres: i_autres
        },
        conclusionTic: conclusionTic,
        observationTic: observationTic
      }
    }


    console.log("data", data);


    // {
    //   "title": "Titre de la fiche",
    // "data": "Données de la fiche"
    // }



  }






  objet: any;



  calculDateSortie() {



    //date du debut//
    // let dateDebut = new Date();
    let dateDebut = this.convertStringToDate('15-07-2020 05:00:00');
    const sla = 4; // en heure1011
    const convert = 3600000; // conversion
    const inc = convert * sla;
    let nombreDateVoulu = 1;

    let listeDate = [];
    let dateOK = [];
    // *********** variable********//
    let lesDates = [];

    //*************************** */

    let actuelTime = this.getMilisecondGood(dateDebut);


    let h_00_00 = this.getMilisecond(0, 0, 0);
    let h_08_00 = this.getMilisecond(8, 0, 0);
    let h_12_00 = this.getMilisecond(12, 0, 0);
    let h_13_30 = this.getMilisecond(13, 30, 0);
    let h_17_30 = this.getMilisecond(17, 30, 0);
    let h_23_59 = this.getMilisecond(23, 59, 59);



    // console.log("START DATE", dateDebut);

    for (let i = 0; i < nombreDateVoulu; i++) {

      // dateDebut = new Date(dateDebut.getTime() + inc);

      if (lesDates.length > 0) {
        dateDebut = new Date(lesDates[lesDates.length - 1].getTime() + inc);
      } else {
        dateDebut = new Date(dateDebut.getTime() + inc);
      }
      // console.log("---------------------------------------------------");
      // console.log("les date debut", dateDebut);


      actuelTime = this.getMilisecondGood(dateDebut);

      // si dans la matiné
      if (actuelTime >= h_08_00 && actuelTime <= h_12_00) {
        // console.log("Matiné");
        // lesDates.push(dateDebut);
        // console.log("dateDebut", dateDebut);
        // console.log("actualtime",actuelTime);

        let heurePassee;
        let heurePasseeMili;
        let heureRestant;
        let heureRestantMili;
        let dateProchaineNotification;

        //***calcluer heure restant depuis la notif à la pause 12:00 */
        heurePasseeMili = h_12_00 - this.getMilisecondGood(dateDebut);
        heurePassee = this.millisecondeToTime(heurePasseeMili);
        // console.log("heurePassee", heurePassee);
        // console.log("dateDebut", dateDebut);

        //recuperer les temps restant avant prochaine notification
        heureRestantMili = this.getMilisecond(sla, 0, 0) - (heurePasseeMili);
        heureRestant = this.millisecondeToTime(heureRestantMili);
        // console.log("heureRestant", heureRestant);

        //creer la date de prochaine notification
        let yyyy = dateDebut.getFullYear();
        let mm = (dateDebut.getMonth() < 9 ? '0' : '') + (dateDebut.getMonth() + 1)
        let dd = dateDebut.getDate(); // pour ajourd'hui 
        dateProchaineNotification = dd + "-" + mm + "-" + yyyy + " " + this.millisecondeToTime(h_13_30 + heureRestantMili);
        dateDebut = this.convertStringToDate(dateProchaineNotification);
        lesDates.push(dateDebut);

        // console.log("La date prochaine notification apres midi", dateDebut);


      }
      // si au midi
      else if (actuelTime > h_12_00 && actuelTime < h_13_30) {
        // console.log("Midi");

        let dernierNotif: Date;
        let heurePassee;
        let heurePasseeMili;
        let heureRestant;
        let heureRestantMili;
        let dateProchaineNotification;

        if (lesDates.length > 0) {
          dernierNotif = lesDates[lesDates.length - 1];
        }

        //***calcluer heure restant depuis la notif à la pause 12:00 */
        heurePasseeMili = h_12_00 - this.getMilisecondGood(dernierNotif);
        heurePassee = this.millisecondeToTime(heurePasseeMili);
        // console.log("heurePassee", heurePassee);
        // console.log("dateDebut", dateDebut);

        //recuperer les temps restant avant prochaine notification
        heureRestantMili = this.getMilisecond(sla, 0, 0) - (heurePasseeMili);
        heureRestant = this.millisecondeToTime(heureRestantMili);
        // console.log("heureRestant", heureRestant);

        //creer la date de prochaine notification
        let yyyy = dateDebut.getFullYear();
        let mm = (dateDebut.getMonth() < 9 ? '0' : '') + (dateDebut.getMonth() + 1)
        let dd = dateDebut.getDate(); // pour ajourd'hui 
        dateProchaineNotification = dd + "-" + mm + "-" + yyyy + " " + this.millisecondeToTime(h_13_30 + heureRestantMili);
        dateDebut = this.convertStringToDate(dateProchaineNotification);
        lesDates.push(dateDebut);

        // console.log("La date prochaine notification apres midi", dateDebut);





      }
      // si dans l'apres midi
      else if (actuelTime >= h_13_30 && actuelTime <= h_17_30) {
        // console.log("***********************apres midi");
        // lesDates.push(dateDebut);
        // console.log("actualtime",actuelTime);

        let dernierNotif: Date;
        let heurePassee;
        let heurePasseeMili;
        let heureRestant; // sla - heurePassee
        let heureRestantMili;
        let dateProchaineNotification;


        if (lesDates.length > 0) {
          dernierNotif = lesDates[lesDates.length - 1];
          // recuperer les temps passees apres la derniere notification
          heurePasseeMili = h_12_00 - this.getMilisecondGood(dernierNotif);
          heurePassee = this.millisecondeToTime(heurePasseeMili);
          // console.log("heurePassee", heurePassee);

          //recuperer les temps restant avant prochaine notification
          heureRestantMili = this.getMilisecond(sla, 0, 0) - (heurePasseeMili);
          heureRestant = this.millisecondeToTime(heureRestantMili);
          // console.log("heure restant", heureRestant);

          //creer la date de prochaine notification
          let yyyy = dateDebut.getFullYear();
          let mm = (dateDebut.getMonth() < 9 ? '0' : '') + (dateDebut.getMonth() + 1)
          let dd = dateDebut.getDate() + 1; // pour demain 

          dateProchaineNotification = dd + "-" + mm + "-" + yyyy + " " + this.millisecondeToTime(h_13_30 + heureRestantMili);
          dateDebut = this.convertStringToDate(dateProchaineNotification);
          lesDates.push(dateDebut);

          // console.log("La date prochaine notification", dateDebut);


        }


      }
      // si apres la rentrée avant minuit
      else if (actuelTime >= h_17_30 && actuelTime <= h_23_59) {
        // console.log("soiré avant minuit");
        // console.log("la taille des dates", lesDates.length);
        //************************************** */
        let dernierNotif: Date;
        let heurePassee;
        let heurePasseeMili;
        let heureRestant; // sla - heurePassee
        let heureRestantMili;
        let dateProchaineNotification;

        //**** si les dates ne sont pas vides */
        if (lesDates.length > 0) {
          dernierNotif = lesDates[lesDates.length - 1];
          // console.log("dernierNotif", dernierNotif);

          // recuperer les temps passees apres la derniere notification
          heurePasseeMili = h_17_30 - this.getMilisecondGood(dernierNotif);
          heurePassee = this.millisecondeToTime(heurePasseeMili);
          // console.log("heurePassee", heurePassee);
          // console.log("dateDebut", dateDebut.toUTCString());

          //recuperer les temps restant avant prochaine notification
          heureRestantMili = this.getMilisecond(sla, 0, 0) - (heurePasseeMili);
          heureRestant = this.millisecondeToTime(heureRestantMili);
          // console.log("heure restant", heureRestant);

          //creer la date de prochaine notification
          let yyyy = dateDebut.getFullYear();
          let mm = (dateDebut.getMonth() < 9 ? '0' : '') + (dateDebut.getMonth() + 1)
          let dd = dateDebut.getDate() + 1; // pour demain 

          dateProchaineNotification = dd + "-" + mm + "-" + yyyy + " " + this.millisecondeToTime(h_08_00 + heureRestantMili);
          dateDebut = this.convertStringToDate(dateProchaineNotification);
          lesDates.push(dateDebut);

          // console.log("La date prochaine notification", dateDebut);


        }


      }
      //si minuit avant 8h00
      else {
        // console.log("a l'aube");

        let dernierNotif: Date;
        let heurePassee;
        let heurePasseeMili;
        let heureRestant; // sla - heurePassee
        let heureRestantMili;
        let dateProchaineNotification;

        //**** si les dates ne sont pas vides */
        if (lesDates.length > 0) {
          dernierNotif = lesDates[lesDates.length - 1];
          // console.log("dernierNotif", dernierNotif);

          // recuperer les temps passees apres la derniere notification
          heurePasseeMili = h_17_30 - this.getMilisecondGood(dernierNotif);
          heurePassee = this.millisecondeToTime(heurePasseeMili);
          // console.log("heurePassee", heurePassee);
          // console.log("dateDebut", dateDebut.toUTCString());

          //recuperer les temps restant avant prochaine notification
          heureRestantMili = this.getMilisecond(sla, 0, 0) - (heurePasseeMili);
          heureRestant = this.millisecondeToTime(heureRestantMili);
          // console.log("heure restant", heureRestant);

          //creer la date de prochaine notification
          let yyyy = dateDebut.getFullYear();
          let mm = (dateDebut.getMonth() < 9 ? '0' : '') + (dateDebut.getMonth() + 1)
          let dd = dateDebut.getDate(); // pour demain 

          dateProchaineNotification = dd + "-" + mm + "-" + yyyy + " " + this.millisecondeToTime(h_08_00 + heureRestantMili);
          dateDebut = this.convertStringToDate(dateProchaineNotification);
          lesDates.push(dateDebut);

          // console.log("La date prochaine notification", dateDebut);


        }





      }














      // // *****  si compris dans l'heure de travail *****//
      // if ((actuelTime >= h_08_00 && actuelTime <= h_12_00) || (actuelTime >= h_13_30 && actuelTime <= h_17_30)) {
      //   // console.log("between");
      //   // listeDate.push(dateDebut);
      //   // console.log("actuelTime", actuelTime);
      //   // console.log("La date de sortie", dateDebut);

      //   //******si dans la matiné */
      //   if (actuelTime > h_08_00 && actuelTime < h_12_00) {
      //     let objet = {};
      //     objet['temps'] = "matin";
      //     objet['date'] = dateDebut;
      //     listeDate.push(objet);
      //   }
      //   //******si dans le soir */
      //   else {
      //     let objet = {};
      //     objet['temps'] = "soir";
      //     objet['date'] = dateDebut;
      //     listeDate.push(objet);
      //   }

      // }
      // else {
      //   nombreDateVoulu++;
      //   // console.log("NOT Between");
      //   // console.log("actuelTime", actuelTime);

      //   if (actuelTime > h_12_00 && actuelTime < h_13_30) {
      //     // console.log(">>>>>>>>>>>>>>>entre le midi");
      //     //  12:30   12:00    8:30

      //   }
      //   else if ((actuelTime > h_17_30 && actuelTime < h_23_59) || (actuelTime > h_00_00 && actuelTime < h_08_00)) {
      //     // console.log("dans le soir");
      //     // console.log("longueur", listeDate.length)
      //     // console.log("le tableau d'avant", listeDate);

      //     let lastNotif;
      //     let lastTimeNotifMilli;
      //     let decallage;
      //     let lastTime;
      //     let prochaine_notif;
      //     let dateProchaineNotification:string;

      //     //****** date derniere notification soir*** */
      //     let indexOfFirstSOir = listeDate.findIndex(x => x.temps === "soir");
      //     let indexNextNotif: number = indexOfFirstSOir + 1;


      //     if (listeDate.length > 0) {
      //       lastNotif = listeDate[indexOfFirstSOir].date;
      //       //  console.log("---------------first",listeDate[indexOfFirstSOir].temps);

      //       // console.log("+++++++++++++++++", listeDate.length);


      //       lastTimeNotifMilli = this.getMilisecondGood(lastNotif);

      //       decallage = h_17_30 - lastTimeNotifMilli;

      //       lastTime = this.getMilisecond(sla, 0, 0) - decallage;

      //       prochaine_notif = this.getMilisecond(8, 0, 0) + lastTime;

      //       // recuperer le jour actuelle pour avoir le jour suivant  //
      //       console.log("La date debut", dateDebut);

      //       let yyyy = dateDebut.getFullYear();
      //       let mm = ( dateDebut.getMonth() < 9 ? '0': '') + (dateDebut.getMonth()+1)
      //       let dd = dateDebut.getDate() + 1;

      //       // console.log(yyyy,mm,dd);


      //       dateProchaineNotification = dd+"-"+mm+"-"+yyyy+" "+this.millisecondeToTime(prochaine_notif);

      //       // console.log("la forme",dateProchaineNotification);


      //       // console.log("le prochaine notification ", this.convertStringToDate(dateProchaineNotification)); //1-02-1970 00:03:44

      //       var date = new Date();
      //       // console.log("..........................", ( dateDebut.getMonth() < 9 ? '0': '') + (dateDebut.getMonth()+1) );

      //       // let str = "2013-01-14-14-09-49"; "2020-07-08-14-09-49"
      //       // 2020-6-4-10-09-01
      //       // this.convertStringToDate(dateProchaineNotification);



      //     }

      //     // for (let j=0; j<listeDate.length; j++){
      //     //   // console.log(listeDate[j].temps);
      //     //   lastNotif = listeDate[listeDate.length-1].date;
      //     // }
      //     // console.log(listeDate[0].temps);
      //     // console.log("last notif", lastNotif);
      //     // console.log("last notif milli", lastTimeNotifMilli);
      //     // console.log("decalage soir", decallage);
      //     // console.log("le temps restant soir", lastTime);

      //     // console.log("le temps total", this.millisecondeToTime(decallage));
      //     // console.log("le temps restant ", this.millisecondeToTime(lastTime));
      //     // console.log("le prochaine notification ", this.millisecondeToTime(prochaine_notif));
      //     // console.log("le prochaine notification ", this.convertStringToDate(dateProchaineNotification)); //1-02-1970 00:03:44

      //   }
      //   else {

      //     console.log("tsis ao aby");

      //   }



      // }



    }

    // console.log("liste date", listeDate);


    // console.log("Les dates", lesDates);



    // var d = new Date();

    // var h = d.getHours();
    // var m = d.getMinutes(); 
    // var s = d.getSeconds();

    // console.log("la date", d);
    // console.log("lheur", h);
    // console.log("min", m); 
    // console.log("sec", s);


    // let actuelTime = this.getMilisecond(h,m,s);
    // let h_00_00 = this.getMilisecond(0,0,0);
    // let h_08_00 = this.getMilisecond(8,0,0);
    // let h_12_00 = this.getMilisecond(12,0,0);
    // let h_13_30 = this.getMilisecond(13,30,0);
    // let h_17_30 = this.getMilisecond(17,30,0);

    // console.log("actuelTime", actuelTime);

    // console.log("h_00_00", h_00_00);
    // console.log("h_08_00", h_08_00);
    // console.log("h_12_00", h_12_00);
    // console.log("h_13_30", h_13_30);
    // console.log("h_17_30", h_17_30);











  }


  getMilisecond(h, m, s) {

    return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
  }


  getMilisecondGood(date) {
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
  }


  convertStringToDate(dateString) {
    // let dt  = '1-02-1970 00:03:44'.split(/\-|\s/);
    let dt = dateString.split(/\-|\s/);
    return new Date(dt.slice(0, 3).reverse().join('/') + ' ' + dt[3]);
  }


  millisecondeToTime(duration) {
    let milliseconds = (duration % 1000) / 100;
    let seconds: any = Math.floor((duration / 1000) % 60);
    let minutes: any = Math.floor((duration / (1000 * 60)) % 60);
    let hours: any = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // return hours + "-" + minutes + "-" + seconds + "." + milliseconds;
    return hours + ":" + minutes + ":" + seconds;
  }

  checkDateIfWeekend(date) {
    var day = date.getDay();
    if (day == 0 || day == 6) {
      return true;
    }
    else {
      return false;
    }
  }




  calcluleDate() {

    // let actuelTime = this.getMilisecondGood(dateDebut);

    let h_08_00 = this.getMilisecond(8, 0, 0);
    let h_12_00 = this.getMilisecond(12, 0, 0);
    let h_13_30 = this.getMilisecond(13, 30, 0);
    let h_17_30 = this.getMilisecond(17, 30, 0);
    let demiJournee = this.getMilisecond(4, 0, 0);
    let journee = this.getMilisecond(8, 0, 0);



    let reste;
    let tabJour = [];
    let depart;
    let nombreJour = 0;
    let heureProchaine;
    let dateLeLendemain: Date;
    let dateProchaine: Date;
    let dateEtHeureComplet: Date;
    let nombreJourWeekendAndJourFerie = 0;

    let sla = 8;
    let dateDebut = this.convertStringToDate('17-07-2020 16:30:00');

    //Trouver matin ou soir
    let hour = dateDebut.getHours();
    if (hour >= 8 && hour <= 12) {
      reste = this.getMilisecond(sla, 0, 0) - (h_12_00 - this.getMilisecondGood(dateDebut));
      tabJour.push("M");
      depart = "S";
    } else {
      reste = this.getMilisecond(sla, 0, 0) - (h_17_30 - this.getMilisecondGood(dateDebut));
      tabJour.push("S");
      depart = "M";
      nombreJour++;
    }

    // console.log("le reste", this.millisecondeToTime(reste));

    //******Si reste est superieur au demi journee****// */
    if (reste >= demiJournee) {

      do {
        reste = reste - demiJournee;
        if (depart == "M") {
          tabJour.push("M");
          depart = "S";


          // console.log("date deb", dateDebut);



          let isWeekend = this.checkDateIfWeekend(dateDebut);
          if (isWeekend) {
            // console.log("weekend");
            reste = reste + journee;
            nombreJourWeekendAndJourFerie++;
          }
          else {
            // console.log("tsy weekend!");
          }





        } else {
          tabJour.push("S");
          depart = "M";
          nombreJour++;

          // console.log("Nombre de jour", nombreJour);

          dateDebut = new Date(dateDebut.setDate(dateDebut.getDate() + 1));
          // console.log("date deb", dateDebut);

          //*****on check le jour si c'est le weekend */
          // dateLeLendemain = new Date(dateDebut.setDate(dateDebut.getDate() +1)); //plus un le lendemain
          // console.log("date apres soiré", dateLeLendemain);
          // console.log("date deb", dateDebut);
          // console.log("date lend", dateLeLendemain);

          let isWeekend = this.checkDateIfWeekend(dateDebut);
          if (isWeekend) {
            // console.log("weekend");
            reste = reste + journee;
            nombreJourWeekendAndJourFerie++;
          }
          else {
            // console.log("tsy weekend!");
          }
          //***************************************** */
        }
      }
      while (reste >= demiJournee);

    } else {
      // console.log("MANDALO ATO AM ELSE ATO E");
    }

    // console.log("weekend", nombreJourWeekendAndJourFerie);
    // console.log("NOMBRE JOUR", nombreJour);

    // nombreJour = nombreJour + nombreJourWeekendAndJourFerie;
    // console.log("NOMBRE JOUR", nombreJour);

    //*******reuperer l'heure du prochaine notification********* */ 
    if (tabJour.length > 0) {
      if (tabJour[tabJour.length - 1] == "M") {
        // console.log(" oui Matinée");
        heureProchaine = h_13_30 + reste;
        if (hour >= 8 && hour <= 12) {
          dateProchaine = new Date(dateDebut.setDate(dateDebut.getDate()));
          // console.log("avant 12");

        } else {
          dateProchaine = new Date(dateDebut.setDate(dateDebut.getDate() + 1));
          // console.log("apres 12");
        }



      } else {
        heureProchaine = h_08_00 + reste;
        console.log("soiré");
        console.log("Nombre de jour", nombreJour);
        if (hour >= 8 && hour <= 12) {
          dateProchaine = new Date(dateDebut.setDate(dateDebut.getDate()));
          console.log("avant 12");

        } else {
          dateProchaine = new Date(dateDebut.setDate(dateDebut.getDate() + 1));
          console.log("apres 12");
        }

      }
    }


    //*************************date complet************** */
    let yyyy = dateProchaine.getFullYear();
    let mm = (dateProchaine.getMonth() < 9 ? '0' : '') + (dateProchaine.getMonth() + 1)
    let dd = dateProchaine.getDate();
    let datecompletMilli = dd + "-" + mm + "-" + yyyy + " " + this.millisecondeToTime(heureProchaine);
    dateEtHeureComplet = this.convertStringToDate(datecompletMilli);

    // console.log(this.millisecondeToTime(reste));
    // console.log("Nombre de jour passée", nombreJour);
    // // console.log("heure prochaine", this.millisecondeToTime(heureProchaine));
    // console.log("----------------------------------------------------------------");

    // console.log("date et heure complete", dateEtHeureComplet);

    // console.log("----------------------------------------------------------------");

    // console.log(tabJour);
















  }











}
