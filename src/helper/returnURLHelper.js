const returnUrlOther = 'https://ww2.unipark.de/uc/M_APLME_Kubik/8055/';
const returnUrlUnipark = 'https://ww2.unipark.de/uc/M_APLME_Kubik/3a9f/ospe.php?return_tic=';
const returnUrlSonas = 'https://bielefeld-psy.sona-systems.com//webstudy_credit.aspx?experiment_id=478&credit_token=684d4568614743bdb8d885a64612250f&survey_code=';
const lab='LAB';
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
    // 2 - Sonas
    if (UrlParams.tic) {
      this.returnUrl = returnUrlUnipark;
      this.returnId = 1;
      this.parameter = UrlParams.tic;
    } else if (UrlParams.external_id) {
      this.returnUrl = returnUrlSonas;
      this.returnId = 2;
      this.parameter = +UrlParams.external_id;
    } else if (UrlParams.lab) {
      this.returnUrl = lab;
      this.returnId = 3;
      this.parameter = '';
    }
  }

  setFromID(id = 0, parameter = '') {
    this.returnId = id;
    this.parameter = parameter;
    switch (id) {
      case 1:
        this.returnUrl = returnUrlUnipark;
        break;
      case 2:
        this.returnUrl = returnUrlSonas;
        break;
      case 3:
        this.returnUrl = lab;
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