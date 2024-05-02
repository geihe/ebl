const returnUrlOther = 'https://ww2.unipark.de/uc/M_APLME_Kubik/8055/';
const returnUrlUnipark = 'https://ww2.unipark.de/uc/M_APLME_Kubik/3a9f/ospe.php?return_tic=';
const returnUrlSonaBie = 'https://bielefeld-psy.sona-systems.com//webstudy_credit.aspx?experiment_id=478&credit_token=684d4568614743bdb8d885a64612250f&survey_code=';
const returnUrlSonaWue = 'https://psywue.sona-systems.com/webstudy_credit.aspx?experiment_id=3693&credit_token=328e8fd994cf4f3c8f13deaaea38eeb6&survey_code=';
const returnUrlSonaHagen = 'https://fernuni-hagen.sona-systems.com/webstudy_credit.aspx?experiment_id=345&credit_token=00ef683c81c146eb9842d507cdff36fd&survey_code=';
const lab = 'LAB';

export class ReturnUrlHelper {
  constructor() {
    this.returnId = 0;
    this.returnUrl = returnUrlOther;
    this.parameter = '';
  }

  setFromURLParams(UrlParams) {
    //returnID ermitteln:
    // 0 - Other
    // 1 - UniPark
    // 2 - Sona Bielefeld
    // 3 - Lab
    // 4 - Sona Würzburg
    // 5 - Sona Hagen

    if (UrlParams.tic) {
      this.returnUrl = returnUrlUnipark;
      this.returnId = 1;
      this.parameter = UrlParams.tic;
    } else if (UrlParams.external_id) {
      switch (UrlParams.from) {
        case 'wue':
          this.returnUrl = returnUrlSonaWue;
          this.returnId = 4;
          break;
        case 'hagen':
          this.returnUrl = returnUrlSonaHagen;
          this.returnId = 5;
          break;
        default:
          this.returnUrl = returnUrlSonaBie;
          this.returnId = 2;
      }
      this.parameter = +UrlParams.external_id;
    } else if (UrlParams.lab) {
      this.returnUrl = lab;
      this.returnId = 3;
      this.parameter = '';
    }
    console.log(this);

  }

  setFromID(id = 0, parameter = '') {
    this.returnId = id;
    this.parameter = parameter;
    switch (id) {
      case 1:
        this.returnUrl = returnUrlUnipark;
        break;
      case 2:
        this.returnUrl = returnUrlSonaBie;
        break;
      case 3:
        this.returnUrl = lab;
        break;
      case 4:
        this.returnUrl = returnUrlSonaWue;
        break;
      case 5:
        this.returnUrl = returnUrlSonaHagen;
        break;
      default:
        this.returnUrl = returnUrlOther;
        this.parameter = '';
        break;
    }
  }

  getReturnData() {
    return {
      id: this.returnId,
      parameter: this.parameter
    };
  }

  getReturnUrl() {
    return this.returnUrl + this.parameter;
  }

  showStudyCode() {
    return this.returnId === 0;
  }
}